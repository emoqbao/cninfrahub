import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { BentoFrame } from "@/components/ui/BentoFrame";
import { products, productModules } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Purpose-built infrastructure services for China and beyond — AI Gateway, compute, networking, and data center solutions."
};

const MODULE_IDS: Record<string, string> = {
  AI: "ai",
  COMPUTE: "compute",
  NETWORK: "network",
  "DATA CENTER": "data-center",
};

export default function ProductsPage() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mb-3 h-px w-8 bg-[#b8b0a8]" />
          <p className="text-sm font-semibold uppercase tracking-wider text-[#8c8c8c]">Products</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
            Purpose-built infrastructure services for China and beyond
          </h1>
        </Container>
      </section>

      <BentoFrame>
        <section className="py-20 lg:py-28">
          <Container>
            <div className="space-y-24">
              {productModules.map((mod) => {
                const modProducts = products.filter((p) => p.module === mod);
                if (modProducts.length === 0) return null;
                const anchorId = MODULE_IDS[mod] || mod.toLowerCase();
                return (
                  <div key={mod} id={anchorId} className="scroll-mt-20">
                    <div className="mb-8">
                      <div className="mb-3 h-px w-6 bg-[#b8b0a8]" />
                      <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">{mod}</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {modProducts.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.id}`}
                          className="group flex flex-col rounded-xl border border-[#e8eaed] bg-white p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >
                          <h3 className="text-lg font-semibold text-[#0d0d0d]">{product.name}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#737373]">{product.tagline}</p>
                          <span className="mt-auto pt-4 inline-block text-sm font-medium text-[#0d0d0d] group-hover:underline">
                            Learn more &rarr;
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      </BentoFrame>
    </>
  );
}
