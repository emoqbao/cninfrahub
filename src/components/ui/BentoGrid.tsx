import { type ReactNode } from "react";

const GRID_COLS: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

export function BentoGrid({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl relative border-b border-solid border-[#f0f0f0]">
      {/* Cloudflare-style dashed vertical lines: div + linear-gradient bg */}
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
  const topBorder = first ? "" : "border-t ";

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
    <div className={`relative z-[2] border-r border-solid border-[#f0f0f0] first:border-l ${className}`}>
      {children}
    </div>
  );
}

export function BentoSpacer({ height = "h-20" }: { height?: string }) {
  return (
    <div
      className={`relative z-[1] border-t border-solid border-[#f0f0f0] ${height}`}
      aria-hidden="true"
    />
  );
}
