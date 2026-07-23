import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { Card } from "@/components/ui/card";
import { blogs } from "@/data/blogs";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.date,
    keywords: [post.category, "Humpi Technology blog", "business technology"],
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section-padding">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          blogPostingSchema(post),
        ]}
      />
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <p className="text-sm font-bold text-primary">
          {post.category} / {post.readTime}
        </p>
        <h1 className="mt-4 text-4xl font-black text-heading sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-muted-text">
          {post.date} / {post.author}
        </p>
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={675}
          className="mt-8 aspect-[16/9] w-full rounded-lg object-cover"
          priority
        />
        <Card className="mt-10 grid gap-5">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-body">
              {paragraph}
            </p>
          ))}
        </Card>
      </div>
    </article>
  );
}
