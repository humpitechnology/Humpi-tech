import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-md border border-border bg-surface px-3 py-3 text-sm text-heading outline-none transition duration-200 placeholder:text-muted-text focus:border-primary focus:ring-2 focus:ring-focus/25",
        className,
      )}
      {...props}
    />
  );
}
