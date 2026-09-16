import { products } from "./products";
import { solutions } from "./solutions";
import { metaDescription } from "./seo";

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string;
}

let _cachedIndex: SearchResult[] | null = null;

export function buildSearchIndex(): SearchResult[] {
  if (_cachedIndex) return _cachedIndex;

  const results: SearchResult[] = [];

  // Products
  for (const p of products) {
    results.push({
      id: p.id,
      title: p.name,
      description: p.tagline,
      keywords: p.seoKeywords.join(" "),
      href: `/products/${p.id}`,
      category: p.module,
    });
  }

  // Solutions
  for (const s of solutions) {
    results.push({
      id: s.id,
      title: s.name,
      description: metaDescription(s.description, 120),
      keywords: s.seoKeywords.join(" "),
      href: `/solutions/${s.id}`,
      category: "Solutions",
    });
  }

  // Pages
  results.push(
    { id: "products", title: "Products", description: "Purpose-built infrastructure services for China and beyond", keywords: "all products catalog overview list", href: "/products/", category: "Page" },
    { id: "solutions", title: "Solutions", description: "Real-world infrastructure patterns for your China strategy", keywords: "solution patterns use cases by industry", href: "/solutions/", category: "Page" },
    { id: "about", title: "About", description: "Managed service aggregator for China's infrastructure market", keywords: "company who we are aggregator model", href: "/about/", category: "Page" },
    { id: "contact", title: "Contact", description: "Start a conversation with our infrastructure architects", keywords: "talk to sales inquiry email", href: "/contact/", category: "Page" },
    { id: "resources", title: "Resources", description: "White papers, architecture guides, and case studies", keywords: "guides whitepapers case studies downloads", href: "/resources/", category: "Page" },
  );

  _cachedIndex = results;
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
        item.category.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q)
      );
    })
    .slice(0, 8);
}
