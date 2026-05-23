import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageFrame from "@/components/ui/PageFrame";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { solutions } from "@/lib/solutions";
import { getProductById } from "@/lib/products";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Real-world infrastructure patterns for your China strategy — hybrid cloud, AI inference, data compliance, and disaster recovery.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mb-3 h-px w-8 bg-[#b8b0a8]" />
          <p className="text-sm font-semibold uppercase tracking-wider text-[#8c8c8c]">Solutions</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
            Real-world infrastructure patterns for your China strategy
          </h1>
        </Container>
      </section>

      <PageFrame>
        <section className="py-20 lg:py-28 bg-[#f8f9fb]">
          <Container>
            <div className="space-y-8">
              {solutions.map((s) => (
                <Link key={s.id} href={`/solutions/${s.id}`} className="group flex flex-col rounded-xl border border-[#e8eaed] bg-white p-8 lg:p-10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (<span key={t} className="rounded-full border border-[#e8eaed] px-3 py-1 text-xs font-medium text-[#737373]">{t}</span>))}
                  </div>
                  <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d] group-hover:underline">{s.name}</h2>
                  <p className="mt-4 max-w-3xl leading-relaxed text-[#525252]">{s.description}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
                    <span className="text-[#8c8c8c]">Products used:</span>
                    {s.products.map((pid) => { const product = getProductById(pid); if (!product) return null; return (<span key={pid} className="rounded-md bg-[#f3f4f6] px-2.5 py-1 text-[#0d0d0d]">{product.name}</span>); })}
                  </div>
                  <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#0d0d0d]">Learn more<ArrowRight className="h-3.5 w-3.5" /></span>
                </Link>
              ))}
            </div>
            <div className="mt-12 rounded-xl border border-[#e8eaed] bg-[#faf9f7] p-8 text-center">
              <h3 className="text-lg font-semibold text-[#0d0d0d]">Don&apos;t see your use case?</h3>
              <p className="mt-2 text-[#737373]">We design custom architectures for unique requirements.</p>
              <div className="mt-5"><Button href="/contact/" variant="primary" size="md">Contact Us</Button></div>
            </div>
          </Container>
        </section>
      </PageFrame>
    </>
  );
}