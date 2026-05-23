import { Metadata } from "next";
import PageFrame from "@/components/ui/PageFrame";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRight, BookOpen, FileText, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description: "White papers, architecture guides, and case studies for infrastructure decision-makers operating in China.",
};

const featured = [
  { type: "White Paper", icon: FileText, title: "China Cross-Border Network Architecture Guide", excerpt: "A comprehensive reference for SREs and network architects planning dedicated connectivity between China and global cloud regions.", href: "#" },
  { type: "Case Study", icon: BookOpen, title: "How a Global Fintech Cut Cross-Border Latency by 40%", excerpt: "A global financial services platform used Private Connect and Cloud Connect to reduce China-to-Singapore latency.", href: "#" },
];

const guides = [
  { type: "Guide", title: "The SRE''s Checklist for China Infrastructure", excerpt: "A practical, step-by-step checklist covering compute selection, network design, compliance requirements, and operational readiness.", date: "Coming soon" },
  { type: "Guide", title: "AWS vs. Azure vs. GCP: Connecting to China", excerpt: "Side-by-side comparison of cloud interconnect options for China, with pricing models, latency benchmarks, and architecture diagrams.", date: "Coming soon" },
  { type: "Guide", title: "Understanding China''s Data Residency Requirements", excerpt: "A plain-English guide to CSL, DSL, PIPL, and MLPS 2.0 — what they mean for your architecture.", date: "Coming soon" },
  { type: "Guide", title: "GPU Infrastructure in China: Options and Trade-offs", excerpt: "Comprehensive survey of GPU hosting options in China — on-prem vs. colocated vs. cloud.", date: "Coming soon" },
  { type: "Guide", title: "Building a Multi-Region DR Strategy with China Nodes", excerpt: "Architecture patterns for active-passive and active-active disaster recovery spanning China and APAC.", date: "Coming soon" },
  { type: "Guide", title: "Virtual Edge Playbook: FortiGate, VyOS, and RouterOS in China", excerpt: "Step-by-step deployment guide for running virtual network appliances on CN-Infra Hub infrastructure.", date: "Coming soon" },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mb-3 h-px w-8 bg-[#b8b0a8]" />
          <p className="text-sm font-semibold uppercase tracking-wider text-[#8c8c8c]">Resources</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">Practical guides for infrastructure decision-makers operating in China</h1>
          <p className="mt-4 max-w-2xl text-lg text-[#525252]">Technical, vendor-neutral resources to help you design, deploy, and operate infrastructure in China.</p>
        </Container>
      </section>

      <PageFrame>
        {/* Featured */}
        <section className="py-20 lg:py-28">
          <Container>
            <h2 className="text-xl font-semibold text-[#0d0d0d]">Featured</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {featured.map((f) => (
                <div key={f.title} className="flex flex-col rounded-xl border border-[#e8eaed] bg-white p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="inline-flex self-start items-center gap-1.5 rounded-md bg-[#f3f4f6] px-2.5 py-1 text-xs font-medium text-[#737373]"><f.icon className="h-3.5 w-3.5" />{f.type}</span>
                  <h3 className="mt-4 text-lg font-bold text-[#0d0d0d]">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#737373]">{f.excerpt}</p>
                  <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0d0d0d]">Coming soon<ArrowRight className="h-4 w-4" /></span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Guides */}
        <section className="py-20 lg:py-28">
          <Container>
            <h2 className="text-xl font-semibold text-[#0d0d0d]">Guides &amp; White Papers</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {guides.map((g) => (
                <div key={g.title} className="flex flex-col rounded-xl border border-[#e8eaed] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="inline-block self-start rounded-md bg-[#f3f4f6] px-2.5 py-0.5 text-xs font-medium text-[#737373]">{g.type}</span>
                  <h3 className="mt-3 text-base font-bold text-[#0d0d0d]">{g.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#737373]">{g.excerpt}</p>
                  <p className="mt-auto pt-4 text-xs text-[#a3a3a3]">{g.date}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Newsletter */}
        <section className="py-20 lg:py-28">
          <Container>
            <div className="mx-auto max-w-xl text-center">
              <Mail className="mx-auto h-10 w-10 text-[#a48e7a]" strokeWidth={1.5} />
              <h2 className="mt-4 text-xl font-bold text-[#0d0d0d]">Stay informed on China infrastructure</h2>
              <p className="mt-2 text-[#737373]">Get our latest guides, white papers, and infrastructure insights delivered to your inbox.</p>
              <form action="https://formspree.io/f/PLACEHOLDER" method="POST" className="mt-6 flex gap-3">
                <input type="email" name="email" placeholder="your@email.com" required className="flex-1 rounded-lg border border-[#e8eaed] px-4 py-2.5 text-[#0d0d0d] placeholder:text-[#a3a3a3] focus:border-[#0d0d0d] focus:outline-none" />
                <Button type="submit" variant="primary" size="md">Subscribe</Button>
              </form>
            </div>
          </Container>
        </section>
      </PageFrame>
    </>
  );
}