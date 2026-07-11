import { PageHeader } from "@/components/sections/page-header";
import { ServiceCard } from "@/components/sections/service-card";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Website, mobile app, BPO, CRM, marketing, messaging, and growth services."
        description="Every service is structured around business goals, practical execution, measurable performance, and long-term support."
      />
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}
