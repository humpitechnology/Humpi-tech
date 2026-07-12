import { NextRequest, NextResponse } from "next/server";
import { sendQuoteEmails } from "@/lib/email";
import { appendQuoteSubmission } from "@/lib/googleSheets";
import { validateAndSanitizeQuoteRequest } from "@/lib/validation";
import type { QuoteSubmission } from "@/types/quote";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const DUPLICATE_WINDOW_MS = 5 * 60 * 1000;

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const duplicateEmailStore = new Map<string, number>();

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
  const now = Date.now();
  duplicateEmailStore.set(email, now);
}

export async function POST(request: NextRequest) {
  const ipAddress = getClientIp(request);

  try {
    if (isRateLimited(ipAddress)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const payload = await request.json();
    const validation = validateAndSanitizeQuoteRequest(payload);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, message: "Invalid request.", errors: validation.errors },
        { status: 400 },
      );
    }

    if (validation.honeypot) {
      return NextResponse.json({ success: true });
    }

    if (hasRecentSubmission(validation.data.email)) {
      return NextResponse.json(
        { success: false, message: "A request was already submitted recently." },
        { status: 409 },
      );
    }

    const submission: QuoteSubmission = {
      ...validation.data,
      ipAddress,
      submittedAt: new Date(),
    };

    await appendQuoteSubmission(submission);
    markSubmission(validation.data.email);
    await sendQuoteEmails(submission);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Request quote submission failed", error);

    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
