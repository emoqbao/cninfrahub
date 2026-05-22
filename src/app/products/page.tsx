"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { products, productModules, type Product } from "@/lib/products";

export default function ProductsPage() {
  const [activeModule, setActiveModule] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = activeModule === "All" ? products : products.filter((p) => p.module === activeModule);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-[#e5e5e5] py-16 lg:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#8c8c8c]">Products</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
            Purpose-built infrastructure services for China and beyond
          </h1>
        </Container>
      </section>

      {/* Filters */}
      <div className="border-b border-[#e5e5e5]">
        <Container>
          <div className="flex gap-1 overflow-x-auto py-4">
            {["All", ...productModules].map((mod) => (
              <button
                key={mod}
                onClick={() => { setActiveModule(mod); setSelectedProduct(null); }}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeModule === mod
                    ? "bg-[#0d0d0d] text-white"
                    : "text-[#525252] hover:bg-[#f5f5f5]"
                }`}
              >
                {mod}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Product grid */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <button
                key={product.id}
                id={product.id}
                onClick={() => setSelectedProduct(selectedProduct?.id === product.id ? null : product)}
                className={`group rounded-xl border p-6 text-left transition-all ${
                  selectedProduct?.id === product.id
                    ? "border-[#0d0d0d] shadow-md"
                    : "border-[#e5e5e5] hover:border-[#d4d4d4]"
                }`}
              >
                <span className="inline-block rounded-md bg-[#f5f5f5] px-2.5 py-0.5 text-xs font-medium text-[#737373]">
                  {product.module}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-[#0d0d0d]">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#737373]">{product.tagline}</p>
                <span className="mt-4 inline-block text-sm font-medium text-[#0d0d0d] group-hover:underline">
                  Learn more &rarr;
                </span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          {selectedProduct && (
            <div className="mt-12 rounded-xl border border-[#0d0d0d] bg-white p-8 lg:p-10">
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block rounded-md bg-[#f5f5f5] px-2.5 py-0.5 text-xs font-medium text-[#737373]">
                    {selectedProduct.module}
                  </span>
                  <h2 className="mt-2 text-2xl font-bold text-[#0d0d0d]">{selectedProduct.name}</h2>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="rounded-md p-2 text-[#737373] hover:bg-[#f5f5f5] hover:text-[#0d0d0d]"
                  aria-label="Close detail"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-4 max-w-2xl leading-relaxed text-[#525252]">
                {selectedProduct.description}
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {selectedProduct.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#404040]">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0d0d0d]" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  href={`/contact/?product=${selectedProduct.id}`}
                  variant="primary"
                  size="md"
                >
                  Inquire about {selectedProduct.name}
                </Button>
              </div>
            </div>
          )}

          {/* CTA card */}
          {!selectedProduct && (
            <div className="mt-10 rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-8 text-center">
              <h3 className="text-lg font-semibold text-[#0d0d0d]">Not sure what you need?</h3>
              <p className="mt-2 text-[#737373]">Our architects will help you identify the right mix.</p>
              <div className="mt-5">
                <Button href="/contact/" variant="primary" size="md">
                  Talk to an Architect
                </Button>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
