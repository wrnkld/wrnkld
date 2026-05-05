import { useEffect, useState } from "react";

const STORAGE_KEY = "wrnkld:cold-open-seen";

type Phase = "static" | "testcard" | "done";

export function ColdOpen() {
  // Skip if already played in this tab session
  const [phase, setPhase] = useState<Phase>(() => {
    return "done";
  });

  useEffect(() => {
    if (phase === "done") return;

    const skip = () => finish();
    const finish = () => {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setPhase("done");
    };

    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);
    window.addEventListener("touchstart", skip);

    let t1: number | undefined;
    let t2: number | undefined;
    if (phase === "static") {
      t1 = window.setTimeout(() => setPhase("testcard"), 1600);
    } else if (phase === "testcard") {
      t2 = window.setTimeout(() => finish(), 1400);
    }

    return () => {
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("touchstart", skip);
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black overflow-hidden select-none">
      {phase === "static" && (
        <>
          <div className="absolute inset-0 tv-static" />
          <div className="scan-bar" />
          <div className="absolute inset-0 vignette pointer-events-none" />
          <div className="absolute bottom-6 right-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
            Press any key to skip
          </div>
        </>
      )}

      {phase === "testcard" && <TestCard />}
    </div>
  );
}

function TestCard() {
  // Muted, dark broadcast color bars
  const bars = [
    "#3a3a3a", // gray
    "#7a6a1a", // mustard
    "#1a4a52", // teal
    "#2a4a1a", // forest
    "#4a1a3a", // plum
    "#5a1a1a", // deep red
    "#1a2a4a", // navy
  ];
  return (
    <div className="absolute inset-0 flex flex-col">
      {/* Color bars */}
      <div className="flex-1 flex">
        {bars.map((c) => (
          <div key={c} className="flex-1" style={{ backgroundColor: c }} />
        ))}
      </div>
      {/* Bottom strip */}
      <div className="h-[20%] bg-black flex items-center justify-center relative">
        <div className="text-center">
          <div className="font-display text-foreground text-5xl md:text-7xl tracking-[0.15em] leading-none">
            WRNKLD<span className="text-live">.</span>TV
          </div>
          <div className="mt-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/60">
            CH 04 · BROADCAST · 1080i · TEST PATTERN
          </div>
        </div>
        <div className="absolute top-3 left-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
          SMPTE
        </div>
        <div className="absolute top-3 right-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-live blink" /> LIVE
        </div>
      </div>
      <div className="absolute inset-0 vignette pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(to bottom, rgba(255,255,255,0.06) 0 1px, transparent 1px 3px)"
      }} />
      <div className="absolute bottom-2 right-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
        Any key to skip
      </div>
    </div>
  );
}
