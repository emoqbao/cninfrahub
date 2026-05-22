import Link from "next/link";
import { products, productModules } from "@/lib/products";
import { solutions } from "@/lib/solutions";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Brand row */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-bold text-[#0d0d0d]">
              CIH
            </div>
            <span className="text-lg font-semibold tracking-tight">CN-INFRA HUB</span>
          </Link>
          <p className="mt-3 text-sm text-[#a3a3a3]">Infrastructure Without Borders</p>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Products */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#737373]">Products</p>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/products/#${p.id}`}
                    className="text-sm text-[#d4d4d4] hover:text-white transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#737373]">Solutions</p>
            <ul className="space-y-2.5">
              {solutions.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/solutions/#${s.id}`}
                    className="text-sm text-[#d4d4d4] hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#737373]">Resources</p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/resources/" className="text-sm text-[#d4d4d4] hover:text-white transition-colors">
                  White Papers
                </Link>
              </li>
              <li>
                <Link href="/resources/" className="text-sm text-[#d4d4d4] hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources/" className="text-sm text-[#d4d4d4] hover:text-white transition-colors">
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#737373]">Company</p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about/" className="text-sm text-[#d4d4d4] hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-sm text-[#d4d4d4] hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#262626]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-[#737373] lg:flex-row lg:justify-between lg:px-8">
          <p>&copy; {new Date().getFullYear()} CN-Infra Hub. All rights reserved.</p>
          <a href="mailto:info@cninfrahub.com" className="hover:text-white transition-colors">
            info@cninfrahub.com
          </a>
        </div>
      </div>
    </footer>
  );
}
