"use client";

import Link from "next/link";
import { products } from "@/lib/products";
import { solutions } from "@/lib/solutions";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  function scrollIfActive(e: React.MouseEvent, href: string) {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <footer className="bg-footer-bg text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Brand row */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-bold text-ink">
              CIH
            </div>
            <span className="text-lg font-semibold tracking-tight">CN-INFRA HUB</span>
          </Link>
          <p className="mt-3 text-sm text-ghost">Infrastructure Without Borders</p>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Products */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
              Products
            </p>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/products/${p.id}`}
                    onClick={(e) => scrollIfActive(e, `/products/${p.id}`)}
                    className="text-sm text-light hover:text-white transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
              Solutions
            </p>
            <ul className="space-y-2.5">
              {solutions.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/solutions/${s.id}`}
                    onClick={(e) => scrollIfActive(e, `/solutions/${s.id}`)}
                    className="text-sm text-light hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
              Resources
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/resources/#white-papers" className="text-sm text-light hover:text-white transition-colors">
                  White Papers
                </Link>
              </li>
              <li>
                <Link href="/resources/#case-studies" className="text-sm text-light hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources/#guides" className="text-sm text-light hover:text-white transition-colors">
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
              Company
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about/" onClick={(e) => scrollIfActive(e, "/about/")} className="text-sm text-light hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact/" onClick={(e) => scrollIfActive(e, "/contact/")} className="text-sm text-light hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-footer-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-muted lg:flex-row lg:justify-between lg:px-8">
          <p>&copy; {new Date().getFullYear()} CN-Infra Hub. All rights reserved.</p>
          <a href="mailto:info@cninfrahub.com" className="hover:text-white transition-colors">
            info@cninfrahub.com
          </a>
        </div>
      </div>
    </footer>
  );
}
