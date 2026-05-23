import { Search, Link2, Wrench } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Source",
    description: "We tap into our network of carriers, data centers, and hardware partners across China — finding the right resources at pricing individual buyers can''t access.",
  },
  {
    icon: Link2,
    title: "Integrate",
    description: "We design and connect the pieces — dedicated circuits, cloud links, compute, colocation — into a unified architecture that fits your existing stack.",
  },
  {
    icon: Wrench,
    title: "Manage",
    description: "We take full operational responsibility: provider management, compliance, monitoring, and 24/7 bilingual support — so you get one partner, one SLA, one invoice.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-3 h-px w-8 bg-[#b8b0a8]" />
        <p className="text-sm font-semibold uppercase tracking-wider text-[#8c8c8c]">What We Do</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
          We don''t own the infrastructure. We own the relationships — and the responsibility.
        </h2>
        <p className="mt-4 max-w-2xl text-[#525252] leading-relaxed">
          As a managed service aggregator, we source from the best providers, negotiate better pricing through pooled demand, and take full operational accountability for everything we deliver.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border border-[#e8eaed] p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <s.icon className="h-8 w-8 text-[#a48e7a]" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-semibold text-[#0d0d0d]">{s.title}</h3>
              <p className="mt-3 text-[#525252] leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}