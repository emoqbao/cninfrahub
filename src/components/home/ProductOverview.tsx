import Link from "next/link";
import { Cpu, Network, Database, Brain, Zap, type LucideIcon } from "lucide-react";
import { moduleAnchors, productModules, type ProductModule } from "@/lib/products";

/** Card copy per module. Exhaustive over ProductModule, so a new module fails the build until it is filled in. */
const moduleCopy: Record<ProductModule, { icon: LucideIcon; products: string }> = {
  AI: { icon: Brain, products: "AI Gateway" },
  EDGE: { icon: Zap, products: "Edge Acceleration" },
  COMPUTE: { icon: Cpu, products: "Elastic Cloud · Bare Metal · GPU Instances" },
  NETWORK: { icon: Network, products: "DIA · IP Transit · Private Connect · Cloud Connect · Dark Fiber · Virtual Edge" },
  "DATA CENTER": { icon: Database, products: "Colocation · Smart Hands" },
};

export const moduleCards = productModules.map((name) => ({
  name,
  icon: moduleCopy[name].icon,
  products: moduleCopy[name].products,
  href: `/products/#${moduleAnchors[name]}`,
}));

export function ProductOverviewTitle() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
      <div className="mb-3 h-px w-8 bg-brand" />
      <p className="text-sm font-semibold uppercase tracking-wider text-brand">Our Products</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-ink lg:text-4xl">
        Purpose-built infrastructure for China and beyond
      </h2>
    </div>
  );
}

export function ProductCard({ module: m }: { module: (typeof moduleCards)[number] }) {
  return (
    <Link
      href={m.href}
      className="group flex h-full flex-col p-6 transition-all duration-200 hover:bg-surface-warm"
    >
      <m.icon className="h-7 w-7 text-brand" strokeWidth={1.5} />
      <h3 className="mt-4 text-lg font-semibold text-ink">{m.name}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{m.products}</p>
      <span className="mt-auto pt-4 inline-block text-sm font-medium text-brand group-hover:underline">
        Explore &rarr;
      </span>
    </Link>
  );
}
