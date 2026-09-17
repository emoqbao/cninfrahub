import { Metadata } from "next";
import Container from "@/components/ui/Container";
import { socialMetadata } from "@/lib/seo";

/**
 * Values that change when the policy is revised. The rest of the page reads
 * from them so a review only has to touch this block.
 */
const LAST_UPDATED = "17 September 2026";
const PRIVACY_EMAIL = "info@cninfrahub.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What CN-Infra Hub does with the information you send through this website, and the rights you have over it.",
  alternates: { canonical: "/privacy" },
  ...socialMetadata({
    title: "Privacy Policy | CN-Infra Hub",
    description:
      "What CN-Infra Hub does with the information you send through this website, and the rights you have over it.",
    path: "/privacy",
  }),
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border-light py-10">
      <h2 className="text-xl font-bold tracking-[-0.02em] text-ink lg:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-subtle">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <section className="py-16 lg:py-24 nav-dashed-bottom">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-3 h-px w-8 bg-brand" />
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Legal</p>
            <h1 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-ink lg:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-subtle">
              This website collects very little. It sets no cookies, loads no analytics and no
              third-party scripts, and the only personal information it ever receives is what you
              choose to type into the contact form or the newsletter field. This page explains what
              happens to that information.
            </p>
            <p className="mt-6 text-sm text-faded">Last updated: {LAST_UPDATED}</p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <Section title="Who this policy covers">
              <p>
                CN-Infra Hub (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates cninfrahub.com. This
                policy covers the information you send through this website.
              </p>
              <p>
                It does not cover the infrastructure services we deliver. Once you are a customer,
                the handling of your information is governed by the agreement between us and your
                organisation, not by this page.
              </p>
            </Section>

            <Section title="What we collect">
              <p>
                <span className="font-medium text-ink">Information you give us.</span> The contact
                form asks for your first and last name, work email address, company name, and a
                description of what you are trying to solve. The newsletter field asks for an email
                address. Both are optional to complete and we do not ask for anything beyond those
                fields.
              </p>
              <p>
                <span className="font-medium text-ink">Information collected automatically.</span>{" "}
                Our hosting and content delivery provider records standard request logs for every
                visit, including IP address, browser and device type, the page requested, and the
                time of the request. These logs exist to serve the site and to defend it against
                abuse. We do not use them to build profiles of individual visitors.
              </p>
            </Section>

            <Section title="Cookies and tracking">
              <p>
                This site currently sets no cookies, and no first- or third-party analytics,
                advertising, or tracking script runs on it. The only outbound requests your browser
                makes are for the pages, styles, images, and fonts served by the site itself.
              </p>
              <p>
                If we ever add measurement or marketing tooling, this section and the date at the
                top of the page will be updated before it goes live.
              </p>
            </Section>

            <Section title="How we use your information">
              <ul className="list-disc space-y-2 pl-5">
                <li>To respond to your enquiry and answer the question you asked.</li>
                <li>To scope, quote, and deliver services you request from us.</li>
                <li>To send the newsletter, if and only if you subscribed to it.</li>
                <li>To keep the website available and secure.</li>
              </ul>
              <p>
                We do not profile you, we do not make automated decisions about you, and we do not
                use your enquiry to send you unrelated marketing.
              </p>
            </Section>

            <Section title="Why we are allowed to hold it">
              <p>
                Where the GDPR, the UK GDPR, or similar law applies, we rely on your consent when
                you submit a form, and on our legitimate interest in answering business enquiries
                and securing the site. Where the Personal Information Protection Law (PIPL) or the
                Data Security Law (DSL) apply, we process on the grounds set out in those laws and,
                where required, on the basis of the consent you give when submitting a form.
              </p>
            </Section>

            <Section title="Who we share it with">
              <p>
                We do not sell your information, and we do not share it for advertising. We rely on
                two service providers to run this site:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-ink">Formspree</span> — delivers form
                  submissions to our inbox. Submissions, including the fields listed above, are
                  processed on their platform.
                </li>
                <li>
                  <span className="font-medium text-ink">Cloudflare</span> — serves the site and
                  terminates its traffic, and therefore sees the request logs described above.
                </li>
              </ul>
              <p>
                We may also disclose information where we are legally required to, or where it is
                necessary to establish or defend a legal claim.
              </p>
            </Section>

            <Section title="Where your information goes">
              <p>
                Our service providers operate globally, so information we receive may be processed
                outside the country you are writing from, including outside mainland China. Where
                the law requires safeguards for that transfer, we rely on our providers&rsquo;
                contractual transfer mechanisms.
              </p>
            </Section>

            <Section title="How long we keep it">
              <p>
                Enquiries are kept for as long as the conversation is active, and for up to 24
                months afterwards so we can pick up a thread you return to, then deleted. Newsletter
                subscriptions are kept until you unsubscribe. Server logs are retained by our
                providers under their own short retention schedules.
              </p>
            </Section>

            <Section title="How we protect it">
              <p>
                The site is served over HTTPS with strict transport security enforced, and access to
                form submissions is limited to the team that handles enquiries. We never ask for
                payment card details through this website, and no such data is stored here.
              </p>
            </Section>

            <Section title="Your rights">
              <p>
                You can ask us for a copy of the information we hold about you, ask us to correct or
                delete it, ask us to stop using it, or withdraw consent you previously gave. There is
                an unsubscribe link in every newsletter. If you are in the EU or UK, you also have
                the right to lodge a complaint with your local supervisory authority; if you are in
                mainland China, you may contact the relevant cyberspace administration or industry
                regulator.
              </p>
              <p>
                Write to{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="text-brand-deep font-medium hover:underline">
                  {PRIVACY_EMAIL}
                </a>{" "}
                and we will respond within 30 days.
              </p>
            </Section>

            <Section title="Children">
              <p>
                This site is aimed at business and technical audiences. We do not knowingly collect
                information from anyone under 16, and if we learn that we have, we will delete it.
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>
                When we change how we handle information we will update this page and the date at
                the top of it. If the change is material, we will make that clear on the site rather
                than quietly editing the text.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about this policy, or about the information we hold about you, go to{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="text-brand-deep font-medium hover:underline">
                  {PRIVACY_EMAIL}
                </a>
                .
              </p>
            </Section>
          </div>
        </Container>
      </section>
    </>
  );
}
