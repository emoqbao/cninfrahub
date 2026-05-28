import { Metadata } from "next";
import { Search, Link2, Wrench } from "lucide-react";
import CheckIcon from "@/components/ui/CheckIcon";
import { BentoFrame } from "@/components/ui/BentoFrame";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description: "CN-Infra Hub is a managed service aggregator for China's infrastructure market."
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
              <div className="mb-3 h-px w-8 bg-[#a48e7a]" />
              <p className="text-sm font-semibold uppercase tracking-wider text-[#a48e7a]">About</p>
              <h1 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
                We don't own the infrastructure. We own the relationships — and the responsibility.
              </h1>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-2xl border border-[#e8eaed] bg-[#f8f9fb] flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-3/4 h-3/4" fill="none">
                  <rect x="60" y="15" width="80" height="28" rx="4" stroke="#0d0d0d" strokeWidth="1.5" fill="none" />
                  <rect x="75" y="22" width="50" height="6" rx="2" fill="#0d0d0d" opacity="0.3" />
                  <rect x="75" y="32" width="35" height="4" rx="1" fill="#0d0d0d" opacity="0.15" />
                  <rect x="20" y="145" width="48" height="28" rx="4" stroke="#0d0d0d" strokeWidth="1.5" fill="none" />
                  <rect x="66" y="155" width="48" height="28" rx="4" stroke="#0d0d0d" strokeWidth="1.5" fill="none" />
                  <rect x="132" y="145" width="48" height="28" rx="4" stroke="#0d0d0d" strokeWidth="1.5" fill="none" />
                  <circle cx="100" cy="90" r="22" fill="#a48e7a" opacity="0.12" />
                  <circle cx="100" cy="90" r="22" stroke="#a48e7a" strokeWidth="1.5" fill="none" />
                  <circle cx="100" cy="90" r="8" fill="#a48e7a" />
                  <line x1="88" y1="43" x2="95" y2="68" stroke="#d4d4d4" strokeWidth="1.5" />
                  <line x1="112" y1="43" x2="105" y2="68" stroke="#d4d4d4" strokeWidth="1.5" />
                  <line x1="80" y1="108" x2="44" y2="150" stroke="#d4d4d4" strokeWidth="1.5" />
                  <line x1="100" y1="112" x2="90" y2="155" stroke="#d4d4d4" strokeWidth="1.5" />
                  <line x1="115" y1="106" x2="156" y2="150" stroke="#d4d4d4" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <BentoFrame>
        <section className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <div className="rounded-2xl border border-[#e8eaed] p-8 lg:p-10">
              <p className="text-xl leading-relaxed text-[#525252] lg:text-2xl">
                China's infrastructure market is one of the world's largest — and one of its most fragmented. Dozens of carriers, hundreds of data centers, countless hardware providers. Language barriers, opaque pricing, and evolving regulations make it nearly impossible for global enterprises to navigate alone.
              </p>
              <p className="mt-6 text-xl leading-relaxed text-[#525252] lg:text-2xl">
                CN-Infra Hub is a managed service aggregator. We don't own fiber, data centers, or server hardware. Instead, we bring deep relationships across China's entire infrastructure ecosystem. We source the right resources from the right providers, negotiate pricing our clients can't get on their own, and take full operational responsibility for everything we deliver.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-[#737373]">
                Think of us as your infrastructure architect and general contractor for China. You tell us what you need. We decide which providers to use, how to connect them, and how to manage the whole thing — so you get one partner, one SLA, one invoice.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">Why the aggregator model works</h2>
            <p className="mt-4 max-w-2xl text-[#525252] leading-relaxed">
              Individual enterprises negotiating directly with Chinese carriers and data centers face three problems: they lack the relationships to get competitive pricing, they lack the local knowledge to evaluate providers, and they lack the operational presence to manage what they buy. We solve all three.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-xl border border-[#e8eaed] hover:border-[#a48e7a] bg-white p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
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
                <div key={i} className="flex items-start gap-3 rounded-lg border border-[#e8eaed] hover:border-[#a48e7a] p-4 transition-all duration-200 hover:-translate-y-0.5">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#f5f0ff]">
                    <CheckIcon />
                  </span>
                  <span className="text-[#525252]">{d}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>
              <section className="py-20 lg:py-28 text-center">
        <Container>
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-3xl">
            You know your architecture. We know China's infrastructure market.
          </h2>
          <p className="mt-4 text-[#525252] max-w-xl mx-auto">
            Let's talk about what you need — and how we can source it better than anyone else.
          </p>
          <div className="mt-8">
            <a href="/contact/" className="inline-flex items-center justify-center rounded-lg border border-[#e8eaed] bg-white px-8 py-3 text-lg font-medium text-[#0d0d0d] hover:border-[#a48e7a] hover:bg-[#f3f4f6] transition-colors">
              Get in Touch
            </a>
          </div>
        </Container>
      </section>
      </BentoFrame>

      
    </>
  );
}
