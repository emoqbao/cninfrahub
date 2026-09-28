import { products } from "./products";
import { solutions } from "./solutions";
import { resources } from "./resources";
import { metaDescription } from "./seo";

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string;
}

/** One field a query is matched against, plus what a hit in it is worth. */
export interface SearchField {
  text: string;
  weight: number;
}

export interface SearchEntry {
  result: SearchResult;
  fields: SearchField[];
}

/**
 * Field weights, most specific first. Matching is split by field rather than
 * run against one concatenated blob, so a hit in a product name outranks one
 * buried in a feature list instead of every entry ranking the same.
 */
const WEIGHT_TITLE = 8;
const WEIGHT_KEYWORDS = 6;
const WEIGHT_SUMMARY = 4;
const WEIGHT_BODY = 2;

/** A hit that starts a word beats one found mid-word. */
const WORD_START_BONUS = 2;

const MAX_RESULTS = 8;

const wordStartCache = new Map<string, RegExp>();

function wordStartPattern(token: string): RegExp {
  const cached = wordStartCache.get(token);
  if (cached) return cached;
  const pattern = new RegExp("\\b" + token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  wordStartCache.set(token, pattern);
  return pattern;
}

function field(text: string, weight: number): SearchField {
  return { text: text.toLowerCase(), weight };
}

let _cachedIndex: SearchEntry[] | null = null;

export function buildSearchIndex(): SearchEntry[] {
  if (_cachedIndex) return _cachedIndex;

  const entries: SearchEntry[] = [];

  // Products: index the feature, benefit, and use-case copy too. It was not
  // reachable before, so terms like "WAF" returned nothing at all.
  for (const p of products) {
    entries.push({
      result: {
        id: `product-${p.id}`,
        title: p.name,
        description: p.tagline,
        href: `/products/${p.id}`,
        category: p.module,
        keywords: p.seoKeywords.join(" "),
      },
      fields: [
        field(p.name, WEIGHT_TITLE),
        field([p.module, ...p.seoKeywords].join(" "), WEIGHT_KEYWORDS),
        field(p.tagline, WEIGHT_SUMMARY),
        field(
          [p.description, ...p.features, ...p.benefits, ...p.useCases].join(" "),
          WEIGHT_BODY
        ),
      ],
    });
  }

  for (const s of solutions) {
    const summary = metaDescription(s.description, 120);
    entries.push({
      result: {
        id: `solution-${s.id}`,
        title: s.name,
        description: summary,
        href: `/solutions/${s.id}`,
        category: "Solutions",
        keywords: s.seoKeywords.join(" "),
      },
      fields: [
        field(s.name, WEIGHT_TITLE),
        field([...s.tags, ...s.seoKeywords].join(" "), WEIGHT_KEYWORDS),
        field(summary, WEIGHT_SUMMARY),
        field(
          [s.description, ...s.benefits, s.whoItsFor, s.approach].join(" "),
          WEIGHT_BODY
        ),
      ],
    });
  }

  // Resources: index the title, keywords, summary, and section headings. The
  // body itself stays out so the lazily-loaded index does not grow by 30 KB.
  for (const r of resources) {
    entries.push({
      result: {
        id: `resource-${r.slug}`,
        title: r.title,
        description: r.excerpt,
        href: `/resources/${r.slug}`,
        category: r.type,
        keywords: r.seoKeywords.join(" "),
      },
      fields: [
        field(r.title, WEIGHT_TITLE),
        field(r.seoKeywords.join(" "), WEIGHT_KEYWORDS),
        field(r.excerpt, WEIGHT_SUMMARY),
        field(
          [r.intro, ...r.takeaways, ...r.sections.map((s) => s.heading)].join(" "),
          WEIGHT_BODY
        ),
      ],
    });
  }

  const pages: SearchResult[] = [
    { id: "products", title: "Products", description: "Purpose-built infrastructure services for China and beyond", keywords: "all products catalog overview list", href: "/products/", category: "Page" },
    { id: "solutions", title: "Solutions", description: "Real-world infrastructure patterns for your China strategy", keywords: "solution patterns use cases by industry", href: "/solutions/", category: "Page" },
    { id: "about", title: "About", description: "Managed service aggregator for China's infrastructure market", keywords: "company who we are aggregator model", href: "/about/", category: "Page" },
    { id: "contact", title: "Contact", description: "Start a conversation with our infrastructure architects", keywords: "talk to sales inquiry email", href: "/contact/", category: "Page" },
    { id: "resources", title: "Resources", description: "White papers, architecture guides, and case studies", keywords: "guides whitepapers case studies downloads", href: "/resources/", category: "Page" },
  ];
  for (const p of pages) {
    entries.push({
      result: p,
      fields: [
        field(p.title, WEIGHT_TITLE),
        field(p.keywords, WEIGHT_KEYWORDS),
        field(p.description, WEIGHT_SUMMARY),
        field(p.category, WEIGHT_BODY),
      ],
    });
  }

  _cachedIndex = entries;
  return entries;
}

/**
 * Every token has to land somewhere and each one scores the best field it
 * matches, so results rank by relevance rather than by index order — which
 * previously let the first eight products crowd out every solution and page.
 */
function scoreEntry(candidate: SearchEntry, tokens: string[]): number {
  let total = 0;
  for (const token of tokens) {
    let best = 0;
    for (const f of candidate.fields) {
      if (!f.text.includes(token)) continue;
      const bonus = wordStartPattern(token).test(f.text) ? WORD_START_BONUS : 0;
      best = Math.max(best, f.weight + bonus);
    }
    if (best === 0) return 0;
    total += best;
  }
  return total;
}

export function search(query: string): SearchResult[] {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];

  const tokens = trimmed.toLowerCase().split(/\s+/).filter(Boolean);

  return buildSearchIndex()
    .map((candidate) => ({ candidate, score: scoreEntry(candidate, tokens) }))
    .filter(({ score }) => score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        a.candidate.result.title.localeCompare(b.candidate.result.title)
    )
    .slice(0, MAX_RESULTS)
    .map(({ candidate }) => candidate.result);
}
