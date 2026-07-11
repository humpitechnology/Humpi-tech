import type { PortfolioProject } from "@/types/content";

export const portfolio: PortfolioProject[] = [
  {
    slug: "enterprise-service-portal",
    title: "Enterprise Service Portal",
    client: "Regional Services Group",
    category: "Software Development",
    duration: "10 weeks",
    image: "/images/portfolio/service-portal.svg",
    description:
      "A secure customer service portal with ticket tracking, dashboards, and role-based workflows.",
    technologies: ["Next.js", "TypeScript", "Cloud Hosting", "API Integration"],
    results: ["Reduced manual follow-up", "Improved ticket visibility", "Centralized customer records"],
  },
  {
    slug: "healthcare-appointment-platform",
    title: "Healthcare Appointment Platform",
    client: "CarePlus Clinic Network",
    category: "Healthcare",
    duration: "8 weeks",
    image: "/images/portfolio/healthcare-platform.svg",
    description:
      "Appointment scheduling, patient communication, and admin reporting for a growing healthcare team.",
    technologies: ["React", "Node APIs", "Automation", "Analytics"],
    results: ["Faster bookings", "Lower phone load", "Better patient communication"],
  },
  {
    slug: "seo-growth-system",
    title: "SEO Growth System",
    client: "E-commerce Retail Brand",
    category: "SEO and Marketing",
    duration: "12 weeks",
    image: "/images/portfolio/seo-system.svg",
    description:
      "Technical SEO cleanup, content architecture, landing pages, and conversion tracking.",
    technologies: ["Technical SEO", "Analytics", "Content Strategy", "Performance"],
    results: ["Improved organic visibility", "Faster page speed", "Clear marketing reporting"],
  },
];
