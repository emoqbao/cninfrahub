"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Search, X, ArrowRight } from 'lucide-react'
import { useRouter } from "next/navigation";
import { search, type SearchResult } from "@/lib/search";
import { t, type Language } from "@/lib/i18n/translations";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
  lang: Language;
}

export default function SearchModal({ open, onClose, lang }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Focus input and reset on open
  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      }
      if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        router.push(results[selectedIndex].href);
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, results, selectedIndex, onClose]);

  // Search as you type
  const handleQuery = useCallback((value: string) => {
    setQuery(value);
    setResults(search(value));
    setSelectedIndex(0);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-[#0d0d0d]/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-x-0 top-[15%] mx-auto max-w-lg">
        <div className="mx-4 rounded-xl border border-[#e8eaed] bg-white shadow-2xl overflow-hidden">
          {/* Input */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#e8eaed]">
            <Search className="h-4 w-4 text-[#a3a3a3] flex-shrink-0" strokeWidth={1.5} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => handleQuery(e.target.value)}
              placeholder={t("search.placeholder", lang)}
              className="flex-1 text-sm bg-transparent outline-none text-[#0d0d0d] placeholder:text-[#a3a3a3]"
            />
            <kbd className="hidden sm:inline-flex items-center rounded border border-[#e8eaed] bg-[#f8f9fb] px-1.5 py-0.5 text-[10px] text-[#a3a3a3]">
              esc
            </kbd>
            <button onClick={onClose} className="text-[#a3a3a3] hover:text-[#0d0d0d] transition-colors">
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>

          {/* Results */}
          {query.length >= 2 && (
            <ul ref={listRef} className="max-h-72 overflow-y-auto py-2">
              {results.length === 0 ? (
                <li className="px-4 py-6 text-center text-sm text-[#a3a3a3]">
                  {t("search.noResults", lang)}
                </li>
              ) : (
                results.map((result, i) => (
                  <li key={result.id}>
                    <Link
                      href={result.href}
                      onClick={onClose}
                      className={`flex items-start gap-3 px-4 py-3 transition-colors ${
                        i === selectedIndex ? "bg-[#f3f4f6]" : "hover:bg-[#f8f9fb]"
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-[#0d0d0d]">{result.title}</span>
                          <span className="text-[10px] uppercase tracking-wider text-[#a3a3a3] bg-[#f3f4f6] rounded px-1.5 py-0.5 flex-shrink-0">
                            {result.category}
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs text-[#737373] line-clamp-1">{result.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-[#d4d4d4] flex-shrink-0 mt-0.5" />
                    </Link>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
