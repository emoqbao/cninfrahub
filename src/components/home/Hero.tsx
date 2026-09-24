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
            One partner who knows China&apos;s infrastructure ecosystem inside out.
            We source, integrate, and manage network, compute, and data center
            resources from the best providers — at pricing you can&apos;t get on your own.
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
          {/* Static export has no image optimizer, so this stays a pre-compressed WebP. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/products/home-hero.webp"
            alt="A central infrastructure hub connecting cloud, AI, network, and data center systems"
            width={1200}
            height={850}
            fetchPriority="high"
            className="h-auto w-full max-w-lg rounded-2xl border border-border"
          />
        </div>
      </div>
    </div>
  );
}
