"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { mainNav } from "@/lib/navigation";
import { products, productModules } from "@/lib/products";
import { solutions } from "@/lib/solutions";
import Button from "@/components/ui/Button";
import SearchModal from "@/components/layout/SearchModal";
import { t } from "@/lib/i18n/translations";

export default function Header() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaPanelRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const solutionsPanelRef = useRef<HTMLDivElement>(null);

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

  const toggleMega = () => { setMegaOpen(!megaOpen); setSolutionsOpen(false); };
  const toggleSolutions = () => { setSolutionsOpen(!solutionsOpen); setMegaOpen(false); };

  return (
    <>
      <header className="relative z-50 bg-white nav-dashed-bottom">
        <div className="mx-auto max-w-7xl px-6 py-3.5 lg:px-8">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0d0d0d] text-sm font-bold text-white">CIH</div>
              <span className="text-base font-semibold tracking-tight text-[#0d0d0d]">CN-INFRA HUB</span>
            </Link>

            <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
              {mainNav.map((item) => {
                if (item.label === "Products") {
                  return (
                    <div key={item.label} ref={megaRef} className="relative">
                      <button
                        onClick={toggleMega}
                        className={"flex items-center gap-1 rounded-md px-4 py-2 text-[15px] font-semibold transition-colors " + (megaOpen ? "text-[#0d0d0d]" : "text-[#0d0d0d] hover:text-[#8c8c8c] transition-colors duration-150")}
                      >
                        {t("nav.products")}
                        <ChevronDown className={"h-4 w-4 transition-transform " + (megaOpen ? "rotate-180" : "")} />
                      </button>
                    </div>
                  );
                }
                if (item.label === "Solutions") {
                  return (
                    <div key={item.label} ref={solutionsRef} className="relative">
                      <button
                        onClick={toggleSolutions}
                        className={"flex items-center gap-1 rounded-md px-4 py-2 text-[15px] font-semibold transition-colors " + (solutionsOpen ? "text-[#0d0d0d]" : "text-[#0d0d0d] hover:text-[#8c8c8c] transition-colors duration-150")}
                      >
                        {t("nav.solutions")}
                        <ChevronDown className={"h-4 w-4 transition-transform " + (solutionsOpen ? "rotate-180" : "")} />
                      </button>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={"rounded-md px-4 py-2 text-[15px] font-semibold text-[#0d0d0d] hover:text-[#8c8c8c] transition-colors duration-150 " + (pathname === item.href ? "underline underline-offset-4" : "")}
                  >
                    {t("nav." + item.label.toLowerCase())}
                  </Link>
                );
              })}
            </nav>

            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden lg:flex items-center gap-1.5 rounded-md border border-[#e8eaed] hover:border-[#a48e7a] px-3 py-1.5 text-sm text-[#737373] hover:bg-[#f3f4f6] transition-colors"
              >
                <Search className="h-3.5 w-3.5" strokeWidth={1.5} />
                <span>{t("search.placeholder")}</span>
                <kbd className="ml-2 hidden sm:inline-flex items-center rounded border border-[#e8eaed] bg-[#f8f9fb] px-1.5 py-0.5 text-[10px] text-[#a3a3a3]">Ctrl+K</kbd>
              </button>
              <div className="hidden lg:block">
                <Button href="/contact/" variant="primary" size="md">{t("nav.contact")}</Button>
              </div>
              <button onClick={() => setSearchOpen(true)} className="lg:hidden p-2 rounded-md text-[#737373] hover:bg-[#f3f4f6]">
                <Search className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-md text-[#0d0d0d] hover:bg-[#f3f4f6]">
                {mobileOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {solutionsOpen && (
          <div ref={solutionsPanelRef} className="absolute left-1/2 transform -translate-x-1/2 top-full z-50 mx-auto max-w-7xl px-6 pb-4 lg:px-8">
            <div className="rounded-xl border border-[#e8eaed] bg-white shadow-lg px-8 py-6 max-w-md mx-auto">
              <ul className="space-y-2">
                {solutions.map((s) => (
                  <li key={s.id}>
                    <Link href={"/solutions/" + s.id} onClick={() => setSolutionsOpen(false)} className="block rounded-md px-4 py-2.5 text-[15px] font-medium text-[#0d0d0d] hover:bg-[#f3f4f6] transition-colors">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div ref={megaPanelRef} className="absolute left-1/2 transform -translate-x-1/2 top-full z-50 mx-auto max-w-7xl px-6 pb-4 lg:px-8">
          {megaOpen && (
            <div className="rounded-xl border border-[#e8eaed] bg-white shadow-lg px-8 py-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-6">
                {productModules.map((mod) => (
                  <div key={mod}>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#8c8c8c]">{mod}</p>
                    <ul className="space-y-2.5">
                      {products.filter((p) => p.module === mod).map((p) => (
                        <li key={p.id}>
                          <Link href={"/products/" + p.id} onClick={() => setMegaOpen(false)} className="text-[15px] font-medium text-[#0d0d0d] hover:text-[#8c8c8c] transition-colors duration-150">
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

        {mobileOpen && (
          <div className="border-t border-[#e8eaed] bg-white px-6 pb-6 pt-4 lg:hidden max-h-[calc(100vh-64px)] overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {mainNav.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-base font-semibold text-[#0d0d0d] hover:bg-[#f3f4f6]">
                  {t("nav." + item.label.toLowerCase())}
                </Link>
              ))}
              <div className="mt-3 border-t border-[#e8eaed] pt-4">
                <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-[#8c8c8c]">{t("nav.products")}</p>
                {products.map((p) => (
                  <Link key={p.id} href={"/products/" + p.id} onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-sm text-[#404040] hover:bg-[#f3f4f6]">
                    {p.name}
                  </Link>
                ))}
              </div>
              <div className="mt-3 border-t border-[#e8eaed] pt-4">
                <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-[#8c8c8c]">Solutions</p>
                {solutions.map((s) => (
                  <Link key={s.id} href={"/solutions/" + s.id} onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-sm text-[#404040] hover:bg-[#f3f4f6]">
                    {s.name}
                  </Link>
                ))}
              </div>
              <div className="mt-3 border-t border-[#e8eaed] pt-4">
                <button onClick={() => { setMobileOpen(false); setSearchOpen(true); }} className="w-full flex items-center justify-center gap-2 rounded-md border border-[#e8eaed] hover:border-[#a48e7a] px-3 py-2.5 text-sm font-medium text-[#0d0d0d] hover:bg-[#f3f4f6]">
                  <Search className="h-4 w-4" strokeWidth={1.5} />
                  {t("search.placeholder")}
                </button>
              </div>
              <div className="mt-4">
                <Button href="/contact/" variant="primary" size="md" className="w-full">{t("nav.contact")}</Button>
              </div>
            </nav>
          </div>
        )}
      </header>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}