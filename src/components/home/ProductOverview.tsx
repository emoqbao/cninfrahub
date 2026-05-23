import Link from "next/link";
import { Cpu, Network, Database, Brain } from "lucide-react";

const modules = [
  { name: "AI", icon: Brain, products: "AI Gateway", href: "/products/" },
  { name: "COMPUTE", icon: Cpu, products: "Elastic Cloud · Bare Metal · GPU Instances", href: "/products/" },
  { name: "NETWORK", icon: Network, products: "DIA · IP Transit · Private Connect · Cloud Connect · Dark Fiber · Virtual Edge", href: "/products/" },
  { name: "DATA CENTER", icon: Database, products: "Colocation · Smart Hands", href: "/products/" },
];

export default function ProductOverview() {
  return (
    <section className="bg-[#f8f9fb] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-3 h-px w-8 bg-[#b8b0a8]" />
        <p className="text-sm font-semibold uppercase tracking-wider text-[#8c8c8c]">Our Products</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
          Purpose-built infrastructure for China and beyond
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <Link
              key={m.name}
              href={m.href}
              className="group flex flex-col rounded-xl border border-[#e8eaed] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <m.icon className="h-7 w-7 text-[#0d0d0d]" strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-semibold text-[#0d0d0d]">{m.name}</h3>
              <p className="mt-2 text-sm text-[#737373] leading-relaxed line-clamp-2">{m.products}</p>
              <span className="mt-auto pt-4 inline-block text-sm font-medium text-[#0d0d0d] group-hover:underline">
                Explore &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}