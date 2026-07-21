import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { FloatingActions } from "@/components/layout/floating-actions";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ScrollProgress } from "@/components/sections/motion";
import { company } from "@/data/company";
import { siteUrl } from "@/lib/utils";
import "./globals.css";
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | IT Services, Software, AI Automation and Digital Growth`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "Humpi Technology",
    "IT services Kolkata",
    "software development",
    "website development",
    "AI automation",
    "QA testing",
    "SEO services",
    "BPO Kolkata",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: company.name,
    description: company.description,
    url: siteUrl,
    siteName: company.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/logo/icon.svg", width: 128, height: 128, alt: company.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: company.description,
    images: ["/logo/icon.svg"],
  },
  icons: { icon: "/logo/icon.svg", shortcut: "/favicon.ico", apple: "/logo/icon.svg" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.website,
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
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider>
          <ScrollProgress />
          <div className="flex min-h-screen flex-col">
            <Navbar /> <main className="flex-1">{children}</main> <Footer />
          </div>
          <FloatingActions /> <CookieConsent /> <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
