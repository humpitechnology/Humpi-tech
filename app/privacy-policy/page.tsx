import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { JsonLd } from "@/components/seo/json-ld";
import { company } from "@/data/company";
import { breadcrumbSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | Humpi Technology",
  description:
    "Review how Humpi Technology handles website inquiries, contact form submissions, career information, analytics readiness, and privacy requests.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <PageHeader
        eyebrow="Privacy Policy"
        title="How Humpi Technology handles website and inquiry information."
        description="This page explains the basic privacy approach for inquiries, analytics readiness, and future platform integrations."
      />
      <section className="mx-auto grid w-full max-w-4xl gap-6 px-4 py-16 leading-7 text-body sm:px-6 ">
        <p>
          Humpi Technology collects information you submit through contact, quote, newsletter, and
          career forms to respond to inquiries and provide services.
        </p>
        <p>
          We may use analytics tools after configuration to understand website performance and
          improve user experience. We do not sell personal information.
        </p>
        <p>
          For privacy requests, contact
          <a className="text-primary" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          .
        </p>
      </section>
    </>
  );
}
