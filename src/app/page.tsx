import { BentoGrid, BentoRow, BentoCell, BentoSpacer } from "@/components/ui/BentoGrid";
import Hero from "@/components/home/Hero";
import { trustStats, TrustStatItem } from "@/components/home/TrustStats";
import { WhatWeDoTitle, WhatWeDoCard, whatWeDoSteps } from "@/components/home/WhatWeDo";
import { ProductOverviewTitle, ProductCard, productModules } from "@/components/home/ProductOverview";
import CTABanner from "@/components/home/CTABanner";

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
        <BentoRow>
          <CTABanner />
        </BentoRow>
      </BentoGrid>

    </>
  );
}