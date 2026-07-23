import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/sections/page-header";
import { MotionCard, Reveal } from "@/components/sections/motion";
import { JsonLd } from "@/components/seo/json-ld";
import { portfolio } from "@/data/portfolio";
import { breadcrumbSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio | Website, CRM, AI Automation and Business Software Work",
  description:
    "View Humpi Technology portfolio examples across healthcare platforms, CRM dashboards, AI voice workflows, restaurant websites, e-commerce, ERP, and logistics systems.",
  path: "/portfolio",
  keywords: ["software portfolio", "website development portfolio", "CRM dashboard examples"],
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "" }, { name: "Portfolio", path: "/portfolio" }])}
      />
      <PageHeader
        eyebrow="Portfolio"
        title="Digital work designed for clarity, speed, and business outcomes."
        description="Explore sample projects and implementation patterns from Humpi Technology service areas."
      />
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3">
          {portfolio.map((project) => (
            <Reveal key={project.slug}>
              <MotionCard className="h-full">
                <Card className="h-full overflow-hidden p-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={960}
                    height={640}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <p className="text-sm font-bold text-primary">{project.category}</p>
                    <h2 className="mt-2 text-2xl font-black text-heading"> {project.title} </h2>
                    <p className="mt-3 text-sm leading-6 text-body"> {project.description} </p>
                    <dl className="mt-5 grid gap-2 text-sm">
                      <div>
                        <dt className="font-bold text-heading">Client</dt>
                        <dd className="text-body">{project.client}</dd>
                      </div>
                      <div>
                        <dt className="font-bold text-heading">Duration</dt>
                        <dd className="text-body">{project.duration}</dd>
                      </div>
                    </dl>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-body"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      View Project <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </Card>
              </MotionCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
