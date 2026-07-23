import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/sections/page-header";
import { MotionCard, Reveal } from "@/components/sections/motion";
import { JsonLd } from "@/components/seo/json-ld";
import { caseStudies } from "@/data/case-studies";
import { breadcrumbSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Case Studies | Automation, QA, CRM, Local SEO and Operations Results",
  description:
    "Explore Humpi Technology case studies showing business challenges, practical solutions, technology stacks, and measurable results across digital operations.",
  path: "/case-studies",
  keywords: ["IT case studies", "automation case study", "CRM case study", "local SEO case study"],
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />
      <PageHeader
        eyebrow="Case Studies"
        title="Business problems, practical solutions, and measurable results."
        description="Sample delivery stories showing how Humpi Technology approaches digital operations and quality improvement."
      />
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <Reveal key={study.slug}>
              <MotionCard className="h-full">
                <Card className="h-full">
                  <h2 className="text-2xl font-black text-heading"> {study.title} </h2>
                  <Info label="Business Challenge" value={study.problem} />
                  <Info label="Solution" value={study.solution} />
                  <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-primary">
                    Technology Stack
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {study.technology.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-body"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-primary">
                    Results
                  </h3>
                  <ul className="mt-3 grid gap-2 text-sm">
                    {study.results.map((result) => (
                      <li key={result} className="flex gap-2 text-body">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                        {result}
                      </li>
                    ))}
                  </ul>
                  <blockquote className="mt-5 border-l-4 border-primary pl-4 text-sm font-semibold text-heading">
                    &ldquo;{study.testimonial}&rdquo;
                  </blockquote>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary"
                  >
                    Discuss a similar project <ArrowRight className="size-4" />
                  </Link>
                </Card>
              </MotionCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-5">
      <h3 className="text-sm font-bold uppercase tracking-wide text-primary">{label}</h3>
      <p className="mt-2 text-sm leading-6 text-body">{value}</p>
    </div>
  );
}
