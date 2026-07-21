import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/sections/page-header";
import { MotionCard, Reveal } from "@/components/sections/motion";
import { blogs } from "@/data/blogs";
export default function BlogPage() {
  const categories = Array.from(new Set(blogs.map((post) => post.category)));
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Insights for software, QA, SEO, automation, and digital growth."
        description="Search-ready articles and company knowledge updates from the Humpi Technology team."
      />
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-5 md:grid-cols-2">
            {blogs.map((post) => (
              <Reveal key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <MotionCard className="h-full">
                    <Card className="h-full overflow-hidden p-0 transition hover:border-primary/40">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={960}
                        height={540}
                        className="aspect-[16/9] w-full object-cover"
                        loading="lazy"
                      />
                      <div className="p-6">
                        <p className="text-sm font-bold text-primary">
                          {post.category} / {post.date} / {post.readTime}
                        </p>
                        <h2 className="mt-3 text-2xl font-black text-heading"> {post.title} </h2>
                        <p className="mt-3 text-sm leading-6 text-body"> {post.excerpt} </p>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                          Read More <ArrowRight className="size-4" />
                        </span>
                      </div>
                    </Card>
                  </MotionCard>
                </Link>
              </Reveal>
            ))}
          </div>
          <aside className="grid content-start gap-5">
            <Card>
              <h2 className="font-bold text-heading">Search</h2>
              <Input className="mt-3" placeholder="Search articles" />
            </Card>
            <Card>
              <h2 className="font-bold text-heading">Categories</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-body"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </Card>
            <Card>
              <h2 className="font-bold text-heading">Recent posts</h2>
              <div className="mt-3 grid gap-3">
                {blogs.slice(0, 3).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-primary"
                  >
                    {post.title}
                  </Link>
                ))}
              </div>
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}
