import Hero from "@/components/home/Hero";
import TrustStats from "@/components/home/TrustStats";
import WhatWeDo from "@/components/home/WhatWeDo";
import ProductOverview from "@/components/home/ProductOverview";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <WhatWeDo />
      <ProductOverview />
      <CTABanner />
    </>
  );
}
