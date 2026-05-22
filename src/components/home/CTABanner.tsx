import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="bg-[#0d0d0d] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-[-0.02em] text-white lg:text-4xl">
          Ready to bypass the complexity?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#a3a3a3]">
          Talk to our infrastructure architects today. We''ll design a solution that fits your architecture — not the other way around.
        </p>
        <div className="mt-8">
          <Button href="/contact/" variant="secondary" size="lg">
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
}
