export const SITE_URL = "https://cninfrahub.com";

export const SITE_NAME = "CN-Infra Hub";

/** Default Open Graph / Twitter share image (1200x630, matches Facebook/X limits). */
export const ogImage = {
  url: `${SITE_URL}/og-image.png`,
  width: 1200,
  height: 630,
  alt: "CN-Infra Hub — Infrastructure Without Borders",
};

export const ogImages = [ogImage];

export const twitterImages = [ogImage.url];

/**
 * Absolute URL for a route. The static export runs with trailingSlash, so
 * every page resolves with one and share/canonical URLs have to match.
 */
export function pageUrl(path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
}

/**
 * Complete Open Graph + Twitter Card metadata for one page.
 *
 * Next replaces the whole `openGraph` object as soon as a page declares one,
 * so a page cannot inherit the layout's fields and add its own — it has to
 * restate them. Doing that per page is what made og:url either fall back to
 * the homepage or disappear entirely, so it lives here instead.
 */
export function socialMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    openGraph: {
      title,
      description,
      url: pageUrl(path),
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website" as const,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: twitterImages,
    },
  };
}

/** Breadcrumb trail for the routes that render a visible breadcrumb nav. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function serviceSchema({
  name,
  description,
  serviceType,
  path,
}: {
  name: string;
  description: string;
  serviceType: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: pageUrl(path),
    areaServed: { "@type": "Place", name: "China" },
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}

/**
 * Build a meta/social description from long-form copy, cutting on a word
 * boundary so previews never end mid-word.
 */
export function metaDescription(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const clipped = clean.slice(0, max - 1);
  const lastSpace = clipped.lastIndexOf(" ");
  const body = lastSpace > max * 0.6 ? clipped.slice(0, lastSpace) : clipped;
  return `${body.replace(/[-.,;:—]+$/, "")}…`;
}
