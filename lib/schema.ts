import { blogs } from "@/data/blogs";
import { company } from "@/data/company";
import { faqs } from "@/data/faq";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { siteUrl } from "@/lib/utils";
import type { BlogPost, Faq } from "@/types/content";

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: company.name,
    url: siteUrl,
    logo: `${siteUrl}/logo/icon.svg`,
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    sameAs: [company.website],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteUrl}/#local-business`,
    name: company.name,
    url: siteUrl,
    image: `${siteUrl}/logo/icon.svg`,
    logo: `${siteUrl}/logo/icon.svg`,
    description: company.description,
    email: company.email,
    telephone: company.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.5726,
      longitude: 88.3639,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    areaServed: company.serviceAreas,
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `${siteUrl}/services#${service.slug}`,
      },
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: company.name,
    url: siteUrl,
    publisher: { "@id": organizationId },
    inLanguage: "en-IN",
  };
}

export function siteNavigationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Website navigation",
    itemListElement: navigation.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.label,
      url: `${siteUrl}${item.href === "/" ? "" : item.href}`,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function faqPageSchema(items: Faq[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Humpi Technology services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: { "@id": organizationId },
        areaServed: company.serviceAreas,
        serviceType: service.title,
        url: `${siteUrl}/services#${service.slug}`,
      },
    })),
  };
}

export function blogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${siteUrl}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: company.name, url: siteUrl },
    publisher: { "@id": organizationId },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    inLanguage: "en-IN",
  };
}

export function blogListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Humpi Technology Blog",
    url: `${siteUrl}/blog`,
    blogPost: blogs.map((post) => blogPostingSchema(post)),
  };
}

export function reviewListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Client testimonials for Humpi Technology",
    itemListElement: testimonials.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Review",
        reviewBody: item.review,
        reviewRating: {
          "@type": "Rating",
          ratingValue: item.rating,
          bestRating: 5,
        },
        author: {
          "@type": "Person",
          name: item.name,
          worksFor: item.company,
          jobTitle: item.designation,
        },
        itemReviewed: { "@id": organizationId },
      },
    })),
  };
}
