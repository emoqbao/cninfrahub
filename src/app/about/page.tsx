import { Metadata } from "next";
import { Search, Link2, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description: "CN-Infra Hub eliminates the information asymmetry that makes China''s infrastructure market opaque to global buyers.",
};

const pillars = [
  {
    icon: Search,
    title: "Source",
    description: "We vet and aggregate China''s top-tier infrastructure providers — giving you a single, trusted interface to a fragmented market.",
  },
  {
    icon: Link2,
    title: "Connect",
    description: "We build dedicated cross-border and multi-cloud links that bridge your global architecture to China — with SLA-backed performance.",
  },
  {
    icon: Wrench,
    title: "Operate",
    description: "We provide ongoing local support and Smart Hands — bilingual engineers on the ground, 24/7, so you never need to fly a team to China.",
  },
];

const differentiators = [
  "Single point of accountability — one partner, one contract, one SLA",
  "No vendor lock-in — we work across multiple carriers and data center operators",
  "Full compliance advisory for China market entry",
  "SLA-backed, enterprise-grade infrastructure",
  "Bilingual support — English and Mandarin, local timezone",
  "From Day 1 to Day N — we stay with you for the full lifecycle",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[#e5e5e5] py-16 lg:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#8c8c8c]">About</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
            Closing the gap between global demand and China''s infrastructure supply
          </h1>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xl leading-relaxed text-[#525252] lg:text-2xl">
              CN-Infra Hub exists to eliminate the information asymmetry that makes China''s infrastructure market opaque to global buyers. We aggregate, curate, and manage the best network, compute, and data center resources — so you don''t have to navigate the complexity alone.
            </p>
          </div>
        </Container>
      </section>

      {/* Three Pillars */}
      <section className="border-t border-[#e5e5e5] bg-[#fafafa] py-16 lg:py-24">
        <Container>
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">How we work</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-[#e5e5e5] bg-white p-8">
                <p.icon className="h-8 w-8 text-[#0d0d0d]" strokeWidth={1.5} />
                <h3 className="mt-5 text-xl font-semibold text-[#0d0d0d]">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-[#525252]">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why CN-Infra Hub */}
      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">Why CN-Infra Hub</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {differentiators.map((d, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-[#e5e5e5] p-4">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0d0d0d] text-xs font-bold text-white">
                  &check;
                </span>
                <span className="text-[#525252]">{d}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#0d0d0d] py-20 text-center">
        <Container>
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-white lg:text-3xl">
            Want to know more about our team and capabilities?
          </h2>
          <div className="mt-8">
            <Button href="/contact/" variant="secondary" size="lg">
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
