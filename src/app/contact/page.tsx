import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with our infrastructure architects. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[#e5e5e5] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#8c8c8c]">Contact</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-[#0d0d0d] lg:text-4xl">
            Start a conversation with our infrastructure architects
          </h1>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact info sidebar */}
            <div>
              <div className="rounded-xl border border-[#e5e5e5] p-6">
                <h3 className="text-lg font-semibold text-[#0d0d0d]">Contact Info</h3>
                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#8c8c8c]">Email</p>
                    <a
                      href="mailto:info@cninfrahub.com"
                      className="mt-1 block text-[#0d0d0d] hover:underline"
                    >
                      info@cninfrahub.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#8c8c8c]">Response time</p>
                    <p className="mt-1 text-[#525252]">Within 24 hours</p>
                  </div>
                </div>

                <hr className="my-6 border-[#e5e5e5]" />

                <h3 className="text-lg font-semibold text-[#0d0d0d]">Offices</h3>
                <ul className="mt-3 space-y-2 text-[#525252]">
                  <li>Shanghai, China</li>
                  <li>Beijing, China</li>
                  <li>Singapore</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
