import "server-only";

import nodemailer from "nodemailer";
import type { QuoteSubmission } from "@/types/quote";

const DEFAULT_SALES_EMAIL = "admin@humpitechnology.in";

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not configured`);
  }

  return value;
}

function getTransporter() {
  const port = Number(getRequiredEnv("SMTP_PORT"));

  return nodemailer.createTransport({
    host: getRequiredEnv("SMTP_HOST"),
    port,
    secure: port === 465,
    auth: {
      user: getRequiredEnv("SMTP_USER"),
      pass: getRequiredEnv("SMTP_PASSWORD"),
    },
  });
}

export async function sendQuoteEmails(submission: QuoteSubmission) {
  const transporter = getTransporter();
  const salesEmail = process.env.SALES_EMAIL || DEFAULT_SALES_EMAIL;
  const submittedTime = submission.submittedAt.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: salesEmail,
    subject: "New Quote Request",
    text: [
      `Name: ${submission.name}`,
      `Email: ${submission.email}`,
      `Phone: ${submission.phone}`,
      `Service: ${submission.service}`,
      `Project Details: ${submission.projectDetails}`,
      `Submitted Time: ${submittedTime}`,
    ].join("\n"),
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: submission.email,
    subject: "Thank you for contacting Humpi Technologies",
    text: [
      "We have received your quotation request.",
      "",
      "Our team will contact you within one business day.",
      "",
      "Regards,",
      "Humpi Technologies",
    ].join("\n"),
  });
}
