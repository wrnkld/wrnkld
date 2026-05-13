import { ReactNode } from "react";

interface TickerProps {
  items: string[];
  speed?: "slow" | "fast";
  className?: string;
}

export function Ticker({ items, speed = "slow", className = "" }: TickerProps) {
  // Repeat content enough times so the marquee always fills wide screens.
  // The track animates 0 → -50%, so the first half must be ≥ viewport width.
  const repeated = Array.from({ length: 8 }, (_, i) => i);
  // Keep perceived scroll speed constant regardless of how many items are in the
  // ticker. Baseline tuned to ~5 items at "slow" = 180s; scale linearly from there.
  const baseItems = 5;
  const baseDuration = speed === "fast" ? 90 : 180;
  const duration = Math.max(baseDuration, (baseDuration * items.length) / baseItems);
  const Row = (key: number) => (
    <span key={key} className="inline-flex items-center font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/80 px-2">
      {items.map((it, i) => (
        <span key={i} className="inline-flex items-center">
          {it}
          <span className="mx-4 text-live">·</span>
        </span>
      ))}
    </span>
  );
  return (
    <div className={`relative overflow-hidden border-y border-border/60 bg-secondary/40 ${className}`}>
      <div
        className="ticker-track py-2"
        style={{ animationDuration: `${duration}s` }}
      >
        {repeated.map((i) => Row(i))}
        {repeated.map((i) => Row(i + 100))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}


// Helper not exported as component but used elsewhere
export function _unused(_: ReactNode) { return null; }