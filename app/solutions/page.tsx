import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/sections/page-header";

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
      <PageHeader eyebrow="Solutions" title="Outcome-focused solution packages for growth and operations." description="Combine strategy, design, engineering, QA, automation, and support into practical programs that fit your business stage." />
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Card key={solution}>
              <h2 className="text-xl font-black text-secondary">{solution}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">A structured engagement with discovery, roadmap, delivery milestones, quality gates, and measurable success indicators.</p>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Plan this solution <ArrowRight className="size-4" /></Link>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
