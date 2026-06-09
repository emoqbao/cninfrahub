"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface I18nContextType {
  lang: string;
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <I18nContext.Provider value={{ lang: "en" }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLanguage() {
  return useContext(I18nContext);
}