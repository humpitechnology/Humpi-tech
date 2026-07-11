import type { Industry } from "@/types/content";

export const industries: Industry[] = [
  { slug: "healthcare", title: "Healthcare", description: "Secure patient portals, appointment systems, and healthcare workflow automation.", useCases: ["Appointment booking", "Patient communication", "Reports"] },
  { slug: "finance", title: "Finance", description: "Reliable finance applications, dashboards, compliance-ready workflows, and customer portals.", useCases: ["Dashboards", "KYC flows", "Document automation"] },
  { slug: "education", title: "Education", description: "Learning portals, admission workflows, student dashboards, and digital campus tools.", useCases: ["LMS", "Admissions", "Student support"] },
  { slug: "retail", title: "Retail", description: "Commerce websites, inventory visibility, CRM, and customer engagement systems.", useCases: ["Inventory", "E-commerce", "Loyalty"] },
  { slug: "manufacturing", title: "Manufacturing", description: "ERP, quality tracking, production dashboards, and operational reporting.", useCases: ["ERP", "QA tracking", "Reports"] },
  { slug: "real-estate", title: "Real Estate", description: "Property listing platforms, lead management, virtual inquiry flows, and CRM.", useCases: ["Listings", "Lead capture", "CRM"] },
  { slug: "travel", title: "Travel", description: "Booking experiences, inquiry automation, itinerary tools, and customer support workflows.", useCases: ["Booking", "Itinerary", "Support"] },
  { slug: "e-commerce", title: "E-commerce", description: "Storefronts, checkout journeys, product data, marketing automation, and SEO.", useCases: ["Catalogs", "Checkout", "Analytics"] },
  { slug: "logistics", title: "Logistics", description: "Shipment tracking, delivery dashboards, route support, and operations automation.", useCases: ["Tracking", "Dispatch", "Dashboards"] },
  { slug: "startups", title: "Startups", description: "MVPs, product strategy, cloud setup, analytics, and scalable launch foundations.", useCases: ["MVP", "Product analytics", "Launch support"] },
];
