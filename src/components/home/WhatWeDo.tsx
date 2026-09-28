import { Search, Link2, Wrench } from "lucide-react";

export const whatWeDoSteps = [
  {
    icon: Search,
    title: "Source",
    description: "Our agency relationships with China's three major telecom operators and other providers give us access to agent-channel pricing on many services, often below what customers can obtain through direct procurement. We compare routes, capacity, locations, and terms for your requirements.",
  },
  {
    icon: Link2,
    title: "Integrate",
    description: "We design and connect the pieces — dedicated circuits, cloud links, compute, colocation — into a unified architecture that fits your existing stack.",
  },
  {
    icon: Wrench,
    title: "Manage",
    description: "We coordinate provider handoffs, monitoring, support, and the operational work agreed for your deployment.",
  },
];

export function WhatWeDoTitle() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-3 h-px w-8 bg-brand" />
      <p className="text-sm font-semibold uppercase tracking-wider text-brand">What We Do</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-ink lg:text-4xl">
        One partner to source, connect, and manage your China infrastructure
      </h2>
      <p className="mt-4 max-w-2xl text-subtle leading-relaxed">
        We bring network, compute, and data center services together around your requirements. Through our agency channels, many carrier and infrastructure services are available at more competitive rates than customers can obtain by purchasing directly. Pricing depends on the route, capacity, location, and service terms.
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
