import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/sections/page-header";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader eyebrow="Case Studies" title="Business problems, practical solutions, and measurable results." description="Sample delivery stories showing how Humpi Technology approaches digital operations and quality improvement." />
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <Card key={study.slug}>
              <h2 className="text-2xl font-black text-secondary">{study.title}</h2>
              <Info label="Problem" value={study.problem} />
              <Info label="Solution" value={study.solution} />
              <div className="mt-5 flex flex-wrap gap-2">
                {study.technology.map((tech) => <span key={tech} className="rounded-full bg-muted px-3 py-1 text-xs font-semibold">{tech}</span>)}
              </div>
              <ul className="mt-5 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
                {study.results.map((result) => <li key={result}>• {result}</li>)}
              </ul>
              <blockquote className="mt-5 border-l-4 border-primary pl-4 text-sm font-semibold text-secondary">
                &ldquo;{study.testimonial}&rdquo;
              </blockquote>
            </Card>
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
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{value}</p>
    </div>
  );
}
