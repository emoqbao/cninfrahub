import { BentoGrid, BentoRow, BentoCell, BentoSpacer } from "@/components/ui/BentoGrid";
import Hero from "@/components/home/Hero";
import { trustStats, TrustStatItem } from "@/components/home/TrustStats";
import { WhatWeDoTitle, WhatWeDoCard, whatWeDoSteps } from "@/components/home/WhatWeDo";
import { ProductOverviewTitle, ProductCard, productModules } from "@/components/home/ProductOverview";
import CTABanner from "@/components/home/CTABanner";
import {
  FooterBrand,
  FooterProductsColumn,
  FooterSolutionsColumn,
  FooterResourcesColumn,
  FooterCompanyColumn,
  FooterCopyright,
} from "@/components/home/HomeFooterContent";

export default function Home() {
  return (
    <>
      <BentoGrid>
        {/* ── HERO ── */}
        <BentoRow>
          <Hero />
        </BentoRow>

        {/* ── Breathing space ── */}
        <BentoSpacer height="h-16 lg:h-24" />

        {/* ── STATS (4 columns with vertical dividers) ── */}
        <BentoRow cols={4}>
          {trustStats.map((s) => (
            <BentoCell key={s.label}>
              <TrustStatItem stat={s} />
            </BentoCell>
          ))}
        </BentoRow>

        {/* ── Breathing space ── */}
        <BentoSpacer height="h-16 lg:h-24" />

        {/* ── WHAT WE DO title ── */}
        <BentoRow>
          <WhatWeDoTitle />
        </BentoRow>

        {/* ── WHAT WE DO steps (3 columns, dashed dividers) ── */}
        <BentoRow variant="dashed" cols={3}>
          {whatWeDoSteps.map((step) => (
            <BentoCell key={step.title}>
              <WhatWeDoCard step={step} />
            </BentoCell>
          ))}
        </BentoRow>

        {/* ── Breathing space ── */}
        <BentoSpacer height="h-16 lg:h-24" />

        {/* ── OUR PRODUCTS title ── */}
        <BentoRow>
          <ProductOverviewTitle />
        </BentoRow>

        {/* ── OUR PRODUCTS cards (4 columns) ── */}
        <BentoRow cols={4}>
          {productModules.map((m) => (
            <BentoCell key={m.name}>
              <ProductCard module={m} />
            </BentoCell>
          ))}
        </BentoRow>

        {/* ── Breathing space ── */}
        <BentoSpacer height="h-16 lg:h-24" />
      </BentoGrid>

      {/* ════════════════════════════════════════════════════════ */}
      {/* CTA + FOOTER — outside the grid, no borders              */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0f1a]">
        <CTABanner />
      </section>

      <footer className="bg-[#0a0f1a] text-white">
        <FooterBrand />

        <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <FooterProductsColumn />
            <FooterSolutionsColumn />
            <FooterResourcesColumn />
            <FooterCompanyColumn />
          </div>
        </div>

        <div className="border-t border-[#1e2532]">
          <FooterCopyright />
        </div>
      </footer>
    </>
  );
}
