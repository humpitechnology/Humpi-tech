"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(8, "Phone number is required"),
  service: z.string().min(2, "Tell us what you need"),
  message: z.string().min(10, "Please share a little more detail"),
});

type ContactInput = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    reset();
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
      <Field error={errors.message?.message}>
        <Textarea placeholder="Project goals, timeline, and budget range" {...register("message")} />
      </Field>
      {isSubmitSuccessful ? (
        <p className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
          Thanks. This demo form is ready for backend integration.
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
