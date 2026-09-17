import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { BentoFrame } from "@/components/ui/BentoFrame";
import Container from "@/components/ui/Container";
import { featuredResource, resources } from "@/lib/resources";
import { socialMetadata } from "@/lib/seo";
import NewsletterForm from "./NewsletterForm";

const description =
  "White papers, architecture guides, and comparisons for teams running infrastructure in or into China.";

export const metadata: Metadata = {
  title: "Resources",
  description,
  alternates: { canonical: "/resources" },
  ...socialMetadata({
    title: "Resources | CN-Infra Hub",
    description,
    path: "/resources",
  }),
};

/** Everything except the anchor guide, which gets its own slot above. */
const latest = resources.filter((resource) => resource.slug !== featuredResource.slug);

export default function ResourcesPage() {
  return (
    <>
      <section className="py-16 lg:py-24 nav-dashed-bottom">
        <Container>
          <div className="mb-3 h-px w-8 bg-brand" />
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Resources</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-ink lg:text-4xl">
            Practical guides for infrastructure decision-makers operating in China
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-subtle">
            Technical, vendor-neutral resources to help you design, deploy, and operate
            infrastructure in China.
          </p>
        </Container>
      </section>

      <BentoFrame>
        <section id="featured" className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <h2 className="text-xl font-semibold text-ink">Featured</h2>
            <Link
              href={`/resources/${featuredResource.slug}`}
              className="group mt-6 flex flex-col rounded-2xl border border-border bg-white p-8 transition-all duration-200 hover:border-brand hover:-translate-y-0.5 hover:shadow-md lg:p-10"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-muted">
                  <FileText className="h-3.5 w-3.5" />
                  {featuredResource.type}
                </span>
                <span className="text-xs text-faded">{featuredResource.readingTime}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink lg:text-2xl">
                {featuredResource.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted lg:text-base">
                {featuredResource.excerpt}
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {featuredResource.takeaways.slice(0, 4).map((takeaway) => (
                  <li key={takeaway} className="flex gap-2.5 text-sm leading-relaxed text-subtle">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand group-hover:underline">
                Read the guide
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Container>
        </section>

        <section id="guides" className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <h2 className="text-xl font-semibold text-ink">Guides &amp; Comparisons</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latest.map((resource) => (
                <Link
                  key={resource.slug}
                  href={`/resources/${resource.slug}`}
                  className="group flex flex-col rounded-xl border border-border hover:border-brand bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="inline-block self-start rounded-md bg-surface px-2.5 py-0.5 text-xs font-medium text-muted">
                    {resource.type}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-ink">{resource.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{resource.excerpt}</p>
                  <span className="mt-auto pt-4 text-xs text-faded">{resource.readingTime}</span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20 lg:py-28">
          <Container>
            <div className="mx-auto max-w-xl text-center">
              <Mail className="mx-auto h-10 w-10 text-brand" strokeWidth={1.5} />
              <h2 className="mt-4 text-xl font-bold text-ink">
                Stay informed on China infrastructure
              </h2>
              <p className="mt-2 text-muted">
                Get our latest guides, white papers, and infrastructure insights delivered to
                your inbox.
              </p>
              <NewsletterForm />
            </div>
          </Container>
        </section>
      </BentoFrame>
    </>
  );
}
