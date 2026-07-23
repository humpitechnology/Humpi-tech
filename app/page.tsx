import type { Metadata } from "next";
import { HomePage } from "@/components/home/home-page";
import { JsonLd } from "@/components/seo/json-ld";
import { faqPageSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "IT Services, Website Development, AI Automation and Digital Marketing",
  description:
    "Humpi Technology is a Kolkata IT services company for website development, mobile apps, CRM, BPO, digital marketing, AI automation, SEO, and business growth.",
  keywords: [
    "IT services Kolkata",
    "website development company Kolkata",
    "AI automation services",
    "CRM development",
    "digital marketing agency Kolkata",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageSchema()} />
      <HomePage />
    </>
  );
}
