import { PageHeader } from "@/components/sections/page-header";
import { company } from "@/data/company";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Privacy Policy" title="How Humpi Technology handles website and inquiry information." description="This page explains the basic privacy approach for inquiries, analytics readiness, and future platform integrations." />
      <section className="mx-auto grid w-full max-w-4xl gap-6 px-4 py-16 leading-7 text-slate-600 sm:px-6 dark:text-slate-300">
        <p>Humpi Technology collects information you submit through contact, quote, newsletter, and career forms to respond to inquiries and provide services.</p>
        <p>We may use analytics tools after configuration to understand website performance and improve user experience. We do not sell personal information.</p>
        <p>For privacy requests, contact <a className="text-primary" href={`mailto:${company.email}`}>{company.email}</a>.</p>
      </section>
    </>
  );
}
