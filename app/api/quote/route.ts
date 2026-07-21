import { NextRequest, NextResponse } from "next/server";
import { sendQuoteEmails } from "@/lib/email";
import { connectToDatabase, Quote } from "@/lib/mongodb";
import { validateAndSanitizeQuoteRequest } from "@/lib/validation";
import type { QuoteSubmission } from "@/types/quote";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const DUPLICATE_WINDOW_MS = 5 * 60 * 1000;

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const duplicateEmailStore = new Map<string, number>();

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
    rateLimitStore.set(ipAddress, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  current.count += 1;
  rateLimitStore.set(ipAddress, current);

  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function hasRecentSubmission(email: string) {
  const now = Date.now();
  const previousSubmissionAt = duplicateEmailStore.get(email);

  return Boolean(previousSubmissionAt && now - previousSubmissionAt < DUPLICATE_WINDOW_MS);
}

function markSubmission(email: string) {
  duplicateEmailStore.set(email, Date.now());
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

    const validation = validateAndSanitizeQuoteRequest(payload);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, message: "Validation failed.", errors: validation.errors },
        { status: 400 },
      );
    }

    if (validation.honeypot) {
      return NextResponse.json(
        { success: true, message: "Quote submitted successfully." },
        { status: 200 },
      );
    }

    if (hasRecentSubmission(validation.data.email)) {
      return jsonResponse("A quote request was already submitted recently.", 409);
    }

    await connectToDatabase();

    const quote = await Quote.create({
      ...validation.data,
      status: "New",
      ipAddress,
    });

    markSubmission(validation.data.email);

    const submission: QuoteSubmission = {
      ...validation.data,
      status: quote.status,
      ipAddress,
      createdAt: quote.createdAt,
    };

    sendQuoteEmails(submission).catch((error: unknown) => {
      console.error("Quote email notification failed", error);
    });

    return NextResponse.json(
      { success: true, message: "Quote submitted successfully." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Quote submission failed", error);

    return jsonResponse("Something went wrong. Please try again.", 500);
  }
}
