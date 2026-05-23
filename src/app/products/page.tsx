import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Purpose-built infrastructure services for China and beyond — AI Gateway, compute, networking, and data center solutions.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mb-3 h-px w-8 bg-[#b8b0a8]" />
          <p className="text-sm font-semibold uppercase tracking-wider text-[#8c8c8c]">Products</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
            Purpose-built infrastructure services for China and beyond
          </h1>
        </Container>
      </section>

      {/* Product grid */}
      <section className="py-20 lg:py-28 bg-[#f8f9fb]">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group flex flex-col rounded-xl border border-[#e8eaed] bg-white p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="inline-block self-start rounded-md bg-[#f3f4f6] px-2.5 py-0.5 text-xs font-medium text-[#737373]">
                  {product.module}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-[#0d0d0d]">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#737373]">{product.tagline}</p>
                <span className="mt-auto pt-4 inline-block text-sm font-medium text-[#0d0d0d] group-hover:underline">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}