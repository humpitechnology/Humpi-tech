import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { Card } from "@/components/ui/card";
import { company, processSteps, timeline, values } from "@/data/company";
import { breadcrumbSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Humpi Technology | IT Consulting Company in Kolkata",
  description:
    "Learn about Humpi Technology, a Kolkata-based IT consulting and digital delivery company focused on reliable software, automation, QA, SEO, and support.",
  path: "/about",
  keywords: ["about Humpi Technology", "IT consulting Kolkata", "software company Kolkata"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "" }, { name: "About", path: "/about" }])} />
      <section className="bg-muted/60">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-wide text-accent">
            About {company.name}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black text-heading sm:text-6xl">
            Technology consulting and delivery for companies that value reliability.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-body">{company.description}</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-black text-heading">Mission</h2>
            <p className="mt-4 leading-7 text-body">
              To help businesses use software, automation, design, quality, and digital marketing to
              operate with clarity and grow with confidence.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-black text-heading">Vision</h2>
            <p className="mt-4 leading-7 text-body">
              To become a trusted technology partner for organizations seeking practical,
              enterprise-grade digital transformation.
            </p>
          </Card>
        </div>
      </section>
      <section className="section-padding bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-black text-heading">Core values</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value}>
                <p className="font-bold text-heading">{value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black text-heading">Development process</h2>
            <div className="mt-8 grid gap-4">
              {processSteps.map((step, index) => (
                <Card key={step} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <p className="font-semibold text-heading">{step}</p>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-heading">Company story</h2>
            <div className="mt-8 grid gap-4">
              {timeline.map((item) => (
                <Card key={item.title}>
                  <p className="text-sm font-bold text-primary">{item.year}</p>
                  <h3 className="mt-2 text-xl font-bold text-heading">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-body">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
