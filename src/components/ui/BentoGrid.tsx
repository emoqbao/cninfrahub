import { type ReactNode } from "react";

const GRID_COLS: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

export function BentoGrid({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl relative border-b-[0.5px] border-solid border-[#f0f0f0]">
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
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
    <div className={`relative z-[2] -ml-[0.5px] first:ml-0 border-[0.5px] border-solid border-[#f0f0f0] ${className}`}>
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
