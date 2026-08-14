import Link from "next/link";
import { ArrowRight, MessageCircle, MessagesSquare, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { company } from "@/data/company";

const WHATSAPP_INTRO = `Hello ${company.name}, I would like to know more about your services.`;
const SMS_INTRO = `Hello ${company.name}, I would like to know more about your services.`;

export function ContactBar() {
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(WHATSAPP_INTRO)}`;
  const smsUrl = `sms:${company.phoneHref}?body=${encodeURIComponent(SMS_INTRO)}`;

  return (
    <section className="section-padding">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <Card className="overflow-hidden border-border bg-gradient-to-br from-card via-background to-background p-0 shadow-[var(--shadow)]">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-primary">
                Prefer messaging?
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-heading sm:text-4xl">
                WhatsApp, SMS, or a quick call.
              </h2>
              <p className="mt-4 leading-7 text-body">
                Skip the form and get a fast answer. Message us on WhatsApp, send an SMS, or call
                the team during business hours ({company.hours}).
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "gap-2 bg-success text-primary-foreground hover:bg-success/90",
                  )}
                >
                  <MessageCircle className="size-4" /> Chat on WhatsApp
                </Link>
                <Link
                  href={smsUrl}
                  aria-label="Send an SMS"
                  className={cn(buttonVariants({ variant: "secondary" }), "gap-2")}
                >
                  <MessagesSquare className="size-4" /> Send an SMS
                </Link>
                <Link
                  href={`tel:${company.phoneHref}`}
                  aria-label={`Call ${company.phone}`}
                  className={cn(buttonVariants({ variant: "ghost" }), "gap-2")}
                >
                  <Phone className="size-4" /> Call {company.phone}
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard
                icon={<MessageCircle className="size-5" />}
                title="WhatsApp"
                description="Real-time chat with our team."
                href={whatsappUrl}
                external
                cta="Open WhatsApp"
              />
              <ContactCard
                icon={<MessagesSquare className="size-5" />}
                title="SMS"
                description="Send a text and get a callback."
                href={smsUrl}
                cta="Compose SMS"
              />
              <ContactCard
                icon={<Phone className="size-5" />}
                title="Call"
                description={`Reach us at ${company.phone}.`}
                href={`tel:${company.phoneHref}`}
                cta="Call now"
              />
              <ContactCard
                icon={<ArrowRight className="size-5" />}
                title="Quote"
                description="Share project details for a detailed estimate."
                href="/contact"
                cta="Request a quote"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  description,
  href,
  external = false,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  external?: boolean;
  cta: string;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex flex-col gap-3 rounded-md border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
    >
      <span className="inline-flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
        {icon}
      </span>
      <span>
        <span className="block font-bold text-heading">{title}</span>
        <span className="mt-1 block text-sm leading-6 text-body">{description}</span>
      </span>
      <span className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2">
        {cta} <ArrowRight className="size-4" />
      </span>
    </Link>
  );
}
