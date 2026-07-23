import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/sections/page-header";
import { MotionCard, Reveal } from "@/components/sections/motion";
import { JsonLd } from "@/components/seo/json-ld";
import { company } from "@/data/company";
import { jobs } from "@/data/jobs";
import { breadcrumbSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Careers at Humpi Technology | IT, QA, Marketing and Support Jobs",
  description:
    "Explore career opportunities at Humpi Technology for practical, quality-focused work across software, QA, digital marketing, automation, and support.",
  path: "/careers",
  keywords: ["Humpi Technology careers", "IT jobs Kolkata", "software jobs Kolkata"],
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "" }, { name: "Careers", path: "/careers" }])}
      />
      <PageHeader
        eyebrow="Careers"
        title="Join a practical, quality-focused technology team."
        description="Explore open roles and send your updated resume directly to the Humpi Technology team."
      />
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-5">
            {jobs.map((job) => (
              <Reveal key={job.title}>
                <MotionCard>
                  <Card>
                    <h2 className="text-2xl font-black text-heading"> {job.title} </h2>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      {job.location} / {job.type} / {job.experience}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-body"> {job.description} </p>
                  </Card>
                </MotionCard>
              </Reveal>
            ))}
          </div>
          <Card className="self-start bg-card">
            <div className="inline-flex size-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Mail className="size-7" />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-wide text-primary">
              Join Our Team
            </p>
            <h2 className="mt-3 text-3xl font-black text-heading">
              Interested in working with Humpi Technology?
            </h2>
            <p className="mt-4 leading-7 text-body"> Please send your updated resume to: </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Mail className="size-4" /> {company.email}
            </a>
            <p className="mt-5 text-sm leading-6 text-body">
              Include the role name, your portfolio or LinkedIn profile, and a short note about the
              kind of work you want to do with us.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
