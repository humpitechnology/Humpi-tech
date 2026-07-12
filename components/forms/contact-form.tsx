"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { quoteRequestSchema, type QuoteRequestFormInput } from "@/lib/validation";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm<QuoteRequestFormInput>({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: {
      website: "",
    },
  });

  async function onSubmit(values: QuoteRequestFormInput) {
    const response = await fetch("/api/request-quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      toast.error("Something went wrong.", {
        description: "Please try again.",
      });
      return;
    }

    reset();
    toast.success("Thank you!", {
      description:
        "Your quotation request has been submitted successfully. Our team will contact you shortly.",
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field error={errors.name?.message}>
          <Input placeholder="Full name" {...register("name")} />
        </Field>
        <Field error={errors.email?.message}>
          <Input type="email" placeholder="Email address" {...register("email")} />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field error={errors.phone?.message}>
          <Input placeholder="Phone number" {...register("phone")} />
        </Field>
        <Field error={errors.service?.message}>
          <Input placeholder="Service required" {...register("service")} />
        </Field>
      </div>
      <Field error={errors.projectDetails?.message}>
        <Textarea
          maxLength={3000}
          placeholder="Project goals, timeline, and budget range"
          {...register("projectDetails")}
        />
      </Field>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("website")}
      />
      {isSubmitSuccessful ? (
        <p className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
          Thank you! Your quotation request has been submitted successfully.
        </p>
      ) : null}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

function Field({ children, error }: { children: React.ReactNode; error?: string }) {
  return (
    <label className="grid gap-2">
      {children}
      {error ? <span className="text-sm text-red-600">{error}</span> : null}
    </label>
  );
}
