"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const newsletterSchema = z.object({ email: z.string().email("Enter a valid email address") });
type NewsletterInput = z.infer<typeof newsletterSchema>;
export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<NewsletterInput>({ resolver: zodResolver(newsletterSchema) });
  function onSubmit() {
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3 sm:grid-cols-[1fr_auto]">
      <div>
        <Input
          type="email"
          placeholder="work@email.com"
          aria-label="Email address"
          {...register("email")}
        />
        {errors.email ? <p className="mt-2 text-sm text-danger">{errors.email.message}</p> : null}
        {isSubmitSuccessful ? (
          <p className="mt-2 text-sm text-success">Thanks. You are on the update list.</p>
        ) : null}
      </div>
      <Button type="submit" className="gap-2">
        Subscribe <Send className="size-4" />
      </Button>
    </form>
  );
}
