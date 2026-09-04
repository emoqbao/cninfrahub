"use client";

import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-3 h-px w-8 bg-brand" />
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Managed Service Aggregator
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-6xl lg:text-7xl">
            Infrastructure
            <br />
            Without Borders
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-subtle sm:text-xl">
            One partner who knows China's infrastructure ecosystem inside out.
            We source, integrate, and manage network, compute, and data center
            resources from the best providers — at pricing you can't get on your own.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/products/" variant="primary" size="lg">
              Explore Products
            </Button>
            <Button href="/contact/" variant="secondary" size="lg">
              Talk to Us
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-lg aspect-square rounded-2xl border border-border bg-surface-alt flex flex-col items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
              <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
                <line x1="174" y1="184" x2="102" y2="116" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 4" />
                <line x1="226" y1="184" x2="298" y2="116" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 4" />
                <line x1="174" y1="216" x2="96" y2="286" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 4" />
                <line x1="226" y1="216" x2="298" y2="286" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 4" />

                {/* COMPUTE — top left */}
                <rect x="56" y="84" width="48" height="32" rx="4" fill="#f8f9fb" stroke="#0d0d0d" strokeWidth="1.5" />
                <rect x="63" y="91" width="34" height="6" rx="1.5" fill="#8a6d5c" />
                <rect x="63" y="102" width="24" height="4" rx="1.25" fill="#d4d4d4" />
                <rect x="63" y="110" width="30" height="4" rx="1.25" fill="#d4d4d4" />

                {/* AI — top right */}
                <rect x="296" y="84" width="48" height="32" rx="4" fill="#f8f9fb" stroke="#0d0d0d" strokeWidth="1.5" />
                <rect x="303" y="91" width="34" height="18" rx="2" fill="#8a6d5c" opacity="0.18" />
                <rect x="309" y="96" width="7" height="7" rx="1" fill="#8a6d5c" />
                <rect x="320" y="96" width="7" height="7" rx="1" fill="#8a6d5c" />
                <rect x="309" y="106" width="7" height="7" rx="1" fill="#8a6d5c" />
                <rect x="320" y="106" width="7" height="7" rx="1" fill="#8a6d5c" />

                {/* NETWORK — bottom left */}
                <line x1="80" y1="294" x2="66" y2="288" stroke="#8a6d5c" strokeWidth="1.5" />
                <line x1="80" y1="294" x2="94" y2="288" stroke="#8a6d5c" strokeWidth="1.5" />
                <line x1="80" y1="306" x2="80" y2="314" stroke="#8a6d5c" strokeWidth="1.5" />
                <circle cx="80" cy="300" r="7" fill="#0d0d0d" />
                <circle cx="62" cy="284" r="5" fill="#f8f9fb" stroke="#8a6d5c" strokeWidth="1.5" />
                <circle cx="98" cy="284" r="5" fill="#f8f9fb" stroke="#8a6d5c" strokeWidth="1.5" />
                <circle cx="80" cy="318" r="5" fill="#f8f9fb" stroke="#8a6d5c" strokeWidth="1.5" />

                {/* DATA CENTER — bottom right */}
                <rect x="296" y="284" width="48" height="40" rx="4" fill="#f8f9fb" stroke="#0d0d0d" strokeWidth="1.5" />
                <rect x="303" y="292" width="10" height="24" rx="1.5" fill="#8a6d5c" opacity="0.25" stroke="#8a6d5c" strokeWidth="0.5" />
                <rect x="317" y="292" width="10" height="24" rx="1.5" fill="#8a6d5c" opacity="0.25" stroke="#8a6d5c" strokeWidth="0.5" />
                <rect x="331" y="292" width="8" height="24" rx="1.5" fill="#d4d4d4" />

                {/* HUB */}
                <circle cx="200" cy="200" r="38" fill="#0d0d0d" />
                <circle cx="200" cy="200" r="27" fill="white" />
                <circle cx="200" cy="200" r="14" fill="#8a6d5c" />
              </svg>
            </div>
            <p className="absolute bottom-4 text-xs text-ghost">Multiple providers, one partner</p>
          </div>
        </div>
      </div>
    </div>
  );
}
