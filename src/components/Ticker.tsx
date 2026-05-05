import { ReactNode } from "react";

interface TickerProps {
  items: string[];
  speed?: "slow" | "fast";
  className?: string;
}

export function Ticker({ items, speed = "slow", className = "" }: TickerProps) {
  const sep = (
    <span className="mx-4 text-live">·</span>
  );
  const Row = (
    <span className="inline-flex items-center font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/80 px-2">
      {items.map((it, i) => (
        <span key={i} className="inline-flex items-center">
          {it}
          {sep}
        </span>
      ))}
    </span>
  );
  return (
    <div className={`relative overflow-hidden border-y border-border/60 bg-secondary/40 ${className}`}>
      <div className={`ticker-track ${speed === "fast" ? "ticker-track-fast" : ""} py-2`}>
        {Row}
        {Row}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

export function SignalBars({ active = 4 }: { active?: number }) {
  return (
    <div className="flex items-end gap-0.5 h-3" aria-hidden>
      {[1, 2, 3, 4].map((b) => (
        <span
          key={b}
          className={`w-0.5 ${b === 1 ? "h-1" : b === 2 ? "h-1.5" : b === 3 ? "h-2" : "h-3"} ${
            b <= active ? "bg-foreground" : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
}

// Helper not exported as component but used elsewhere
export function _unused(_: ReactNode) { return null; }