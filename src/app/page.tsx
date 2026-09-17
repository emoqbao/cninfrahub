import type { Metadata } from "next";
import { BentoGrid, BentoRow, BentoCell, BentoSpacer } from "@/components/ui/BentoGrid";
import Hero from "@/components/home/Hero";
import { trustStats, TrustStatItem } from "@/components/home/TrustStats";
import { WhatWeDoTitle, WhatWeDoCard, whatWeDoSteps } from "@/components/home/WhatWeDo";
import { ProductOverviewTitle, ProductCard, moduleCards } from "@/components/home/ProductOverview";
import CTABanner from "@/components/home/CTABanner";
import { socialMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  ...socialMetadata({
    title: "CN-Infra Hub — Infrastructure Without Borders",
    description:
      "One partner for China's dedicated lines, data centers, multi-cloud interconnect, and AI infrastructure.",
    path: "/",
  }),
};

export default function Home() {
  return (
    <>
      <BentoGrid>
        {/* HERO */}
        <BentoRow first>
          <Hero />
        </BentoRow>

        {/* Breathing space */}
        <BentoSpacer height="h-16 lg:h-24" />

        {/* STATS (4 columns with vertical dividers) */}
        <BentoRow cols={4}>
          {trustStats.map((s) => (
            <BentoCell key={s.title}>
              <TrustStatItem stat={s} />
            </BentoCell>
          ))}
        </BentoRow>

        {/* Breathing space */}
        <BentoSpacer height="h-16 lg:h-24" />

        {/* WHAT WE DO title */}
        <BentoRow>
          <WhatWeDoTitle />
        </BentoRow>

        {/* WHAT WE DO steps (3 columns, dashed dividers) */}
        <BentoRow cols={3}>
          {whatWeDoSteps.map((step) => (
            <BentoCell key={step.title}>
              <WhatWeDoCard step={step} />
            </BentoCell>
          ))}
        </BentoRow>

        {/* Breathing space */}
        <BentoSpacer height="h-16 lg:h-24" />

        {/* OUR PRODUCTS title */}
        <BentoRow>
          <ProductOverviewTitle />
        </BentoRow>

        {/* OUR PRODUCTS cards (5 columns) */}
        <BentoRow cols={5}>
          {moduleCards.map((m, i) => (
            <BentoCell
              key={m.name}
              className={i === moduleCards.length - 1 ? "col-span-2 lg:col-span-1" : ""}
            >
              <ProductCard module={m} />
            </BentoCell>
          ))}
        </BentoRow>

        {/* Breathing space */}
        <BentoSpacer height="h-16 lg:h-24" />

        {/* CTA */}
        <BentoRow>
          <CTABanner />
        </BentoRow>
      </BentoGrid>
    </>
  );
}
