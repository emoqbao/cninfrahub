import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, Zap, Users, Cog, Network } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
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
    openGraph: {
      title: `${solution.name} — CN-Infra Hub`,
      description: solution.description.slice(0, 160),
    },
  };
}

function RelatedSolutions({ current }: { current: Solution }) {
  const related = solutions.filter((s) => s.id !== current.id);
  if (related.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-[#f8f9fb]">
      <Container>
        <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">
          Related solutions
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <Link
              key={s.id}
              href={`/solutions/${s.id}`}
              className="group flex flex-col rounded-xl border border-[#e8eaed] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#e8eaed] px-2 py-0.5 text-xs font-medium text-[#737373]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-[#0d0d0d]">{s.name}</h3>
              <p className="mt-2 text-sm text-[#737373] leading-relaxed line-clamp-2">
                {s.description}
              </p>
              <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0d0d0d] group-hover:underline">
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

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionById(slug);
  if (!solution) notFound();

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
            <Link href="/solutions/" className="hover:text-[#0d0d0d] transition-colors">
              Solutions
            </Link>
            <span>/</span>
            <span className="text-[#0d0d0d] font-medium">{solution.name}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              {solution.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#e8eaed] px-3 py-1 text-xs font-medium text-[#737373]"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-[-0.03em] text-[#0d0d0d] lg:text-5xl">
              {solution.name}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#525252]">
              {solution.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-[#f8f9fb]">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <Zap className="h-6 w-6 text-[#0d0d0d]" strokeWidth={1.5} />
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">
              Key benefits
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {solution.benefits.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-[#e8eaed] bg-white p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0d0d0d]">
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                </span>
                <span className="text-[#525252]">{b}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-6 w-6 text-[#0d0d0d]" strokeWidth={1.5} />
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">
              Who it&apos;s for
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-[#525252]">
              {solution.whoItsFor}
            </p>
          </div>
        </Container>
      </section>

      {/* Our approach */}
      <section className="py-16 lg:py-24 bg-[#f8f9fb]">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <Cog className="h-6 w-6 text-[#0d0d0d]" strokeWidth={1.5} />
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">
              Our approach
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-[#525252]">
              {solution.approach}
            </p>
          </div>
        </Container>
      </section>

      {/* Architecture */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="flex items-center gap-3 mb-8">
            <Network className="h-6 w-6 text-[#0d0d0d]" strokeWidth={1.5} />
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">
              Architecture overview
            </h2>
          </div>
          <div className="rounded-xl border border-[#e8eaed] bg-white p-8 lg:p-10">
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 800 200" className="w-full max-w-2xl" fill="none">
                {/* China Provider Ecosystem */}
                <rect x="20" y="20" width="200" height="160" rx="12" fill="#f8f9fb" stroke="#e8eaed" strokeWidth="1.5" />
                <text x="120" y="55" textAnchor="middle" fill="#0d0d0d" fontSize="13" fontWeight="600">China Provider</text>
                <text x="120" y="72" textAnchor="middle" fill="#0d0d0d" fontSize="13" fontWeight="600">Ecosystem</text>
                <line x1="40" y1="85" x2="200" y2="85" stroke="#e8eaed" strokeWidth="1" />
                <text x="120" y="102" textAnchor="middle" fill="#525252" fontSize="11">Carriers &amp; ISPs</text>
                <text x="120" y="120" textAnchor="middle" fill="#525252" fontSize="11">Data Centers</text>
                <text x="120" y="138" textAnchor="middle" fill="#525252" fontSize="11">Hardware Partners</text>
                <text x="120" y="156" textAnchor="middle" fill="#525252" fontSize="11">Cloud Providers</text>

                {/* CN-Infra Hub */}
                <circle cx="400" cy="100" r="36" fill="#0d0d0d" />
                <circle cx="400" cy="100" r="24" fill="white" />
                <text x="400" y="95" textAnchor="middle" fill="#0d0d0d" fontSize="10" fontWeight="600">CN-INFRA</text>
                <text x="400" y="110" textAnchor="middle" fill="#0d0d0d" fontSize="9" fontWeight="600">HUB</text>
                <text x="400" y="150" textAnchor="middle" fill="#525252" fontSize="10">Aggregate</text>
                <text x="400" y="163" textAnchor="middle" fill="#525252" fontSize="10">&amp; Manage</text>

                {/* Your Infrastructure */}
                <rect x="580" y="20" width="200" height="160" rx="12" fill="#f8f9fb" stroke="#e8eaed" strokeWidth="1.5" />
                <text x="680" y="55" textAnchor="middle" fill="#0d0d0d" fontSize="13" fontWeight="600">Your</text>
                <text x="680" y="72" textAnchor="middle" fill="#0d0d0d" fontSize="13" fontWeight="600">Infrastructure</text>
                <line x1="600" y1="85" x2="760" y2="85" stroke="#e8eaed" strokeWidth="1" />
                <text x="680" y="102" textAnchor="middle" fill="#525252" fontSize="11">AWS / Azure / GCP</text>
                <text x="680" y="120" textAnchor="middle" fill="#525252" fontSize="11">Your Data Centers</text>
                <text x="680" y="138" textAnchor="middle" fill="#525252" fontSize="11">Your Applications</text>
                <text x="680" y="156" textAnchor="middle" fill="#525252" fontSize="11">Your End Users</text>

                {/* Connecting lines */}
                <line x1="220" y1="100" x2="358" y2="100" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 4" />
                <polygon points="363,95 363,105 371,100" fill="#d4d4d4" />
                <line x1="442" y1="100" x2="580" y2="100" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 4" />
                <polygon points="572,95 572,105 580,100" fill="#d4d4d4" />

                {/* Labels */}
                <text x="290" y="88" textAnchor="middle" fill="#a3a3a3" fontSize="10">We source</text>
                <text x="290" y="112" textAnchor="middle" fill="#a3a3a3" fontSize="10">&amp; negotiate</text>
                <text x="510" y="88" textAnchor="middle" fill="#a3a3a3" fontSize="10">One partner</text>
                <text x="510" y="112" textAnchor="middle" fill="#a3a3a3" fontSize="10">One SLA</text>
              </svg>
            </div>
            <p className="mt-6 text-sm text-[#737373] text-center max-w-xl mx-auto">
              We sit between your global infrastructure and China&apos;s provider ecosystem — sourcing, connecting, and managing everything through a single point of accountability.
            </p>
          </div>
        </Container>
      </section>

      {/* Key products used */}
      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">
            Key products used
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {solution.products.map((pid) => {
              const product = getProductById(pid);
              if (!product) return null;
              return (
                <Link
                  key={pid}
                  href={`/products/${product.id}`}
                  className="group flex flex-col rounded-xl border border-[#e8eaed] bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <span className="inline-block rounded-md bg-[#f3f4f6] px-2.5 py-0.5 text-xs font-medium text-[#737373]">
                    {product.module}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-[#0d0d0d]">{product.name}</h3>
                  <p className="mt-2 text-sm text-[#737373] leading-relaxed">{product.tagline}</p>
                  <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0d0d0d] group-hover:underline">
                    View product
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#f8f9fb]">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0d0d0d]">
              Is this your use case?
            </h2>
            <p className="mt-3 text-[#737373]">
              Talk to our architects about tailoring {solution.name} to your specific requirements.
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
      <RelatedSolutions current={solution} />
    </>
  );
}