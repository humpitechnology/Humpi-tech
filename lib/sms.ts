import "server-only";

type QuoteNotificationInput = {
  fullName: string;
  phone: string;
  service: string;
};

export type SmsResult = { success: true; providerRef?: string } | { success: false; error: string };

export type QuoteSmsResult = SmsResult;

const REQUIRED_ENV = [
  "MESSAGEINDIA_USERNAME",
  "MESSAGEINDIA_API_KEY",
  "MESSAGEINDIA_SENDER_ID",
  "MESSAGEINDIA_PEID",
  "MESSAGEINDIA_TEMPLATE_ID",
] as const;

const DEFAULT_BASE_URL = "http://sms.messageindia.in";
const REQUEST_TIMEOUT_MS = 10_000;

function environmentValue(name: string) {
  return process.env[name]?.trim() ?? "";
}

export function hasMessageIndiaConfig() {
  return REQUIRED_ENV.every((name) => Boolean(environmentValue(name)));
}

function normalizeMobileNumber(input: string) {
  const digits = input.replace(/\D/g, "");

  if (digits.length === 10) return digits;
  if ((digits.length === 12 || digits.length === 13) && digits.startsWith("91")) {
    return digits.slice(-10);
  }

  return "";
}

function maskMobileNumber(input: string) {
  const digits = input.replace(/\D/g, "");

  return digits.length >= 4 ? `******${digits.slice(-4)}` : "****";
}

function buildQuoteSmsMessage(input: QuoteNotificationInput) {
  return `Dear ${input.fullName}, thank you for contacting Humpi Technologies. We have received your enquiry regarding ${input.service}. Our team will contact you within one business day. Regards, Humpi Technologies`;
}

function buildTestSmsMessage() {
  return `Hi, this is a test SMS from Humpi Technologies. You have successfully tested our SMS service. Thank you.`;
}

function parseProviderResponse(body: string): { ok: boolean; ref?: string; error?: string } {
  const trimmed = body.trim();

  if (!trimmed) {
    return { ok: false, error: "Empty SMS provider response" };
  }

  if (trimmed.toLowerCase().startsWith("error")) {
    return { ok: false, error: "SMS provider rejected the request" };
  }

  if (trimmed.startsWith("{")) {
    const data = JSON.parse(trimmed) as Record<string, unknown>;

    if (data.error === true || data.status === "error" || data.status === "failed") {
      return { ok: false, error: "SMS provider rejected the request" };
    }

    const ref =
      typeof data.message_id === "string"
        ? data.message_id
        : typeof data.msg_id === "string"
          ? data.msg_id
          : typeof data.id === "string"
            ? data.id
            : undefined;

    return { ok: true, ref };
  }

  return { ok: true };
}

async function sendSmsToNumber(phone: string, message: string): Promise<SmsResult> {
  if (!hasMessageIndiaConfig()) {
    return { success: false, error: "SMS is not configured" };
  }

  const mobile = normalizeMobileNumber(phone);

  if (mobile.length !== 10) {
    return { success: false, error: "Invalid mobile number" };
  }

  const baseUrl = environmentValue("MESSAGEINDIA_BASE_URL") || DEFAULT_BASE_URL;
  const params = new URLSearchParams({
    username: environmentValue("MESSAGEINDIA_USERNAME"),
    message,
    sendername: environmentValue("MESSAGEINDIA_SENDER_ID"),
    smstype: environmentValue("MESSAGEINDIA_SMS_TYPE") || "TRANS",
    numbers: mobile,
    apikey: environmentValue("MESSAGEINDIA_API_KEY"),
    peid: environmentValue("MESSAGEINDIA_PEID"),
    templateid: environmentValue("MESSAGEINDIA_TEMPLATE_ID"),
  });
  const url = `${baseUrl.replace(/\/+$/, "")}/v2/sendSMS?${params.toString()}`;

  console.log(`SMS request started for ${maskMobileNumber(mobile)}`);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "text/plain, application/json" },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
    const body = await response.text();

    console.log(`SMS provider response received (HTTP ${response.status})`);

    if (!response.ok) {
      return { success: false, error: `SMS provider returned HTTP ${response.status}` };
    }

    const parsed = parseProviderResponse(body);

    if (!parsed.ok) {
      return { success: false, error: parsed.error ?? "SMS provider rejected the request" };
    }

    return { success: true, providerRef: parsed.ref };
  } catch (error) {
    console.log("SMS delivery request failed");

    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown SMS error",
    };
  }
}

export function sendQuoteSms(input: QuoteNotificationInput): Promise<QuoteSmsResult> {
  return sendSmsToNumber(input.phone, buildQuoteSmsMessage(input));
}

export function sendTestSms(phone: string): Promise<SmsResult> {
  return sendSmsToNumber(phone, buildTestSmsMessage());
}
