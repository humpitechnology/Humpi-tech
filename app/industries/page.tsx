import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/sections/page-header";
import { industries } from "@/data/industries";

export default function IndustriesPage() {
  return (
    <>
      <PageHeader eyebrow="Industries" title="Technology solutions tailored to real industry workflows." description="Humpi Technology supports healthcare, finance, education, retail, manufacturing, real estate, travel, e-commerce, logistics, and startups." />
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.slug}>
              <h2 className="text-2xl font-black text-secondary">{industry.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{industry.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {industry.useCases.map((useCase) => <span key={useCase} className="rounded-full bg-muted px-3 py-1 text-xs font-semibold">{useCase}</span>)}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
