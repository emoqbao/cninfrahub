import { Metadata } from "next";
import Link from "next/link";
import { Search, Link2, Wrench } from "lucide-react";
import CheckIcon from "@/components/ui/CheckIcon";
import { BentoFrame } from "@/components/ui/BentoFrame";
import Container from "@/components/ui/Container";
import { socialMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Our China Infrastructure Services",
  description: "Learn how CN-Infra Hub sources and manages network, compute, and data center services across China through a single partner relationship.",
  alternates: { canonical: "/about" },
  ...socialMetadata({
    title: "About CN-Infra Hub",
    description: "Learn how CN-Infra Hub sources and manages network, compute, and data center services across China through a single partner relationship.",
    path: "/about",
  }),
};

const pillars = [
  { icon: Search, title: "Source", description: "We compare carrier, data center, and hardware options against your location, capacity, and support requirements." },
  { icon: Link2, title: "Integrate", description: "We design and connect the pieces into a unified architecture — dedicated circuits, cross-border links, compute, and colocation." },
  { icon: Wrench, title: "Manage", description: "We coordinate provider management, monitoring, support, and on-site work according to the agreed service scope." },
];

const differentiators = [
  "Single point of accountability — we own the outcome, not just the referral",
  "Provider comparison — evaluate the available options against your requirements",
  "Comparable proposals — review price, route, capacity, and support terms side by side",
  "Compliance coordination — identify requirements and involve appropriate specialists early",
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
                How we source and manage infrastructure in China
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
                China infrastructure projects often involve several carriers, data centers, and hardware providers. Comparing routes, capacity, commercial terms, and operational responsibilities across them takes local coordination.
              </p>
              <p className="mt-6 text-xl leading-relaxed text-subtle lg:text-2xl">
                CN-Infra Hub is a managed service aggregator. We source network, compute, and colocation services from partner providers, design how they fit together, and coordinate delivery and support. The service scope and responsibilities are agreed for each project.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Start with your locations, applications, traffic, and operating requirements. We compare options with you, document the proposed architecture, and manage the provider handoffs needed to put it into service.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">Why the aggregator model works</h2>
            <p className="mt-4 max-w-2xl text-subtle leading-relaxed">
              A single project can span access circuits, cloud links, compute, and colocation. Comparing each part separately can leave gaps at the handoffs. Our model brings sourcing, design, and operations into one coordinated plan.
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
