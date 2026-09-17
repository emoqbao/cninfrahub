export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products/" },
  { label: "Solutions", href: "/solutions/" },
  { label: "Resources", href: "/resources/" },
  { label: "About", href: "/about/" },
];

/**
 * Trimmed shapes handed to the client Header and Footer. The full product and
 * solution records carry every page's copy, so importing them from a client
 * component dragged all of that text into the shared chunk on every route.
 */
export interface NavProduct {
  id: string;
  name: string;
  module: string;
}

export interface NavSolution {
  id: string;
  name: string;
}
