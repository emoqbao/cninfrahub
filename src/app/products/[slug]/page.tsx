import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { products, getProductById, productModules, type Product } from "@/lib/products";

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
    <section className="py-16 lg:py-24 bg-[#f8f9fb]">
      <Container>
        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">
          Related products
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="group rounded-xl border border-[#e8eaed] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-[#0d0d0d]">{p.name}</h3>
              <p className="mt-2 text-sm text-[#737373] leading-relaxed line-clamp-2">
                {p.tagline}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#0d0d0d] group-hover:underline">
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

  const moduleIndex = productModules.indexOf(product.module);

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-[#e8eaed]">
        <Container>
          <nav className="flex items-center gap-2 py-3 text-sm text-[#737373]">
            <Link href="/" className="hover:text-[#0d0d0d] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products/" className="hover:text-[#0d0d0d] transition-colors">
              Products
            </Link>
            <span>/</span>
            <Link
              href={`/products/?module=${encodeURIComponent(product.module)}`}
              className="hover:text-[#0d0d0d] transition-colors"
            >
              {product.module}
            </Link>
            <span>/</span>
            <span className="text-[#0d0d0d] font-medium">{product.name}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block rounded-md bg-[#f3f4f6] px-2.5 py-0.5 text-xs font-medium text-[#737373]">
              {product.module}
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#0d0d0d] lg:text-5xl">
              {product.name}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#525252]">
              {product.tagline}
            </p>
          </div>
        </Container>
      </section>

      {/* Description */}
      <section className="py-16 lg:py-24 bg-[#f8f9fb]">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">
              Overview
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#525252]">
              {product.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">
            Key features
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {product.features.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-[#e8eaed] p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0d0d0d]">
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                </span>
                <span className="text-[#525252]">{f}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#f8f9fb]">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">
              Interested in {product.name}?
            </h2>
            <p className="mt-3 text-[#737373]">
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

      {/* Related */}
      <RelatedProducts current={product} />

      {/* Module navigation */}
      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">
            Explore other modules
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {productModules.map((mod) => (
              <Link
                key={mod}
                href={`/products/?module=${encodeURIComponent(mod)}`}
                className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
                  mod === product.module
                    ? "bg-[#0d0d0d] text-white"
                    : "border border-[#e8eaed] text-[#525252] hover:bg-[#f3f4f6]"
                }`}
              >
                {mod}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}