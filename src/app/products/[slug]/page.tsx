import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Zap, Users, Lightbulb } from "lucide-react";
import Container from "@/components/ui/Container";
import CheckIcon from "@/components/ui/CheckIcon";
import Button from "@/components/ui/Button";
import ProductHeroIcon from "@/components/products/ProductHeroIcon";
import { BentoFrame } from "@/components/ui/BentoFrame";
import { products, getProductById, type Product } from "@/lib/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) return { title: "Not Found" };

  return {
    title: product.name,
    description: product.tagline,
    keywords: product.seoKeywords,
    alternates: { canonical: `/products/${product.id}` },
    openGraph: {
      title: `${product.name} — CN-Infra Hub`,
      description: product.tagline,
    },
  };
}

function RelatedProducts({ current }: { current: Product }) {
  const related = products.filter(
    (p) => p.module === current.module && p.id !== current.id
  );
  if (related.length === 0) return null;

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
          Related products
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="group flex flex-col rounded-xl border border-border hover:border-brand bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
                {p.tagline}
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
  );
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div className="nav-dashed-bottom">
        <Container>
          <nav className="flex items-center gap-2 py-3 text-sm text-muted">
            <Link href="/" className="hover:text-ink transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products/" className="hover:text-ink transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-ink font-medium">{product.name}</span>
          </nav>
        </Container>
      </div>

      <BentoFrame>
        {/* Hero */}
        <section className="py-16 lg:py-24 nav-dashed-bottom">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="inline-block self-start rounded-md bg-surface px-2.5 py-0.5 text-xs font-medium text-brand">
                  {product.module}
                </span>
                <h1 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-ink lg:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-6 text-xl leading-relaxed text-subtle">
                  {product.tagline}
                </p>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <ProductHeroIcon productId={product.id} />
              </div>
            </div>
          </Container>
        </section>

        {/* Overview */}
        <section className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
                Overview
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-subtle">
                {product.description}
              </p>
            </div>
          </Container>
        </section>

        {/* Key Features */}
        <section className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
              Key features
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {product.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-border p-5"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-surface">
                    <CheckIcon />
                  </span>
                  <span className="text-subtle">{f}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <div className="flex items-center gap-3 mb-8">
              <Zap className="h-6 w-6 text-brand" strokeWidth={1.5} />
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
                Why choose {product.name}
              </h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {product.benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-border bg-white p-5"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-surface">
                    <CheckIcon />
                  </span>
                  <span className="text-subtle">{b}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Use Cases */}
        <section className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="h-6 w-6 text-brand" strokeWidth={1.5} />
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
                Use cases
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {product.useCases.map((uc, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border p-6"
                >
                  <Users className="h-5 w-5 text-brand mb-3" strokeWidth={1.5} />
                  <p className="text-subtle leading-relaxed">{uc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
                Interested in {product.name}?
              </h2>
              <p className="mt-3 text-faded">
                Talk to our infrastructure architects about how {product.name} fits
                into your architecture.
              </p>
              <div className="mt-8">
                <Button href="/contact/" variant="primary" size="lg">
                  Start a Conversation
                </Button>
              </div>
            </div>
          </Container>
        </section>
        {/* Related — last section, no dashed bottom */}
        <RelatedProducts current={product} />
      </BentoFrame>
    </>
  );
}
