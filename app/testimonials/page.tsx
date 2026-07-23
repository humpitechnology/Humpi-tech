import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/sections/page-header";
import { JsonLd } from "@/components/seo/json-ld";
import { testimonials } from "@/data/testimonials";
import { breadcrumbSchema, reviewListSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Client Testimonials | Humpi Technology Reviews",
  description:
    "Read client testimonials for Humpi Technology across software development, CRM, websites, support automation, SEO, BPO, and digital operations projects.",
  path: "/testimonials",
  keywords: ["Humpi Technology reviews", "client testimonials", "IT services reviews"],
});

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "" },
            { name: "Testimonials", path: "/testimonials" },
          ]),
          reviewListSchema(),
        ]}
      />
      <PageHeader
        eyebrow="Testimonials"
        title="Customer reviews from teams that value dependable delivery."
        description="Feedback examples across software, operations, websites, QA, and support programs."
      />
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div className="mt-4 flex gap-1 text-warning">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-body"> &ldquo;{item.review}&rdquo; </p>
              <p className="mt-5 font-bold text-heading">{item.name}</p>
              <p className="text-sm text-muted-text">
                {item.designation}, {item.company}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
