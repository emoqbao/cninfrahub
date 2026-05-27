import { type ReactNode } from "react";

const GRID_COLS: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

const DASH_GRADIENT = "repeating-linear-gradient(to bottom, #f0f0f0 0px, #f0f0f0 20px, transparent 20px, transparent 40px)";

export function BentoGrid({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl relative border-b-[0.5px] border-solid border-[#f0f0f0]">
      {/* Left dashed vertical line */}
      <div
        className="absolute left-0 top-0 bottom-0 z-0 pointer-events-none"
        style={{ width: "0.5px", background: DASH_GRADIENT }}
      />
      {/* Right dashed vertical line */}
      <div
        className="absolute right-0 top-0 bottom-0 z-0 pointer-events-none"
        style={{ width: "0.5px", background: DASH_GRADIENT }}
      />
      {children}
    </div>
  );
}

export function BentoRow({
  children,
  variant = "solid",
  cols,
  first = false,
  className = "",
}: {
  children: ReactNode;
  variant?: "solid" | "dashed";
  cols?: 2 | 3 | 4;
  first?: boolean;
  className?: string;
}) {
  const borderClass = variant === "dashed" ? "border-dashed" : "border-solid";
  const topBorder = first ? "" : "border-t-[0.5px] ";

  return (
    <div
      className={`relative z-[1] ${topBorder}border-[#f0f0f0] ${borderClass} ${cols ? `grid ${GRID_COLS[cols]}` : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function BentoCell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative z-[2] border-r-[0.5px] border-solid border-[#f0f0f0] last:border-r-0 ${className}`}>
      {children}
    </div>
  );
}

export function BentoSpacer({ height = "h-20" }: { height?: string }) {
  return (
    <div
      className={`border-t-[0.5px] border-[#f0f0f0] border-solid ${height}`}
      aria-hidden="true"
    />
  );
}
