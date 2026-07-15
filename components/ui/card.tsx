import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-colors duration-300",
        className,
      )}
      {...props}
    />
  );
}
