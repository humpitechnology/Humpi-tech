"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem("humpi-cookie-consent") !== "accepted");
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-5 left-5 z-50 max-w-md rounded-lg border border-border bg-card p-4 shadow-xl">
      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
        We use essential cookies and analytics-ready hooks to improve website
        performance and user experience.
      </p>
      <Button
        className="mt-3"
        onClick={() => {
          localStorage.setItem("humpi-cookie-consent", "accepted");
          setVisible(false);
        }}
      >
        Accept
      </Button>
    </div>
  );
}
