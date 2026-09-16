import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { products } from "@/lib/products";
import { solutions } from "@/lib/solutions";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  // trailingSlash: true — routes resolve with a trailing slash, so emit that form.
  const url = (path: string) => `${baseUrl}${path}/`;

  const staticPages: MetadataRoute.Sitemap = [
    { url: url(""), changeFrequency: "weekly", priority: 1.0 },
    { url: url("/products"), changeFrequency: "weekly", priority: 0.9 },
    { url: url("/solutions"), changeFrequency: "weekly", priority: 0.9 },
    { url: url("/about"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("/contact"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("/resources"), changeFrequency: "monthly", priority: 0.5 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: url(`/products/${p.id}`),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const solutionPages: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: url(`/solutions/${s.id}`),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...productPages, ...solutionPages];
}
