import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/sections/page-header";
import { JsonLd } from "@/components/seo/json-ld";
import { industries } from "@/data/industries";
import { breadcrumbSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Industry IT Solutions | Healthcare, Retail, Finance, Education and Logistics",
  description:
    "Industry-aware IT solutions from Humpi Technology for healthcare, finance, education, retail, manufacturing, real estate, travel, e-commerce, logistics, and startups.",
  path: "/industries",
  keywords: ["industry IT solutions", "healthcare software", "retail technology", "logistics software"],
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "" }, { name: "Industries", path: "/industries" }])}
      />
      <PageHeader
        eyebrow="Industries"
        title="Technology solutions tailored to real industry workflows."
        description="Humpi Technology supports healthcare, finance, education, retail, manufacturing, real estate, travel, e-commerce, logistics, and startups."
      />
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.slug}>
              <h2 className="text-2xl font-black text-heading">{industry.title}</h2>
              <p className="mt-3 text-sm leading-6 text-body">{industry.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {industry.useCases.map((useCase) => (
                  <span
                    key={useCase}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-semibold"
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
