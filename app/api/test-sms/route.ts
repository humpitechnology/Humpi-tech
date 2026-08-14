import { NextRequest, NextResponse } from "next/server";
import { sendTestSms } from "@/lib/sms";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function jsonResponse(message: string, status: number, success = false) {
  return NextResponse.json({ success, message }, { status });
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ipAddress: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ipAddress);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ipAddress, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  rateLimitStore.set(ipAddress, current);

  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  const ipAddress = getClientIp(request);

  try {
    if (isRateLimited(ipAddress)) {
      return jsonResponse("Too many requests. Please try again later.", 429);
    }

    let payload: unknown;

    try {
      payload = await request.json();
    } catch {
      return jsonResponse("Invalid JSON payload.", 400);
    }

    const phone =
      typeof payload === "object" && payload !== null && "phone" in payload
        ? String((payload as { phone: unknown }).phone).trim()
        : "";

    if (!phone) {
      return jsonResponse("Phone number is required.", 400);
    }

    const result = await sendTestSms(phone);

    if (!result.success) {
      return jsonResponse(result.error, 400);
    }

    return NextResponse.json(
      { success: true, message: "Test SMS sent. Check your phone shortly." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Test SMS submission failed", error);
    return jsonResponse("Something went wrong. Please try again.", 500);
  }
}
