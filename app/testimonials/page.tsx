import Image from "next/image";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/sections/page-header";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader eyebrow="Testimonials" title="Customer reviews from teams that value dependable delivery." description="Feedback examples across software, operations, websites, QA, and support programs." />
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-full" />
              <div className="mt-4 flex gap-1 text-yellow-400">
                {Array.from({ length: item.rating }).map((_, index) => <Star key={index} className="size-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                &ldquo;{item.review}&rdquo;
              </p>
              <p className="mt-5 font-bold text-gray-900 dark:text-gray-100">{item.name}</p>
              <p className="text-sm text-slate-500">{item.designation}, {item.company}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
