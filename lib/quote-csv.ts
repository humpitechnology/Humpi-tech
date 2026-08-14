import { randomUUID } from "crypto";
import { appendFile, mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import type { SanitizedQuoteRequest } from "@/types/quote";

export const QUOTE_REQUEST_CSV_HEADERS = [
  "id",
  "full_name",
  "email",
  "phone_number",
  "service_required",
  "project_details",
  "submitted_at",
] as const;

export type QuoteRequestCSVRecord = {
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
  service_required: string;
  project_details: string;
  submitted_at: string;
};

export type QuoteRequestSeedInput = SanitizedQuoteRequest & {
  id?: string;
  submittedAt?: Date | string;
};

const csvFilePath = path.join(process.cwd(), "data", "quote_requests.csv");

function escapeCSVValue(value: string) {
  if (/[",\r\n]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }

  return value;
}

function recordToLine(record: QuoteRequestCSVRecord) {
  return QUOTE_REQUEST_CSV_HEADERS.map((header) => escapeCSVValue(record[header])).join(",");
}

function parseCSV(content: string) {
  const rows: string[][] = [];
  let field = "";
  let row: string[] = [];
  let inQuotes = false;

  for (let index = 0; index < content.length; index += 1) {
    const char = content[index];
    const nextChar = content[index + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        field += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") {
        index += 1;
      }
      row.push(field);
      rows.push(row);
      field = "";
      row = [];
      continue;
    }

    field += char;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

function toRecord(input: QuoteRequestSeedInput): QuoteRequestCSVRecord {
  return {
    id: input.id || randomUUID(),
    full_name: input.fullName,
    email: input.email,
    phone_number: input.phone,
    service_required: input.service,
    project_details: input.message,
    submitted_at:
      input.submittedAt instanceof Date
        ? input.submittedAt.toISOString()
        : input.submittedAt || new Date().toISOString(),
  };
}

export async function createCSVIfMissing() {
  await mkdir(path.dirname(csvFilePath), { recursive: true });

  try {
    const content = await readFile(csvFilePath, "utf8");

    if (content.trim().length === 0) {
      await writeFile(csvFilePath, `${QUOTE_REQUEST_CSV_HEADERS.join(",")}\n`, "utf8");
    }
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      throw error;
    }

    await writeFile(csvFilePath, `${QUOTE_REQUEST_CSV_HEADERS.join(",")}\n`, "utf8");
  }
}

export async function appendQuoteRequest(input: SanitizedQuoteRequest) {
  await createCSVIfMissing();

  const record = toRecord(input);
  const currentContent = await readFile(csvFilePath, "utf8");
  const prefix = currentContent.endsWith("\n") || currentContent.length === 0 ? "" : "\n";

  await appendFile(csvFilePath, `${prefix}${recordToLine(record)}\n`, "utf8");

  return record;
}

export async function getAllQuoteRequests() {
  await createCSVIfMissing();

  const content = await readFile(csvFilePath, "utf8");
  const [headers, ...rows] = parseCSV(content).filter((row) =>
    row.some((value) => value.trim().length > 0),
  );

  if (!headers) {
    return [];
  }

  return rows.map((row) =>
    QUOTE_REQUEST_CSV_HEADERS.reduce((record, header, index) => {
      record[header] = row[index] || "";
      return record;
    }, {} as QuoteRequestCSVRecord),
  );
}

export async function seedQuoteRequests(seedRecords: QuoteRequestSeedInput[]) {
  await createCSVIfMissing();

  const existingRecords = await getAllQuoteRequests();
  const existingIds = new Set(existingRecords.map((record) => record.id));
  const existingContentKeys = new Set(
    existingRecords.map(
      (record) => `${record.email}|${record.service_required}|${record.project_details}`,
    ),
  );
  const newRecords = seedRecords
    .map(toRecord)
    .filter(
      (record) =>
        !existingIds.has(record.id) &&
        !existingContentKeys.has(
          `${record.email}|${record.service_required}|${record.project_details}`,
        ),
    );

  if (newRecords.length === 0) {
    return { inserted: 0, skipped: seedRecords.length };
  }

  const currentContent = await readFile(csvFilePath, "utf8");
  const prefix = currentContent.endsWith("\n") || currentContent.length === 0 ? "" : "\n";
  await appendFile(csvFilePath, `${prefix}${newRecords.map(recordToLine).join("\n")}\n`, "utf8");

  return { inserted: newRecords.length, skipped: seedRecords.length - newRecords.length };
}
