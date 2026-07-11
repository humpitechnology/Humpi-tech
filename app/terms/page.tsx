import { PageHeader } from "@/components/sections/page-header";
import { company } from "@/data/company";

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Terms" title="Website terms and service information." description="General terms for using the Humpi Technology website and contacting the company for services." />
      <section className="mx-auto grid w-full max-w-4xl gap-6 px-4 py-16 leading-7 text-slate-600 sm:px-6 dark:text-slate-300">
        <p>Website content is provided for general business information and service discovery. Project scope, timelines, pricing, and support terms are confirmed through written proposals or agreements.</p>
        <p>All logos, brand assets, content, and website materials belong to {company.name} unless otherwise noted.</p>
        <p>For questions, contact <a className="text-primary" href={`mailto:${company.email}`}>{company.email}</a>.</p>
      </section>
    </>
  );
}
