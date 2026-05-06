import { useEffect, useRef, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ColdOpen } from "@/components/ColdOpen";
import { Ticker, SignalBars } from "@/components/Ticker";

type Status = "ON AIR" | "RERUN" | "ARCHIVE" | "PILOT" | "LIVE" | "OFF AIR" | "COLOR BARS" | "SNOW" | "STANDBY";

type Program = {
  title: string;
  logline: string;
  airtime: string;
  to?: string; // undefined = OFF AIR
  href?: string; // external URL (opens in new tab)
  thumb?: string;
  status: Status;
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
      { title: "SAS",         logline: "A period piece.", airtime: "2011 — 2016", to: "/work/sas", status: "ARCHIVE" },
      { title: "Red Hat",     logline: "Enterprise. Shot on location.", airtime: "2016 — 2019", to: "/work/redhat", status: "RERUN" },
      { title: "Tanium",      logline: "Filmed during COVID. Do not adjust your set.", airtime: "2019 — 2021", to: "/work/tanium", status: "RERUN" },
      { title: "Monte Carlo", logline: "Data observability. Still on air.", airtime: "2022 — NOW", to: "/work/montecarlo", status: "ON AIR" },
    ],
  },
  {
    num: "04",
    name: "DESIGN & AI",
    programs: [
      { title: "Pt 1 → Tools",   logline: "What I'm actually using.", airtime: "EP 01 · 12 MIN", to: "/designai/tools", status: "ON AIR" },
      { title: "Pt 2 → Vibes",   logline: "What I think is happening.", airtime: "EP 02 · 9 MIN",  to: "/designai/vibes", status: "ON AIR" },
      { title: "Pt 3 → Sleeves", logline: "How it turned into a real thing.", airtime: "EP 03 · 14 MIN", to: "/designai/sleeves", status: "ON AIR" },
    ],
  },
  {
    num: "02",
    name: "BULLSHIT",
    programs: [
      { title: "Sleeves",    logline: "Track albums with friends. Somehow works.", airtime: "ON AIR", href: "https://sleeves.app", status: "ON AIR" },
      { title: "StudyDrop",  logline: "Learning thing. Jury's out.", airtime: "PILOT", href: "https://studydrop.app", status: "PILOT" },
      { title: "Slacker",    logline: "Built this instead of something responsible.", airtime: "PILOT", status: "PILOT" },
    ],
  },
  {
    num: "03",
    name: "ABOUT",
    programs: [
      { title: "Experience", logline: "20 years. Still going.", airtime: "FEATURED", to: "/about/experience", status: "ON AIR" },
      { title: "Books",      logline: "168 and counting. Red = recommended.", airtime: "ARCHIVE", to: "/about/books", status: "LIVE" },
      { title: "Records",    logline: "The other thing I collect.", airtime: "ARCHIVE", to: "/about/records", status: "LIVE" },
    ],
  },
];

// Order: Work, Bullshit, About, Design & AI (bottom)
const ALL_CHANNELS: Channel[] = [CHANNELS[0], CHANNELS[2], CHANNELS[3], CHANNELS[1]];

const TICKER_ITEMS = [
  "WRNKLD.TV",
  "TONIGHT'S PROGRAMMING",
  "CH 01 WORK",
  "CH 02 BULLSHIT",
  "CH 03 ABOUT",
  "CH 04 DESIGN & AI",
  "NOW BROADCASTING: MATTHEW STEVENS",
  "HEAD OF DESIGN",
  "20 YEARS",
  "CURRENTLY AT MONTE CARLO",
  "SIGNAL STRONG",
  "0 LINKEDIN POSTS THIS YEAR",
];

export default function Index() {
  const navigate = useNavigate();
  const [focus, setFocus] = useState<{ ch: number; p: number }>({ ch: 0, p: ALL_CHANNELS[0].programs.length - 1 });
  const inputModeRef = useRef<"keyboard" | "mouse">("keyboard");
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const tileRefs = useRef<Array<Array<HTMLAnchorElement | HTMLDivElement | null>>>([]);
  const heroLinkRef = useRef<HTMLAnchorElement | null>(null);
  const belowGridRef = useRef<HTMLDivElement | null>(null);

  const move = useCallback((dCh: number, dP: number): "escape-up" | "escape-down" | null => {
    let escape: "escape-up" | "escape-down" | null = null;
    setFocus((cur) => {
      const nextCh = cur.ch + dCh;
      if (nextCh < 0) { escape = "escape-up"; return cur; }
      if (nextCh > ALL_CHANNELS.length - 1) { escape = "escape-down"; return cur; }
      const ch = nextCh;
      const len = ALL_CHANNELS[ch].programs.length;
      let p = cur.p + dP;
      if (dCh !== 0) p = Math.min(p, len - 1);
      p = Math.max(0, Math.min(len - 1, p));
      return { ch, p };
    });
    return escape;
  }, []);

  const tuneIn = useCallback(() => {
    const prog = ALL_CHANNELS[focus.ch].programs[focus.p];
    if (prog?.to) navigate(prog.to);
    else if (prog?.href) window.open(prog.href, "_blank", "noopener,noreferrer");
  }, [focus, navigate]);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      let escaped: "escape-up" | "escape-down" | null = null;
      switch (e.key) {
        case "ArrowUp":    e.preventDefault(); inputModeRef.current = "keyboard"; escaped = move(-1, 0); break;
        case "ArrowDown":  e.preventDefault(); inputModeRef.current = "keyboard"; escaped = move(1, 0);  break;
        case "ArrowLeft":  e.preventDefault(); inputModeRef.current = "keyboard"; move(0, -1); break;
        case "ArrowRight": e.preventDefault(); inputModeRef.current = "keyboard"; move(0, 1);  break;
        case "Enter":
        case " ":          e.preventDefault(); tuneIn();    break;
      }
      if (escaped === "escape-up") heroLinkRef.current?.focus();
      if (escaped === "escape-down") belowGridRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    const onMouseDown = () => { inputModeRef.current = "mouse"; };
    window.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onMouseDown);
    };
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
          </div>
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <SignalBars />
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
            NOW BROADCASTING
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-none tracking-tight">
            MATTHEW STEVENS
          </h1>
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-muted-foreground">SAY HELLO →</span>{" "}
            <a ref={heroLinkRef} href="mailto:hello@wrnkld.tv" className="text-foreground hover:text-live transition-colors">hello@wrnkld.tv</a>
          </p>
        </div>
      </section>

      {/* News ticker */}
      <Ticker items={TICKER_ITEMS} className="mb-2" />

      {/* The Guide */}
      <main className="max-w-[1400px] mx-auto px-4 md:px-8 pb-32">
        <div className="border-t border-border/60 pt-6 mb-3 flex items-center justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            TONIGHT'S PROGRAMMING
          </div>
          <div className="hidden md:flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-foreground border border-live/60 bg-live/10 px-3 py-1.5">
            <span className="text-live">↑↓</span><span>CHANNEL</span>
            <span className="text-live/40">·</span>
            <span className="text-live">←→</span><span>PROGRAM</span>
            <span className="text-live/40">·</span>
            <span className="text-live">ENTER</span><span>TUNE IN</span>
          </div>
        </div>

        <div className="divide-y divide-border/60">
          {ALL_CHANNELS.map((ch, ci) => (
            <div
              key={ch.num}
              ref={(el) => { rowRefs.current[ci] = el; }}
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
              <div className="overflow-x-auto scrollbar-hide -mx-4 md:-mx-2 px-4 md:px-2 py-3">
                <div className="flex gap-3 md:gap-4 min-w-max">
                  {ch.programs.map((prog, pi) => {
                    const isFocused = focus.ch === ci && focus.p === pi;
                    const offAir = !prog.to && !prog.href;
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
                        onHoverFocus={() => {
                          if (inputModeRef.current === "mouse") setFocus({ ch: ci, p: pi });
                        }}
                        onClickFocus={() => {
                          inputModeRef.current = "mouse";
                          setFocus({ ch: ci, p: pi });
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NOW SELECTED chyron */}
        <SelectedChyron channel={ALL_CHANNELS[focus.ch]} program={ALL_CHANNELS[focus.ch].programs[focus.p]} />
        <div ref={belowGridRef} tabIndex={-1} aria-hidden className="outline-none" />
      </main>

    </div>
  );
}

import { forwardRef } from "react";

const ProgramTile = forwardRef<HTMLAnchorElement | HTMLDivElement, {
  prog: Program;
  focused: boolean;
  offAir: boolean;
  onHoverFocus: () => void;
  onClickFocus: () => void;
}>(function ProgramTile({ prog, focused, offAir, onHoverFocus, onClickFocus }, ref) {
  const base =
    "relative w-[260px] md:w-[400px] h-[180px] md:h-[200px] shrink-0 p-4 border bg-card transition-all duration-150 group select-none overflow-hidden";
  const state = focused
    ? "border-live"
    : "border-border/60 hover:border-foreground/40";
  const dim = offAir ? "opacity-50" : "";

  const statusDot = (() => {
    switch (prog.status) {
      case "ON AIR":
      case "LIVE":
        return <span className="w-1.5 h-1.5 rounded-full bg-live blink inline-block" />;
      case "RERUN":
      case "ARCHIVE":
        return <span className="w-1.5 h-1.5 rounded-full border border-foreground/60 inline-block" />;
      case "PILOT":
        return <span className="w-1.5 h-1.5 rounded-full bg-foreground/80 inline-block" />;
      case "COLOR BARS":
        return <span className="w-1.5 h-1.5 rounded-full bg-foreground/80 inline-block" />;
      case "SNOW":
      case "STANDBY":
        return <span className="w-1.5 h-1.5 rounded-full border border-foreground/40 inline-block" />;
      default:
        return null;
    }
  })();

  const inner = (
    <>
      {/* background */}
      {prog.status === "COLOR BARS" ? (
        <div className="absolute inset-0 color-bars opacity-80" />
      ) : prog.status === "SNOW" ? (
        <div className="absolute inset-0 tv-snow opacity-70" />
      ) : prog.thumb ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${prog.thumb})`, filter: "blur(2px) saturate(0.7)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        </>
      ) : (
        <div className="absolute inset-0 card-noise opacity-60" />
      )}

      {/* content */}
      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
          <span>{prog.airtime}</span>
          <span className="flex items-center gap-1.5">
            {statusDot}
            <span className="text-foreground/80">{prog.status}</span>
          </span>
        </div>
        <div className="font-display text-2xl md:text-3xl text-foreground leading-none tracking-[0.02em] mb-3">
          {prog.title.toUpperCase()}
        </div>
        <div className="font-mono text-xs text-muted-foreground leading-relaxed">
          {prog.logline}
        </div>
      </div>
      {focused && <div className="absolute -bottom-px left-0 right-0 h-px bg-live" />}
    </>
  );

  if (offAir) {
    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        onMouseEnter={onHoverFocus}
        onClick={onClickFocus}
        className={`${base} ${state} ${dim} cursor-not-allowed`}
        aria-disabled
      >
        {inner}
      </div>
    );
  }
  if (prog.href) {
    return (
      <a
        href={prog.href}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref as React.Ref<HTMLAnchorElement>}
        onMouseEnter={onHoverFocus}
        onClick={onClickFocus}
        className={`${base} ${state} hover:bg-card/80`}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link
      to={prog.to!}
      ref={ref as React.Ref<HTMLAnchorElement>}
      onMouseEnter={onHoverFocus}
      onClick={onClickFocus}
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

function Clock() {
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
