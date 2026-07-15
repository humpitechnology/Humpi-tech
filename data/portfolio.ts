import type { PortfolioProject } from "@/types/content";

export const portfolio: PortfolioProject[] = [
  {
    slug: "healthcare-platform",
    title: "Healthcare Platform",
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
    slug: "crm-dashboard",
    title: "CRM Dashboard",
    client: "Regional Services Group",
    category: "CRM Solution",
    duration: "10 weeks",
    image: "/images/portfolio/service-portal.svg",
    description:
      "A role-based CRM dashboard with lead tracking, service tickets, sales activity, and executive reporting.",
    technologies: ["Next.js", "TypeScript", "Cloud Hosting", "API Integration"],
    results: ["Centralized customer records", "Faster follow-ups", "Clearer sales visibility"],
  },
  {
    slug: "ai-voice-assistant",
    title: "AI Voice Assistant",
    client: "Support Operations Team",
    category: "AI Automation",
    duration: "6 weeks",
    image: "/images/portfolio/service-portal.svg",
    description:
      "An AI-assisted voice workflow for first-level inquiry capture, callback routing, and summary generation.",
    technologies: ["AI APIs", "Telephony", "Workflow Automation", "CRM"],
    results: ["Reduced missed inquiries", "Improved response speed", "Cleaner call records"],
  },
  {
    slug: "restaurant-website",
    title: "Restaurant Website",
    client: "Urban Dining Brand",
    category: "Website Development",
    duration: "4 weeks",
    image: "/images/portfolio/seo-system.svg",
    description:
      "A mobile-first restaurant website with menu highlights, booking CTAs, location SEO, and campaign pages.",
    technologies: ["Next.js", "SEO", "Performance", "Analytics"],
    results: ["Better mobile discovery", "More booking inquiries", "Improved page speed"],
  },
  {
    slug: "real-estate-portal",
    title: "Real Estate Portal",
    client: "Property Advisory Firm",
    category: "Web Application",
    duration: "9 weeks",
    image: "/images/portfolio/service-portal.svg",
    description:
      "A listing portal with property filters, lead forms, agent assignment, and admin approval workflows.",
    technologies: ["React", "Database", "Maps", "Lead Automation"],
    results: ["Faster listing updates", "Higher-quality leads", "Streamlined agent handoff"],
  },
  {
    slug: "e-commerce-store",
    title: "E-Commerce Store",
    client: "E-commerce Retail Brand",
    category: "E-Commerce",
    duration: "12 weeks",
    image: "/images/portfolio/seo-system.svg",
    description:
      "A conversion-focused storefront with product collections, checkout integration, analytics, and SEO cleanup.",
    technologies: ["Commerce", "Payment Gateway", "SEO", "Analytics"],
    results: ["Improved organic visibility", "Faster shopping flow", "Clear marketing reporting"],
  },
  {
    slug: "school-erp",
    title: "School ERP",
    client: "Education Group",
    category: "Education Technology",
    duration: "11 weeks",
    image: "/images/portfolio/healthcare-platform.svg",
    description:
      "A school operations system for admissions, student records, fee tracking, notices, and parent communication.",
    technologies: ["Dashboard", "Database", "Messaging", "Role Management"],
    results: ["Reduced admin workload", "Improved parent updates", "Cleaner student records"],
  },
  {
    slug: "logistics-platform",
    title: "Logistics Platform",
    client: "Distribution Company",
    category: "Operations Platform",
    duration: "10 weeks",
    image: "/images/portfolio/service-portal.svg",
    description:
      "A logistics workflow platform for shipment status, dispatch planning, proof-of-delivery, and customer updates.",
    technologies: ["Cloud App", "Workflow", "Notifications", "Reporting"],
    results: ["Improved dispatch visibility", "Fewer manual calls", "Better delivery reporting"],
  },
];
