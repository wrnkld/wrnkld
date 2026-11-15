import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ArrowRight, Plus, Minus } from "lucide-react";
import { books } from "@/data/books";
import { records } from "@/data/records";
import { experience } from "@/data/experience";
import { ToolsBody } from "@/content/words/ToolsBody";
import { VibesBody } from "@/content/words/VibesBody";
import { SleevesBody } from "@/content/words/SleevesBody";
import { ClaudeBody } from "@/content/words/ClaudeBody";
import { Row } from "@/components/Row";
import monteCarloScreen from "@/assets/montecarlo/mcd-writes.png";
import taniumScreen from "@/assets/tanium/tanium-asset-vendor.png";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";


/* ---------- shared bits ---------- */

function Band({
  kicker,
  headline,
  headlineSize,
  children,
}: {
  kicker: string;
  headline: string;
  headlineSize?: string;
  children?: React.ReactNode;
}) {
  const isIntro = kicker === "01 — Hello";
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`px-5 ${isIntro ? "pt-6 pb-7 md:pt-8 md:pb-8" : "pt-8 pb-4 md:pt-10 md:pb-5"}`}>
          {!isIntro && <p className="text-sm font-medium text-foreground mb-2">
            {kicker.replace(/^\d+ — /, "")}
          </p>}
          <h2 className={`${isIntro ? `text-2xl ${headlineSize ?? ""} font-medium leading-relaxed text-foreground` : "text-base font-normal leading-relaxed text-muted-foreground"} max-w-3xl`}>
            {headline}
          </h2>
        </div>
        {children && <div className="px-5 pb-6 md:pb-8">{children}</div>}
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
  const isExternal = Boolean(href);
  const inner = (
    <div className="group flex flex-col gap-4 h-full">
      {media && (
        <div className="aspect-[4/3] overflow-hidden border border-border/40 bg-muted/30">
          <img src={media} alt="" loading="lazy" className="w-full h-full object-cover object-left-top" />
        </div>
      )}
      <div>
        <p className="meta-label mb-2">
          {eyebrow}
        </p>
        <h3 className="text-lg font-medium tracking-tight">
          {title}
        </h3>
        <p className="font-body text-base leading-relaxed text-muted-foreground mt-1 max-w-md">{blurb}</p>
        {isExternal ? (
          <p className="mt-4 inline-flex items-center gap-1 text-base text-link group-hover:text-link-hover transition-colors">
            Visit <ArrowUpRight className="link-arrow link-arrow-external h-4 w-4" />
          </p>
        ) : (
          <p className="mt-4 inline-flex items-center gap-1 text-base text-link group-hover:text-link-hover transition-colors">
            Case study <ArrowRight className="link-arrow link-arrow-forward h-4 w-4" />
          </p>
        )}
      </div>
    </div>
  );
  const linkClasses =
    "link-motion block p-5 surface-tint-hover transition-colors duration-200";
  if (to) return (
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

/* Paired, unboxed case-study features reuse the product screens from each study. */
function FeaturedProject({
  title,
  blurb,
  to,
  image,
  imageAlt,
}: {
  title: string;
  blurb: string;
  to: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <Link
      to={to}
      className="link-motion group block min-w-0 p-5 transition-colors duration-200 surface-tint-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring"
    >
      <img src={image} alt={imageAlt} className="w-full aspect-[8/5] object-contain rounded-none border border-border/40" />
      <h3 className="mt-5 text-lg font-medium tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground">
        {blurb}
      </p>
      <p className="mt-4 inline-flex items-center gap-1 text-base text-link group-hover:text-link-hover transition-colors duration-200">
        View case study <ArrowRight className="link-arrow link-arrow-forward h-4 w-4" />
      </p>
    </Link>
  );
}

/* ---------- data ---------- */

/* The two case studies shown as editorial features on the home page. */
const FEATURED = [
  {
    company: "Monte Carlo AI",
    to: "/work/montecarlo",
    image: monteCarloScreen,
    imageAlt: "Monte Carlo write queries dashboard with credit usage and performance trends",
    blurb: "Agent trust platform. Founding designer, now Head of Design.",
  },
  {
    company: "Tanium",
    to: "/work/tanium",
    image: taniumScreen,
    imageAlt: "Tanium Asset Adobe software inventory with installation counts and usage charts",
    blurb:
      "Unified endpoint management and cybersecurity platform. Senior IC across five products.",
  },
];

const WORDS = [
  { title: "Pt 1 → Tools", note: "TMI", date: "Jan 2026", Body: ToolsBody },
  { title: "Pt 2 → Vibes", note: "Prompts v boxes", date: "Jan 2026", Body: VibesBody },
  { title: "Pt 3 → Sleeves", note: "I built an app", date: "Jan 2026", Body: SleevesBody },
  { title: "Pt 4 → Claude", note: "Working with agents", date: "Jan 2026", Body: ClaudeBody },
];

/* ---------- page ---------- */

export default function Index() {
  const recentBooks = [...books].sort((a, b) => b.id - a.id).slice(0, 3);
  const recentRecords = [...records].sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <div className="relative z-10 min-h-screen text-foreground">
      {/* header */}
      <div className="pt-10 md:pt-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="px-5 py-4">
            <span className="text-lg font-medium tracking-tight">Matthew Stevens</span>
          </div>
        </div>
      </div>

      <Band
        kicker="01 — Hello"
        headline="Product design leader for complex software. I lead teams, stay hands-on, and work directly with customers to turn difficult problems into simple, elegant products."
      >
        <div className="-mx-5 grid grid-cols-1 md:grid-cols-2 gap-0">
          {FEATURED.map((f) => (
            <FeaturedProject key={f.company} title={f.company} blurb={f.blurb} to={f.to} image={f.image} imageAlt={f.imageAlt} />
          ))}
        </div>

      </Band>

      <Band
        kicker="02 — Independent projects"
        headline="Products I designed, built, and shipped."
      >
        <div className="-mx-5 grid grid-cols-1 md:grid-cols-2 gap-0">
          <Callout
            eyebrow="Live"
            title="StudyDrop"
            blurb="UX research without the friction. Surveys, card sorting, tree testing, and first-click testing."
            href="https://studydrop.app"
          />
          <Callout
            eyebrow="Live"
            title="Sleeves"
            blurb="Track albums, make lists, and follow friends. Built with React, Supabase, and Vercel."
            href="https://sleeves.app"
          />
        </div>
      </Band>

      <Band kicker="03 — Experience" headline="Designing complex enterprise software.">
        <div className="-mx-5 border-t border-border/70">
          {experience.slice(0, 3).map((j) => (
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
            className="link-motion inline-flex items-center gap-1 text-base text-link hover:text-link-hover transition-colors duration-200"
          >
            Full experience <ArrowRight className="link-arrow link-arrow-forward h-4 w-4" />
          </Link>
        </div>
      </Band>

      <Band kicker="04 — Lists" headline="I like making lists.">
        <div className="space-y-8">
          <ListColumn
            heading="Books"
            to="/about/books"
            linkLabel="All books"
            rows={recentBooks.map((b) => ({ id: b.id, primary: b.author, secondary: b.title, meta: b.year }))}
          />
          <ListColumn
            heading="Records"
            to="/about/records"
            linkLabel="All records"
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
        <div className="px-5 py-14 flex items-baseline justify-between gap-4">
          <a
            href="mailto:hello@wrnkld.tv"
            className="text-lg font-medium tracking-tight text-link hover:text-link-hover transition-colors duration-200"
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
          className="link-motion inline-flex items-center gap-1 text-base text-link hover:text-link-hover transition-colors duration-200"
        >
          {linkLabel} <ArrowRight className="link-arrow link-arrow-forward h-4 w-4" />
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
        className="w-full text-left px-5 py-4 text-base flex items-baseline justify-between gap-4 transition-colors surface-tint-hover"
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
