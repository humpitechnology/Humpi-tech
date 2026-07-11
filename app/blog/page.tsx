import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/sections/page-header";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  const categories = Array.from(new Set(blogs.map((post) => post.category)));

  return (
    <>
      <PageHeader eyebrow="Blog" title="Insights for software, QA, SEO, automation, and digital growth." description="Search-ready articles and company knowledge updates from the Humpi Technology team." />
      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-5">
            {blogs.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="transition hover:-translate-y-1 hover:border-primary/40">
                  <p className="text-sm font-bold text-primary">{post.category} · {post.readTime}</p>
                  <h2 className="mt-3 text-2xl font-black text-secondary">{post.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
                </Card>
              </Link>
            ))}
          </div>
          <aside className="grid content-start gap-5">
            <Card>
              <h2 className="font-bold text-secondary">Search</h2>
              <Input className="mt-3" placeholder="Search articles" />
            </Card>
            <Card>
              <h2 className="font-bold text-secondary">Categories</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((category) => <span key={category} className="rounded-full bg-muted px-3 py-1 text-xs font-semibold">{category}</span>)}
              </div>
            </Card>
            <Card>
              <h2 className="font-bold text-secondary">Recent posts</h2>
              <div className="mt-3 grid gap-3">
                {blogs.slice(0, 3).map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="text-sm font-semibold text-primary">{post.title}</Link>)}
              </div>
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}
