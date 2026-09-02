import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { books } from "@/data/books";
import { records } from "@/data/records";
import { experience, education } from "@/data/experience";
import { ToolsBody } from "@/content/words/ToolsBody";
import { VibesBody } from "@/content/words/VibesBody";
import { SleevesBody } from "@/content/words/SleevesBody";
import { ClaudeBody } from "@/content/words/ClaudeBody";

import mcPerfMon from "@/assets/montecarlo/mcd-perf-mon.png";
import taniumThreatAlerts from "@/assets/tanium/tanium-threat-alerts.png";

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
        <div className="px-5 py-14 md:py-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
            {kicker}
          </p>
          <h2 className="text-xl md:text-2xl font-medium leading-tight tracking-tight max-w-3xl">
            {headline}
          </h2>
        </div>
        {children && <div className="px-5 pb-14 md:pb-20">{children}</div>}
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
  media?: string;
  to?: string;
  href?: string;
}) {
  const inner = (
    <div className="group flex flex-col gap-4 h-full">
      {media && (
        <div className="aspect-[4/3] overflow-hidden border border-border/40 bg-muted/30">
          <img src={media} alt="" loading="lazy" className="w-full h-full object-cover object-left-top" />
        </div>
      )}
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
          {eyebrow}
        </p>
        <h3 className="text-lg font-medium tracking-tight inline-flex items-center gap-1">
          {title}
          <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
        </h3>
        <p className="text-sm text-muted-foreground mt-1 max-w-md">{blurb}</p>
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

/** One list row, styled to match the tables on the detail pages. */
function Row({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`px-5 py-4 text-sm border-b border-border/70 transition-colors surface-tint-hover ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- data ---------- */


const WORDS = [
  { title: "Pt 1 → Tools", note: "TMI", Body: ToolsBody },
  { title: "Pt 2 → Vibes", note: "Prompts v boxes", Body: VibesBody },
  { title: "Pt 3 → Sleeves", note: "I built an app", Body: SleevesBody },
  { title: "Pt 4 → Claude", note: "Working with agents", Body: ClaudeBody },
];

/* ---------- page ---------- */

export default function Index() {
  const recentBooks = [...books].sort((a, b) => b.year - a.year || b.id - a.id).slice(0, 4);
  const recentRecords = [...records].sort((a, b) => b.year - a.year || b.id - a.id).slice(0, 4);

  return (
    <div className="relative z-10 min-h-screen text-foreground">
      {/* header */}
      <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-24">
        <div className="border-t border-b border-border/70">
          <div className="px-5 py-4 flex items-baseline justify-between gap-4">
            <span className="text-sm font-medium">Matthew Stevens</span>
            <a
              href="mailto:hello@wrnkld.tv"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@wrnkld.tv
            </a>
          </div>
        </div>
      </div>

      <Band
        kicker="01 — Hello"
        headline="Product design leader specializing in complex enterprise software. I lead teams while staying hands-on, working directly with customers and partnering with product and engineering to turn complex problems into simple, elegant solutions."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          <Callout
            eyebrow="Case study"
            title="Monte Carlo AI"
            blurb="Agent trust platform. Founding designer, now Head of Design."
            media={mcPerfMon}
            to="/work/montecarlo"
          />
          <Callout
            eyebrow="Case study"
            title="Tanium"
            blurb="Endpoint security at scale. Threat Response and two launches."
            media={taniumThreatAlerts}
            to="/work/tanium"
          />
        </div>
      </Band>

      <Band
        kicker="02 — Side projects"
        headline="Two products I designed, built, and shipped on my own."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          <Callout
            eyebrow="Live"
            title="StudyDrop"
            blurb="UX research without the friction. Surveys, card sorting, tree testing, and first-click testing."
            href="https://studydrop.app"
          />
          <Callout
            eyebrow="Live"
            title="Sleeves"
            blurb="Track albums, make lists, follow friends. Built with React, Supabase, and Vercel."
            href="https://sleeves.app"
          />
        </div>
      </Band>

      <Band kicker="03 — Experience" headline="Designing complex enterprise software.">
        <div className="-mx-5 border-t border-border/70">
          {[
            ...experience,
            { company: education.company, role: education.degree, years: "" },
          ].map((j) => (
            <Row key={j.company} className="flex flex-col gap-1 lg:grid lg:grid-cols-3 lg:gap-8">
              <span className="text-foreground">{j.company}</span>
              <span className="text-muted-foreground">{j.role}</span>
              <span className="text-muted-foreground">{j.years}</span>
            </Row>
          ))}
        </div>
        <div className="px-5 pt-4">
          <Link
            to="/about/experience"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Full experience <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Band>

      <Band kicker="04 — Lists" headline="I like making lists.">
        <div className="-mx-5 border-t border-border/70">
          <ListColumn
            heading="Books"
            to="/about/books"
            linkLabel={`View all ${books.length} books`}
            rows={recentBooks.map((b) => ({ id: b.id, primary: b.title, secondary: b.author, meta: b.year }))}
          />
          <div className="border-t border-border/70" />
          <ListColumn
            heading="Records"
            to="/about/records"
            linkLabel={`View all ${records.length} records`}
            rows={recentRecords.map((r) => ({ id: r.id, primary: r.album, secondary: r.artist, meta: r.year }))}
          />
        </div>
      </Band>

      <Band kicker="05 — Words" headline="I wrote a few things about AI and design.">
        <div className="-mx-5 border-t border-border/70">
          {WORDS.map((w) => (
            <WordRow key={w.title} {...w} />
          ))}
        </div>
      </Band>

      <div className="max-w-6xl mx-auto px-6">
        <div className="px-5 py-14 flex items-baseline justify-between gap-4">
          <a
            href="mailto:hello@wrnkld.tv"
            className="text-lg font-medium tracking-tight hover:text-muted-foreground transition-colors"
          >
            hello@wrnkld.tv
          </a>
        </div>
      </div>
    </div>
  );
}

function ListColumn({
  heading,
  to,
  linkLabel,
  rows,
}: {
  heading: string;
  to: string;
  linkLabel: string;
  rows: { id: number; primary: string; secondary: string; meta: number }[];
}) {
  return (
    <div>
      <div className="px-5 py-4 text-sm">
        <h3 className="font-medium">{heading}</h3>
      </div>
      {rows.map((row) => (
        <Row key={row.id} className="grid grid-cols-[1fr_1fr_4rem] gap-4 items-baseline">
          <span className="text-foreground">{row.primary}</span>
          <span className="text-muted-foreground">{row.secondary}</span>
          <span className="text-muted-foreground">{row.meta}</span>
        </Row>
      ))}
      <div className="px-5 pt-4">
        <Link
          to={to}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {linkLabel} <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function WordRow({
  title,
  note,
  Body,
}: {
  title: string;
  note: string;
  Body: () => React.ReactElement;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/70">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left px-5 py-4 text-sm flex items-baseline gap-4 transition-colors surface-tint-hover"
      >
        <span className="text-foreground">{title}</span>
        <span className="flex-1 text-muted-foreground">{note}</span>
        <span className="text-muted-foreground shrink-0">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-10 pt-2">
          <Body />
        </div>
      )}
    </div>
  );
}
