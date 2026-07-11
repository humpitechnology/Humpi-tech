"use client";

import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { company } from "@/data/company";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 grid gap-3">
      <a
        href={`https://wa.me/${company.whatsapp}`}
        aria-label="Chat on WhatsApp"
        className="inline-flex size-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href={`tel:${company.phone}`}
        aria-label="Call Humpi Technology"
        className="inline-flex size-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition hover:scale-105"
      >
        <Phone className="size-5" />
      </a>
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="inline-flex size-12 items-center justify-center rounded-full bg-secondary text-white shadow-lg transition hover:scale-105"
      >
        <ArrowUp className="size-5" />
      </button>
    </div>
  );
}
