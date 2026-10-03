"use client";

import { useRef, useState } from "react";
import { RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";

interface ArchitectureDiagramProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function ArchitectureDiagram({ src, alt, width = 1582, height = 816 }: ArchitectureDiagramProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [zoom, setZoom] = useState(1);

  return (
    <>
      <button
        type="button"
        className="group relative w-full cursor-zoom-in rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Enlarge ${alt}`}
      >
        {/* Static export has no image optimizer, so this stays a plain img. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={width} height={height} loading="lazy" className="h-auto w-full rounded-lg" />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-3 py-1.5 text-sm font-medium text-ink shadow-sm transition-colors group-hover:bg-white">
          <ZoomIn className="h-4 w-4" aria-hidden="true" /> View larger
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Architecture diagram"
        onClose={() => setZoom(1)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        className="m-auto w-[min(96vw,1600px)] max-w-none rounded-xl border border-border bg-white p-0 text-ink shadow-2xl backdrop:bg-black/70"
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3">
          <span className="text-sm font-semibold">Architecture diagram</span>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setZoom((value) => Math.max(1, value - 0.5))} disabled={zoom === 1} aria-label="Zoom out" className="rounded-md p-2 hover:bg-surface-alt disabled:opacity-40"><ZoomOut className="h-5 w-5" /></button>
            <span className="min-w-12 text-center text-sm tabular-nums">{Math.round(zoom * 100)}%</span>
            <button type="button" onClick={() => setZoom((value) => Math.min(3, value + 0.5))} disabled={zoom === 3} aria-label="Zoom in" className="rounded-md p-2 hover:bg-surface-alt disabled:opacity-40"><ZoomIn className="h-5 w-5" /></button>
            <button type="button" onClick={() => setZoom(1)} disabled={zoom === 1} aria-label="Fit to window" className="rounded-md p-2 hover:bg-surface-alt disabled:opacity-40"><RotateCcw className="h-5 w-5" /></button>
            <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close diagram" className="ml-1 rounded-md p-2 hover:bg-surface-alt"><X className="h-5 w-5" /></button>
          </div>
        </div>
        <div className="max-h-[calc(100vh-8rem)] overflow-auto bg-white p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} width={width} height={height} className="h-auto max-w-none" style={{ width: `${zoom * 100}%` }} />
        </div>
      </dialog>
    </>
  );
}
