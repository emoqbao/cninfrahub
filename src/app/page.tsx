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
        {/* 閳光偓閳光偓 HERO 閳光偓閳光偓 */}
        <BentoRow first>
          <Hero />
        </BentoRow>

        {/* 閳光偓閳光偓 Breathing space 閳光偓閳光偓 */}
        <BentoSpacer height="h-16 lg:h-24" />

        {/* 閳光偓閳光偓 STATS (4 columns with vertical dividers) 閳光偓閳光偓 */}
        <BentoRow cols={4}>
          {trustStats.map((s) => (
            <BentoCell key={s.label}>
              <TrustStatItem stat={s} />
            </BentoCell>
          ))}
        </BentoRow>

        {/* 閳光偓閳光偓 Breathing space 閳光偓閳光偓 */}
        <BentoSpacer height="h-16 lg:h-24" />

        {/* 閳光偓閳光偓 WHAT WE DO title 閳光偓閳光偓 */}
        <BentoRow>
          <WhatWeDoTitle />
        </BentoRow>

        {/* 閳光偓閳光偓 WHAT WE DO steps (3 columns, dashed dividers) 閳光偓閳光偓 */}
        <BentoRow cols={3}>
          {whatWeDoSteps.map((step) => (
            <BentoCell key={step.title}>
              <WhatWeDoCard step={step} />
            </BentoCell>
          ))}
        </BentoRow>

        {/* 閳光偓閳光偓 Breathing space 閳光偓閳光偓 */}
        <BentoSpacer height="h-16 lg:h-24" />

        {/* 閳光偓閳光偓 OUR PRODUCTS title 閳光偓閳光偓 */}
        <BentoRow>
          <ProductOverviewTitle />
        </BentoRow>

        {/* 閳光偓閳光偓 OUR PRODUCTS cards (4 columns) 閳光偓閳光偓 */}
        <BentoRow cols={4}>
          {productModules.map((m) => (
            <BentoCell key={m.name}>
              <ProductCard module={m} />
            </BentoCell>
          ))}
        </BentoRow>

        {/* 閳光偓閳光偓 Breathing space 閳光偓閳光偓 */}
        <BentoSpacer height="h-16 lg:h-24" />
      
        {/* CTA */}
        <BentoRow className="bg-[#faf9f7] border-[#a48e7a]">
          <CTABanner />
        </BentoRow>
      </BentoGrid>

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