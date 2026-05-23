"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Search, Globe } from "lucide-react";
import { mainNav } from "@/lib/navigation";
import { products, productModules } from "@/lib/products";
import { solutions } from "@/lib/solutions";
import Button from "@/components/ui/Button";
import SearchModal from "@/components/layout/SearchModal";
import { useLanguage } from "@/lib/i18n/context";
import { t, languageLabels, type Language } from "@/lib/i18n/translations";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaPanelRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const solutionsPanelRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const clickedInsideMega =
        (megaRef.current && megaRef.current.contains(e.target as Node)) ||
        (megaPanelRef.current && megaPanelRef.current.contains(e.target as Node));
      if (!clickedInsideMega) {
        setMegaOpen(false);
      }
      const clickedInsideSolutions =
        (solutionsRef.current && solutionsRef.current.contains(e.target as Node)) ||
        (solutionsPanelRef.current && solutionsPanelRef.current.contains(e.target as Node));
      if (!clickedInsideSolutions) {
        setSolutionsOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          scrolled ? "shadow-[0_1px_0_0_#e8eaed]" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-3.5 lg:px-8">
          <div className="flex items-center">
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
            <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
              {mainNav.map((item) => {
                if (item.label === "Products") {
                  return (
                    <div key={item.label} ref={megaRef} className="relative">
                      <button
                        onClick={() => { setMegaOpen(!megaOpen); setSolutionsOpen(false); setMobileOpen(false); }}
                        className={`flex items-center gap-1 rounded-md px-4 py-2 text-[15px] font-semibold transition-colors ${
                          megaOpen
                            ? "text-[#0d0d0d] bg-[#f3f4f6]"
                            : "text-[#404040] hover:text-[#0d0d0d] hover:bg-[#f3f4f6]"
                        }`}
                      >
                        {t("nav.products", lang)}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                  );
                }
                if (item.label === "Solutions") {
                  return (
                    <div key={item.label} ref={solutionsRef} className="relative">
                      <button
                        onClick={() => { setSolutionsOpen(!solutionsOpen); setMegaOpen(false); setMobileOpen(false); }}
                        className={`flex items-center gap-1 rounded-md px-4 py-2 text-[15px] font-semibold transition-colors ${
                          solutionsOpen
                            ? "text-[#0d0d0d] bg-[#f3f4f6]"
                            : "text-[#404040] hover:text-[#0d0d0d] hover:bg-[#f3f4f6]"
                        }`}
                      >
                        {t("nav.solutions", lang)}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                  );
                }
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      if (isActive) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className={`rounded-md px-4 py-2 text-[15px] font-semibold transition-colors ${
                      isActive
                        ? "text-[#0d0d0d] bg-[#f3f4f6]"
                        : "text-[#404040] hover:text-[#0d0d0d] hover:bg-[#f3f4f6]"
                    }`}
                  >
                    {t(`nav.${item.label.toLowerCase()}`, lang)}
                  </Link>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="hidden items-center gap-1 lg:flex flex-shrink-0">
              <button
                onClick={() => setSearchOpen(true)}
                className="rounded-md p-2 text-[#404040] hover:text-[#0d0d0d] hover:bg-[#f3f4f6] transition-colors"
                aria-label={t("search.placeholder", lang)}
              >
                <Search className="h-4 w-4" strokeWidth={1.5} />
                <span className="sr-only">{t("search.placeholder", lang)}</span>
              </button>

              {/* Language switcher */}
              <div ref={langRef} className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="rounded-md p-2 text-[#404040] hover:text-[#0d0d0d] hover:bg-[#f3f4f6] transition-colors"
                  aria-label="Switch language"
                >
                  <Globe className="h-4 w-4" strokeWidth={1.5} />
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-1 rounded-lg border border-[#e8eaed] bg-white shadow-lg py-1 min-w-[120px]">
                    {(Object.keys(languageLabels) as Language[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => handleLangChange(l)}
                        className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                          lang === l
                            ? "text-[#0d0d0d] font-medium bg-[#f3f4f6]"
                            : "text-[#525252] hover:bg-[#f3f4f6]"
                        }`}
                      >
                        {languageLabels[l]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="w-px h-5 bg-[#e8eaed] mx-1.5" />

              <Button href="/contact/" variant="primary" size="sm">
                {t("nav.contact", lang)}
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden rounded-md p-2 text-[#0d0d0d] hover:bg-[#f3f4f6] ml-auto"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Products mega menu */}
        {megaOpen && (
          <div className="mx-auto max-w-7xl px-6 pb-4 lg:px-8">
            <div ref={megaPanelRef} className="rounded-xl border border-[#e8eaed] bg-white shadow-lg px-8 py-6">
              <div className="grid grid-cols-4 gap-x-12 gap-y-6">
                {productModules.map((mod) => (
                  <div key={mod}>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#8c8c8c]">
                      {mod}
                    </p>
                    <ul className="space-y-2.5">
                      {products
                        .filter((p) => p.module === mod)
                        .map((p) => (
                          <li key={p.id}>
                            <Link
                              href={`/products/${p.id}`}
                              onClick={() => setMegaOpen(false)}
                              className="text-[15px] font-medium text-[#0d0d0d] hover:text-[#404040] transition-colors"
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
          </div>
        )}

        {/* Solutions mega menu */}
        {solutionsOpen && (
          <div className="mx-auto max-w-7xl px-6 pb-4 lg:px-8">
            <div ref={solutionsPanelRef} className="rounded-xl border border-[#e8eaed] bg-white shadow-lg px-8 py-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#8c8c8c]">
                Infrastructure patterns
              </p>
              <ul className="space-y-2.5">
                {solutions.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/solutions/${s.id}`}
                      onClick={() => setSolutionsOpen(false)}
                      className="text-[15px] font-medium text-[#0d0d0d] hover:text-[#404040] transition-colors"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-[#e8eaed]">
                <Link
                  href="/solutions/"
                  onClick={() => setSolutionsOpen(false)}
                  className="text-sm font-medium text-[#0d0d0d] hover:underline"
                >
                  View all solutions &rarr;
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-[#e8eaed] bg-white px-6 pb-6 pt-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {mainNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2.5 text-base font-semibold text-[#0d0d0d] hover:bg-[#f3f4f6]"
                >
                  {t(`nav.${item.label.toLowerCase()}`, lang)}
                </Link>
              ))}
              <div className="mt-3 border-t border-[#e8eaed] pt-4">
                <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-[#8c8c8c]">
                  {t("nav.products", lang)}
                </p>
                {products.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-[#404040] hover:bg-[#f3f4f6]"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
              <div className="mt-3 border-t border-[#e8eaed] pt-4">
                <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-[#8c8c8c]">
                  Solutions
                </p>
                {solutions.map((s) => (
                  <Link
                    key={s.id}
                    href={`/solutions/${s.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-[#404040] hover:bg-[#f3f4f6]"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
              <div className="mt-3 border-t border-[#e8eaed] pt-4">
                <button
                  onClick={() => { setMobileOpen(false); setSearchOpen(true); }}
                  className="w-full flex items-center justify-center gap-2 rounded-md border border-[#e8eaed] px-3 py-2.5 text-sm font-medium text-[#0d0d0d] hover:bg-[#f3f4f6]"
                >
                  <Search className="h-4 w-4" strokeWidth={1.5} />
                  {t("search.placeholder", lang)}
                </button>
              </div>
              <div className="mt-2 flex gap-2">
                {(Object.keys(languageLabels) as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setMobileOpen(false); }}
                    className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      lang === l
                        ? "bg-[#0d0d0d] text-white"
                        : "border border-[#e8eaed] text-[#525252] hover:bg-[#f3f4f6]"
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

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} lang={lang} />
    </>
  );
}