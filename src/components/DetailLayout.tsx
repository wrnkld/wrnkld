import { ReactNode, Children, isValidElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Ticker, SignalBars } from "@/components/Ticker";

interface DetailLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  /** Legacy prop, ignored — kept so existing pages compile */
  colorClass?: string;
}

const CHANNEL_BY_SUBTITLE: Record<string, { num: string; name: string }> = {
  Work: { num: "01", name: "WORK" },
  "Design & AI": { num: "04", name: "DESIGN & AI" },
  About: { num: "03", name: "ABOUT" },
};

const STATUS_BY_TITLE: Record<string, string> = {
  "Monte Carlo": "ON AIR",
  Tanium: "RERUN",
  "Red Hat": "RERUN",
  SAS: "RERUN",
  Tools: "RERUN",
  Vibes: "RERUN",
  Sleeves: "RERUN",
  Experience: "ON AIR",
  Books: "ON AIR",
  Records: "ON AIR",
};

function isMediaElement(child: React.ReactElement<{ className?: string }>): boolean {
  const type = child.type as string | unknown;
  if (type === "img" || type === "video") return true;
  if (type === "div" && (child.props?.className ?? "").includes("grid")) return true;
  return false;
}

export function DetailLayout({ title, subtitle, children }: DetailLayoutProps) {
  const channel = subtitle ? CHANNEL_BY_SUBTITLE[subtitle] : undefined;
  const status = STATUS_BY_TITLE[title] ?? "ON AIR";

  const processedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;

    if (isMediaElement(child)) {
      return (
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative">
            {child}
            {/* broadcast vignette */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ boxShadow: "inset 0 0 90px 10px rgba(0,0,0,0.65)" }}
            />
          </div>
        </div>
      );
    }
    return <div className="max-w-3xl mx-auto px-6">{child}</div>;
  });

  const tickerItems = [
    title.toUpperCase(),
    channel ? `CH ${channel.num}` : "WRNKLD.TV",
    channel ? channel.name : "BROADCAST",
    "WRNKLD.TV",
    "NOW BROADCASTING",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground scanlines">
      {/* Top broadcast bar */}
      <div className="border-b border-border/60">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <Link to="/" className="hover:text-live transition-colors hover-channel">
            ← RETURN TO GUIDE
          </Link>
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <SignalBars />
            <span className="hidden md:flex items-center gap-2">
              {status === "ON AIR" ? (
                <span className="w-1.5 h-1.5 rounded-full bg-live blink inline-block" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full border border-foreground/60 inline-block" />
              )}
              <span className="text-foreground">{status}</span>
            </span>
            <DetailClock />
          </div>
        </div>
      </div>

      {/* NOW BROADCASTING chyron */}
      <div className="relative max-w-5xl mx-auto px-6 pt-10 md:pt-14">
        <div className="inline-block bg-foreground text-background px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] animate-chyron-in chyron-shadow">
          NOW BROADCASTING
        </div>
        <h1 className="font-display text-5xl md:text-7xl tracking-[0.02em] leading-none mt-4 text-foreground">
          {title.toUpperCase()}
        </h1>
        {channel && (
          <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            CH <span className="text-live">{channel.num}</span> · {channel.name}
          </div>
        )}
      </div>

      <main className="broadcast-content py-10 md:py-14 space-y-8 animate-fade-in">{processedChildren}</main>

      {/* Footer */}
      <footer className="border-t border-border/60 mt-16">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <Link to="/" className="hover:text-live transition-colors">
            ← RETURN TO GUIDE
          </Link>
          <span>WRNKLD<span className="text-live">.</span>TV</span>
        </div>
      </footer>

      {/* Bottom slow-scrolling ticker */}
      <Ticker items={tickerItems} />
    </div>
  );
}

function DetailClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const hh = now.getHours().toString().padStart(2, "0");
  const mm = now.getMinutes().toString().padStart(2, "0");
  const ss = now.getSeconds().toString().padStart(2, "0");
  return <span className="text-foreground tabular-nums">{hh}:{mm}:{ss}</span>;
}
