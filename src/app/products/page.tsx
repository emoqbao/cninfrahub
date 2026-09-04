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
      <section className="py-16 lg:py-24 nav-dashed-bottom">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-3 h-px w-8 bg-brand" />
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">Products</p>
              <h1 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-ink lg:text-4xl">
                Purpose-built infrastructure services for China and beyond
              </h1>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-2xl border border-border bg-surface-alt flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-3/4 h-3/4" fill="none">
                  {/* AI — top left */}
                  <rect x="10" y="10" width="85" height="85" rx="6" stroke="#e8eaed" strokeWidth="1" />
                  <rect x="34" y="38" width="36" height="28" rx="4" stroke="#0d0d0d" strokeWidth="1.5" />
                  <rect x="41" y="45" width="22" height="14" rx="2" fill="#8a6d5c" opacity="0.18" />
                  <rect x="47" y="50" width="5" height="5" rx="1" fill="#8a6d5c" />
                  <rect x="55" y="50" width="5" height="5" rx="1" fill="#8a6d5c" />
                  <path d="M44 38 L44 32 M52 38 L52 32 M60 38 L60 32 M44 66 L44 72 M52 66 L52 72 M60 66 L60 72" stroke="#0d0d0d" strokeWidth="1" />

                  {/* COMPUTE — top right */}
                  <rect x="105" y="10" width="85" height="85" rx="6" stroke="#e8eaed" strokeWidth="1" />
                  <rect x="122" y="34" width="51" height="38" rx="4" stroke="#0d0d0d" strokeWidth="1.5" />
                  <rect x="129" y="41" width="37" height="6" rx="1.5" fill="#8a6d5c" />
                  <rect x="129" y="51" width="28" height="5" rx="1.25" fill="#d4d4d4" />
                  <rect x="129" y="60" width="34" height="5" rx="1.25" fill="#d4d4d4" />
                  <circle cx="166" cy="67" r="2" fill="#0f0" opacity="0.5" />

                  {/* NETWORK — bottom left */}
                  <rect x="10" y="105" width="85" height="85" rx="6" stroke="#e8eaed" strokeWidth="1" />
                  <line x1="52" y1="138" x2="38" y2="132" stroke="#8a6d5c" strokeWidth="1.5" />
                  <line x1="52" y1="138" x2="66" y2="132" stroke="#8a6d5c" strokeWidth="1.5" />
                  <line x1="52" y1="150" x2="52" y2="158" stroke="#8a6d5c" strokeWidth="1.5" />
                  <circle cx="52" cy="144" r="7" fill="#0d0d0d" />
                  <circle cx="34" cy="128" r="5" fill="#f8f9fb" stroke="#8a6d5c" strokeWidth="1.5" />
                  <circle cx="70" cy="128" r="5" fill="#f8f9fb" stroke="#8a6d5c" strokeWidth="1.5" />
                  <circle cx="52" cy="164" r="5" fill="#f8f9fb" stroke="#8a6d5c" strokeWidth="1.5" />

                  {/* DATA CENTER — bottom right */}
                  <rect x="105" y="105" width="85" height="85" rx="6" stroke="#e8eaed" strokeWidth="1" />
                  <rect x="124" y="120" width="48" height="55" rx="4" stroke="#0d0d0d" strokeWidth="1.5" />
                  <line x1="124" y1="138" x2="172" y2="138" stroke="#d4d4d4" strokeWidth="1" />
                  <line x1="124" y1="154" x2="172" y2="154" stroke="#d4d4d4" strokeWidth="1" />
                  <rect x="130" y="127" width="9" height="9" rx="1.5" fill="#8a6d5c" opacity="0.25" stroke="#8a6d5c" strokeWidth="0.5" />
                  <rect x="143" y="127" width="9" height="9" rx="1.5" fill="#8a6d5c" opacity="0.25" stroke="#8a6d5c" strokeWidth="0.5" />
                  <rect x="156" y="127" width="9" height="9" rx="1.5" fill="#8a6d5c" opacity="0.25" stroke="#8a6d5c" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <BentoFrame>
        <section className="py-20 lg:py-28">
          <Container>
            <div className="space-y-0">
              {productModules.map((mod, idx) => {
                const modProducts = products.filter((p) => p.module === mod);
                if (modProducts.length === 0) return null;
                const anchorId = MODULE_IDS[mod] || mod.toLowerCase();
                const isLast = idx === productModules.length - 1;
                return (
                  <div
                    key={mod}
                    id={anchorId}
                    className={`scroll-mt-20 pt-16 first:pt-0 ${isLast ? "" : "nav-dashed-bottom pb-16"}`}
                  >
                    <div className="mb-8">
                      <div className="mb-3 h-px w-6 bg-brand" />
                      <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">{mod}</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {modProducts.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.id}`}
                          className="group flex flex-col rounded-xl border border-border hover:border-brand bg-white p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >
                          <h3 className="text-lg font-semibold text-ink">{product.name}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted">{product.tagline}</p>
                          <span className="mt-auto pt-4 inline-block text-sm font-medium text-brand group-hover:underline">
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
