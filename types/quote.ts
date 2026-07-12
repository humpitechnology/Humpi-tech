export type QuoteRequestInput = {
  name: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
  website?: string;
};

export type SanitizedQuoteRequest = {
  name: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
};

export type QuoteSubmission = SanitizedQuoteRequest & {
  ipAddress: string;
  submittedAt: Date;
};
