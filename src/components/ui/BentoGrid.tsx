import { type ReactNode } from "react";

const GRID_COLS: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

export function BentoGrid({ children }: { children: ReactNode }) {
  return (
    <div className="bento-vert-lines mx-auto max-w-7xl border-b border-solid border-[#f0f0f0] [&>:first-child]:!border-t-0">
      {children}
    </div>
  );
}

export function BentoRow({
  children,
  variant = "solid",
  cols,
  className = "",
}: {
  children: ReactNode;
  variant?: "solid" | "dashed";
  cols?: 2 | 3 | 4;
  className?: string;
}) {
  const borderClass = variant === "dashed" ? "border-dashed" : "border-solid";

  return (
    <div
      className={`border-t border-[#f0f0f0] ${borderClass} ${cols ? `grid ${GRID_COLS[cols]}` : ""} ${className}`}
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
    <div className={`border-r border-[#f0f0f0] last:border-r-0 ${className}`}>
      {children}
    </div>
  );
}

export function BentoSpacer({ height = "h-20" }: { height?: string }) {
  return (
    <div
      className={`border-t border-[#f0f0f0] border-solid ${height}`}
      aria-hidden="true"
    />
  );
}
