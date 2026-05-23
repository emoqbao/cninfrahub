import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { solutions } from "@/lib/solutions";
import { getProductById } from "@/lib/products";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Real-world infrastructure patterns for your China strategy — hybrid cloud, AI inference, data compliance, and disaster recovery.",
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#8c8c8c]">Solutions</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
            Real-world infrastructure patterns for your China strategy
          </h1>
        </Container>
      </section>

      {/* Solution cards */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="space-y-8">
            {solutions.map((s) => (
              <div key={s.id} id={s.id} className="rounded-xl border border-[#e5e5e5] p-8 lg:p-10">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#e5e5e5] px-3 py-1 text-xs font-medium text-[#737373]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">
                  {s.name}
                </h2>
                <p className="mt-4 max-w-3xl leading-relaxed text-[#525252]">
                  {s.description}
                </p>

                {/* Related products */}
                <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-[#8c8c8c]">Products used:</span>
                  {s.products.map((pid) => {
                    const product = getProductById(pid);
                    if (!product) return null;
                    return (
                      <Link
                        key={pid}
                        href={`/products/?module=${encodeURIComponent(product.module)}`}
                        className="rounded-md bg-[#f5f5f5] px-2.5 py-1 text-[#0d0d0d] hover:bg-[#e5e5e5] transition-colors"
                      >
                        {product.name}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <Button href={`/contact/?solution=${s.id}`} variant="secondary" size="md">
                    Discuss this Architecture
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-8 text-center">
            <h3 className="text-lg font-semibold text-[#0d0d0d]">Don''t see your use case?</h3>
            <p className="mt-2 text-[#737373]">We design custom architectures for unique requirements.</p>
            <div className="mt-5">
              <Button href="/contact/" variant="primary" size="md">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
