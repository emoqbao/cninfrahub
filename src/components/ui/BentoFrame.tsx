import { type ReactNode } from "react";

export function BentoFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl relative border-b border-solid border-[#f0f0f0]">
      {/* Dashed vertical guide lines */}
      <div
        className="absolute top-0 left-0 bottom-0 w-px z-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to bottom, #f0f0f0 50%, transparent 50%)",
          backgroundSize: "1px 40px",
          backgroundRepeat: "repeat-y",
        }}
      />
      <div
        className="absolute top-0 right-0 bottom-0 w-px z-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to bottom, #f0f0f0 50%, transparent 50%)",
          backgroundSize: "1px 40px",
          backgroundRepeat: "repeat-y",
        }}
      />
      {children}
    </div>
  );
}
