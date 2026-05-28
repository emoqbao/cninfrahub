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
              <div className="mb-3 h-px w-8 bg-[#a48e7a]" />
              <p className="text-sm font-semibold uppercase tracking-wider text-[#a48e7a]">Products</p>
              <h1 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
                Purpose-built infrastructure services for China and beyond
              </h1>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-2xl border border-[#e8eaed] bg-[#f8f9fb] flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-3/4 h-3/4" fill="none">
                  <rect x="10" y="10" width="85" height="85" rx="6" fill="none" stroke="#e8eaed" strokeWidth="1" />
                  <circle cx="52" cy="42" r="12" fill="#a48e7a" opacity="0.15" stroke="#a48e7a" strokeWidth="1.5" />
                  <circle cx="52" cy="42" r="5" fill="#a48e7a" />
                  <circle cx="35" cy="60" r="3" fill="#0d0d0d" />
                  <circle cx="52" cy="68" r="3" fill="#0d0d0d" />
                  <circle cx="69" cy="60" r="3" fill="#0d0d0d" />
                  <line x1="47" y1="48" x2="37" y2="58" stroke="#d4d4d4" strokeWidth="0.8" />
                  <line x1="54" y1="54" x2="54" y2="65" stroke="#d4d4d4" strokeWidth="0.8" />
                  <line x1="58" y1="48" x2="67" y2="58" stroke="#d4d4d4" strokeWidth="0.8" />
                  <rect x="105" y="10" width="85" height="85" rx="6" fill="none" stroke="#e8eaed" strokeWidth="1" />
                  <rect x="120" y="30" width="55" height="50" rx="4" stroke="#0d0d0d" strokeWidth="1.5" fill="none" />
                  <rect x="130" y="38" width="35" height="8" rx="2" fill="#a48e7a" opacity="0.3" />
                  <rect x="130" y="50" width="25" height="5" rx="1" fill="#d4d4d4" />
                  <rect x="130" y="58" width="30" height="5" rx="1" fill="#d4d4d4" />
                  <circle cx="147" cy="72" r="4" fill="#0f0" opacity="0.5" />
                  <rect x="10" y="105" width="85" height="85" rx="6" fill="none" stroke="#e8eaed" strokeWidth="1" />
                  <circle cx="52" cy="147" r="30" stroke="#d4d4d4" strokeWidth="1" fill="none" />
                  <circle cx="52" cy="147" r="12" fill="#a48e7a" opacity="0.15" stroke="#a48e7a" strokeWidth="1.5" />
                  <circle cx="52" cy="147" r="4" fill="#a48e7a" />
                  <circle cx="30" cy="135" r="3" fill="#0d0d0d" />
                  <circle cx="74" cy="135" r="3" fill="#0d0d0d" />
                  <circle cx="30" cy="159" r="3" fill="#0d0d0d" />
                  <circle cx="74" cy="159" r="3" fill="#0d0d0d" />
                  <rect x="105" y="105" width="85" height="85" rx="6" fill="none" stroke="#e8eaed" strokeWidth="1" />
                  <rect x="120" y="125" width="55" height="50" rx="3" stroke="#0d0d0d" strokeWidth="1.5" fill="none" />
                  <line x1="120" y1="150" x2="175" y2="150" stroke="#e8eaed" strokeWidth="1" />
                  <rect x="130" y="135" width="10" height="10" rx="2" fill="#a48e7a" opacity="0.3" />
                  <rect x="145" y="135" width="10" height="10" rx="2" fill="#a48e7a" opacity="0.3" />
                  <rect x="160" y="135" width="10" height="10" rx="2" fill="#a48e7a" opacity="0.3" />
                  <rect x="130" y="158" width="10" height="10" rx="2" fill="#d4d4d4" />
                  <rect x="145" y="158" width="10" height="10" rx="2" fill="#d4d4d4" />
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
                      <div className="mb-3 h-px w-6 bg-[#a48e7a]" />
                      <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">{mod}</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {modProducts.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.id}`}
                          className="group flex flex-col rounded-xl border border-[#e8eaed] hover:border-[#a48e7a] bg-white p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >
                          <h3 className="text-lg font-semibold text-[#0d0d0d]">{product.name}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#737373]">{product.tagline}</p>
                          <span className="mt-auto pt-4 inline-block text-sm font-medium text-[#a48e7a] group-hover:underline">
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
