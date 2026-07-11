import type { Product } from "@/types/content";

export const products: Product[] = [
  {
    title: "Business Website Starter",
    category: "Website",
    image: "/images/portfolio/service-portal.svg",
    description:
      "A fast corporate website package for service businesses that need a premium online presence.",
    price: "Custom Quote",
    features: ["Responsive pages", "SEO setup", "Contact forms", "Analytics ready"],
    status: "Active",
  },
  {
    title: "Support Desk Portal",
    category: "Software",
    image: "/images/portfolio/service-portal.svg",
    description:
      "A customer support dashboard with tickets, status tracking, and admin reporting.",
    price: "Custom Quote",
    features: ["Ticket workflow", "Role access", "Reports", "Notifications"],
    status: "Active",
  },
];
