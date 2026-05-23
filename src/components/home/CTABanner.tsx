import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="bg-[#0a0f1a] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-[-0.02em] text-white lg:text-4xl">
          Ready to bypass the complexity?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#a3a3a3]">
          Talk to our infrastructure architects today. We&apos;ll design a solution that fits your architecture &mdash; not the other way around.
        </p>
        <div className="mt-8">
          <a
            href="/contact/"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-[#4338ca] px-8 py-3 text-lg font-medium text-white hover:bg-[#3730a3] transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
