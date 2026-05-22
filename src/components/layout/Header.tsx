"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Search, Globe } from "lucide-react";
import { mainNav } from "@/lib/navigation";
import { products, productModules } from "@/lib/products";
import Button from "@/components/ui/Button";
import SearchModal from "@/components/layout/SearchModal";
import { useLanguage } from "@/lib/i18n/context";
import { t, languageLabels, type Language } from "@/lib/i18n/translations";

const moduleColors: Record<string, string> = {
  "AI": "#7c3aed",
  "COMPUTE": "#2563eb",
  "NETWORK": "#0891b2",
  "DATA CENTER": "#059669",
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const { lang, setLang } = useLanguage();

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
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard shortcut: Cmd/Ctrl+K for search
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLangChange = useCallback((l: Language) => {
    setLang(l);
    setLangOpen(false);
  }, [setLang]);

  const isMac = typeof navigator !== "undefined" && navigator.platform.includes("Mac");

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow ${
          scrolled ? "shadow-[0_1px_0_0_#e5e5e5]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center px-6 py-3.5 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 mr-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0d0d0d] text-sm font-bold text-white">
              CIH
            </div>
            <span className="text-base font-semibold tracking-tight text-[#0d0d0d]">
              CN-INFRA HUB
            </span>
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
            {mainNav.map((item) => {
              if (item.label === "Products") {
                return (
                  <div key={item.label} ref={megaRef} className="relative">
                    <button
                      onClick={() => { setMegaOpen(!megaOpen); setMobileOpen(false); }}
                      className={`flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                        megaOpen
                          ? "text-[#0d0d0d] bg-[#f5f5f5]"
                          : "text-[#525252] hover:text-[#0d0d0d] hover:bg-[#f5f5f5]"
                      }`}
                    >
                      {t("nav.products", lang)}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${megaOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {megaOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[760px] rounded-xl border border-[#e5e5e5] bg-white p-1 shadow-xl">
                        <div className="flex divide-x divide-[#e5e5e5]">
                          {productModules.map((mod) => {
                            const modProducts = products.filter((p) => p.module === mod);
                            const color = moduleColors[mod] || "#0d0d0d";
                            return (
                              <div key={mod} className="flex-1 px-5 py-4">
                                <div className="flex items-center gap-2 mb-3">
                                  <span
                                    className="block w-2 h-2 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: color }}
                                  />
                                  <p className="text-xs font-semibold uppercase tracking-widest text-[#737373]">
                                    {mod}
                                  </p>
                                </div>
                                <ul className="space-y-1.5">
                                  {modProducts.map((p) => (
                                    <li key={p.id}>
                                      <Link
                                        href={`/products/#${p.id}`}
                                        onClick={() => setMegaOpen(false)}
                                        className="block rounded-md px-3 py-2 text-sm hover:bg-[#f5f5f5] transition-colors leading-tight"
                                      >
                                        <div className="font-medium text-[#0d0d0d]">{p.name}</div>
                                        <div className="text-xs text-[#8c8c8c] mt-0.5 line-clamp-1">
                                          {p.tagline}
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                        {/* Footer */}
                        <div className="border-t border-[#e5e5e5] px-5 py-3 flex items-center justify-between">
                          <Link
                            href="/products/"
                            onClick={() => setMegaOpen(false)}
                            className="text-xs font-medium text-[#0d0d0d] hover:text-[#404040] transition-colors"
                          >
                            {t("mega.viewAll", lang)} &rarr;
                          </Link>
                          <span className="text-xs text-[#a3a3a3]">
                            {products.length} {t("mega.products", lang)}
                          </span>
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
                  className="rounded-md px-3.5 py-2 text-sm font-medium text-[#525252] hover:text-[#0d0d0d] hover:bg-[#f5f5f5] transition-colors"
                >
                  {t(`nav.${item.label.toLowerCase()}`, lang)}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden items-center gap-1 lg:flex flex-shrink-0 ml-8">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-[#737373] hover:text-[#0d0d0d] hover:bg-[#f5f5f5] transition-colors"
              aria-label="Search"
            >
              <Search className="h-4 w-4" strokeWidth={1.5} />
              <span className="hidden xl:inline text-[10px] text-[#a3a3a3] border border-[#e5e5e5] rounded px-1.5 py-0.5 leading-none font-mono">
                {isMac ? "\u2318" : "Ctrl"}K
              </span>
            </button>

            {/* Language switcher */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="rounded-md p-2 text-[#737373] hover:text-[#0d0d0d] hover:bg-[#f5f5f5] transition-colors"
                aria-label="Switch language"
              >
                <Globe className="h-4 w-4" strokeWidth={1.5} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 w-32 rounded-lg border border-[#e5e5e5] bg-white py-1 shadow-lg">
                  {(Object.keys(languageLabels) as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => handleLangChange(l)}
                      className={`w-full text-left px-3 py-1.5 text-sm transition-colors ${
                        lang === l
                          ? "text-[#0d0d0d] font-medium bg-[#f5f5f5]"
                          : "text-[#525252] hover:text-[#0d0d0d] hover:bg-[#f5f5f5]"
                      }`}
                    >
                      {languageLabels[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Separator */}
            <div className="w-px h-5 bg-[#e5e5e5] mx-1.5" />

            <Button href="/contact/" variant="primary" size="sm">
              {t("nav.contact", lang)}
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden rounded-md p-2 text-[#0d0d0d] hover:bg-[#f5f5f5] ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
                  {t(`nav.${item.label.toLowerCase()}`, lang)}
                </Link>
              ))}
              <div className="mt-3 border-t border-[#e5e5e5] pt-4">
                <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-[#8c8c8c]">
                  {t("nav.products", lang)}
                </p>
                {products.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/#${p.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-[#404040] hover:bg-[#f5f5f5]"
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: moduleColors[p.module] || "#0d0d0d" }}
                    />
                    {p.name}
                  </Link>
                ))}
              </div>
              {/* Mobile search */}
              <div className="mt-3 border-t border-[#e5e5e5] pt-4">
                <button
                  onClick={() => { setMobileOpen(false); setSearchOpen(true); }}
                  className="w-full flex items-center justify-center gap-2 rounded-md border border-[#e5e5e5] px-3 py-2.5 text-sm font-medium text-[#0d0d0d] hover:bg-[#f5f5f5]"
                >
                  <Search className="h-4 w-4" strokeWidth={1.5} />
                  {t("search.placeholder", lang)}
                </button>
              </div>
              {/* Mobile language */}
              <div className="mt-2 flex gap-2">
                {(Object.keys(languageLabels) as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setMobileOpen(false); }}
                    className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      lang === l
                        ? "bg-[#0d0d0d] text-white"
                        : "border border-[#e5e5e5] text-[#525252] hover:bg-[#f5f5f5]"
                    }`}
                  >
                    {languageLabels[l]}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <Button href="/contact/" variant="primary" size="md" className="w-full">
                  {t("nav.contact", lang)}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Search Modal */}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} lang={lang} />
    </>
  );
}
