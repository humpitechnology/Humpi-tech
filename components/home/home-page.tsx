import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Download, Star } from "lucide-react";
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
import { Reveal } from "@/components/sections/motion";

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_34%),linear-gradient(135deg,#ffffff_0%,#f8fafc_45%,#ecfeff_100%)] dark:bg-[radial-gradient(circle_at_top_left,#0f3a8a,transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,87,255,0.08)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl min-w-0 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="min-w-0">
            <Badge>Trusted technology partner from Kolkata</Badge>
            <h1 className="mt-6 max-w-full break-words text-3xl font-black leading-tight tracking-tight text-white sm:max-w-4xl sm:text-6xl lg:text-7xl">
              Build smarter software, automate faster, and grow with confidence.
            </h1>
            <p className="mt-6 max-w-full text-lg leading-8 text-slate-100 sm:max-w-2xl">
              {company.name} delivers enterprise-grade software development,
              websites, AI automation, QA testing, cloud solutions, SEO, digital
              marketing, BPO, and consulting for ambitious teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex min-h-11 items-center rounded-md bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700">
                Request Quote <ArrowRight className="ml-2 size-4" />
              </Link>
              <a href="/company-profile.pdf" className="inline-flex min-h-11 items-center rounded-md border border-border bg-card px-5 text-sm font-bold text-secondary hover:border-primary hover:text-primary">
                <Download className="mr-2 size-4" /> Company Profile
              </a>
            </div>
          </Reveal>
          <Reveal className="glass w-full min-w-0 overflow-hidden rounded-lg border border-white/60 p-5 shadow-2xl shadow-blue-950/10 dark:border-white/10">
            <div className="grid gap-4">
              <div className="rounded-lg bg-secondary p-6 text-white">
                <p className="text-sm text-slate-300">Delivery Command Center</p>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Strategy to support, one partner.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="min-w-0 rounded-lg bg-card p-5">
                    <p className="text-3xl font-black text-primary">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section eyebrow="Why choose us" title="A practical technology partner for long-term digital growth.">
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <Reveal key={value}>
              <Card className="flex h-full items-start gap-3">
                <CheckCircle2 className="mt-1 size-5 text-accent" />
                <p className="font-semibold text-secondary">{value}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Services" title="Full-cycle digital services for modern businesses." action="/services">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Reveal key={service.slug}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Technology" title="Built with modern, scalable, and maintainable tools.">
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <Section eyebrow="Industries" title="Domain-aware solutions for teams across sectors." action="/industries">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <Card key={industry.slug} className="p-5">
              <h3 className="font-bold text-secondary">{industry.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{industry.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Portfolio" title="Selected work examples and solution patterns." action="/portfolio">
        <div className="grid gap-5 md:grid-cols-3">
          {portfolio.map((project) => (
            <Card key={project.slug} className="overflow-hidden p-0">
              <Image src={project.image} alt={project.title} width={960} height={640} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <p className="text-sm font-semibold text-primary">{project.category}</p>
                <h3 className="mt-2 text-xl font-bold text-secondary">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Client reviews" title="Teams value our clarity, speed, and practical execution." action="/testimonials">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                &ldquo;{item.review}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <Image src={item.image} alt={item.name} width={44} height={44} className="rounded-full" />
                <div>
                  <p className="font-bold text-secondary">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.designation}, {item.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQs" title="Clear answers before the first call.">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <Card key={faq.question}>
              <h3 className="font-bold text-secondary">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Latest blogs" title="Insights on software, QA, SEO, and automation." action="/blog">
        <div className="grid gap-5 md:grid-cols-3">
          {blogs.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full transition hover:-translate-y-1 hover:border-primary/40">
                <p className="text-sm font-semibold text-primary">{post.category}</p>
                <h3 className="mt-3 text-xl font-bold text-secondary">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-secondary text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-accent">Contact CTA</p>
            <h2 className="mt-3 text-4xl font-black">Ready to modernize your digital operations?</h2>
            <p className="mt-4 text-slate-300">Talk to Humpi Technology about your website, software, QA, automation, SEO, or support needs.</p>
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
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  action?: string;
}) {
  return (
    <section className="section-padding">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge>{eyebrow}</Badge>
            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-secondary sm:text-4xl">{title}</h2>
          </div>
          {action ? (
            <Link href={action} className="inline-flex items-center gap-2 text-sm font-bold text-primary">
              Explore more <ArrowRight className="size-4" />
            </Link>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
