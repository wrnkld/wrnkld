import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ArrowRight, Plus, Minus } from "lucide-react";
import { books } from "@/data/books";
import { records } from "@/data/records";
import { experience, education } from "@/data/experience";
import { ToolsBody } from "@/content/words/ToolsBody";
import { VibesBody } from "@/content/words/VibesBody";
import { SleevesBody } from "@/content/words/SleevesBody";
import { ClaudeBody } from "@/content/words/ClaudeBody";
import { Row } from "@/components/Row";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";


/* ---------- shared bits ---------- */

/* One keyboard-focus treatment for every homepage link and row: a hairline
   cobalt ring, inset so full-bleed rows never clip it. */
const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/50";

/* Section shell for everything below the intro and featured work. Padding is
   deliberately tighter than those two, which carry the page. */
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
        <div className="px-5 py-10 md:py-12">
          <p className="meta-label mb-3">
            {kicker}
          </p>
          <h2 className="text-lg md:text-xl font-medium leading-tight tracking-tight max-w-3xl">
            {headline}
          </h2>
        </div>
        {children && <div className="px-5 pb-10 md:pb-12">{children}</div>}
      </div>
    </section>
  );
}

/* Featured case study: a full-width editorial row, not a card. The whole row
   is the link; hover lifts the title to cobalt and nudges the arrow. */
function ProjectRow({
  eyebrow,
  title,
  blurb,
  to,
  href,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
  to?: string;
  href?: string;
}) {
  const inner = (
    <div className="group flex items-start justify-between gap-6 px-5 py-8 md:py-10 transition-colors duration-200 surface-tint-hover">
      <div className="min-w-0">
        <p className="meta-label mb-3">{eyebrow}</p>
        <h3 className="text-3xl md:text-4xl font-medium leading-[1.1] tracking-[-0.02em] text-foreground transition-colors duration-200 group-hover:text-accent">
          {title}
        </h3>
        <p className="mt-3 max-w-md font-body text-base leading-relaxed text-muted-foreground">
          {blurb}
        </p>
      </div>
      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-[color,transform] duration-200 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1" />
    </div>
  );
  const linkClasses = cn("block border-b border-border/70 last:border-b-0", focusRing);
  if (to)
    return (
      <Link to={to} className={linkClasses}>
        {inner}
      </Link>
    );
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
      {inner}
    </a>
  );
}

/* Side projects sit a tier below the case studies: same row language, much
   smaller type, so the hierarchy reads at a glance. */
function SideProjectRow({
  eyebrow,
  title,
  blurb,
  href,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-start justify-between gap-4 px-5 py-4 border-b border-border/70 last:border-b-0 transition-colors duration-200 surface-tint-hover",
        focusRing
      )}
    >
      <div className="min-w-0">
        <p className="meta-label mb-1.5">{eyebrow}</p>
        <h3 className="text-lg font-medium tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent">
          {title}
        </h3>
        <p className="mt-1 max-w-md font-body text-sm leading-relaxed text-muted-foreground">
          {blurb}
        </p>
      </div>
      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-[color,transform] duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

/* ---------- data ---------- */


const WORDS = [
  { title: "Pt 1 → Tools", note: "TMI", date: "Jan 2026", Body: ToolsBody },
  { title: "Pt 2 → Vibes", note: "Prompts v boxes", date: "Jan 2026", Body: VibesBody },
  { title: "Pt 3 → Sleeves", note: "I built an app", date: "Jan 2026", Body: SleevesBody },
  { title: "Pt 4 → Claude", note: "Working with agents", date: "Jan 2026", Body: ClaudeBody },
];

/* ---------- page ---------- */

export default function Index() {
  const recentBooks = [...books].sort((a, b) => b.id - a.id).slice(0, 4);
  const recentRecords = [...records].sort((a, b) => b.id - a.id).slice(0, 4);

  return (
    <div className="relative z-10 min-h-screen text-foreground">
      {/* header */}
      <div className="pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="px-5 py-4">
            <span className="text-lg font-medium tracking-tight">Matthew Stevens</span>
          </div>
        </div>
      </div>

      {/* 01 — intro, then the two featured case studies as editorial rows */}
      <section className="border-b border-border/70">
        <div className="max-w-6xl mx-auto px-6">
          <div className="px-5 pt-10 pb-12 md:pt-14 md:pb-16">
            <p className="meta-label mb-5">
              01 — Hello
            </p>
            <h2 className="text-[1.625rem] md:text-[2.5rem] font-medium leading-[1.25] tracking-[-0.02em] max-w-4xl">
              Product design leader for complex software. I lead teams, stay hands-on, and work directly with customers to turn difficult problems into simple, elegant products.
            </h2>
          </div>
          <div className="-mx-5 border-t border-border/70 pb-10 md:pb-14">
            <ProjectRow
              eyebrow="Case study"
              title="Monte Carlo AI"
              blurb="Agent trust platform. Founding designer, now Head of Design."
              to="/work/montecarlo"
            />
            <ProjectRow
              eyebrow="Case study"
              title="Tanium"
              blurb="Unified endpoint management and cybersecurity platform. Senior IC across five products."
              to="/work/tanium"
            />
          </div>
        </div>
      </section>

      <Band
        kicker="02 — Side projects"
        headline="Products I designed, built, and shipped."
      >
        <div className="-mx-5 border-t border-border/70">
          <SideProjectRow
            eyebrow="Live"
            title="StudyDrop"
            blurb="UX research without the friction. Surveys, card sorting, tree testing, and first-click testing."
            href="https://studydrop.app"
          />
          <SideProjectRow
            eyebrow="Live"
            title="Sleeves"
            blurb="Track albums, make lists, and follow friends. Built with React, Supabase, and Vercel."
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
            <Row key={j.company} className="flex flex-col gap-1 md:grid md:grid-cols-3 md:gap-8">
              <span className="font-medium text-foreground">{j.company}</span>
              <span className="text-muted-foreground">{j.role}</span>
              <span className="text-muted-foreground tabular-nums md:text-right">{j.years}</span>
            </Row>
          ))}
        </div>
        <div className="pt-4">
          <Link
            to="/about/experience"
            className={cn(
              "inline-flex items-center gap-1 text-base text-muted-foreground hover:text-accent transition-colors",
              focusRing
            )}
          >
            Full experience <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Band>

      <Band kicker="04 — Lists" headline="I like making lists.">
        <div className="space-y-10">
          <ListColumn
            heading="Books"
            to="/about/books"
            linkLabel={`All ${books.length} books`}
            rows={recentBooks.map((b) => ({ id: b.id, primary: b.author, secondary: b.title, meta: b.year }))}
          />
          <ListColumn
            heading="Records"
            to="/about/records"
            linkLabel={`All ${records.length} records`}
            rows={recentRecords.map((r) => ({ id: r.id, primary: r.artist, secondary: r.album, meta: r.year }))}
          />
        </div>
      </Band>

      <Band kicker="05 — Words from January 2026" headline="I worked through some thoughts on AI and design.">
        <div className="-mx-5 border-t border-border/70">
          {WORDS.map((w) => (
            <WordRow key={w.title} {...w} />
          ))}
        </div>
      </Band>

      <div className="max-w-6xl mx-auto px-6">
        <div className="px-5 py-12 flex items-baseline justify-between gap-4">
          <a
            href="mailto:hello@wrnkld.tv"
            className={cn(
              "text-lg font-medium tracking-tight hover:text-accent transition-colors",
              focusRing
            )}
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
      <h3 className="text-lg font-medium text-foreground mb-4">{heading}</h3>
      <div className="-mx-5 border-y border-border/70 overflow-hidden table-gutter">
        <Table className="table-fixed">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                className="border-b border-border/70 transition-colors surface-tint-hover"
              >
                <TableCell className="text-muted-foreground">{row.primary}</TableCell>
                <TableCell className="text-foreground">{row.secondary}</TableCell>
                <TableCell className="text-muted-foreground tabular-nums text-right hidden md:table-cell">{row.meta}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="pt-4">
        <Link
          to={to}
          className={cn(
            "inline-flex items-center gap-1 text-base text-muted-foreground hover:text-accent transition-colors",
            focusRing
          )}
        >
          {linkLabel} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function WordRow({
  title,
  Body,
}: {
  title: string;
  note: string;
  date: string;
  Body: () => React.ReactElement;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/70">
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "w-full text-left px-5 py-4 text-base flex items-baseline justify-between gap-4 transition-colors surface-tint-hover",
          focusRing
        )}
      >
        <span className="text-foreground">{title}</span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "minus" : "plus"}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.15 }}
          >
            {open ? <Minus className="h-4 w-4 shrink-0" /> : <Plus className="h-4 w-4 shrink-0" />}
          </motion.span>
        </AnimatePresence>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-5 pb-10 pt-2">
              <Body />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
