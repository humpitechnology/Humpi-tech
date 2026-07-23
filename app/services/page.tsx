import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ServiceCard } from "@/components/sections/service-card";
import { JsonLd } from "@/components/seo/json-ld";
import { Card } from "@/components/ui/card";
import { faqs } from "@/data/faq";
import { services } from "@/data/services";
import { breadcrumbSchema, faqPageSchema, serviceListSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "IT Services in Kolkata | Web, Mobile App, CRM, BPO, SEO and AI",
  description:
    "Explore Humpi Technology services: website development, mobile apps, CRM solutions, BPO and call center support, digital marketing, messaging, and AI automation.",
  path: "/services",
  keywords: [
    "IT services Kolkata",
    "website development services",
    "mobile app development",
    "BPO call center services",
    "CRM solutions",
    "digital marketing services",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "" }, { name: "Services", path: "/services" }]),
          serviceListSchema(),
          faqPageSchema(faqs.slice(0, 3)),
        ]}
      />
      <PageHeader
        eyebrow="Services"
        title="Website, mobile app, BPO, CRM, marketing, messaging, and growth services."
        description="Every service is structured around business goals, practical execution, measurable performance, and long-term support."
      />
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <section className="section-padding bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-accent">Service FAQs</p>
            <h2 className="mt-3 text-3xl font-black text-heading">
              Clear answers before you start a technology project.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {faqs.slice(0, 3).map((faq) => (
              <Card key={faq.question}>
                <h3 className="font-bold text-heading">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-body">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
