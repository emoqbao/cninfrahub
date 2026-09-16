import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { products } from "@/lib/products";
import { solutions } from "@/lib/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cninfrahub.com";

  // trailingSlash: true — routes resolve with a trailing slash, so emit that form.
  const url = (path: string) => `${baseUrl}${path}/`;

  const staticPages: MetadataRoute.Sitemap = [
    { url: url(""), lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: url("/products"), lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: url("/solutions"), lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: url("/about"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: url("/contact"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: url("/resources"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: url(`/products/${p.id}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const solutionPages: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: url(`/solutions/${s.id}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...productPages, ...solutionPages];
}
