"use client";

import Button from "@/components/ui/Button";

import { t } from "@/lib/i18n/translations";

export default function Hero() {

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-3 h-px w-8 bg-[#a48e7a]" />
          <p className="text-sm font-semibold uppercase tracking-wider text-[#a48e7a]">
            Managed Service Aggregator
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-[1.1] tracking-[-0.03em] text-[#0d0d0d] sm:text-6xl lg:text-7xl">
            Infrastructure
            <br />
            Without Borders
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#525252] sm:text-xl">
            One partner who knows China's infrastructure ecosystem inside out.
            We source, integrate, and manage network, compute, and data center
            resources from the best providers — at pricing you can't get on your own.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/products/" variant="primary" size="lg">
              {t("cta.explore")}
            </Button>
            <Button href="/contact/" variant="secondary" size="lg">
              {t("cta.talk")}
            </Button>
          </div>
        </div>

        {/* Hero illustration */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-lg aspect-square rounded-2xl border border-[#e8eaed] bg-[#f8f9fb] flex flex-col items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
              <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
                {/* Hub node */}
                <circle cx="200" cy="200" r="32" fill="#0d0d0d" />
                <circle cx="200" cy="200" r="24" fill="white" />
                <circle cx="200" cy="200" r="12" fill="#0d0d0d" />
                {/* Providers */}
                <circle cx="80" cy="100" r="16" fill="none" stroke="#0d0d0d" strokeWidth="2" />
                <circle cx="320" cy="100" r="16" fill="none" stroke="#0d0d0d" strokeWidth="2" />
                <circle cx="120" cy="300" r="16" fill="none" stroke="#0d0d0d" strokeWidth="2" />
                <circle cx="280" cy="300" r="16" fill="none" stroke="#0d0d0d" strokeWidth="2" />
                {/* Lines */}
                <line x1="96" y1="108" x2="176" y2="188" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 4" />
                <line x1="304" y1="108" x2="224" y2="188" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 4" />
                <line x1="136" y1="292" x2="176" y2="212" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 4" />
                <line x1="264" y1="292" x2="224" y2="212" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 4" />
              </svg>
            </div>
            <p className="absolute bottom-4 text-xs text-[#a3a3a3]">Multiple providers, one partner</p>
          </div>
        </div>
      </div>
    </div>
  );
}
