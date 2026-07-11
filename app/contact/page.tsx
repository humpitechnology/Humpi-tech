import { ContactForm } from "@/components/forms/contact-form";
import { Card } from "@/components/ui/card";
import { company } from "@/data/company";

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-accent">Contact</p>
          <h1 className="mt-4 text-4xl font-black text-secondary sm:text-5xl">Tell us what you want to build.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">Reach out with your project goals, timeline, and the business problem you want technology to solve.</p>
          <div className="mt-8 grid gap-4">
            <Card><strong>Email</strong><p><a href={`mailto:${company.email}`} className="text-primary">{company.email}</a></p></Card>
            <Card><strong>Phone</strong><p><a href={`tel:${company.phone}`} className="text-primary">{company.phone}</a></p></Card>
            <Card><strong>Address</strong><p>{company.address}</p><p className="mt-2 text-sm text-slate-500">{company.hours}</p></Card>
          </div>
        </div>
        <Card>
          <h2 className="text-2xl font-black text-secondary">Request a quote</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">This form is ready for API or CRM integration.</p>
          <div className="mt-6"><ContactForm /></div>
        </Card>
      </div>
      <div className="mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6">
        <div className="min-h-72 rounded-lg border border-border bg-muted p-8">
          <p className="text-sm font-bold text-secondary">Google Map Placeholder</p>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Embed the verified Google Maps iframe for Kolkata, West Bengal, India here after Maps API or embed approval.</p>
        </div>
      </div>
    </section>
  );
}
