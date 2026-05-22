"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNav } from "@/lib/navigation";
import { products, productModules } from "@/lib/products";
import Button from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_#e5e5e5]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0d0d0d] text-sm font-bold text-white">
            CIH
          </div>
          <span className="text-base font-semibold tracking-tight text-[#0d0d0d]">
            CN-INFRA HUB
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            if (item.label === "Products") {
              return (
                <div key={item.label} ref={megaRef} className="relative">
                  <button
                    onClick={() => setMegaOpen(!megaOpen)}
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-[#0d0d0d] hover:bg-[#f5f5f5] transition-colors"
                  >
                    Products
                    <ChevronDown className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
                  </button>
                  {megaOpen && (
                    <div className="absolute left-0 top-full mt-2 w-[720px] rounded-xl border border-[#e5e5e5] bg-white p-6 shadow-lg">
                      <div className="grid grid-cols-4 gap-6">
                        {productModules.map((mod) => (
                          <div key={mod}>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#8c8c8c]">{mod}</p>
                            <ul className="space-y-2">
                              {products
                                .filter((p) => p.module === mod)
                                .map((p) => (
                                  <li key={p.id}>
                                    <Link
                                      href={`/products/#${p.id}`}
                                      onClick={() => setMegaOpen(false)}
                                      className="block text-sm text-[#0d0d0d] hover:text-[#404040] transition-colors"
                                    >
                                      {p.name}
                                    </Link>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-[#0d0d0d] hover:bg-[#f5f5f5] transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact/" variant="primary" size="sm">
            Contact
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden rounded-md p-2 text-[#0d0d0d] hover:bg-[#f5f5f5]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[#e5e5e5] bg-white px-6 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-[#0d0d0d] hover:bg-[#f5f5f5]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-[#e5e5e5] pt-4">
              <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-[#8c8c8c]">Products</p>
              {products.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/#${p.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-[#404040] hover:bg-[#f5f5f5]"
                >
                  <span className="text-xs text-[#8c8c8c] uppercase mr-2">[{p.module.slice(0, 4)}]</span>
                  {p.name}
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Button href="/contact/" variant="primary" size="md" className="w-full">
                Contact
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
