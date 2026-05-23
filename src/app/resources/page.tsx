﻿import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRight, Download, BookOpen, FileText } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description: "White papers, guides, and case studies for infrastructure decision-makers operating in China.",
};

const featured = [
  {
    type: "White Paper",
    icon: FileText,
    title: "China Cross-Border Network Architecture Guide",
    excerpt: "A comprehensive reference for SREs and architects planning dedicated connectivity between China and global cloud regions.",
    href: "#",
  },
  {
    type: "Case Study",
    icon: BookOpen,
    title: "How a Global Fintech Cut Cross-Border Latency by 40%",
    excerpt: "Private Connect + Cloud Connect deployment story with before/after latency benchmarks.",
    href: "#",
  },
];

const guides = [
  {
    type: "Guide",
    title: "The SRE''s Checklist for China Infrastructure",
    excerpt: "A practical, step-by-step checklist covering compute, network, compliance, and operations.",
    date: "Coming soon",
  },
  {
    type: "Guide",
    title: "AWS vs. Azure vs. GCP: Connecting to China",
    excerpt: "Side-by-side comparison of cloud interconnect options for China, with pricing and latency benchmarks.",
    date: "Coming soon",
  },
  {
    type: "Guide",
    title: "Understanding China''s Data Residency Requirements",
    excerpt: "A plain-English guide to China''s data protection laws and what they mean for your architecture.",
    date: "Coming soon",
  },
  {
    type: "Guide",
    title: "GPU Infrastructure in China: Options and Trade-offs",
    excerpt: "Survey of GPU hosting options in China �?on-prem vs. colocated vs. cloud �?with procurement advice.",
    date: "Coming soon",
  },
  {
    type: "Guide",
    title: "Building a Multi-Region DR Strategy with China Nodes",
    excerpt: "Architecture patterns for active-passive and active-active disaster recovery spanning China and APAC.",
    date: "Coming soon",
  },
  {
    type: "Guide",
    title: "Virtual Edge Playbook: FortiGate, VyOS, and RouterOS in China",
    excerpt: "Deployment guide for running your own virtual network appliances on CN-Infra Hub infrastructure.",
    date: "Coming soon",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#8c8c8c]">Resources</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
            Guides, white papers, and case studies for infrastructure decision-makers
          </h1>
        </Container>
      </section>

      {/* Featured */}
      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="text-xl font-semibold text-[#0d0d0d]">Featured</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {featured.map((f) => (
              <div key={f.title} className="rounded-xl border border-[#e8eaed] p-8">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-[#f3f4f6] px-2.5 py-1 text-xs font-medium text-[#737373]">
                  <f.icon className="h-3.5 w-3.5" />
                  {f.type}
                </span>
                <h3 className="mt-4 text-lg font-bold text-[#0d0d0d]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#737373]">{f.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0d0d0d]">
                  Coming soon
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Guides grid */}
      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="text-xl font-semibold text-[#0d0d0d]">Guides & White Papers</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <div key={g.title} className="rounded-xl border border-[#e8eaed] bg-white p-6">
                <span className="inline-block rounded-md bg-[#f3f4f6] px-2.5 py-0.5 text-xs font-medium text-[#737373]">
                  {g.type}
                </span>
                <h3 className="mt-3 text-base font-bold text-[#0d0d0d]">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#737373]">{g.excerpt}</p>
                <p className="mt-4 text-xs text-[#a3a3a3]">{g.date}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <Download className="mx-auto h-10 w-10 text-[#0d0d0d]" strokeWidth={1.5} />
            <h2 className="mt-4 text-xl font-bold text-[#0d0d0d]">Stay informed on China infrastructure</h2>
            <p className="mt-2 text-[#737373]">
              Get our latest guides and infrastructure insights delivered to your inbox.
            </p>
            <form
              action="https://formspree.io/f/PLACEHOLDER"
              method="POST"
              className="mt-6 flex gap-3"
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1 rounded-lg border border-[#e8eaed] px-4 py-2.5 text-[#0d0d0d] placeholder:text-[#a3a3a3] focus:border-[#0d0d0d] focus:outline-none"
              />
              <Button type="submit" variant="primary" size="md">
                Subscribe
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
