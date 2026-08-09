import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  CircleDot,
  DatabaseZap,
  FileQuestion,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/sections/motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/utils";
import type { Faq } from "@/types/content";

const path = "/services/aeo-geo-optimization";

const faqs: Faq[] = [
  {
    question: "What is AEO?",
    answer:
      "AEO, or Answer Engine Optimization, is the practice of structuring content so search engines and answer-focused systems can extract clear, direct answers. It supports visibility in experiences such as featured snippets, People Also Ask, voice assistants, knowledge panels, and Google AI Overviews.",
  },
  {
    question: "What is GEO?",
    answer:
      "GEO, or Generative Engine Optimization, improves how well AI-powered search and answer systems can understand, summarize, reference, and potentially cite your content. It focuses on comprehensive content, credible signals, clear entities, and information that is easy for AI systems to interpret.",
  },
  {
    question: "What is the difference between AEO and GEO?",
    answer:
      "AEO optimizes content to become a direct answer in search experiences. GEO optimizes content to become a trusted source for AI-generated responses. AEO is often question-led and concise, while GEO usually needs broader topical authority, credibility, and well-structured long-form content.",
  },
  {
    question: "Does AEO replace SEO?",
    answer:
      "No. AEO builds on SEO. Technical SEO, crawlability, indexation, performance, keyword research, internal linking, and content quality still matter. AEO adds an answer-first structure so search systems can identify and display useful responses more easily.",
  },
  {
    question: "Does GEO replace SEO?",
    answer:
      "No. GEO complements SEO by preparing content for AI-powered discovery experiences. Strong SEO foundations help AI systems access and understand content, while GEO adds depth, entity clarity, credible sourcing, and topical authority signals.",
  },
  {
    question: "Can AEO help with Google AI Overviews?",
    answer:
      "AEO can improve the clarity and extractability of your content for answer-focused search features, including Google AI Overviews. It does not guarantee inclusion, but it can increase opportunities by making your content easier to understand and match to user questions.",
  },
  {
    question: "Can GEO help my content appear in ChatGPT or Gemini?",
    answer:
      "GEO can make your content more understandable, credible, and reference-worthy for AI-powered systems such as ChatGPT, Gemini, Claude, Perplexity, and AI search experiences. No agency can guarantee AI citations, but optimization can improve discoverability and source quality.",
  },
  {
    question: "How long does AEO and GEO take?",
    answer:
      "Timelines depend on your website size, technical condition, current content quality, competition, and authority. Initial audits and priority improvements can often begin quickly, while broader content architecture, authority development, and monitoring usually need ongoing work.",
  },
  {
    question: "Can you optimize our existing website?",
    answer:
      "Yes. We can audit your existing website, identify technical and content gaps, improve page structure, refine answer-focused sections, add accurate structured data where appropriate, and plan new content that supports both search and AI-powered discovery.",
  },
  {
    question: "Do you guarantee AI citations?",
    answer:
      "No. AI citations, AI Overview placement, rankings, traffic, and leads cannot be guaranteed. Our work focuses on improving content quality, technical accessibility, entity clarity, authority signals, and the likelihood that search and AI systems can understand your brand.",
  },
];

const deliverables = [
  ["AEO Content Strategy", "Question-focused content architecture designed around user intent."],
  ["AI Search Optimization", "Content optimization for modern AI-powered search experiences."],
  [
    "Structured Data Implementation",
    "Relevant schema implementation based on actual page content.",
  ],
  ["FAQ & Answer Optimization", "Creation and optimization of concise answer-focused content."],
  [
    "GEO Content Strategy",
    "Long-form authoritative content designed for AI comprehension and citation potential.",
  ],
  [
    "Entity & Brand Optimization",
    "Improve clarity around your organization, services, products, expertise, and topical authority.",
  ],
  ["Content Authority Building", "Develop credible content and legitimate third-party visibility."],
  [
    "Technical SEO Foundation",
    "Ensure the website can be properly crawled, indexed, rendered, and understood.",
  ],
];

const process = [
  [
    "Website & Content Audit",
    "Analyze website content, technical SEO, indexing, structure, and authority.",
  ],
  [
    "Search & Question Research",
    "Identify relevant questions, topics, entities, search intent, and conversational queries.",
  ],
  ["Content Architecture", "Build an AEO/GEO-focused content structure."],
  [
    "Content Optimization",
    "Improve existing pages and create new authoritative content where required.",
  ],
  ["Structured Data", "Implement relevant structured data accurately."],
  ["Authority Development", "Improve legitimate external visibility and topical authority."],
  [
    "Monitoring & Improvement",
    "Monitor search visibility, content performance, AI visibility indicators, and improve the strategy.",
  ],
];

const benefits = [
  "Improve visibility in answer-focused search",
  "Increase opportunities for featured answers",
  "Make content easier for AI systems to understand",
  "Strengthen topical authority",
  "Improve brand discoverability",
  "Support conversational search",
  "Build stronger content ecosystems",
  "Improve visibility across traditional and AI-powered search",
];

const audiences = [
  "SaaS companies",
  "Technology companies",
  "B2B businesses",
  "Professional service companies",
  "E-commerce brands",
  "Local businesses",
  "Healthcare/service organizations",
  "Agencies",
  "Startups",
  "Enterprise businesses",
  "Thought leaders",
];

export const metadata: Metadata = createPageMetadata({
  title: "AEO & GEO Optimization Services | Get Found in Search & AI",
  description:
    "Improve your visibility across search engines and AI-powered answer systems with AEO and GEO optimization. Build content that is easier to discover, understand, summarize, and cite.",
  path,
  keywords: [
    "AEO services",
    "GEO optimization services",
    "answer engine optimization",
    "generative engine optimization",
    "AI search optimization",
    "Google AI Overviews optimization",
  ],
});

export default function AeoGeoOptimizationPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AEO & GEO Optimization",
    serviceType: "Answer Engine Optimization and Generative Engine Optimization",
    description:
      "AEO and GEO optimization services that improve how search engines and AI-powered answer systems understand, summarize, and discover business content.",
    provider: {
      "@type": "Organization",
      name: company.name,
      url: siteUrl,
    },
    areaServed: company.serviceAreas,
    url: `${siteUrl}${path}`,
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "" },
            { name: "Services", path: "/services" },
            { name: "AEO & GEO Optimization", path },
          ]),
          serviceJsonLd,
          faqPageSchema(faqs),
        ]}
      />

      <section className="premium-hero overflow-hidden border-b border-border">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <Reveal>
            <Badge>AEO & GEO Optimization</Badge>
            <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-heading sm:text-5xl lg:text-6xl">
              Get Found in Search. Get Cited by AI.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-body">
              AEO & GEO optimization helps your business become the answer users find in search
              engines and the source AI-powered systems trust, cite, and summarize.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={buttonVariants()}>
                Get a Free Consultation
                <ArrowRight className="ml-2 size-4" />
              </Link>
              <Link href="#strategy" className={buttonVariants({ variant: "secondary" })}>
                Explore Our AEO & GEO Strategy
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="relative min-h-[360px] overflow-hidden rounded-lg border border-border bg-card p-5 shadow-[var(--shadow)]"
              aria-label="AI search, answer engine, and knowledge graph visualization"
            >
              <div className="absolute inset-0 premium-grid opacity-70" />
              <div className="relative grid h-full gap-4">
                <div className="rounded-lg border border-primary/30 bg-background/80 p-4">
                  <div className="flex items-center gap-3">
                    <Search className="size-5 text-accent" />
                    <span className="text-sm font-bold text-heading">User question</span>
                  </div>
                  <p className="mt-3 text-sm text-body">Who can solve this with authority?</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["Answer layer", FileQuestion],
                    ["Entity clarity", Network],
                    ["Source depth", DatabaseZap],
                    ["AI summary", BrainCircuit],
                  ].map(([label, Icon]) => (
                    <div
                      key={label as string}
                      className="rounded-lg border border-border bg-muted/80 p-4"
                    >
                      <Icon className="size-6 text-primary" />
                      <p className="mt-3 text-sm font-semibold text-heading">{label as string}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border border-accent/30 bg-accent/10 p-4">
                  <div className="flex items-center gap-3">
                    <Bot className="size-5 text-accent" />
                    <span className="text-sm font-bold text-heading">Trusted source signal</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-body">
                    Clear answers, structured evidence, and credible brand context help search and
                    AI systems understand what your business should be known for.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
          <IntroCard
            title="AEO - Answer Engine Optimization"
            icon={<FileQuestion className="size-6" />}
            text="AEO focuses on structuring content so search engines and answer-focused systems can extract and display your content as a direct answer across featured snippets, People Also Ask, knowledge panels, voice assistants, Google AI Overviews, and other answer-engine experiences."
            concept="The goal of AEO is to make your content the answer."
          />
          <IntroCard
            title="GEO - Generative Engine Optimization"
            icon={<BrainCircuit className="size-6" />}
            text="GEO focuses on making content easier for AI-powered systems such as ChatGPT, Google Gemini, Perplexity, Claude, and AI-powered search experiences to understand, summarize, reference, and potentially cite."
            concept="The goal of GEO is to make your brand and content a trusted source that AI systems can reference."
          />
        </div>
      </section>

      <section id="strategy" className="section-padding bg-muted/50">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <Principles
            eyebrow="AEO"
            title="What is AEO?"
            description="Answer Engine Optimization is the practice of structuring and optimizing content so that it can be extracted as direct answers by search engines and AI-powered search features."
            items={[
              [
                "Answer-First Content",
                "Place concise, direct answers immediately after relevant questions and headings.",
              ],
              [
                "Question-Based Structure",
                "Create content around the actual questions users search for.",
              ],
              [
                "Structured Data",
                "Use accurate FAQPage, HowTo, Organization, LocalBusiness, Product, or Article schema where the visible content supports it.",
              ],
              [
                "Clear Content Structure",
                "Use H1, H2, H3, short paragraphs, lists, tables where appropriate, and FAQs.",
              ],
              [
                "Authority & Accuracy",
                "Strengthen pages with accurate information, trust signals, references, expert context, and original insights.",
              ],
            ]}
          />
          <Principles
            eyebrow="GEO"
            title="What is GEO?"
            description="Generative Engine Optimization focuses on improving the likelihood that AI-powered search and answer systems can understand, summarize, reference, and cite a brand's content."
            items={[
              [
                "Comprehensive Content",
                "Create authoritative content that fully answers complex topics.",
              ],
              [
                "Expertise & Credibility",
                "Show company experience, credentials where applicable, original insights, research, and case studies.",
              ],
              [
                "AI-Friendly Structure",
                "Use clear headings, concise definitions, factual statements, evidence, and well-organized sections.",
              ],
              [
                "Fresh & Reliable Information",
                "Keep content updated with accurate statistics, relevant references, original data, and clear attribution.",
              ],
              [
                "Off-Site Authority",
                "Build legitimate visibility through editorial mentions, directories, publications, partnerships, expert contributions, and digital PR.",
              ],
            ]}
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionIntro
            eyebrow="Comparison"
            title="AEO and GEO work best together."
            description="AEO and GEO are complementary strategies. A strong search strategy can use both to improve visibility across traditional search and emerging AI-powered discovery experiences."
          />
          <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-soft)]">
            <div className="grid bg-muted text-sm font-bold text-heading md:grid-cols-2">
              <div className="border-b border-border p-4 md:border-b-0 md:border-r">AEO</div>
              <div className="p-4">GEO</div>
            </div>
            {[
              ["Optimizes for direct answers", "Optimizes for AI-generated responses"],
              ["Strong focus on search features", "Strong focus on generative AI systems"],
              ["Question-based queries", "Complex and conversational queries"],
              ["Featured snippets", "AI summaries and citations"],
              ["FAQ/HowTo structures", "Comprehensive authoritative content"],
              ["Answer-first content", "Source-first content"],
              ["Search visibility", "AI visibility and brand mentions"],
            ].map(([aeo, geo]) => (
              <div key={aeo} className="grid border-t border-border md:grid-cols-2">
                <div className="p-4 text-sm text-body md:border-r md:border-border">{aeo}</div>
                <div className="p-4 text-sm text-body">{geo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionIntro
            eyebrow="Delivery"
            title="What we deliver"
            description="A practical optimization system across content, structured data, technical SEO, and authority development."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map(([title, description]) => (
              <Card key={title}>
                <Sparkles className="size-6 text-accent" />
                <h3 className="mt-4 font-bold text-heading">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-body">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionIntro
            eyebrow="Process"
            title="Our AEO & GEO process"
            description="A step-by-step workflow for improving discoverability while keeping claims realistic and measurable."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-7">
            {process.map(([title, description], index) => (
              <Card key={title} className="lg:col-span-1">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary text-sm font-black text-primary-foreground">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-heading">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-body">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Badge>Benefits</Badge>
            <h2 className="mt-4 text-3xl font-black text-heading sm:text-4xl">
              Improve visibility across search and AI-powered discovery.
            </h2>
            <p className="mt-4 text-base leading-7 text-body">
              We focus on discoverability, clarity, technical accessibility, and authority instead
              of unrealistic guarantees.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" />
                <p className="text-sm font-semibold text-heading">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionIntro
            eyebrow="Fit"
            title="Who needs AEO & GEO?"
            description="This service is useful for organizations that rely on search visibility, expert content, lead generation, and brand trust."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
              >
                <CircleDot className="size-4 text-accent" />
                <span className="text-sm font-semibold text-heading">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionIntro
            eyebrow="FAQ"
            title="AEO & GEO optimization FAQs"
            description="Short, factual answers to common questions about answer engines, AI search, and realistic optimization outcomes."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <h3 className="text-lg font-bold text-heading">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-body">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-lg border border-primary/30 bg-card p-8 shadow-[var(--shadow)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <Badge>Next step</Badge>
                <h2 className="mt-4 text-3xl font-black text-heading sm:text-4xl">
                  Make Your Brand the Answer.
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-body">
                  Let&apos;s optimize your website and content for the evolving world of search,
                  answer engines, and generative AI.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  {services
                    .filter((service) =>
                      [
                        "website-development",
                        "digital-marketing-services",
                        "business-growth-services",
                      ].includes(service.slug),
                    )
                    .map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services#${service.slug}`}
                        className="text-accent hover:text-heading"
                      >
                        {service.title}
                      </Link>
                    ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/contact" className={buttonVariants()}>
                  Talk to Our AEO & GEO Experts
                </Link>
                <Link href="/contact" className={buttonVariants({ variant: "secondary" })}>
                  Request a Free Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function IntroCard({
  title,
  icon,
  text,
  concept,
}: {
  title: string;
  icon: React.ReactNode;
  text: string;
  concept: string;
}) {
  return (
    <Card>
      <div className="inline-flex size-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
        {icon}
      </div>
      <h2 className="mt-5 text-2xl font-black text-heading">{title}</h2>
      <p className="mt-4 text-sm leading-6 text-body">{text}</p>
      <p className="mt-5 rounded-lg border border-accent/30 bg-accent/10 p-4 text-sm font-bold text-heading">
        {concept}
      </p>
    </Card>
  );
}

function Principles({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: string[][];
}) {
  return (
    <Card>
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-black text-heading">{title}</h2>
      <p className="mt-4 text-sm leading-6 text-body">{description}</p>
      <div className="mt-6 grid gap-4">
        {items.map(([itemTitle, itemDescription]) => (
          <div key={itemTitle} className="flex gap-3">
            <ShieldCheck className="mt-1 size-5 shrink-0 text-accent" />
            <div>
              <h3 className="font-bold text-heading">{itemTitle}</h3>
              <p className="mt-1 text-sm leading-6 text-body">{itemDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-wide text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black text-heading sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-body">{description}</p>
    </div>
  );
}
