import { products } from "./products";
import { solutions } from "./solutions";

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
}

export function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  // Products
  for (const p of products) {
    results.push({
      id: p.id,
      title: p.name,
      description: p.tagline,
      href: `/products/${p.id}`,
      category: p.module,
    });
  }

  // Solutions
  for (const s of solutions) {
    results.push({
      id: s.id,
      title: s.name,
      description: s.description.slice(0, 120),
      href: `/solutions/#${s.id}`,
      category: "Solutions",
    });
  }

  // Pages
  results.push(
    { id: "about", title: "About", description: "Learn about CN-Infra Hub", href: "/about/", category: "Page" },
    { id: "contact", title: "Contact", description: "Get in touch with our team", href: "/contact/", category: "Page" },
    { id: "resources", title: "Resources", description: "White papers, case studies & guides", href: "/resources/", category: "Page" },
  );

  return results;
}

export function search(query: string): SearchResult[] {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  const index = buildSearchIndex();

  return index
    .filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    })
    .slice(0, 8);
}
