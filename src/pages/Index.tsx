import { Link } from "react-router-dom";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

type Hero = {
  title: string;
  category: "Work" | "Side";
  to?: string;
  href?: string;
  tagline: string;
  blurb: string;
  meta: string[];
  gif: string;
};

const HEROES: Hero[] = [
  {
    title: "Monte Carlo AI",
    category: "Work",
    to: "/work/montecarlo",
    tagline: "Agent trust platform",
    blurb:
      "Design lead on the surfaces where teams inspect, score and ship AI agents they can actually trust — CLI, API and review workflows built for engineers.",
    meta: ["2024 — now", "Product design", "CLI + API"],
    gif: "https://media.giphy.com/media/j5nLG5ZTChFwGsmGnV/giphy.gif",
  },
  {
    title: "Tanium",
    category: "Work",
    to: "/work/tanium",
    tagline: "Endpoint security at scale",
    blurb:
      "Assurance: turning millions of endpoints into something a security team can read in a glance, act on, and defend in a board meeting.",
    meta: ["2021 — 2024", "Design systems", "Enterprise"],
    gif: "https://media.giphy.com/media/YPQ7McRYvkGrnPPg2x/giphy.gif",
  },
  {
    title: "Sleeves",
    category: "Side",
    href: "https://sleeves.app",
    tagline: "Track albums, make lists, follow friends",
    blurb:
      "A record collection app I designed and built. Lists, sleeves, and the small pleasure of logging what you actually listened to.",
    meta: ["Side project", "Design + build", "Live"],
    gif: "https://media.giphy.com/media/gj0CJcKVtmAoSq5v9d/giphy.gif",
  },
  {
    title: "StudyDrop",
    category: "Side",
    href: "https://studydrop.app",
    tagline: "UX research, without the friction",
    blurb:
      "Drop a study, get signal back. Built to make research something a team does weekly instead of quarterly.",
    meta: ["Side project", "Design + build", "Live"],
    gif: "https://media.giphy.com/media/VbmrliOc1UMJDYYZRF/giphy.gif",
  },
];

const EARLIER = [
  {
    title: "Red Hat",
    to: "/work/redhat",
    note: "Open source enterprise software",
    years: "2016 — 2021",
    gif: "https://media.giphy.com/media/KEYvmwlOfRc8VN2UZT/giphy.gif",
  },
  {
    title: "SAS",
    to: "/work/sas",
    note: "Model Studio, enterprise analytics",
    years: "2012 — 2016",
    gif: "https://media.giphy.com/media/mEt912Wqy3Ldkhn5bs/giphy.gif",
  },
];

const WORDS = [
  { title: "Pt 4 → Claude", to: "/words/claude", note: "Think piece #901" },
  { title: "Pt 3 → Sleeves", to: "/words/sleeves", note: "I built an app" },
  { title: "Pt 2 → Vibes", to: "/words/vibes", note: "Prompts v boxes" },
  { title: "Pt 1 → Tools", to: "/words/tools", note: "TMI" },
];

const LISTS = [
  { title: "Books", to: "/about/books", note: "A running list, with recommendations" },
  { title: "Records", to: "/about/records", note: "A relatively exhaustive list of records I like" },
  { title: "Experience", to: "/about/experience", note: "The résumé version" },
];

const SLACKER = HEROES.map((h) => h.gif).concat(EARLIER.map((e) => e.gif));

function Band({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`border-b border-border/70 px-6 md:px-10 ${className}`}>
      {children}
    </section>
  );
}

function HeroBand({ hero, index }: { hero: Hero; index: number }) {
  const label = (
    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
      {String(index + 1).padStart(2, "0")} / {hero.category}
    </span>
  );
  const inner = (
    <div className="group py-16 md:py-28 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
      <div className="flex flex-col gap-6">
        {label}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-[-0.03em] leading-[0.95]">
          {hero.title}
        </h2>
        <p className="text-xl sm:text-2xl leading-snug tracking-[-0.01em] max-w-xl">
          {hero.tagline}
        </p>
        <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
          {hero.blurb}
        </p>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {hero.meta.map((m, i) => (
            <span key={m} className="flex items-center gap-2">
              {i > 0 && <span className="opacity-40">/</span>}
              {m}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium">
          {hero.to ? "Read the case" : "Visit the site"}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
      <div className="overflow-hidden border border-border/70 bg-muted/30 aspect-[4/3]">
        <img
          src={hero.gif}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );

  return (
    <Band>
      {hero.to ? (
        <Link to={hero.to} className="block">
          {inner}
        </Link>
      ) : (
        <a href={hero.href} target="_blank" rel="noopener noreferrer" className="block">
          {inner}
        </a>
      )}
    </Band>
  );
}

function EarlierCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <Band className="py-16 md:py-24">
      <div className="flex items-end justify-between gap-6">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Earlier work
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em]">
            Big enterprise, long ago
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            className="h-9 w-9 inline-flex items-center justify-center border border-border/70 transition-colors surface-tint-hover"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next"
            className="h-9 w-9 inline-flex items-center justify-center border border-border/70 transition-colors surface-tint-hover"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-8 -mx-6 md:-mx-10 px-6 md:px-10 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {EARLIER.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            className="group snap-start shrink-0 w-[82%] sm:w-[48%] lg:w-[40%]"
          >
            <div className="overflow-hidden border border-border/70 bg-muted/30 aspect-[16/10]">
              <img
                src={item.gif}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {item.years}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
          </Link>
        ))}
      </div>
    </Band>
  );
}

function RuledList({
  label,
  heading,
  items,
}: {
  label: string;
  heading: string;
  items: { title: string; to: string; note: string }[];
}) {
  return (
    <Band className="py-16 md:py-24">
      <div className="flex flex-col gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em]">{heading}</h2>
      </div>
      <ul className="mt-8 -mx-6 md:-mx-10 border-t border-border/70">
        {items.map((item) => (
          <li key={item.title} className="border-b border-border/70">
            <Link
              to={item.to}
              className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 px-6 md:px-10 py-5 transition-colors surface-tint-hover"
            >
              <span className="text-lg sm:text-xl font-medium tracking-[-0.01em]">
                {item.title}
              </span>
              <span className="text-sm text-muted-foreground">{item.note}</span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </Band>
  );
}

export default function Index() {
  return (
    <div className="relative z-10 min-h-screen text-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-l border-r border-border/70">
          <header className="border-b border-border/70 px-6 md:px-10 py-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
            <h1 className="text-lg font-medium tracking-[-0.01em]">Matthew Stevens</h1>
            <a
              href="mailto:hello@wrnkld.tv"
              className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@wrnkld.tv
            </a>
          </header>

          <Band className="py-20 md:py-32">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Product designer &amp; builder
            </p>
            <h2 className="mt-8 text-4xl sm:text-6xl md:text-7xl font-medium tracking-[-0.035em] leading-[0.95] max-w-4xl">
              I design and build software for people who have to trust it.
            </h2>
            <p className="mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Fifteen years of enterprise product design — security, analytics, open
              source, and now AI agents at Monte Carlo AI. Nights and weekends I ship my
              own apps and write about the tools.
            </p>
          </Band>

          {HEROES.map((hero, i) => (
            <HeroBand key={hero.title} hero={hero} index={i} />
          ))}

          <EarlierCarousel />

          <RuledList label="Words" heading="Writing about design &amp; AI" items={WORDS} />
          <RuledList label="Lists" heading="Things I keep track of" items={LISTS} />

          <Band className="py-16 md:py-24">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Slacker
            </span>
            <div className="mt-8 -mx-6 md:-mx-10 px-6 md:px-10 flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {SLACKER.map((gif, i) => (
                <div
                  key={gif + i}
                  className="shrink-0 w-40 aspect-square overflow-hidden border border-border/70 bg-muted/30"
                >
                  <img
                    src={gif}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-300"
                  />
                </div>
              ))}
            </div>
          </Band>

          <footer className="px-6 md:px-10 py-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <span>wrnkld.tv</span>
            <a
              href="mailto:hello@wrnkld.tv"
              className="hover:text-foreground transition-colors"
            >
              hello@wrnkld.tv
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
