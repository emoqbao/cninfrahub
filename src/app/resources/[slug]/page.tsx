import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { BentoFrame } from "@/components/ui/BentoFrame";
import JsonLd from "@/components/ui/JsonLd";
import { getProductById, type Product } from "@/lib/products";
import {
  getResourceBySlug,
  resources,
  type ResourceBlock,
} from "@/lib/resources";
import {
  articleSchema,
  breadcrumbSchema,
  metaDescription,
  socialMetadata,
} from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return { title: "Not Found" };

  const description = metaDescription(resource.excerpt);
  return {
    title: resource.title,
    description,
    keywords: resource.seoKeywords,
    alternates: { canonical: `/resources/${resource.slug}` },
    ...socialMetadata({
      title: `${resource.title} | CN-Infra Hub`,
      description,
      path: `/resources/${resource.slug}`,
    }),
  };
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** Deterministic formatting — toLocaleDateString varies with the build's ICU data. */
function formatUpdated(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

function Block({ block }: { block: ResourceBlock }) {
  if (block.kind === "p") {
    return <p className="text-base leading-relaxed text-subtle">{block.text}</p>;
  }

  if (block.kind === "ul") {
    return (
      <ul className="space-y-3">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-relaxed text-subtle">
            <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-surface-alt">
          <tr>
            {block.head.map((heading, index) => (
              <th key={index} scope="col" className="px-4 py-3 font-semibold text-ink">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="align-top">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`border-t border-border-light px-4 py-3 leading-relaxed ${
                    cellIndex === 0 ? "font-medium text-ink" : "text-subtle"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  const related = resource.relatedProducts
    .map((id) => getProductById(id))
    .filter((product): product is Product => Boolean(product));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: resource.title, path: `/resources/${resource.slug}` },
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: resource.title,
          description: resource.excerpt,
          updated: resource.updated,
          path: `/resources/${resource.slug}`,
        })}
      />

      <div className="nav-dashed-bottom">
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 py-3 text-sm text-muted"
          >
            <Link href="/" className="hover:text-ink transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/resources/" className="hover:text-ink transition-colors">
              Resources
            </Link>
            <span>/</span>
            <span className="text-ink font-medium">{resource.title}</span>
          </nav>
        </Container>
      </div>

      <BentoFrame>
        <section className="py-16 lg:py-24 nav-dashed-bottom">
          <Container>
            <div className="max-w-3xl">
              <span className="inline-block rounded-md bg-surface px-2.5 py-0.5 text-xs font-medium text-muted">
                {resource.type}
              </span>
              <h1 className="mt-4 text-3xl font-bold tracking-[-0.02em] text-ink lg:text-4xl">
                {resource.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-subtle">{resource.intro}</p>
              <p className="mt-6 text-sm text-faded">
                Updated{" "}
                <time dateTime={resource.updated}>{formatUpdated(resource.updated)}</time>
                {" · "}
                {resource.readingTime}
              </p>
            </div>

            <div className="mt-10 max-w-3xl rounded-2xl border border-border bg-surface-warm p-8">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-brand" strokeWidth={1.5} />
                <h2 className="text-lg font-semibold text-ink">What this covers</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {resource.takeaways.map((takeaway) => (
                  <li
                    key={takeaway}
                    className="flex gap-3 text-sm leading-relaxed text-subtle"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        <section className="py-16 lg:py-20 nav-dashed-bottom">
          <Container>
            <article className="max-w-3xl space-y-14">
              {resource.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5">
                    {section.blocks.map((block, index) => (
                      <Block key={index} block={block} />
                    ))}
                  </div>
                </section>
              ))}
            </article>
          </Container>
        </section>

        {related.length > 0 && (
          <section className="py-20 lg:py-28 nav-dashed-bottom">
            <Container>
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
                Products behind this
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="group flex flex-col rounded-xl border border-border hover:border-brand bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="inline-block self-start rounded-md bg-surface px-2.5 py-0.5 text-xs font-medium text-muted">
                      {product.module}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-ink">{product.name}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
                      {product.tagline}
                    </p>
                    <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand group-hover:underline">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}

        <section className="py-20 lg:py-28">
          <Container>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
                Want this applied to your setup?
              </h2>
              <p className="mt-3 text-faded">
                Talk to our infrastructure architects about what this looks like for your
                origin, your users, and your constraints.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact/" variant="primary" size="lg">
                  Start a Conversation
                </Button>
                <Link
                  href="/resources/"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  All resources
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </BentoFrame>
    </>
  );
}
