import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/ui/JsonLd";
import { ogImages, SITE_URL, twitterImages } from "@/lib/seo";
import { products, productModules } from "@/lib/products";
import { solutions } from "@/lib/solutions";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "CN-Infra Hub",
  url: SITE_URL,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  email: "info@cninfrahub.com",
  description:
    "CN-Infra Hub sources and coordinates network, compute, and data center services for China and cross-border infrastructure projects.",
  areaServed: { "@type": "Place", name: "China" },
};

/**
 * Header and Footer are client components. They only need ids and labels, so
 * the full records stay on the server and only these trimmed shapes travel to
 * the browser — otherwise every product and solution description would ship in
 * the shared JS chunk on all 28 routes.
 */
const navProducts = products.map(({ id, name, module }) => ({ id, name, module }));
const navSolutions = solutions.map(({ id, name }) => ({ id, name }));
const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: {
    default: "China Infrastructure Services | CN-Infra Hub",
    template: "%s | CN-Infra Hub",
  },
  description:
    "CN-Infra Hub sources and coordinates network, compute, and data center services for China and cross-border infrastructure projects.",
  metadataBase: new URL(SITE_URL),
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "China Infrastructure Services | CN-Infra Hub",
    description:
      "Explore network, compute, and data center services for China and cross-border projects, coordinated through one partner.",
    siteName: "CN-Infra Hub",
    locale: "en_US",
    type: "website",
    images: ogImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "China Infrastructure Services | CN-Infra Hub",
    description:
      "Explore network, compute, and data center services for China and cross-border projects, coordinated through one partner.",
    images: twitterImages,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} h-full antialiased`}>
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <Header
          navModules={productModules}
          navProducts={navProducts}
          navSolutions={navSolutions}
        />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer navProducts={navProducts} navSolutions={navSolutions} year={currentYear} />
      </body>
    </html>
  );
}
