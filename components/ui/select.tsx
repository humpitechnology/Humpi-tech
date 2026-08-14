import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <span className="relative block">
      <select
        className={cn(
          "h-11 w-full appearance-none rounded-md border border-border bg-surface px-3 pr-10 text-sm text-heading outline-none transition duration-200 placeholder:text-muted-text focus:border-primary focus:ring-2 focus:ring-focus/25 disabled:cursor-not-allowed disabled:opacity-70",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-text"
      />
    </span>
  );
}
