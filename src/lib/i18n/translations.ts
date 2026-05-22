export type Language = "en" | "zh";

export const languageLabels: Record<Language, string> = {
  en: "EN",
  zh: "\u4e2d\u6587",
};

export const translations = {
  en: {
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
  },
  zh: {
    "nav.home": "\u9996\u9875",
    "nav.products": "\u4ea7\u54c1",
    "nav.solutions": "\u89e3\u51b3\u65b9\u6848",
    "nav.resources": "\u8d44\u6e90",
    "nav.about": "\u5173\u4e8e",
    "nav.contact": "\u8054\u7cfb\u6211\u4eec",
    "mega.viewAll": "\u67e5\u770b\u6240\u6709\u4ea7\u54c1",
    "mega.products": "\u4e2a\u4ea7\u54c1",
    "search.placeholder": "\u641c\u7d22\u4ea7\u54c1\u3001\u89e3\u51b3\u65b9\u6848...",
    "search.noResults": "\u672a\u627e\u5230\u7ed3\u679c",
    "search.title": "\u641c\u7d22",
    "footer.products": "\u4ea7\u54c1",
    "footer.solutions": "\u89e3\u51b3\u65b9\u6848",
    "footer.resources": "\u8d44\u6e90",
    "footer.company": "\u516c\u53f8",
    "footer.whitePapers": "\u767d\u76ae\u4e66",
    "footer.caseStudies": "\u6848\u4f8b\u7814\u7a76",
    "footer.guides": "\u6307\u5357",
    "footer.about": "\u5173\u4e8e\u6211\u4eec",
    "footer.contact": "\u8054\u7cfb\u6211\u4eec",
    "footer.tagline": "Infrastructure Without Borders",
    "footer.rights": "\u7248\u6743\u6240\u6709\u3002",
    "cta.explore": "\u63a2\u7d22\u4ea7\u54c1",
    "cta.talk": "\u8054\u7cfb\u6211\u4eec",
  },
} as const;

export function t(key: string, lang: Language): string {
  const dict = translations[lang] as Record<string, string>;
  return dict[key] ?? (translations.en as Record<string, string>)[key] ?? key;
}
