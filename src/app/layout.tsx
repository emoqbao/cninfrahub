import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/ui/JsonLd";
import { I18nProvider } from "@/lib/i18n/context";
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
  name: "CN-Infra Hub",
  url: "https://cninfrahub.com",
  email: "info@cninfrahub.com",
  description:
    "Managed Service Aggregator for China's network, compute, and data center infrastructure. One partner for dedicated lines, multi-cloud interconnect, and AI infrastructure.",
  sameAs: [],
};

export const metadata: Metadata = {
  title: {
    default: "CN-Infra Hub — Infrastructure Without Borders",
    template: "%s | CN-Infra Hub",
  },
  description:
    "Managed Service Aggregator for China's network, compute, and data center infrastructure. One partner for dedicated lines, multi-cloud interconnect, and AI infrastructure.",
  keywords: [
    "China infrastructure",
    "China dedicated server",
    "cross-border network",
    "China data center",
    "AWS Direct Connect China",
    "China colocation",
    "GPU hosting China",
  ],
  metadataBase: new URL("https://cninfrahub.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "CN-Infra Hub — Infrastructure Without Borders",
    description:
      "One partner for China's dedicated lines, data centers, multi-cloud interconnect, and AI infrastructure.",
    url: "https://cninfrahub.com",
    siteName: "CN-Infra Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CN-Infra Hub — Infrastructure Without Borders",
    description:
      "One partner for China's dedicated lines, data centers, multi-cloud interconnect, and AI infrastructure.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} h-full antialiased`}>
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className="min-h-full flex flex-col relative">

        {/* Vertical dashed tracks — fixed, full height, pointer-events-none */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="mx-auto max-w-7xl h-full border-x border-dashed border-[#d4d4d4]" />
        </div>

        <div className="relative z-10 flex flex-col min-h-full">
          <I18nProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </I18nProvider>
        </div>
      </body>
    </html>
  );
}