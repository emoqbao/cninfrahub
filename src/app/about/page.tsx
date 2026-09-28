import { Metadata } from "next";
import Link from "next/link";
import { Search, Link2, Wrench } from "lucide-react";
import CheckIcon from "@/components/ui/CheckIcon";
import { BentoFrame } from "@/components/ui/BentoFrame";
import Container from "@/components/ui/Container";
import { socialMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description: "CN-Infra Hub is a managed service aggregator for China's infrastructure market.",
  alternates: { canonical: "/about" },
  ...socialMetadata({
    title: "About CN-Infra Hub",
    description: "CN-Infra Hub is a managed service aggregator for China's infrastructure market.",
    path: "/about",
  }),
};

const pillars = [
  { icon: Search, title: "Source", description: "We tap into our network of carriers, data centers, and hardware partners — finding the right resources at pricing individual buyers can't access." },
  { icon: Link2, title: "Integrate", description: "We design and connect the pieces into a unified architecture — dedicated circuits, cross-border links, compute, and colocation." },
  { icon: Wrench, title: "Manage", description: "We take full operational responsibility: 24/7 bilingual support, compliance monitoring, provider management, and Smart Hands." },
];

const differentiators = [
  "Single point of accountability — we own the outcome, not just the referral",
  "Provider-agnostic — we recommend the best option, not the one we're locked into",
  "Aggregated pricing — our combined client volume secures rates below direct enterprise pricing",
  "Full compliance advisory — CSL, DSL, PIPL, MLPS 2.0 guidance built into every engagement",
  "Bilingual operations — engineering and business communication in English and Mandarin",
  "Full lifecycle — from architecture design through ongoing management and optimization",
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 lg:py-24 nav-dashed-bottom">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-3 h-px w-8 bg-brand" />
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">About</p>
              <h1 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-ink lg:text-4xl">
                We don&apos;t own the infrastructure. We own the relationships — and the responsibility.
              </h1>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-lg aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-[#FEFDF7]">
                {/* Static export has no image optimizer, so this stays a pre-compressed WebP. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about-hero-v2.webp"
                  srcSet="/images/about-hero-v2-480w.webp 480w, /images/about-hero-v2-768w.webp 768w, /images/about-hero-v2-1024w.webp 1024w, /images/about-hero-v2.webp 1684w"
                  sizes="(min-width: 1024px) 512px, calc(100vw - 48px)"
                  alt="An industrial landscape with factories and cloud imagery, illustrating infrastructure and cloud services"
                  width={1684}
                  height={934}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <BentoFrame>
        <section className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <div className="rounded-2xl border border-border p-8 lg:p-10">
              <p className="text-xl leading-relaxed text-subtle lg:text-2xl">
                China&apos;s infrastructure market is one of the world&apos;s largest — and one of its most fragmented. Dozens of carriers, hundreds of data centers, countless hardware providers. Language barriers, opaque pricing, and evolving regulations make it nearly impossible for global enterprises to navigate alone.
              </p>
              <p className="mt-6 text-xl leading-relaxed text-subtle lg:text-2xl">
                CN-Infra Hub is a managed service aggregator. We don&apos;t own fiber, data centers, or server hardware. Instead, we bring deep relationships across China&apos;s entire infrastructure ecosystem. We source the right resources from the right providers, negotiate pricing our clients can&apos;t get on their own, and take full operational responsibility for everything we deliver.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Think of us as your infrastructure architect and general contractor for China. You tell us what you need. We decide which providers to use, how to connect them, and how to manage the whole thing — so you get one partner, one SLA, one invoice.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">Why the aggregator model works</h2>
            <p className="mt-4 max-w-2xl text-subtle leading-relaxed">
              Individual enterprises negotiating directly with Chinese carriers and data centers face three problems: they lack the relationships to get competitive pricing, they lack the local knowledge to evaluate providers, and they lack the operational presence to manage what they buy. We solve all three.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-xl border border-border hover:border-brand bg-white p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <p.icon className="h-8 w-8 text-brand" strokeWidth={1.5} />
                  <h3 className="mt-5 text-xl font-semibold text-ink">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-subtle">{p.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20 lg:py-28">
          <Container>
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">What sets us apart</h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {differentiators.map((d, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-border hover:border-brand p-4 transition-all duration-200 hover:-translate-y-0.5">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-surface">
                    <CheckIcon />
                  </span>
                  <span className="text-subtle">{d}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <section className="py-20 lg:py-28 text-center">
          <Container>
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink lg:text-3xl">
              You know your architecture. We know China&apos;s infrastructure market.
            </h2>
            <p className="mt-4 text-subtle max-w-xl mx-auto">
              Let&apos;s talk about what you need — and how we can source it better than anyone else.
            </p>
            <div className="mt-8">
              <Link href="/contact/" className="inline-flex items-center justify-center rounded-lg border border-border bg-white px-8 py-3 text-lg font-medium text-ink hover:border-brand hover:bg-surface transition-colors">
                Get in Touch
              </Link>
            </div>
          </Container>
        </section>
      </BentoFrame>
    </>
  );
}
