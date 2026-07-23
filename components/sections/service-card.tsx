import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Service } from "@/types/content";
import { Card } from "@/components/ui/card";
import { iconMap } from "@/components/sections/icon-map";
import { MotionCard } from "@/components/sections/motion";
export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];
  return (
    <MotionCard className="h-full">
      <Card id={service.slug} className="group h-full scroll-mt-24 transition hover:border-primary/40">
        <div className="inline-flex size-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
          <Icon className="size-6" />
        </div>
        <h2 className="mt-5 text-xl font-bold text-heading">{service.title}</h2>
        <p className="mt-3 text-sm leading-6 text-body">{service.description}</p>
        <ul className="mt-5 grid gap-2">
          {service.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-2 text-sm text-body">
              <CheckCircle2 className="mt-0.5 size-4 text-accent" /> {feature}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover"
        >
          Discuss this service
          <ArrowRight className="size-4 transition group-hover:translate-x-1" />
        </Link>
      </Card>
    </MotionCard>
  );
}
