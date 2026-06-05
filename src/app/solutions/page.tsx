import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BentoFrame } from "@/components/ui/BentoFrame";
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
      <section className="py-16 lg:py-24 nav-dashed-bottom">
        <Container>
          <div className="mb-3 h-px w-8 bg-brand" />
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Solutions</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-ink lg:text-4xl">
            Real-world infrastructure patterns for your China strategy
          </h1>
        </Container>
      </section>

      <BentoFrame>
        <section className="py-20 lg:py-28">
          <Container>
            <div className="space-y-8">
              {solutions.map((s) => (
                <Link key={s.id} href={`/solutions/${s.id}`} className="group flex flex-col rounded-xl border border-border hover:border-brand bg-white p-8 lg:p-10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (<span key={t} className="rounded-full border border-brand-light bg-brand-surface px-3 py-1 text-xs font-medium text-brand">{t}</span>))}
                  </div>
                  <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-ink group-hover:underline">{s.name}</h2>
                  <p className="mt-4 max-w-3xl leading-relaxed text-subtle">{s.description}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
                    <span className="text-faded">Products used:</span>
                    {s.products.map((pid) => { const product = getProductById(pid); if (!product) return null; return (<span key={pid} className="rounded-md bg-surface px-2.5 py-1 text-ink">{product.name}</span>); })}
                  </div>
                  <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand">Learn more<ArrowRight className="h-3.5 w-3.5" /></span>
                </Link>
              ))}
            </div>
            <div className="mt-12 rounded-xl border border-border bg-surface-warm p-8 text-center">
              <h3 className="text-lg font-semibold text-ink">Don&apos;t see your use case?</h3>
              <p className="mt-2 text-brand">We design custom architectures for unique requirements.</p>
              <div className="mt-5"><Button href="/contact/" variant="primary" size="md">Contact Us</Button></div>
            </div>
          </Container>
        </section>
      </BentoFrame>
    </>
  );
}
