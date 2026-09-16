export const SITE_URL = "https://cninfrahub.com";

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
