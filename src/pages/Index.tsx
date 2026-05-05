import { useEffect, useRef, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ColdOpen } from "@/components/ColdOpen";

type Program = {
  title: string;
  logline: string;
  airtime: string;
  to?: string; // undefined = OFF AIR
};

type Channel = {
  num: string;
  name: string;
  programs: Program[];
};

const CHANNELS: Channel[] = [
  {
    num: "01",
    name: "WORK",
    programs: [
      { title: "Monte Carlo", logline: "Data observability. Still on air.", airtime: "2022 — NOW", to: "/work/montecarlo" },
      { title: "Tanium",      logline: "Filmed during COVID. Do not adjust your set.", airtime: "2019 — 2022", to: "/work/tanium" },
      { title: "Red Hat",     logline: "Enterprise. Shot on location.", airtime: "2017 — 2019", to: "/work/redhat" },
      { title: "SAS",         logline: "A period piece.", airtime: "2004 — 2017", to: "/work/sas" },
    ],
  },
  {
    num: "02",
    name: "DESIGN & AI",
    programs: [
      { title: "Pt 1 → Tools",   logline: "What I'm actually using.", airtime: "EP 01 · 12 MIN", to: "/designai/tools" },
      { title: "Pt 2 → Vibes",   logline: "What I think is happening.", airtime: "EP 02 · 9 MIN",  to: "/designai/vibes" },
      { title: "Pt 3 → Sleeves", logline: "How it turned into a real thing.", airtime: "EP 03 · 14 MIN", to: "/designai/sleeves" },
    ],
  },
  {
    num: "03",
    name: "BULLSHIT",
    programs: [
      { title: "Sleeves",    logline: "Track albums with friends. Somehow works.", airtime: "ON AIR" },
      { title: "StudyDrop",  logline: "Learning thing. Jury's out.", airtime: "PILOT" },
      { title: "Slacker",    logline: "Built this instead of something responsible.", airtime: "RERUN" },
    ],
  },
  {
    num: "04",
    name: "ABOUT",
    programs: [
      { title: "Experience", logline: "20 years. Still going.", airtime: "FEATURED", to: "/about/experience" },
      { title: "Books",      logline: "168 and counting. Yellow = recommended.", airtime: "ARCHIVE", to: "/about/books" },
      { title: "Records",    logline: "The other thing I collect.", airtime: "ARCHIVE", to: "/about/records" },
    ],
  },
];

export default function Index() {
  const navigate = useNavigate();
  const [focus, setFocus] = useState<{ ch: number; p: number }>({ ch: 0, p: 0 });
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const tileRefs = useRef<Array<Array<HTMLAnchorElement | HTMLDivElement | null>>>([]);

  const move = useCallback((dCh: number, dP: number) => {
    setFocus((cur) => {
      const ch = Math.max(0, Math.min(CHANNELS.length - 1, cur.ch + dCh));
      const len = CHANNELS[ch].programs.length;
      let p = cur.p + dP;
      if (dCh !== 0) p = Math.min(p, len - 1);
      p = Math.max(0, Math.min(len - 1, p));
      return { ch, p };
    });
  }, []);

  const tuneIn = useCallback(() => {
    const prog = CHANNELS[focus.ch].programs[focus.p];
    if (prog?.to) navigate(prog.to);
  }, [focus, navigate]);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":    e.preventDefault(); move(-1, 0); break;
        case "ArrowDown":  e.preventDefault(); move(1, 0);  break;
        case "ArrowLeft":  e.preventDefault(); move(0, -1); break;
        case "ArrowRight": e.preventDefault(); move(0, 1);  break;
        case "Enter":
        case " ":          e.preventDefault(); tuneIn();    break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [move, tuneIn]);

  // scroll selected tile into view
  useEffect(() => {
    const el = tileRefs.current[focus.ch]?.[focus.p];
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [focus]);

  return (
    <div className="min-h-screen bg-background text-foreground scanlines flicker">
      <ColdOpen />

      {/* Top broadcast header */}
      <header className="border-b border-border/60">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-6">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-xl md:text-2xl tracking-[0.15em]">
              WRNKLD<span className="text-live">.</span>TV
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden sm:inline">
              The Programming Guide
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="hidden md:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-live blink" />
              <span className="text-foreground">LIVE</span>
            </span>
            <Clock />
          </div>
        </div>
      </header>

      {/* Host intro */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pt-8 md:pt-10 pb-6 grid md:grid-cols-[1fr_auto] gap-6 items-end">
        <div className="space-y-3 max-w-2xl">
          <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            NOW BROADCASTING · YOUR HOST
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-none tracking-tight">
            MATTHEW STEVENS
          </h1>
          <p className="font-prose text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
            Head of Design at <a href="https://montecarlodata.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-live transition-colors">Monte Carlo</a>.
            Recently built <a href="https://sleeves.app" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-live transition-colors">Sleeves</a>,
            an app for tracking albums you love with friends.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-muted-foreground">SAY HELLO →</span>{" "}
            <a href="mailto:hello@wrnkld.tv" className="text-foreground hover:text-live transition-colors">hello@wrnkld.tv</a>
          </p>
        </div>
      </section>

      {/* The Guide */}
      <main className="max-w-[1400px] mx-auto px-4 md:px-8 pb-32">
        <div className="border-t border-border/60 pt-6 mb-3 flex items-center justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            TONIGHT'S PROGRAMMING
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground hidden md:block">
            ↑↓ CHANNEL · ←→ PROGRAM · ENTER TUNE IN
          </div>
        </div>

        <div className="divide-y divide-border/60">
          {CHANNELS.map((ch, ci) => (
            <div
              key={ch.num}
              ref={(el) => (rowRefs.current[ci] = el)}
              className="grid grid-cols-[88px_1fr] md:grid-cols-[140px_1fr] gap-3 md:gap-6 py-5"
            >
              {/* Channel label */}
              <div className="pt-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-live">CH</span>
                  <span className="font-display text-3xl md:text-4xl text-live leading-none">{ch.num}</span>
                </div>
                <div className="font-display text-base md:text-xl text-foreground tracking-[0.08em] mt-1 leading-tight">
                  {ch.name}
                </div>
              </div>

              {/* Programs row */}
              <div className="overflow-x-auto scrollbar-hide -mx-4 md:mx-0 px-4 md:px-0">
                <div className="flex gap-3 md:gap-4 min-w-max">
                  {ch.programs.map((prog, pi) => {
                    const isFocused = focus.ch === ci && focus.p === pi;
                    const offAir = !prog.to;
                    return (
                      <ProgramTile
                        key={prog.title}
                        ref={(el) => {
                          tileRefs.current[ci] = tileRefs.current[ci] || [];
                          tileRefs.current[ci][pi] = el;
                        }}
                        prog={prog}
                        focused={isFocused}
                        offAir={offAir}
                        onFocus={() => setFocus({ ch: ci, p: pi })}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NOW SELECTED chyron */}
        <SelectedChyron channel={CHANNELS[focus.ch]} program={CHANNELS[focus.ch].programs[focus.p]} />
      </main>

      {/* Decorative D-pad */}
      <DPad
        onUp={() => move(-1, 0)}
        onDown={() => move(1, 0)}
        onLeft={() => move(0, -1)}
        onRight={() => move(0, 1)}
        onOk={tuneIn}
      />
    </div>
  );
}

import { forwardRef } from "react";

const ProgramTile = forwardRef<HTMLAnchorElement | HTMLDivElement, {
  prog: Program;
  focused: boolean;
  offAir: boolean;
  onFocus: () => void;
}>(function ProgramTile({ prog, focused, offAir, onFocus }, ref) {
  const base =
    "relative w-[260px] md:w-[300px] shrink-0 p-4 border bg-card transition-all duration-150 group select-none";
  const state = focused
    ? "border-live shadow-[0_0_0_1px_hsl(var(--primary)),0_0_30px_-10px_hsl(var(--primary))] -translate-y-0.5"
    : "border-border/60 hover:border-foreground/40";
  const dim = offAir ? "opacity-50" : "";

  const inner = (
    <>
      <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
        <span>{prog.airtime}</span>
        {offAir ? (
          <span className="text-muted-foreground">OFF AIR</span>
        ) : (
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-live" />
            <span className="text-foreground/80">ON AIR</span>
          </span>
        )}
      </div>
      <div className="font-display text-2xl md:text-3xl text-foreground leading-none tracking-[0.02em] mb-3">
        {prog.title.toUpperCase()}
      </div>
      <div className="font-mono text-xs text-muted-foreground leading-relaxed min-h-[2.5em]">
        {prog.logline}
      </div>
      {focused && (
        <div className="absolute -bottom-px left-0 right-0 h-px bg-live" />
      )}
    </>
  );

  if (offAir) {
    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        onMouseEnter={onFocus}
        className={`${base} ${state} ${dim} cursor-not-allowed`}
        aria-disabled
      >
        {inner}
      </div>
    );
  }
  return (
    <Link
      to={prog.to!}
      ref={ref as React.Ref<HTMLAnchorElement>}
      onMouseEnter={onFocus}
      onFocus={onFocus}
      className={`${base} ${state} hover:bg-card/80`}
    >
      {inner}
    </Link>
  );
});

function SelectedChyron({ channel, program }: { channel: Channel; program: Program }) {
  return (
    <div
      key={`${channel.num}-${program.title}`}
      className="fixed left-4 right-4 md:left-8 md:right-auto bottom-4 md:bottom-6 z-40 max-w-md animate-chyron-in chyron-shadow"
    >
      <div className="bg-foreground text-background px-4 py-2.5 flex items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/60">
          NOW SELECTED
        </span>
        <span className="font-display text-base tracking-[0.08em]">
          CH {channel.num} · {program.title.toUpperCase()}
        </span>
      </div>
    </div>
  );
}

function DPad({
  onUp, onDown, onLeft, onRight, onOk,
}: {
  onUp: () => void; onDown: () => void; onLeft: () => void; onRight: () => void; onOk: () => void;
}) {
  const btn = "bg-secondary hover:bg-muted active:bg-live border border-border/60 flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors";
  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-40 select-none">
      <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-2 text-right">
        WRNKLD REMOTE
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-1 w-28 h-28">
        <div />
        <button aria-label="Up" onClick={onUp} className={btn}>▲</button>
        <div />
        <button aria-label="Left" onClick={onLeft} className={btn}>◀</button>
        <button aria-label="OK" onClick={onOk} className="bg-live text-foreground border border-live flex items-center justify-center text-[10px] font-mono tracking-[0.2em] hover:brightness-110 transition">OK</button>
        <button aria-label="Right" onClick={onRight} className={btn}>▶</button>
        <div />
        <button aria-label="Down" onClick={onDown} className={btn}>▼</button>
        <div />
      </div>
    </div>
  );
}

function Clock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  const hh = now.getHours().toString().padStart(2, "0");
  const mm = now.getMinutes().toString().padStart(2, "0");
  return <span className="text-foreground">{hh}:{mm}</span>;
}
