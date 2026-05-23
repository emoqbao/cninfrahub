import { Metadata } from "next";
import { Search, Link2, Wrench } from "lucide-react";
import PageFrame from "@/components/ui/PageFrame";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description: "CN-Infra Hub is a managed service aggregator for China''s infrastructure market. We source, integrate, and manage network, compute, and data center resources from the best providers.",
};

const pillars = [
  {
    icon: Search,
    title: "Source",
    description: "We tap into our network of carriers, data centers, and hardware partners — finding the right resources at pricing individual buyers can''t access through direct negotiation.",
  },
  {
    icon: Link2,
    title: "Integrate",
    description: "We design and connect the pieces into a unified architecture — dedicated circuits, cross-border links, compute, and colocation — all working together.",
  },
  {
    icon: Wrench,
    title: "Manage",
    description: "We take full operational responsibility: 24/7 bilingual support, compliance monitoring, provider management, and Smart Hands across every facility.",
  },
];

const differentiators = [
  "Single point of accountability — we own the outcome, not just the referral",
  "Provider-agnostic — we recommend the best option, not the one we''re locked into",
  "Aggregated pricing — our combined client volume secures rates below direct enterprise pricing",
  "Full compliance advisory — CSL, DSL, PIPL, MLPS 2.0 guidance built into every engagement",
  "Bilingual operations — engineering and business communication in English and Mandarin",
  "Full lifecycle — from architecture design through ongoing management and optimization",
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mb-3 h-px w-8 bg-[#b8b0a8]" />
          <p className="text-sm font-semibold uppercase tracking-wider text-[#8c8c8c]">About</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
            We don''t own the infrastructure. We own the relationships — and the responsibility.
          </h1>
        </Container>
      </section>

      <PageFrame>`n      <section className="py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xl leading-relaxed text-[#525252] lg:text-2xl">
              China''s infrastructure market is one of the world''s largest — and one of its most fragmented. Dozens of carriers, hundreds of data centers, countless hardware providers. Language barriers, opaque pricing, and evolving regulations make it nearly impossible for global enterprises to navigate alone.
            </p>
            <p className="mt-6 text-xl leading-relaxed text-[#525252] lg:text-2xl">
              CN-Infra Hub is a managed service aggregator. We don''t own fiber, data centers, or server hardware. Instead, we bring deep relationships across China''s entire infrastructure ecosystem. We source the right resources from the right providers, negotiate pricing our clients can''t get on their own, and take full operational responsibility for everything we deliver.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[#737373]">
              Think of us as your infrastructure architect and general contractor for China. You tell us what you need. We decide which providers to use, how to connect them, and how to manage the whole thing — so you get one partner, one SLA, one invoice.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">Why the aggregator model works</h2>
          <p className="mt-4 max-w-2xl text-[#525252] leading-relaxed">
            Individual enterprises negotiating directly with Chinese carriers and data centers face three problems: they lack the relationships to get competitive pricing, they lack the local knowledge to evaluate providers, and they lack the operational presence to manage what they buy. We solve all three.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-[#e8eaed] bg-white p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <p.icon className="h-8 w-8 text-[#a48e7a]" strokeWidth={1.5} />
                <h3 className="mt-5 text-xl font-semibold text-[#0d0d0d]">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-[#525252]">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">What sets us apart</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {differentiators.map((d, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-[#e8eaed] p-4 transition-all duration-200 hover:-translate-y-0.5">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0d0d0d] text-xs font-bold text-white">
                  &check;
                </span>
                <span className="text-[#525252]">{d}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      </PageFrame>`n      <section className="bg-[#0a0f1a] py-20 lg:py-28 text-center">
        <Container>
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-white lg:text-3xl">
            You know your architecture. We know China''s infrastructure market.
          </h2>
          <p className="mt-4 text-[#a3a3a3] max-w-xl mx-auto">
            Let''s talk about what you need — and how we can source it better than anyone else.
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