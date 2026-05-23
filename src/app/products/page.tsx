"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { products, productModules } from "@/lib/products";

function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const moduleParam = searchParams.get("module");
  const isValidModule = moduleParam && productModules.includes(moduleParam as typeof productModules[number]);
  const [activeModule, setActiveModule] = useState<string>(isValidModule ? moduleParam! : productModules[0]);

  useEffect(() => {
    if (isValidModule) {
      setActiveModule(moduleParam!);
    }
  }, [moduleParam, isValidModule]);

  const filtered = products.filter((p) => p.module === activeModule);

  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#8c8c8c]">Products</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
            Purpose-built infrastructure services for China and beyond
          </h1>
        </Container>
      </section>

      {/* Filters */}
      <div className="">
        <Container>
          <div className="flex gap-1 overflow-x-auto py-4">
            {productModules.map((mod) => (
              <button
                key={mod}
                onClick={() => { setActiveModule(mod); router.replace(`/products/?module=${mod}`, { scroll: false }); }}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeModule === mod
                    ? "bg-[#0d0d0d] text-white"
                    : "text-[#525252] hover:bg-[#f3f4f6]"
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
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group flex flex-col rounded-xl border border-[#e8eaed] bg-white p-6 text-left transition-shadow hover:shadow-md"
              >
                <span className="inline-block rounded-md bg-[#f3f4f6] px-2.5 py-0.5 text-xs font-medium text-[#737373]">
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

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsContent />
    </Suspense>
  );
}