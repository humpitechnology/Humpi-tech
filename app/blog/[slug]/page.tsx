import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { blogs } from "@/data/blogs";
import { company } from "@/data/company";
import { siteUrl } from "@/lib/utils";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${siteUrl}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: company.name },
    publisher: { "@type": "Organization", name: company.name },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <article className="section-padding">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <p className="text-sm font-bold text-primary">{post.category} · {post.readTime}</p>
        <h1 className="mt-4 text-4xl font-black text-gray-900 dark:text-gray-100 sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-slate-500">{post.date} · {post.author}</p>
        <Card className="mt-10 grid gap-5">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-slate-700 dark:text-slate-300">{paragraph}</p>
          ))}
        </Card>
      </div>
    </article>
  );
}
