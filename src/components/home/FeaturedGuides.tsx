import Link from "next/link";
import { resources } from "@/lib/resources";

const guides = resources.slice(0, 3);

export default function FeaturedGuides() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-3 h-px w-8 bg-brand" />
      <p className="text-sm font-semibold uppercase tracking-wider text-brand">Planning guides</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold text-ink lg:text-4xl">
        Compare the options before you deploy
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-subtle">
        Start with the network, hosting, and filing questions that shape a China infrastructure project.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/resources/${guide.slug}/`}
            className="rounded-xl border border-border p-6 transition-colors hover:border-brand"
          >
            <span className="text-xs font-medium text-brand">{guide.type}</span>
            <h3 className="mt-3 text-lg font-semibold text-ink">{guide.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-subtle">{guide.excerpt}</p>
            <span className="mt-4 inline-block text-sm font-medium text-brand">Read guide →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
