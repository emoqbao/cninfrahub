import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Zap, Users, Cog, Network } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CheckIcon from "@/components/ui/CheckIcon";
import { BentoFrame } from "@/components/ui/BentoFrame";
import { solutions, getSolutionById, type Solution } from "@/lib/solutions";
import { getProductById } from "@/lib/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionById(slug);
  if (!solution) return { title: "Not Found" };
  return {
    title: solution.name,
    description: solution.description.slice(0, 160),
    keywords: solution.seoKeywords,
    alternates: { canonical: `/solutions/${solution.id}` },
    openGraph: { title: `${solution.name} — CN-Infra Hub`, description: solution.description.slice(0, 160) },
  };
}

function RelatedSolutions({ current }: { current: Solution }) {
  const related = solutions.filter((s) => s.id !== current.id);
  if (related.length === 0) return null;
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">Related solutions</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <Link key={s.id} href={`/solutions/${s.id}`} className="group flex flex-col rounded-xl border border-border hover:border-brand bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex flex-wrap gap-2">{s.tags.map((t) => (<span key={t} className="rounded-full border border-brand-light bg-brand-surface px-2 py-0.5 text-xs font-medium text-brand">{t}</span>))}</div>
              <h3 className="mt-3 text-lg font-semibold text-ink">{s.name}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">{s.description}</p>
              <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand group-hover:underline">Learn more<ArrowRight className="h-3.5 w-3.5" /></span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionById(slug);
  if (!solution) notFound();

  return (
    <>
      <div className="nav-dashed-bottom">
        <Container>
          <nav className="flex items-center gap-2 py-3 text-sm text-muted">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <Link href="/solutions/" className="hover:text-ink transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-ink font-medium">{solution.name}</span>
          </nav>
        </Container>
      </div>

      <BentoFrame>
        {/* Hero */}
        <section className="py-16 lg:py-24 nav-dashed-bottom">
          <Container>
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">{solution.tags.map((t) => (<span key={t} className="rounded-full border border-brand-light bg-brand-surface px-3 py-1 text-xs font-medium text-brand">{t}</span>))}</div>
              <h1 className="mt-5 text-4xl font-bold tracking-[-0.03em] text-ink lg:text-5xl">{solution.name}</h1>
              <p className="mt-6 text-xl leading-relaxed text-subtle">{solution.description}</p>
            </div>
          </Container>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <div className="flex items-center gap-3 mb-8"><Zap className="h-6 w-6 text-brand" strokeWidth={1.5} /><h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">Key benefits</h2></div>
            <ul className="grid gap-4 sm:grid-cols-2">{solution.benefits.map((b, i) => (<li key={i} className="flex items-start gap-3 rounded-xl border border-border p-5"><span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-surface"><CheckIcon /></span><span className="text-subtle">{b}</span></li>))}</ul>
          </Container>
        </section>

        {/* Who it's for */}
        <section className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <div className="flex items-center gap-3 mb-8"><Users className="h-6 w-6 text-brand" strokeWidth={1.5} /><h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">Who it&apos;s for</h2></div>
            <div className="max-w-3xl"><p className="text-lg leading-relaxed text-subtle">{solution.whoItsFor}</p></div>
          </Container>
        </section>

        {/* Our approach */}
        <section className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <div className="flex items-center gap-3 mb-8"><Cog className="h-6 w-6 text-brand" strokeWidth={1.5} /><h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">Our approach</h2></div>
            <div className="max-w-3xl"><p className="text-lg leading-relaxed text-subtle">{solution.approach}</p></div>
          </Container>
        </section>

        {/* Architecture overview */}
        <section className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <div className="flex items-center gap-3 mb-8"><Network className="h-6 w-6 text-brand" strokeWidth={1.5} /><h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">Architecture overview</h2></div>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 rounded-xl border border-border border-dashed bg-surface-alt p-8 flex items-center justify-center min-h-[360px]"><div className="text-center"><Network className="h-12 w-12 text-light mx-auto" strokeWidth={1.5} /><p className="mt-4 text-sm text-ghost">Architecture diagram</p><p className="text-xs text-light">Replace with your SVG image</p></div></div>
              <div className="flex flex-col justify-center"><h3 className="text-lg font-semibold text-ink">How it works</h3><p className="mt-4 text-subtle leading-relaxed">We provision and configure the infrastructure components, coordinate across providers, and deliver a fully operational solution — with ongoing management and support.</p><div className="mt-6 flex flex-wrap gap-2">{solution.products.map((pid) => { const product = getProductById(pid); if (!product) return null; return (<span key={pid} className="rounded-full border border-brand-light bg-brand-surface px-3 py-1 text-xs font-medium text-brand">{product.name}</span>); })}</div></div>
            </div>
          </Container>
        </section>

        {/* Key products used */}
        <section className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">Key products used</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">{solution.products.map((pid) => { const product = getProductById(pid); if (!product) return null; return (<Link key={pid} href={`/products/${product.id}`} className="group flex flex-col rounded-xl border border-border hover:border-brand p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"><span className="inline-block self-start rounded-md bg-surface px-2.5 py-0.5 text-xs font-medium text-muted">{product.module}</span><h3 className="mt-3 text-lg font-semibold text-ink">{product.name}</h3><p className="mt-2 text-sm text-muted leading-relaxed">{product.tagline}</p><span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand group-hover:underline">View product<ArrowRight className="h-3.5 w-3.5" /></span></Link>); })}</div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 nav-dashed-bottom">
          <Container>
            <div className="mx-auto max-w-xl text-center"><h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">Is this your use case?</h2><p className="mt-3 text-muted">Talk to our architects about tailoring {solution.name} to your specific requirements.</p><div className="mt-8"><Button href="/contact/" variant="primary" size="lg">Start a Conversation</Button></div></div>
          </Container>
        </section>
        <RelatedSolutions current={solution} />
      </BentoFrame>
    </>
  );
}
