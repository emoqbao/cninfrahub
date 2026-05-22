import { Search, Link2, Wrench } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Source",
    description: "We vet and curate China''s top-tier infrastructure providers — so you don''t have to navigate the complexity alone.",
  },
  {
    icon: Link2,
    title: "Connect",
    description: "We build dedicated cross-border and multi-cloud links that bridge your global architecture to China.",
  },
  {
    icon: Wrench,
    title: "Operate",
    description: "We provide ongoing local support and Smart Hands — your eyes and hands on the ground, 24/7.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#8c8c8c]">What We Do</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
          Source. Connect. Operate.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border border-[#e5e5e5] p-8">
              <s.icon className="h-8 w-8 text-[#0d0d0d]" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-semibold text-[#0d0d0d]">{s.title}</h3>
              <p className="mt-3 text-[#525252] leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
