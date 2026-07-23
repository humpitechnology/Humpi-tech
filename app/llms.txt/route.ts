import { blogs } from "@/data/blogs";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";
import { siteUrl } from "@/lib/utils";

export function GET() {
  const lines = [
    `# ${company.name}`,
    "",
    "> Kolkata-based IT services, software development, AI automation, CRM, BPO, digital marketing, SEO, and business growth partner.",
    "",
    "## Primary Services",
    ...services.map((service) => `- ${service.title}: ${service.description} (${siteUrl}/services#${service.slug})`),
    "",
    "## Important Pages",
    ...navigation.map((item) => `- ${item.label}: ${siteUrl}${item.href === "/" ? "" : item.href}`),
    `- Testimonials: ${siteUrl}/testimonials`,
    `- Privacy Policy: ${siteUrl}/privacy-policy`,
    `- Terms: ${siteUrl}/terms`,
    "",
    "## Recent Articles",
    ...blogs.slice(0, 8).map((post) => `- ${post.title}: ${siteUrl}/blog/${post.slug}`),
    "",
    "## Contact",
    `- Email: ${company.email}`,
    `- Phone: ${company.phone}`,
    `- Location: ${company.location}`,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
