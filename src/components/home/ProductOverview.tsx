import Link from "next/link";
import { Cpu, Network, Database, Brain } from "lucide-react";

export const productModules = [
  { name: "AI", icon: Brain, products: "AI Gateway", href: "/products/#ai" },
  { name: "COMPUTE", icon: Cpu, products: "Elastic Cloud · Bare Metal · GPU Instances", href: "/products/#compute" },
  { name: "NETWORK", icon: Network, products: "DIA · IP Transit · Private Connect · Cloud Connect · Dark Fiber · Virtual Edge", href: "/products/#network" },
  { name: "DATA CENTER", icon: Database, products: "Colocation · Smart Hands", href: "/products/#data-center" },
];

export function ProductOverviewTitle() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
      <div className="mb-3 h-px w-8 bg-[#a48e7a]" />
      <p className="text-sm font-semibold uppercase tracking-wider text-[#a48e7a]">Our Products</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
        Purpose-built infrastructure for China and beyond
      </h2>
    </div>
  );
}

export function ProductCard({ module: m }: { module: typeof productModules[number] }) {
  return (
    <Link
      href={m.href}
      className="group flex h-full flex-col p-6 transition-all duration-200 hover:bg-[#faf9f7]"
    >
      <m.icon className="h-7 w-7 text-[#a48e7a]" strokeWidth={1.5} />
      <h3 className="mt-4 text-lg font-semibold text-[#0d0d0d]">{m.name}</h3>
      <p className="mt-2 text-sm text-[#737373] leading-relaxed line-clamp-2">{m.products}</p>
      <span className="mt-auto pt-4 inline-block text-sm font-medium text-[#a48e7a] group-hover:underline">
        Explore &rarr;
      </span>
    </Link>
  );
}