import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/sections/page-header";
import { MotionCard, Reveal } from "@/components/sections/motion";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudiesPage() {
  return (
    <>
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
                  <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">
                    {study.title}
                  </h2>
                  <Info label="Business Challenge" value={study.problem} />
                  <Info label="Solution" value={study.solution} />
                  <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-primary">
                    Technology Stack
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {study.technology.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-[#374151] dark:text-slate-200"
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
                      <li key={result} className="flex gap-2 text-[#374151] dark:text-slate-200">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                        {result}
                      </li>
                    ))}
                  </ul>
                  <blockquote className="mt-5 border-l-4 border-primary pl-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
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
      <p className="mt-2 text-sm leading-6 text-[#4B5563] dark:text-slate-300">{value}</p>
    </div>
  );
}
