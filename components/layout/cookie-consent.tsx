"use client";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

const COOKIE_CONSENT_KEY = "humpi-cookie-consent";
const COOKIE_CONSENT_EVENT = "humpi-cookie-consent-change";

function subscribeToCookieConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(COOKIE_CONSENT_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(COOKIE_CONSENT_EVENT, callback);
  };
}

function getCookieConsentSnapshot() {
  return localStorage.getItem(COOKIE_CONSENT_KEY) !== "accepted";
}

export function CookieConsent() {
  const visible = useSyncExternalStore(subscribeToCookieConsent, getCookieConsentSnapshot, () => false);

  if (!visible) {
    return null;
  }
  return (
    <div className="fixed bottom-5 left-5 z-50 max-w-md rounded-lg border border-border bg-card p-4 shadow-[var(--shadow)]">
      <p className="text-sm leading-6 text-body">
        We use essential cookies and analytics-ready hooks to improve website performance and user
        experience.
      </p>
      <Button
        className="mt-3"
        onClick={() => {
          localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
          window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
        }}
      >
        Accept
      </Button>
    </div>
  );
}
