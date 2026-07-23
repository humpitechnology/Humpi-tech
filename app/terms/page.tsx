import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { JsonLd } from "@/components/seo/json-ld";
import { company } from "@/data/company";
import { breadcrumbSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Use | Humpi Technology",
  description:
    "Read the general website terms for using Humpi Technology service information, business inquiries, proposals, content, and brand materials.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "" }, { name: "Terms", path: "/terms" }])}
      />
      <PageHeader
        eyebrow="Terms"
        title="Website terms and service information."
        description="General terms for using the Humpi Technology website and contacting the company for services."
      />
      <section className="mx-auto grid w-full max-w-4xl gap-6 px-4 py-16 leading-7 text-body sm:px-6 ">
        <p>
          Website content is provided for general business information and service discovery.
          Project scope, timelines, pricing, and support terms are confirmed through written
          proposals or agreements.
        </p>
        <p>
          All logos, brand assets, content, and website materials belong to {company.name} unless
          otherwise noted.
        </p>
        <p>
          For questions, contact
          <a className="text-primary" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          .
        </p>
      </section>
    </>
  );
}
