import Hero from "@/components/home/Hero";
import TrustStats from "@/components/home/TrustStats";
import WhatWeDo from "@/components/home/WhatWeDo";
import ProductOverview from "@/components/home/ProductOverview";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      {/* Buffer slot: whitespace */}
      <div className="h-12 lg:h-16" />

      {/* Hero */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Hero />
      </div>

      {/* Buffer slot: whitespace */}
      <div className="h-12 lg:h-16" />

      {/* TrustStats */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <TrustStats />
      </div>

      {/* Buffer slot: whitespace */}
      <div className="h-12 lg:h-16" />

      {/* What We Do */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <WhatWeDo />
      </div>

      {/* Buffer slot: whitespace */}
      <div className="h-12 lg:h-16" />

      {/* Our Products */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ProductOverview />
      </div>

      {/* Buffer slot: whitespace */}
      <div className="h-16 lg:h-20" />

      {/* CTA — full width, crosses the dashed tracks */}
      <CTABanner />
    </>
  );
}