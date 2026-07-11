import Image from "next/image";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/sections/page-header";
import { portfolio } from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Digital work designed for clarity, speed, and business outcomes." description="Explore sample projects and implementation patterns from Humpi Technology service areas." />
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3">
          {portfolio.map((project) => (
            <Card key={project.slug} className="overflow-hidden p-0">
              <Image src={project.image} alt={project.title} width={960} height={640} className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-bold text-primary">{project.category}</p>
                <h2 className="mt-2 text-2xl font-black text-secondary">{project.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
                <dl className="mt-5 grid gap-2 text-sm">
                  <div><dt className="font-bold text-secondary">Client</dt><dd className="text-slate-600 dark:text-slate-300">{project.client}</dd></div>
                  <div><dt className="font-bold text-secondary">Duration</dt><dd className="text-slate-600 dark:text-slate-300">{project.duration}</dd></div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => <span key={tech} className="rounded-full bg-muted px-3 py-1 text-xs font-semibold">{tech}</span>)}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
