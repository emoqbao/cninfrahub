"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Search, X, ArrowRight } from 'lucide-react'
import { useRouter } from "next/navigation";
import { search, type SearchResult } from "@/lib/search";

interface SearchModalProps {
  onClose: () => void;
}

const FOCUSABLE_SELECTOR =
  'input:not([disabled]), button:not([disabled]), a[href]:not([tabindex="-1"])';

export default function SearchModal({ onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Focus the input on open, and hand focus back to the trigger on close.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  // Close on Escape, keep Tab inside the dialog, and drive the result list.
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        if (!nodes || nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        return;
      }
      if (results.length === 0) return;
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
  }, [results, selectedIndex, onClose, router]);

  // Search as you type
  const handleQuery = useCallback((value: string) => {
    setQuery(value);
    setResults(search(value));
    setSelectedIndex(0);
  }, []);

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-[#0d0d0d]/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site search"
        className="fixed inset-x-0 top-[15%] mx-auto max-w-lg"
      >
        <div className="mx-4 rounded-xl border border-[#e8eaed] bg-white shadow-2xl overflow-hidden">
          {/* Input */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#e8eaed]">
            <Search className="h-4 w-4 text-[#a3a3a3] flex-shrink-0" strokeWidth={1.5} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              role="combobox"
              aria-label="Search products and solutions"
              aria-expanded={query.length >= 2}
              aria-controls="search-results"
              aria-autocomplete="list"
              aria-activedescendant={
                results[selectedIndex]
                  ? `search-result-${results[selectedIndex].id}`
                  : undefined
              }
              onChange={(e) => handleQuery(e.target.value)}
              placeholder="Search products, solutions..."
              className="flex-1 text-sm bg-transparent outline-none text-[#0d0d0d] placeholder:text-[#a3a3a3]"
            />
            <kbd className="hidden sm:inline-flex items-center rounded border border-[#e8eaed] bg-[#f8f9fb] px-1.5 py-0.5 text-[10px] text-[#a3a3a3]">
              esc
            </kbd>
            <button
              onClick={onClose}
              aria-label="Close search"
              className="text-[#a3a3a3] hover:text-[#0d0d0d] transition-colors"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>

          {/* The empty state sits outside the listbox: a listbox may only
              contain options and groups. */}
          {query.length >= 2 && results.length === 0 && (
            <p role="status" className="px-4 py-6 text-center text-sm text-[#a3a3a3]">
              No results found
            </p>
          )}

          {query.length >= 2 && results.length > 0 && (
            <ul
              id="search-results"
              role="listbox"
              aria-label="Search results"
              className="max-h-72 overflow-y-auto py-2"
            >
              {results.map((result, i) => (
                <li
                  key={result.id}
                  id={`search-result-${result.id}`}
                  role="option"
                  aria-selected={i === selectedIndex}
                >
                  <Link
                    href={result.href}
                    onClick={onClose}
                    tabIndex={-1}
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
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
