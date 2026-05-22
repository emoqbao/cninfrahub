import Button from "@/components/ui/Button";
import { Network } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-73px)] items-center">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl font-bold leading-[1.1] tracking-[-0.03em] text-[#0d0d0d] sm:text-6xl lg:text-7xl">
              Infrastructure
              <br />
              Without Borders
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#525252] sm:text-xl">
              One partner for China''s dedicated lines, data centers,
              multi-cloud interconnect, and AI infrastructure.
              Zero information asymmetry. Full compliance.
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

          {/* Hero illustration placeholder */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square rounded-2xl border border-[#e5e5e5] bg-[#fafafa] flex flex-col items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
                <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
                  {/* Hub node */}
                  <circle cx="200" cy="200" r="32" fill="#0d0d0d" />
                  <circle cx="200" cy="200" r="24" fill="white" />
                  <circle cx="200" cy="200" r="12" fill="#0d0d0d" />
                  {/* Connecting nodes */}
                  <circle cx="80" cy="100" r="16" fill="none" stroke="#0d0d0d" strokeWidth="2" />
                  <circle cx="320" cy="100" r="16" fill="none" stroke="#0d0d0d" strokeWidth="2" />
                  <circle cx="120" cy="300" r="16" fill="none" stroke="#0d0d0d" strokeWidth="2" />
                  <circle cx="280" cy="300" r="16" fill="none" stroke="#0d0d0d" strokeWidth="2" />
                  {/* Lines */}
                  <line x1="96" y1="108" x2="176" y2="188" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 4" />
                  <line x1="304" y1="108" x2="224" y2="188" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 4" />
                  <line x1="136" y1="292" x2="176" y2="212" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 4" />
                  <line x1="264" y1="292" x2="224" y2="212" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 4" />
                  {/* Labels */}
                  <text x="80" y="76" textAnchor="middle" className="fill-[#737373] text-[11px]" fontFamily="Inter, sans-serif">Compute</text>
                  <text x="320" y="76" textAnchor="middle" className="fill-[#737373] text-[11px]" fontFamily="Inter, sans-serif">AI</text>
                  <text x="120" y="332" textAnchor="middle" className="fill-[#737373] text-[11px]" fontFamily="Inter, sans-serif">Network</text>
                  <text x="280" y="332" textAnchor="middle" className="fill-[#737373] text-[11px]" fontFamily="Inter, sans-serif">DC</text>
                </svg>
              </div>
              <p className="absolute bottom-4 text-xs text-[#a3a3a3]">Your global infrastructure, one partner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
