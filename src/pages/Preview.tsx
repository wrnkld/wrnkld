import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { books } from "@/data/books";
import { records } from "@/data/records";

/* ---------- shared bits ---------- */

function Band({
  kicker,
  headline,
  children,
}: {
  kicker: string;
  headline: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-border/70">
      <div className="max-w-6xl mx-auto px-6">
        <div className="px-5 py-20 md:py-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
            {kicker}
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight max-w-4xl">
            {headline}
          </h2>
        </div>
        {children && <div className="px-5 pb-20 md:pb-28">{children}</div>}
      </div>
    </section>
  );
}

function Callout({
  eyebrow,
  title,
  blurb,
  media,
  to,
  href,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
  media: string;
  to?: string;
  href?: string;
}) {
  const inner = (
    <div className="group flex flex-col gap-5 h-full">
      <div className="aspect-[4/3] overflow-hidden border border-border/70 bg-muted/30">
        <img src={media} alt="" loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
          {eyebrow}
        </p>
        <h3 className="text-2xl md:text-3xl font-medium tracking-tight inline-flex items-center gap-1">
          {title}
          <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
        </h3>
        <p className="text-base text-muted-foreground mt-2 max-w-md">{blurb}</p>
      </div>
    </div>
  );
  if (to) return <Link to={to}>{inner}</Link>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  );
}

function Expandable({
  left,
  right,
  meta,
  body,
}: {
  left: string;
  right: string;
  meta: string;
  body: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/70">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left py-5 flex items-start gap-4 transition-colors surface-tint-hover"
      >
        <span className="flex-1 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6 items-baseline">
          <span className="sm:col-span-4 text-lg md:text-xl font-medium">{left}</span>
          <span className="sm:col-span-5 text-base text-muted-foreground">{right}</span>
          <span className="sm:col-span-3 text-base text-muted-foreground sm:text-right">{meta}</span>
        </span>
        <span className="pt-1 text-muted-foreground shrink-0">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <p className="pb-6 text-base text-muted-foreground max-w-3xl">{body}</p>
      )}
    </div>
  );
}

/* ---------- data ---------- */

const JOBS = [
  {
    company: "StudyDrop",
    role: "Product Designer & Builder",
    years: "2026 -",
    body: "Launched a UX research platform for surveys, card sorting, tree testing, and first-click testing.",
  },
  {
    company: "Sleeves",
    role: "Product Designer & Builder",
    years: "2025 -",
    body: "Built and shipped a social music app using Lovable, Claude Code, React, Supabase, and Vercel.",
  },
  {
    company: "Monte Carlo AI",
    role: "Head of Design",
    years: "2022 -",
    body: "Founding designer. Built the design function while staying hands-on across observability, investigations, integrations, permissions, and AI-assisted data operations.",
  },
  {
    company: "Workato",
    role: "Staff Product Designer",
    years: "2021 - 2022",
    body: "Designed Workflow Apps, turning complex automation into reusable enterprise applications.",
  },
  {
    company: "Tanium",
    role: "Senior Product Designer",
    years: "2019 - 2021",
    body: "Led Threat Response and launched two enterprise security products.",
  },
  {
    company: "Pendo",
    role: "Lead Product Designer",
    years: "2019",
    body: "Designed core product experiences and improved platform consistency.",
  },
  {
    company: "Red Hat",
    role: "Senior Interaction Designer",
    years: "2016 - 2019",
    body: "Led UX for hybrid-cloud products using PatternFly and open-source collaboration.",
  },
  {
    company: "SAS",
    role: "Principal Interaction Designer",
    years: "2011 - 2016",
    body: "Redesigned SAS's flagship analytics platform and launched two enterprise products.",
  },
  {
    company: "HumanCentric",
    role: "Product Design Manager",
    years: "2006 - 2011",
    body: "Managed an eight-person UX team while remaining hands-on with enterprise client work.",
  },
  {
    company: "Frog",
    role: "Associate Interaction Designer",
    years: "2004 - 2006",
    body: "Designed products for Microsoft, HP, and Dell.",
  },
];

const WORDS = [
  {
    title: "Pt 1 → Tools",
    note: "TMI",
    body: "Everything I actually use to design and build, and why the list keeps getting shorter.",
    to: "/words/tools",
  },
  {
    title: "Pt 2 → Vibes",
    note: "Prompts v Boxes",
    body: "Designing by prompt versus designing by canvas, and what each one costs you.",
    to: "/words/vibes",
  },
  {
    title: "Pt 3 → Sleeves",
    note: "I built an app",
    body: "A designer shipping a real product alone, including the parts that went badly.",
    to: "/words/sleeves",
  },
  {
    title: "Pt 4 → Claude",
    note: "Think piece #901",
    body: "On working with agents daily and feeling conflicted about participating in my own demise.",
    to: "/words/claude",
  },
];

/* ---------- page ---------- */

export default function Preview() {
  const recentBooks = [...books].sort((a, b) => b.year - a.year || b.id - a.id).slice(0, 4);
  const recentRecords = [...records].sort((a, b) => b.year - a.year || b.id - a.id).slice(0, 4);

  return (
    <div className="relative z-10 min-h-screen text-foreground">
      {/* header */}
      <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-24">
        <div className="px-5 pb-12 flex items-baseline justify-between gap-4">
          <span className="text-base font-medium">Matthew Stevens</span>
          <a
            href="mailto:hello@wrnkld.tv"
            className="text-base text-muted-foreground hover:text-foreground transition-colors"
          >
            hello@wrnkld.tv
          </a>
        </div>
      </div>

      <Band
        kicker="01 — Hello"
        headline="Hello. I am a product designer who still draws the pixels and ships the code."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          <Callout
            eyebrow="Case study"
            title="Monte Carlo AI"
            blurb="Agent trust platform. Founding designer, now Head of Design."
            media="https://media.giphy.com/media/j5nLG5ZTChFwGsmGnV/giphy.gif"
            to="/work/montecarlo"
          />
          <Callout
            eyebrow="Case study"
            title="Tanium"
            blurb="Endpoint security at scale. Threat Response and two launches."
            media="https://media.giphy.com/media/YPQ7McRYvkGrnPPg2x/giphy.gif"
            to="/work/tanium"
          />
        </div>
      </Band>

      <Band
        kicker="02 — Side projects"
        headline="I build shit. Two products, designed and shipped solo."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          <Callout
            eyebrow="Live"
            title="StudyDrop"
            blurb="UX research, without the friction."
            media="https://media.giphy.com/media/VbmrliOc1UMJDYYZRF/giphy.gif"
            href="https://studydrop.app"
          />
          <Callout
            eyebrow="Live"
            title="Sleeves"
            blurb="Track albums, make lists, and follow friends."
            media="https://media.giphy.com/media/gj0CJcKVtmAoSq5v9d/giphy.gif"
            href="https://sleeves.app"
          />
        </div>
      </Band>

      <Band kicker="03 — Experience" headline="Twenty years of enterprise software, tightened up.">
        <div className="border-t border-border/70">
          {JOBS.map((j) => (
            <Expandable
              key={j.company}
              left={j.company}
              right={j.role}
              meta={j.years}
              body={j.body}
            />
          ))}
          <div className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6 items-baseline">
            <span className="sm:col-span-4 text-lg md:text-xl font-medium">Georgetown</span>
            <span className="sm:col-span-5 text-base text-muted-foreground">BA Psychology, Cum Laude</span>
          </div>
        </div>
      </Band>

      <Band kicker="04 — Lists" headline="I list lists. Books I finished, records I keep going back to.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          <div>
            <div className="flex items-baseline justify-between border-b border-border/70 pb-3">
              <h3 className="text-xl font-medium">Recent books</h3>
              <Link to="/about/books" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                All {books.length} →
              </Link>
            </div>
            {recentBooks.map((b) => (
              <div key={b.id} className="py-4 border-b border-border/70 flex items-baseline gap-4">
                <span className="flex-1 text-base">{b.title}</span>
                <span className="text-base text-muted-foreground">{b.author}</span>
                <span className="text-base text-muted-foreground w-12 text-right">{b.year}</span>
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-baseline justify-between border-b border-border/70 pb-3">
              <h3 className="text-xl font-medium">Recent records</h3>
              <Link to="/about/records" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                All {records.length} →
              </Link>
            </div>
            {recentRecords.map((r) => (
              <div key={r.id} className="py-4 border-b border-border/70 flex items-baseline gap-4">
                <span className="flex-1 text-base">{r.album}</span>
                <span className="text-base text-muted-foreground">{r.artist}</span>
                <span className="text-base text-muted-foreground w-12 text-right">{r.year}</span>
              </div>
            ))}
          </div>
        </div>
      </Band>

      <Band
        kicker="05 — Words"
        headline="I worked through some shit about AI and design."
      >
        <div className="border-t border-border/70">
          {WORDS.map((w) => (
            <WordRow key={w.title} {...w} />
          ))}
        </div>
      </Band>

      <div className="max-w-6xl mx-auto px-6">
        <div className="px-5 py-16 flex items-baseline justify-between gap-4">
          <a
            href="mailto:hello@wrnkld.tv"
            className="text-2xl md:text-4xl font-medium tracking-tight hover:text-muted-foreground transition-colors"
          >
            hello@wrnkld.tv
          </a>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Current site →
          </Link>
        </div>
      </div>
    </div>
  );
}

function WordRow({ title, note, body, to }: { title: string; note: string; body: string; to: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/70">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left py-5 flex items-baseline gap-4 transition-colors surface-tint-hover"
      >
        <span className="flex-1 text-lg md:text-xl font-medium">{title}</span>
        <span className="text-base text-muted-foreground">{note}</span>
        <span className="text-muted-foreground shrink-0">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <div className="pb-6 max-w-3xl">
          <p className="text-base text-muted-foreground">{body}</p>
          <Link
            to={to}
            className="inline-flex items-center gap-1 text-base mt-3 hover:text-muted-foreground transition-colors"
          >
            Read it <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
