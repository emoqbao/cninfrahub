"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const TALLY_FORM_ID = "pb8OW8";
const TALLY_FORM_URL = `https://tally.so/r/${TALLY_FORM_ID}`;

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const TALLY_EMBED_URL =
  `https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

export default function ContactForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (
        event.origin === "https://tally.so" &&
        event.source === iframeRef.current?.contentWindow &&
        typeof event.data === "string" &&
        event.data.includes("Tally.FormLoaded")
      ) {
        setIsLoaded(true);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="rounded-xl border border-border p-6 lg:p-8">
      <h2 className="text-xl font-semibold text-ink">Send us a message</h2>
      <div className="relative mt-6">
        {!isLoaded && (
          <div className="absolute inset-0 z-10 bg-white">
            <p role="status" className="text-sm text-subtle">Loading the inquiry form…</p>
            <a
              href={TALLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white hover:opacity-80"
            >
              Open the form directly
            </a>
            <div aria-hidden="true" className="mt-8 animate-pulse space-y-7">
              <div className="grid gap-5 sm:grid-cols-2">
                {Array.from({ length: 4 }, (_, index) => (
                  <div key={index} className={index > 1 ? "sm:col-span-2" : ""}>
                    <div className="mb-2 h-3 w-20 rounded bg-slate-100" />
                    <div className="h-11 rounded-md bg-slate-100" />
                  </div>
                ))}
              </div>
              <div>
                <div className="mb-4 h-3 w-28 rounded bg-slate-100" />
                <div className="grid gap-4 sm:grid-cols-2">
                  {Array.from({ length: 14 }, (_, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-4 w-4 shrink-0 rounded bg-slate-100" />
                      <div className="h-3 w-24 rounded bg-slate-100" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-28 rounded-md bg-slate-100" />
            </div>
          </div>
        )}
        <iframe
          ref={iframeRef}
          data-tally-src={TALLY_EMBED_URL}
          loading="lazy"
          width="100%"
          height="872"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="Send us a message"
          tabIndex={isLoaded ? 0 : -1}
          aria-hidden={!isLoaded}
          className={isLoaded ? "block w-full border-0" : "block w-full border-0 opacity-0"}
        />
      </div>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onReady={() => window.Tally?.loadEmbeds()}
      />
    </div>
  );
}
