import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";
import { siteUrl } from "@/lib/utils";

const routes = [
  "",
  "/about",
  "/services",
  "/industries",
  "/solutions",
  "/portfolio",
  "/case-studies",
  "/careers",
  "/blog",
  "/testimonials",
  "/contact",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...blogs.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
