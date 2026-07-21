"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const applicationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  role: z.string().min(2),
  resume: z.custom<FileList>().optional(),
  note: z.string().min(10),
});
type ApplicationInput = z.infer<typeof applicationSchema>;
export function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm<ApplicationInput>({ resolver: zodResolver(applicationSchema) });
  function onSubmit() {
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <Input placeholder="Full name" {...register("name")} />
      <Input type="email" placeholder="Email address" {...register("email")} />
      <Input placeholder="Role you are applying for" {...register("role")} />
      <Input type="file" accept=".pdf,.doc,.docx" {...register("resume")} />
      <Textarea placeholder="Tell us about your experience" {...register("note")} />
      {isSubmitSuccessful ? (
        <p className="rounded-md bg-success/10 px-3 py-2 text-sm text-success">
          Application captured in UI. Connect storage/API to persist resumes.
        </p>
      ) : null}
      <Button type="submit">Submit Application</Button>
    </form>
  );
}
