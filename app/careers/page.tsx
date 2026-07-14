import { ApplicationForm } from "@/components/forms/application-form";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/sections/page-header";
import { jobs } from "@/data/jobs";

export default function CareersPage() {
  return (
    <>
      <PageHeader eyebrow="Careers" title="Join a practical, quality-focused technology team." description="Explore open roles and submit your application. Resume upload UI is ready for storage integration." />
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-5">
            {jobs.map((job) => (
              <Card key={job.title}>
                <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">{job.title}</h2>
                <p className="mt-2 text-sm font-semibold text-primary">{job.location} · {job.type} · {job.experience}</p>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{job.description}</p>
              </Card>
            ))}
          </div>
          <Card>
            <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">Apply now</h2>
            <div className="mt-6"><ApplicationForm /></div>
          </Card>
        </div>
      </section>
    </>
  );
}
