import type { Metadata } from "next";
import { company } from "@/data/company";
import { siteUrl } from "@/lib/utils";

type PageMetadata = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

const defaultImage = "/logo/icon.svg";

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords,
  image = defaultImage,
  type = "website",
  publishedTime,
}: PageMetadata): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    authors: [{ name: company.name, url: siteUrl }],
    creator: company.name,
    publisher: company.name,
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      locale: "en_IN",
      type,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
