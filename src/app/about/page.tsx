import { Metadata } from "next";
import { Search, Link2, Wrench, Shield, Globe, Clock } from "lucide-react";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description: "CN-Infra Hub eliminates the information asymmetry that makes China''s infrastructure market opaque to global buyers. One partner for network, compute, and data center — full lifecycle.",
};

const pillars = [
  {
    icon: Search,
    title: "Source",
    description: "We vet, benchmark, and aggregate China''s top-tier infrastructure providers across network, compute, and data center — so you don''t navigate a fragmented market alone.",
  },
  {
    icon: Link2,
    title: "Connect",
    description: "We design and build dedicated cross-border and multi-cloud links with SLA-backed performance, connecting your global architecture to China seamlessly.",
  },
  {
    icon: Wrench,
    title: "Operate",
    description: "Bilingual engineers on the ground, 24/7, providing Smart Hands, monitoring, and incident response — so you never need to fly a team to China.",
  },
];

const differentiators = [
  "Single point of accountability — one partner, one SLA, one invoice",
  "No vendor lock-in — carrier-neutral, cloud-agnostic, hardware-flexible",
  "Full compliance advisory — CSL, DSL, PIPL, MLPS 2.0 guidance included",
  "SLA-backed, enterprise-grade — 99.99% uptime across all core services",
  "Bilingual support (EN/CN) — engineering and business communication",
  "Full lifecycle partnership — from architecture design to ongoing operations",
];

const stats = [
  { value: "50+", label: "Points of Presence in China" },
  { value: "10,000+", label: "Peering relationships across carriers" },
  { value: "99.99%", label: "Uptime SLA on core services" },
  { value: "<10ms", label: "Intra-city latency on Private Connect" },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#8c8c8c]">About</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
            Closing the gap between global demand and China&apos;s infrastructure supply
          </h1>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-[#f8f9fb]">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xl leading-relaxed text-[#525252] lg:text-2xl">
              China&apos;s infrastructure market is one of the world&apos;s largest — and one of its most opaque. Dozens of providers, inconsistent service standards, language barriers, and evolving regulations make it nearly impossible for global enterprises to navigate alone.
            </p>
            <p className="mt-6 text-xl leading-relaxed text-[#525252] lg:text-2xl">
              CN-Infra Hub exists to eliminate that information asymmetry. We aggregate, curate, and manage the best network, compute, and data center resources across China — delivering them through a single partner, with a single SLA, in your language and your timezone.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-[#737373]">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">How we work</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-[#e8eaed] bg-white p-8">
                <p.icon className="h-8 w-8 text-[#0d0d0d]" strokeWidth={1.5} />
                <h3 className="mt-5 text-xl font-semibold text-[#0d0d0d]">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-[#525252]">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-[#f8f9fb]">
        <Container>
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">Why CN-Infra Hub</h2>
          <p className="mt-4 max-w-2xl text-[#525252] leading-relaxed">
            We&apos;re not a reseller. We&apos;re a managed service aggregator — we take full operational responsibility for the infrastructure we deliver.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {differentiators.map((d, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-[#e8eaed] p-4">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0d0d0d] text-xs font-bold text-white">
                  &check;
                </span>
                <span className="text-[#525252]">{d}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#0a0f1a] py-20 text-center">
        <Container>
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-white lg:text-3xl">
            Want to know more about our team and capabilities?
          </h2>
          <p className="mt-4 text-[#a3a3a3] max-w-xl mx-auto">
            We&apos;re infrastructure engineers who happen to speak your language — literally and technically.
          </p>
          <div className="mt-8">
            <a
              href="/contact/"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white px-8 py-3 text-lg font-medium text-[#0d0d0d] hover:bg-[#e0e2e6] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}