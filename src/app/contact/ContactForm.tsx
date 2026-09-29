"use client";

import Script from "next/script";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const TALLY_EMBED_URL =
  "https://tally.so/embed/pb8OW8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export default function ContactForm() {
  return (
    <div className="rounded-xl border border-border p-6 lg:p-8">
      <h2 className="text-xl font-semibold text-ink">Send us a message</h2>
      <div className="mt-6">
        <iframe
          data-tally-src={TALLY_EMBED_URL}
          loading="eager"
          width="100%"
          height="872"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="Send us a message"
          className="w-full border-0"
        />
      </div>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.Tally?.loadEmbeds()}
      />
    </div>
  );
}
