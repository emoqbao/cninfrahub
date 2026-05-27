"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { products } from "@/lib/products";
import { solutions } from "@/lib/solutions";
import { useLanguage } from "@/lib/i18n/context";
import { t } from "@/lib/i18n/translations";

function useScrollIfActive() {
  const pathname = usePathname();
  return (e: React.MouseEvent, href: string) => {
    if (pathname === href || (href !== "/" && pathname.startsWith(href))) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
}

export function FooterBrand() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8">
      <Link href="/" className="inline-flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-bold text-[#0d0d0d]">
          CIH
        </div>
        <span className="text-lg font-semibold tracking-tight text-white">CN-INFRA HUB</span>
      </Link>
      <FooterTagline />
    </div>
  );
}

function FooterTagline() {
  const { lang } = useLanguage();
  return <p className="mt-3 text-sm text-[#a3a3a3]">{t("footer.tagline", lang)}</p>;
}

export function FooterProductsColumn() {
  const scrollIfActive = useScrollIfActive();
  const { lang } = useLanguage();
  return (
    <div className="px-6 py-10">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#737373]">
        {t("footer.products", lang)}
      </p>
      <ul className="space-y-2.5">
        {products.map((p) => (
          <li key={p.id}>
            <Link
              href={`/products/${p.id}`}
              onClick={(e) => scrollIfActive(e, `/products/${p.id}`)}
              className="text-sm text-[#d4d4d4] hover:text-white transition-colors"
            >
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FooterSolutionsColumn() {
  const scrollIfActive = useScrollIfActive();
  const { lang } = useLanguage();
  return (
    <div className="px-6 py-10">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#737373]">
        {t("footer.solutions", lang)}
      </p>
      <ul className="space-y-2.5">
        {solutions.map((s) => (
          <li key={s.id}>
            <Link
              href={`/solutions/${s.id}`}
              onClick={(e) => scrollIfActive(e, `/solutions/${s.id}`)}
              className="text-sm text-[#d4d4d4] hover:text-white transition-colors"
            >
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FooterResourcesColumn() {
  const scrollIfActive = useScrollIfActive();
  const { lang } = useLanguage();
  return (
    <div className="px-6 py-10">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#737373]">
        {t("footer.resources", lang)}
      </p>
      <ul className="space-y-2.5">
        <li>
          <Link href="/resources/" onClick={(e) => scrollIfActive(e, "/resources/")} className="text-sm text-[#d4d4d4] hover:text-white transition-colors">
            {t("footer.whitePapers", lang)}
          </Link>
        </li>
        <li>
          <Link href="/resources/" onClick={(e) => scrollIfActive(e, "/resources/")} className="text-sm text-[#d4d4d4] hover:text-white transition-colors">
            {t("footer.caseStudies", lang)}
          </Link>
        </li>
        <li>
          <Link href="/resources/" onClick={(e) => scrollIfActive(e, "/resources/")} className="text-sm text-[#d4d4d4] hover:text-white transition-colors">
            {t("footer.guides", lang)}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export function FooterCompanyColumn() {
  const scrollIfActive = useScrollIfActive();
  const { lang } = useLanguage();
  return (
    <div className="px-6 py-10">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#737373]">
        {t("footer.company", lang)}
      </p>
      <ul className="space-y-2.5">
        <li>
          <Link href="/about/" onClick={(e) => scrollIfActive(e, "/about/")} className="text-sm text-[#d4d4d4] hover:text-white transition-colors">
            {t("footer.about", lang)}
          </Link>
        </li>
        <li>
          <Link href="/contact/" onClick={(e) => scrollIfActive(e, "/contact/")} className="text-sm text-[#d4d4d4] hover:text-white transition-colors">
            {t("footer.contact", lang)}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export function FooterCopyright() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-[#737373] lg:flex-row lg:justify-between lg:px-8">
      <p>&copy; {new Date().getFullYear()} CN-Infra Hub. All rights reserved.</p>
      <a href="mailto:info@cninfrahub.com" className="hover:text-white transition-colors">
        info@cninfrahub.com
      </a>
    </div>
  );
}
