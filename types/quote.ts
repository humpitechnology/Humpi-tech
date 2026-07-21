export type QuoteRequestInput = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website?: string;
};

export type SanitizedQuoteRequest = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export type QuoteSubmission = SanitizedQuoteRequest & {
  status: "New" | string;
  ipAddress: string;
  createdAt: Date;
};
