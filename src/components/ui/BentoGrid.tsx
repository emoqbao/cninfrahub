import { type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  BentoGrid – full‑width outer border (1px #f0f0f0)                 */
/* ------------------------------------------------------------------ */
export function BentoGrid({ children }: { children: ReactNode }) {
  return (
    <div className="bento-grid w-full border border-[#f0f0f0]">
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  BentoRow – horizontal divider                                      */
/*  variant: "solid" (1px solid) or "dashed" (1px dashed)              */
/* ------------------------------------------------------------------ */
export function BentoRow({
  children,
  variant = "solid",
  cols,
  className = "",
}: {
  children: ReactNode;
  variant?: "solid" | "dashed";
  cols?: number;
  className?: string;
}) {
  const borderClass = variant === "dashed" ? "border-dashed" : "border-solid";
  const gridClass = cols ? `grid grid-cols-${cols}` : "";

  return (
    <div
      className={`bento-row border-t border-[#f0f0f0] ${borderClass} ${gridClass} ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  BentoCell – vertical divider (right border, last child none)       */
/* ------------------------------------------------------------------ */
export function BentoCell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`bento-cell border-r border-[#f0f0f0] last:border-r-0 ${className}`}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  BentoSpacer – breathing area with visible grid lines               */
/* ------------------------------------------------------------------ */
export function BentoSpacer({ height = "h-20" }: { height?: string }) {
  return (
    <div
      className={`bento-row border-t border-[#f0f0f0] border-solid ${height}`}
      aria-hidden="true"
    />
  );
}
