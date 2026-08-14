"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { CheckCircle2, Loader2, MessageSquareText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const phoneSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(7, "Enter your 10-digit mobile number")
    .regex(/^\+?[0-9\s().-]{7,15}$/, "Enter a valid mobile number"),
});

type PhoneFormInput = z.infer<typeof phoneSchema>;

export function TestSmsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PhoneFormInput>({
    resolver: zodResolver(phoneSchema),
    defaultValues: { phone: "" },
  });
  const [result, setResult] = useState<"sent" | "error" | null>(null);

  async function onSubmit(values: PhoneFormInput) {
    setResult(null);

    const response = await fetch("/api/test-sms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = (await response.json().catch(() => null)) as { message?: string } | null;

    if (!response.ok) {
      setResult("error");
      toast.error(data?.message || "Something went wrong.", {
        description: "Please check your number and try again.",
      });
      return;
    }

    setResult("sent");
    reset();
    toast.success("SMS sent!", {
      description: data?.message || "Check your phone shortly.",
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div>
        <label htmlFor="test-sms-phone" className="mb-2 block text-sm font-semibold text-heading">
          Your mobile number
        </label>
        <Input
          id="test-sms-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+91 98xxxxxx10"
          aria-invalid={Boolean(errors.phone)}
          {...register("phone")}
        />
        {errors.phone ? <p className="mt-1.5 text-sm text-danger">{errors.phone.message}</p> : null}
      </div>
      <Button type="submit" disabled={isSubmitting} className="gap-2">
        {isSubmitting ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <MessageSquareText className="size-4" />
        )}
        {isSubmitting ? "Sending..." : "Send me a test SMS"}
      </Button>
      {result === "sent" ? (
        <p className="flex items-start gap-2 rounded-md bg-success/10 px-3 py-2 text-sm text-success">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0" /> Test SMS sent to your number. Delivery
          can take a minute.
        </p>
      ) : null}
      {result === "error" ? (
        <p className="flex items-start gap-2 rounded-md bg-danger/10 px-3 py-2 text-sm text-danger">
          <Phone className="mt-0.5 size-4 shrink-0" /> We could not send the test SMS right now.
        </p>
      ) : null}
    </form>
  );
}

export function TestSmsCard() {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="inline-flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
        <MessageSquareText className="size-5" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-heading">Try our SMS service</h3>
        <p className="mt-2 text-sm leading-6 text-body">
          Enter your mobile number and we will send you a test SMS right away. No sign-up needed.
        </p>
      </div>
      <TestSmsForm />
    </Card>
  );
}
