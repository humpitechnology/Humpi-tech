import "server-only";

import { google } from "googleapis";
import type { QuoteSubmission } from "@/types/quote";

const SHEET_RANGE = "A:G";

function getGooglePrivateKey() {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!privateKey) {
    throw new Error("GOOGLE_PRIVATE_KEY is not configured");
  }

  return privateKey.replace(/\\n/g, "\n");
}

function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;

  if (!process.env.GOOGLE_SHEET_ID) {
    throw new Error("GOOGLE_SHEET_ID is not configured");
  }

  if (!clientEmail) {
    throw new Error("GOOGLE_CLIENT_EMAIL is not configured");
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: getGooglePrivateKey(),
    scopes: ["https://docs.google.com/spreadsheets/d/1nolED1l6p-Hx8LInRjarmYLu2nWy_HB03b2rT59Sfu0/edit?pli=1&gid=0#gid=0"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function appendQuoteSubmission(submission: QuoteSubmission) {
  const sheets = getSheetsClient();

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: SHEET_RANGE,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          submission.submittedAt.toISOString(),
          submission.name,
          submission.email,
          submission.phone,
          submission.service,
          submission.projectDetails,
          submission.ipAddress,
        ],
      ],
    },
  });
}
