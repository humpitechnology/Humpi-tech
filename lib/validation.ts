import { z } from "zod";
import type { QuoteRequestInput, SanitizedQuoteRequest } from "@/types/quote";

const phoneRegex = /^\+?[0-9\s().-]{7,20}$/;

export const quoteRequestSchema = z.object({
  name: z.string().trim().min(3, "Name must be at least 3 characters"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().regex(phoneRegex, "Enter a valid phone number"),
  service: z.string().trim().min(1, "Service is required"),
  projectDetails: z
    .string()
    .trim()
    .min(1, "Project details are required")
    .max(3000, "Project details must be 3000 characters or fewer"),
  website: z.string().optional(),
});

export type QuoteRequestFormInput = z.infer<typeof quoteRequestSchema>;

function hasHoneypotValue(input: unknown) {
  return (
    typeof input === "object" &&
    input !== null &&
    "website" in input &&
    typeof input.website === "string" &&
    input.website.trim().length > 0
  );
}

export function sanitizeText(value: string) {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function sanitizeMultilineText(value: string) {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function validateAndSanitizeQuoteRequest(
  input: unknown,
):
  | { success: true; data: SanitizedQuoteRequest; honeypot: boolean }
  | { success: false; errors: string[] } {
  if (hasHoneypotValue(input)) {
    return {
      success: true,
      honeypot: true,
      data: {
        name: "",
        email: "",
        phone: "",
        service: "",
        projectDetails: "",
      },
    };
  }

  const result = quoteRequestSchema.safeParse(input);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.issues.map((issue) => issue.message),
    };
  }

  const data: QuoteRequestInput = result.data;

  return {
    success: true,
    honeypot: false,
    data: {
      name: sanitizeText(data.name),
      email: data.email.trim().toLowerCase(),
      phone: sanitizeText(data.phone),
      service: sanitizeText(data.service),
      projectDetails: sanitizeMultilineText(data.projectDetails),
    },
  };
}
