export const translations = {
  "nav.home": "Home",
  "nav.products": "Products",
  "nav.solutions": "Solutions",
  "nav.resources": "Resources",
  "nav.about": "About",
  "nav.contact": "Contact",
  "mega.viewAll": "View all products",
  "mega.products": "products",
  "search.placeholder": "Search products, solutions...",
  "search.noResults": "No results found",
  "search.title": "Search",
  "footer.products": "Products",
  "footer.solutions": "Solutions",
  "footer.resources": "Resources",
  "footer.company": "Company",
  "footer.whitePapers": "White Papers",
  "footer.caseStudies": "Case Studies",
  "footer.guides": "Guides",
  "footer.about": "About",
  "footer.contact": "Contact",
  "footer.tagline": "Infrastructure Without Borders",
  "footer.rights": "All rights reserved.",
  "cta.explore": "Explore Products",
  "cta.talk": "Talk to Us",
} as const;

export function t(key: string): string {
  return (translations as Record<string, string>)[key] ?? key;
}