import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/sections/page-header";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Digital Transformation Solutions | Automation, Cloud, QA and Growth",
  description:
    "Outcome-focused digital transformation packages for support automation, cloud migration, QA programs, SEO lead generation, BPO setup, and growth operations.",
  path: "/solutions",
  keywords: ["digital transformation solutions", "support automation", "cloud migration", "QA program"],
});

const solutions = [
  "Digital Transformation Roadmap",
  "Customer Support Automation",
  "Cloud Migration and DevOps",
  "Quality Engineering Program",
  "SEO and Lead Generation System",
  "Business Process Outsourcing Setup",
];
export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "" }, { name: "Solutions", path: "/solutions" }])}
      />
      <PageHeader
        eyebrow="Solutions"
        title="Outcome-focused solution packages for growth and operations."
        description="Combine strategy, design, engineering, QA, automation, and support into practical programs that fit your business stage."
      />
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Card key={solution}>
              <h2 className="text-xl font-black text-heading">{solution}</h2>
              <p className="mt-3 text-sm leading-6 text-body">
                A structured engagement with discovery, roadmap, delivery milestones, quality gates,
                and measurable success indicators.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                Plan this solution <ArrowRight className="size-4" />
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
