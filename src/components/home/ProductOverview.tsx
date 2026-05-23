import Link from "next/link";
import { Cpu, Network, Database, Brain } from "lucide-react";

const modules = [
  { name: "AI", icon: Brain, products: "AI Gateway", href: "/products/?module=AI" },
  { name: "COMPUTE", icon: Cpu, products: "Elastic Cloud · Bare Metal · GPU Instances", href: "/products/?module=COMPUTE" },
  { name: "NETWORK", icon: Network, products: "Private Connect · Cloud Connect · IP Transit · Virtual Edge", href: "/products/?module=NETWORK" },
  { name: "DATA CENTER", icon: Database, products: "Colocation · Smart Hands", href: "/products/?module=DATA%20CENTER" },
];

export default function ProductOverview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#8c8c8c]">Our Products</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
          Purpose-built infrastructure for China and beyond
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <Link
              key={m.name}
              href={m.href}
              className="group rounded-xl border border-[#e5e5e5] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <m.icon className="h-7 w-7 text-[#0d0d0d]" strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-semibold text-[#0d0d0d]">{m.name}</h3>
              <p className="mt-2 text-sm text-[#737373] leading-relaxed line-clamp-2">{m.products}</p>
              <span className="mt-4 inline-block text-sm font-medium text-[#0d0d0d] group-hover:underline">
                Explore &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}