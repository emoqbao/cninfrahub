import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { BentoFrame } from "@/components/ui/BentoFrame";
import { moduleAnchors, products, productModules } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Purpose-built infrastructure services for China and beyond — AI Gateway, edge acceleration, compute, networking, and data center solutions.",
  alternates: { canonical: "/products" }
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
                  {/* AI — row 1 left */}
                  <rect x="10" y="10" width="85" height="54" rx="6" stroke="#e8eaed" strokeWidth="1" />
                  <rect x="36" y="25" width="33" height="24" rx="4" stroke="#0d0d0d" strokeWidth="1.5" />
                  <rect x="42" y="30" width="21" height="14" rx="2" fill="#8a6d5c" opacity="0.18" />
                  <rect x="47" y="34" width="5" height="5" rx="1" fill="#8a6d5c" />
                  <rect x="55" y="34" width="5" height="5" rx="1" fill="#8a6d5c" />
                  <path d="M44 25 L44 20 M52 25 L52 20 M60 25 L60 20 M44 49 L44 54 M52 49 L52 54 M60 49 L60 54" stroke="#0d0d0d" strokeWidth="1" />

                  {/* EDGE — row 1 right */}
                  <rect x="105" y="10" width="85" height="54" rx="6" stroke="#e8eaed" strokeWidth="1" />
                  <circle cx="138" cy="37" r="12" stroke="#0d0d0d" strokeWidth="1.5" />
                  <ellipse cx="138" cy="37" rx="5" ry="12" stroke="#0d0d0d" strokeWidth="1" />
                  <line x1="126" y1="37" x2="150" y2="37" stroke="#0d0d0d" strokeWidth="1" />
                  <path d="M155 31 A9 9 0 0 1 155 43" stroke="#8a6d5c" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M161 26 A16 16 0 0 1 161 48" stroke="#8a6d5c" strokeWidth="1.5" strokeLinecap="round" />

                  {/* COMPUTE — row 2 left */}
                  <rect x="10" y="73" width="85" height="54" rx="6" stroke="#e8eaed" strokeWidth="1" />
                  <rect x="31" y="84" width="43" height="32" rx="4" stroke="#0d0d0d" strokeWidth="1.5" />
                  <rect x="37" y="90" width="31" height="6" rx="1.5" fill="#8a6d5c" />
                  <rect x="37" y="100" width="24" height="5" rx="1.25" fill="#d4d4d4" />
                  <rect x="37" y="107" width="28" height="5" rx="1.25" fill="#d4d4d4" />
                  <circle cx="68" cy="102" r="2" fill="#0f0" opacity="0.5" />

                  {/* NETWORK — row 2 right */}
                  <rect x="105" y="73" width="85" height="54" rx="6" stroke="#e8eaed" strokeWidth="1" />
                  <line x1="148" y1="100" x2="132" y2="90" stroke="#8a6d5c" strokeWidth="1.5" />
                  <line x1="148" y1="100" x2="164" y2="90" stroke="#8a6d5c" strokeWidth="1.5" />
                  <line x1="148" y1="100" x2="148" y2="114" stroke="#8a6d5c" strokeWidth="1.5" />
                  <circle cx="148" cy="100" r="7" fill="#0d0d0d" />
                  <circle cx="130" cy="86" r="5" fill="#f8f9fb" stroke="#8a6d5c" strokeWidth="1.5" />
                  <circle cx="166" cy="86" r="5" fill="#f8f9fb" stroke="#8a6d5c" strokeWidth="1.5" />
                  <circle cx="148" cy="119" r="5" fill="#f8f9fb" stroke="#8a6d5c" strokeWidth="1.5" />

                  {/* DATA CENTER — row 3, full width */}
                  <rect x="10" y="136" width="180" height="54" rx="6" stroke="#e8eaed" strokeWidth="1" />
                  <rect x="70" y="146" width="60" height="34" rx="4" stroke="#0d0d0d" strokeWidth="1.5" />
                  <line x1="70" y1="163" x2="130" y2="163" stroke="#d4d4d4" strokeWidth="1" />
                  <rect x="77" y="151" width="9" height="7" rx="1.5" fill="#8a6d5c" opacity="0.25" stroke="#8a6d5c" strokeWidth="0.5" />
                  <rect x="95" y="151" width="9" height="7" rx="1.5" fill="#8a6d5c" opacity="0.25" stroke="#8a6d5c" strokeWidth="0.5" />
                  <rect x="113" y="151" width="9" height="7" rx="1.5" fill="#8a6d5c" opacity="0.25" stroke="#8a6d5c" strokeWidth="0.5" />
                  <rect x="77" y="168" width="9" height="7" rx="1.5" fill="#8a6d5c" opacity="0.25" stroke="#8a6d5c" strokeWidth="0.5" />
                  <rect x="95" y="168" width="9" height="7" rx="1.5" fill="#8a6d5c" opacity="0.25" stroke="#8a6d5c" strokeWidth="0.5" />
                  <rect x="113" y="168" width="9" height="7" rx="1.5" fill="#8a6d5c" opacity="0.25" stroke="#8a6d5c" strokeWidth="0.5" />
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
                const anchorId = moduleAnchors[mod];
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
