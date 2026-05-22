import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-73px)] items-center">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-[1.1] tracking-[-0.03em] text-[#0d0d0d] sm:text-6xl lg:text-7xl">
            Infrastructure
            <br />
            Without Borders
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#525252] sm:text-xl">
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
      </div>
    </section>
  );
}
