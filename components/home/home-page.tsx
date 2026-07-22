import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Star } from "lucide-react";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { blogs } from "@/data/blogs";
import { company, stats, values } from "@/data/company";
import { faqs } from "@/data/faq";
import { industries } from "@/data/industries";
import { portfolio } from "@/data/portfolio";
import { services } from "@/data/services";
import { technologies } from "@/data/technologies";
import { testimonials } from "@/data/testimonials";
import { ServiceCard } from "@/components/sections/service-card";
import { AnimatedStat, FloatingIcon, MotionCard, Reveal } from "@/components/sections/motion";
export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden premium-hero">
        <div className="absolute inset-0 premium-grid" />
        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl min-w-0 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <FloatingIcon className="absolute right-[8%] top-28 hidden text-primary/30 lg:block">
            <Sparkles className="size-12" />
          </FloatingIcon>
          <Reveal className="min-w-0">
            <Badge>Trusted technology partner from Kolkata</Badge>
            <h1 className="mt-6 max-w-full break-words text-3xl font-black leading-tight tracking-tight text-heading  sm:max-w-4xl sm:text-6xl lg:text-7xl">
              Build smarter software, automate faster, and grow with confidence.
            </h1>
            <p className="mt-6 max-w-full text-lg leading-8 text-body  sm:max-w-2xl">
              {company.name} delivers enterprise-grade software development, websites, mobile apps,
              CRM solutions, digital marketing, BPO, and promotional campaign support for ambitious
              teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary-hover"
              >
                Request Quote <ArrowRight className="ml-2 size-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal className="glass w-full min-w-0 overflow-hidden rounded-lg border border-border p-5 shadow-[var(--shadow)] ">
            <div className="grid gap-4">
              <div className="rounded-lg bg-secondary p-6 text-primary-foreground">
                <p className="text-sm text-body">Delivery Command Center</p>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Strategy to support, one partner.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="min-w-0 rounded-lg bg-card p-5">
                    <p className="text-3xl font-black text-primary">
                      <AnimatedStat value={stat.value} />
                    </p>
                    <p className="mt-1 text-sm text-body">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <Section
        eyebrow="Why choose us"
        title="A practical technology partner for long-term digital growth."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <Reveal key={value}>
              <MotionCard className="h-full">
                <Card className="flex h-full items-start gap-3 border-border bg-card text-heading shadow-[var(--shadow-soft)]  ">
                  <CheckCircle2 className="mt-1 size-5 text-accent" />
                  <p className="font-semibold">{value}</p>
                </Card>
              </MotionCard>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Services"
        title="Full-cycle digital services for modern businesses."
        action="/services"
        badgeClassName="border-primary/25 bg-primary-hover text-primary-foreground"
        titleClassName="text-heading"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Reveal key={service.slug}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Technology"
        title="Built with modern, scalable, and maintainable tools."
        badgeClassName="border-primary/25 bg-primary-hover text-primary-foreground"
        titleClassName="text-heading"
      >
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-body"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Industries"
        title="Domain-aware solutions for teams across sectors."
        action="/industries"
        badgeClassName="border-primary/25 bg-primary-hover text-primary-foreground"
        titleClassName="text-heading"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <MotionCard key={industry.slug} className="h-full">
              <Card className="h-full p-5">
                <h3 className="font-bold text-heading">{industry.title}</h3>
                <p className="mt-2 text-sm leading-6 text-body">{industry.description}</p>
              </Card>
            </MotionCard>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Portfolio"
        title="Selected work examples and solution patterns."
        action="/portfolio"
        badgeClassName="border-primary/25 bg-primary-hover text-primary-foreground"
        titleClassName="text-heading"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {portfolio.map((project) => (
            <MotionCard key={project.slug} className="h-full">
              <Card className="h-full overflow-hidden p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={960}
                  height={640}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-5">
                  <p className="text-sm font-semibold text-primary">{project.category}</p>
                  <h3 className="mt-2 text-xl font-bold text-heading">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-body">{project.description}</p>
                </div>
              </Card>
            </MotionCard>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Client reviews"
        title="Teams value our clarity, speed, and practical execution."
        action="/testimonials"
        badgeClassName="border-primary/25 bg-primary-hover text-primary-foreground"
        titleClassName="text-heading"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.slice(0, 3).map((item) => (
            <MotionCard key={item.name} className="h-full">
              <Card className="h-full">
                <div className="flex gap-1 text-warning">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-body">&ldquo;{item.review}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={44}
                    height={44}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold text-heading">{item.name}</p>
                    <p className="text-sm text-muted-text">
                      {item.designation}, {item.company}
                    </p>
                  </div>
                </div>
              </Card>
            </MotionCard>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="FAQs"
        title="Clear answers before the first call."
        badgeClassName="border-primary/25 bg-primary-hover text-primary-foreground"
        titleClassName="text-heading"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <Card key={faq.question}>
              <h3 className="font-bold text-heading">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-body">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Latest blogs"
        title="Insights on software, QA, SEO, and automation."
        action="/blog"
        badgeClassName="border-primary/25 bg-primary-hover text-primary-foreground"
        titleClassName="text-heading"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {blogs.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <MotionCard className="h-full">
                <Card className="h-full transition hover:border-primary/40">
                  <p className="text-sm font-semibold text-primary">{post.category}</p>
                  <h3 className="mt-3 text-xl font-bold text-heading">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-body">{post.excerpt}</p>
                </Card>
              </MotionCard>
            </Link>
          ))}
        </div>
      </Section>
      <section className="bg-secondary text-primary-foreground">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-accent">Contact CTA</p>
            <h2 className="mt-3 text-4xl font-black">
              Ready to modernize your digital operations?
            </h2>
            <p className="mt-4 text-body">
              Talk to Humpi Technology about your website, mobile app, CRM, digital marketing, BPO,
              or growth needs.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
function Section({
  eyebrow,
  title,
  children,
  action,
  badgeClassName,
  titleClassName,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  action?: string;
  badgeClassName?: string;
  titleClassName?: string;
}) {
  return (
    <section className="section-padding">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge className={badgeClassName}>{eyebrow}</Badge>
            <h2
              className={`mt-4 max-w-3xl text-3xl font-black tracking-tight text-heading sm:text-4xl ${titleClassName ?? ""}`}
            >
              {title}
            </h2>
          </div>
          {action ? (
            <Link
              href={action}
              className="inline-flex items-center gap-2 text-sm font-bold text-primary"
            >
              Explore more <ArrowRight className="size-4" />
            </Link>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
