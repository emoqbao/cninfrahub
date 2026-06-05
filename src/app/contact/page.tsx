import { Metadata } from "next";
import PageFrame from "@/components/ui/PageFrame";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with our infrastructure architects. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 lg:py-24 nav-dashed-bottom">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-3 h-px w-8 bg-brand" />
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Contact</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-ink lg:text-4xl">
            Start a conversation with our infrastructure architects
          </h1>
        </div>
      </section>

      <PageFrame>
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
              <div>
                <div className="rounded-xl border border-border bg-white p-6">
                  <h3 className="text-lg font-semibold text-ink">Contact Info</h3>
                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-faded">Email</p>
                      <a href="mailto:info@cninfrahub.com" className="mt-1 block text-ink hover:underline">info@cninfrahub.com</a>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-faded">Response time</p>
                      <p className="mt-1 text-subtle">Within 24 hours</p>
                    </div>
                  </div>
                  <hr className="my-6 border-border" />
                  <h3 className="text-lg font-semibold text-ink">Offices</h3>
                  <ul className="mt-3 space-y-2 text-subtle">
                    <li>Shanghai, China</li>
                    <li>Beijing, China</li>
                    <li>Singapore</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageFrame>
    </>
  );
}
