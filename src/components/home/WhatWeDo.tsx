import { Search, Link2, Wrench } from "lucide-react";

export const whatWeDoSteps = [
  {
    icon: Search,
    title: "Source",
    description: "We tap into our network of carriers, data centers, and hardware partners across China to find the right resources for your requirements. On many services, our agency relationships with the three major telecom operators and other providers offer access to channel pricing that may be unavailable through direct procurement.",
  },
  {
    icon: Link2,
    title: "Integrate",
    description: "We design and connect dedicated circuits, cloud links, compute, and colocation into an architecture that fits your existing stack.",
  },
  {
    icon: Wrench,
    title: "Manage",
    description: "We coordinate provider handoffs, monitoring, compliance requirements, and bilingual support according to the scope agreed for your deployment.",
  },
];

export function WhatWeDoTitle() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-3 h-px w-8 bg-brand" />
      <p className="text-sm font-semibold uppercase tracking-wider text-brand">What We Do</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-ink lg:text-4xl">
        We don&apos;t own the infrastructure. We own the relationships — and the responsibility.
      </h2>
      <p className="mt-4 max-w-2xl text-subtle leading-relaxed">
        As a managed service aggregator, we source from established providers, bring the right services together, and coordinate delivery around your requirements. Our agency channels can provide more competitive pricing on many services; rates depend on route, capacity, location, and commercial terms.
      </p>
    </div>
  );
}

export function WhatWeDoCard({ step }: { step: typeof whatWeDoSteps[number] }) {
  return (
    <div className="p-8">
      <step.icon className="h-8 w-8 text-brand" strokeWidth={1.5} />
      <h3 className="mt-5 text-xl font-semibold text-ink">{step.title}</h3>
      <p className="mt-3 text-subtle leading-relaxed">{step.description}</p>
    </div>
  );
}
