import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-heading outline-none transition duration-200 placeholder:text-muted-text focus:border-primary focus:ring-2 focus:ring-focus/25",
        className,
      )}
      {...props}
    />
  );
}
