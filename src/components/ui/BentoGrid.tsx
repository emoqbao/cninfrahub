import { type ReactNode } from "react";

const GRID_COLS: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

export function BentoGrid({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl relative border-[0.5px] border-solid border-[#f0f0f0]">
      {/* SVG dashed vertical guide lines at z-0, behind content */}
      <svg
        className="absolute inset-0 pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="0" x2="0" y2="100%" stroke="#f0f0f0" strokeWidth="0.5" strokeDasharray="20 20" />
        <line x1="100%" y1="0" x2="100%" y2="100%" stroke="#f0f0f0" strokeWidth="0.5" strokeDasharray="20 20" />
      </svg>
      {children}
    </div>
  );
}

export function BentoRow({
  children,
  cols,
  first = false,
  className = "",
}: {
  children: ReactNode;
  cols?: 2 | 3 | 4;
  first?: boolean;
  className?: string;
}) {
  const topBorder = first ? "" : "border-t-[0.5px] ";

  return (
    <div
      className={`relative z-[1] ${topBorder}border-solid border-[#f0f0f0] ${cols ? `grid ${GRID_COLS[cols]}` : ""} ${className}`}
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
    <div className={`relative z-[2] border-r-[0.5px] border-solid border-[#f0f0f0] first:border-l-[0.5px] ${className}`}>
      {children}
    </div>
  );
}

export function BentoSpacer({ height = "h-20" }: { height?: string }) {
  return (
    <div
      className={`relative z-[1] border-t-[0.5px] border-solid border-[#f0f0f0] ${height}`}
      aria-hidden="true"
    />
  );
}
