import "server-only";

import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cached =
  globalThis.mongooseCache ?? (globalThis.mongooseCache = { conn: null, promise: null });

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not configured");
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DB || undefined,
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

const quoteSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    service: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    status: { type: String, required: true, default: "New", trim: true },
    ipAddress: { type: String, trim: true },
  },
  { timestamps: true },
);

quoteSchema.index({ email: 1, createdAt: -1 });
quoteSchema.index({ status: 1, createdAt: -1 });

export type QuoteDocument = InferSchemaType<typeof quoteSchema>;

export const Quote =
  (mongoose.models.Quote as Model<QuoteDocument> | undefined) ||
  mongoose.model<QuoteDocument>("Quote", quoteSchema);
