import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { Card } from "@/components/ui/card";
import { company } from "@/data/company";
import { breadcrumbSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Humpi Technology | Request an IT Services Quote",
  description:
    "Contact Humpi Technology in Kolkata for website development, mobile apps, CRM, BPO, digital marketing, SEO, AI automation, and business technology support.",
  path: "/contact",
  keywords: ["contact Humpi Technology", "IT services quote", "website development Kolkata contact"],
});

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Humpi Technology",
    url: `${siteUrl}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: company.name,
      email: company.email,
      telephone: company.phone,
      address: company.address,
    },
  };

  return (
    <section className="section-padding">
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "" }, { name: "Contact", path: "/contact" }]),
          contactJsonLd,
        ]}
      />
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-accent">Contact</p>
          <h1 className="mt-4 text-4xl font-black text-heading sm:text-5xl">
            Tell us what you want to build.
          </h1>
          <p className="mt-5 text-lg leading-8 text-body">
            Reach out with your project goals, timeline, and the business problem you want
            technology to solve.
          </p>
          <div className="mt-8 grid gap-4">
            <Card>
              <strong>Email</strong>
              <p>
                <a href={`mailto:${company.email}`} className="text-primary">
                  {company.email}
                </a>
              </p>
            </Card>
            <Card>
              <strong>Phone</strong>
              <p>
                <a href={`tel:${company.phoneHref}`} className="text-primary">
                  {company.phone}
                </a>
              </p>
            </Card>
            <Card>
              <strong>Address</strong> <p>{company.address}</p>
              <p className="mt-2 text-sm text-muted-text">{company.hours}</p>
            </Card>
          </div>
        </div>
        <Card>
          <h2 className="text-2xl font-black text-heading">Request a quote</h2>
          <p className="mt-2 text-sm text-body">
            Share your requirements and our team will respond within one business day.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </Card>
      </div>
      <div className="mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6">
        <div className="relative h-[400px] w-full overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-soft)]">
          <iframe
            title="Kolkata, West Bengal, India map"
            className="h-full w-full"
            width="600"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=kolkata&t=k&z=14&ie=UTF8&iwloc=B&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
