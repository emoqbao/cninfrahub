"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Search, Globe } from "lucide-react";
import { mainNav } from "@/lib/navigation";
import { products, productModules } from "@/lib/products";
import { solutions } from "@/lib/solutions";
import Button from "@/components/ui/Button";
import SearchModal from "@/components/layout/SearchModal";
import { useLanguage } from "@/lib/i18n/context";
import { t, languageLabels, type Language } from "@/lib/i18n/translations";

export default function Header() {
  const pathname = usePathname();
  const showNavDashed = pathname === "/" || pathname.startsWith("/about") || pathname.startsWith("/resources");
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

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const clickedInsideMega =
        (megaRef.current && megaRef.current.contains(e.target as Node)) ||
        (megaPanelRef.current && megaPanelRef.current.contains(e.target as Node));
      if (!clickedInsideMega) setMegaOpen(false);

      const clickedInsideSolutions =
        (solutionsRef.current && solutionsRef.current.contains(e.target as Node)) ||
        (solutionsPanelRef.current && solutionsPanelRef.current.contains(e.target as Node));
      if (!clickedInsideSolutions) setSolutionsOpen(false);

      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 闂傚倸鍊搁崐椋庣矆娓氣偓閹潡宕堕妸锝勭矒闂佸綊妫跨粈浣告纯?/ Ctrl+K
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

  // Click toggles
  const toggleMega = () => {
    setMegaOpen(!megaOpen);
    setSolutionsOpen(false);
  };
  const toggleSolutions = () => {
    setSolutionsOpen(!solutionsOpen);
    setMegaOpen(false);
  };

  return (
    <>
      <header
        className={`relative z-50 bg-white ${showNavDashed ? "nav-dashed-bottom" : ""}`}
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
                    <div
                      key={item.label}
                      ref={megaRef}
                      className="relative"
                    >
                      <button
                        onClick={toggleMega}
                        className={`flex items-center gap-1 rounded-md px-4 py-2 text-[15px] font-semibold transition-colors ${
                          megaOpen
                            ? "text-[#0d0d0d]"
                            : "text-[#0d0d0d] hover:text-[#8c8c8c] transition-colors duration-150"
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
                    <div
                      key={item.label}
                      ref={solutionsRef}
                      className="relative"
                    >
                      <button
                        onClick={toggleSolutions}
                        className={`flex items-center gap-1 rounded-md px-4 py-2 text-[15px] font-semibold transition-colors ${
                          solutionsOpen
                            ? "text-[#0d0d0d]"
                            : "text-[#0d0d0d] hover:text-[#8c8c8c] transition-colors duration-150"
                        }`}
                      >
                        {t("nav.solutions", lang)}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {solutionsOpen && (
                        <div
                          ref={solutionsPanelRef}
                                                    className="absolute left-0 top-full mt-1 rounded-xl border border-[#e8eaed] bg-white shadow-lg py-2 w-64 z-50"
                        >
                          <ul>
                            {solutions.map((s) => (
                              <li key={s.id}>
                                <Link
                                  href={`/solutions/${s.id}`}
                                  onClick={() => setSolutionsOpen(false)}
                                  className="block px-4 py-2 text-sm font-medium text-[#0d0d0d] hover:text-[#8c8c8c] transition-colors duration-150"
                                >
                                  {s.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="border-t border-[#e8eaed] mt-1 pt-1">
                            <Link
                              href="/solutions/"
                              onClick={() => setSolutionsOpen(false)}
                              className="block px-4 py-2 text-xs font-medium text-[#0d0d0d] hover:text-[#8c8c8c] transition-colors duration-150"
                            >
                              View all solutions &rarr;
                            </Link>
                          </div>
                        </div>
                      )}
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
                        ? "text-[#0d0d0d]"
                        : "text-[#0d0d0d] hover:text-[#8c8c8c] transition-colors duration-150"
                    }`}
                  >
                    {t(`nav.${item.label.toLowerCase()}`, lang)}
                  </Link>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3 ml-auto flex-shrink-0">
              <button
                onClick={() => setSearchOpen(true)}
                className="rounded-md p-2 text-[#0d0d0d] hover:text-[#8c8c8c] transition-colors duration-150"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>

              <div ref={langRef} className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="rounded-md p-2 text-[#0d0d0d] hover:text-[#8c8c8c] transition-colors duration-150 flex items-center gap-1"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-[13px] font-medium">{languageLabels[lang]}</span>
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-1 rounded-xl border border-[#e8eaed] bg-white shadow-lg py-1 w-28 z-50">
                    {(Object.keys(languageLabels) as Language[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => handleLangChange(l)}
                        className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                          lang === l
                            ? "text-[#0d0d0d] font-medium"
                            : "text-[#0d0d0d] hover:text-[#8c8c8c] transition-colors duration-150"
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
        <div
          ref={megaPanelRef}
          className="absolute left-0 right-0 top-full z-50 mx-auto max-w-7xl px-6 pb-4 lg:px-8"
        >
          {megaOpen && (
            <div className="rounded-xl border border-[#e8eaed] bg-white shadow-lg px-8 py-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-6">
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
                              className="text-[15px] font-medium text-[#0d0d0d] hover:text-[#8c8c8c] transition-colors duration-150"
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

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-[#e8eaed] bg-white px-6 pb-6 pt-4 lg:hidden max-h-[calc(100vh-64px)] overflow-y-auto">
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
