import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { books } from "@/data/books";
import { records } from "@/data/records";

type Category = "Work" | "Words" | "Side" | "About";

type Item = {
  title: string;
  category: Category;
  to?: string;
  href?: string;
  note?: string;
  gif?: string;
};

const ITEMS: Item[] = [
  { title: "Monte Carlo AI", category: "Work", to: "/work/montecarlo", note: "Agent trust platform", gif: "https://media.giphy.com/media/j5nLG5ZTChFwGsmGnV/giphy.gif" },
  { title: "Experience", category: "About", to: "/about/experience", note: "💼", gif: "https://media.giphy.com/media/JnAqFgTk5AcxbfhtPL/giphy.gif" },
  { title: "StudyDrop", category: "Side", href: "https://studydrop.app", note: "UX research, without the friction", gif: "https://media.giphy.com/media/VbmrliOc1UMJDYYZRF/giphy.gif" },
  { title: "Sleeves", category: "Side", href: "https://sleeves.app", note: "Track albums, make lists, and follow friends", gif: "https://media.giphy.com/media/gj0CJcKVtmAoSq5v9d/giphy.gif" },
  { title: "Pt 4 → Claude", category: "Words", to: "/words/claude", note: "Think piece #901", gif: "https://media.giphy.com/media/hX6UTr4GALucmRR38D/giphy.gif" },
  { title: "Books", category: "About", to: "/about/books", note: "I like making lists", gif: "https://media.giphy.com/media/TEEewgFfvMvvkSzw7w/giphy.gif" },
  { title: "Records", category: "About", to: "/about/records", note: "A relatively exhaustive list of records I like", gif: "https://media.giphy.com/media/KHEIcdVp8oSKo4zvmZ/giphy.gif" },
  { title: "Pt 3 → Sleeves", category: "Words", to: "/words/sleeves", note: "I built an app", gif: "https://media.giphy.com/media/XB3WTIY5GhgcBosgE4/giphy.gif" },
  { title: "Pt 2 → Vibes", category: "Words", to: "/words/vibes", note: "Prompts v Boxes", gif: "https://media.giphy.com/media/S9WCr3cTm6qHq6LmRi/giphy.gif" },
  { title: "Pt 1 → Tools", category: "Words", to: "/words/tools", note: "TMI", gif: "https://media.giphy.com/media/MCXp9DOVi5xKQhicLs/giphy.gif" },
  { title: "Tanium", category: "Work", to: "/work/tanium", note: "Endpoint security at scale", gif: "https://media.giphy.com/media/YPQ7McRYvkGrnPPg2x/giphy.gif" },
  { title: "Red Hat", category: "Work", to: "/work/redhat", note: "Open source enterprise software", gif: "https://media.giphy.com/media/KEYvmwlOfRc8VN2UZT/giphy.gif" },
  { title: "SAS", category: "Work", to: "/work/sas", note: "Enterprise analytics", gif: "https://media.giphy.com/media/mEt912Wqy3Ldkhn5bs/giphy.gif" },
];

const CHIP: Record<Category, string> = {
  "Work": "chip-work",
  "About": "chip-about",
  "Side": "chip-side",
  "Words": "chip-words",
};

const byTitle = (t: string) => ITEMS.find((i) => i.title === t)!;

const WORK = ["Tanium", "Red Hat", "SAS"].map(byTitle);
const SIDE = ["Sleeves", "StudyDrop"].map(byTitle);
const WORDS = ["Pt 4 → Claude", "Pt 3 → Sleeves", "Pt 2 → Vibes", "Pt 1 → Tools"].map(byTitle);

const WORK_YEARS: Record<string, string> = {
  "Tanium": "2021 - 2024",
  "Red Hat": "2018 - 2021",
  "SAS": "2013 - 2018",
};

/** A ruled row: title left, meta right, hover tint, whole row clickable. */
function Row({
  item,
  meta,
  chip = false,
}: {
  item: Item;
  meta?: string;
  chip?: boolean;
}) {
  const inner = (
    <div className="group flex items-baseline gap-4 px-5 py-4 transition-colors surface-tint-hover">
      <span className="text-base font-medium group-hover:text-accent transition-colors">
        {item.title}
      </span>
      {chip && (
        <span
          className={`chip ${CHIP[item.category]} font-mono text-[10px] uppercase tracking-[0.14em] px-2 py-0.5 rounded`}
        >
          {item.category}
        </span>
      )}
      <span className="hidden sm:block flex-1 border-b border-dotted border-border translate-y-[-2px]" />
      {item.note && (
        <span className="hidden md:block text-sm text-muted-foreground shrink-0">
          {item.note}
        </span>
      )}
      {meta && (
        <span className="band-label shrink-0">{meta}</span>
      )}
      {item.href && (
        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
      )}
    </div>
  );
  if (item.to) return <Link to={item.to} className="block">{inner}</Link>;
  if (item.href)
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  return inner;
}

function Stat({ figure, label }: { figure: string; label: string }) {
  return (
    <div className="px-5 py-4">
      <div className="font-display text-2xl leading-none tracking-tight">{figure}</div>
      <div className="band-label mt-2">{label}</div>
    </div>
  );
}

export default function Index() {
  const recommendedBooks = books.filter((b) => b.recommended).slice(-4).reverse();
  const recentRecords = [...records].sort((a, b) => b.year - a.year).slice(0, 4);
  const monteCarlo = byTitle("Monte Carlo AI");
  const gifs = ITEMS.filter((i) => i.gif).slice(0, 8);

  return (
    <div className="relative z-10 min-h-screen text-foreground">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header band */}
        <header className="border-t border-b border-border/70 grid grid-cols-1 md:grid-cols-3">
          <div className="px-5 py-6 md:col-span-2 md:border-r border-border/70">
            <h1 className="text-2xl font-medium tracking-tight">Matthew Stevens</h1>
            <p className="band-label mt-2">Product designer &amp; builder</p>
          </div>
          <div className="px-5 py-6 flex items-end md:justify-end border-t md:border-t-0 border-border/70">
            <a
              href="mailto:hello@wrnkld.tv"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              hello@wrnkld.tv
            </a>
          </div>
        </header>

        {/* Intro band */}
        <section className="border-b border-border/70 px-5 py-16 md:py-24">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.92] tracking-tighter max-w-4xl">
            I design and build the interfaces enterprises trust with their
            hardest problems.
          </h2>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Currently designing the agent trust platform at{" "}
            <Link to="/work/montecarlo" className="text-foreground hover:text-accent transition-colors">
              Monte Carlo AI
            </Link>
            . Before that, security and analytics at scale for{" "}
            <Link to="/work/tanium" className="text-foreground hover:text-accent transition-colors">Tanium</Link>,{" "}
            <Link to="/work/redhat" className="text-foreground hover:text-accent transition-colors">Red Hat</Link>, and{" "}
            <Link to="/work/sas" className="text-foreground hover:text-accent transition-colors">SAS</Link>. I
            ship the code too.
          </p>
        </section>

        {/* Featured work band */}
        <section className="border-b border-border/70 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 px-5 py-10 border-b lg:border-b-0 lg:border-r border-border/70 flex flex-col">
            <span className="band-label text-accent">Featured work</span>
            <h3 className="font-display text-3xl tracking-tight mt-5">Monte Carlo AI</h3>
            <p className="text-muted-foreground mt-4 max-w-sm leading-relaxed">
              {monteCarlo.note} — designing and shipping the surfaces teams use
              to see what their agents did, why, and whether to trust it again.
            </p>
            <Link
              to="/work/montecarlo"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              Open the CLI demo <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="lg:col-span-7 mc-terminal bg-[hsl(var(--term-bg))] px-5 py-8 md:px-8">
            <div className="font-mono text-xs md:text-sm leading-relaxed">
              <div className="tk-header mb-4">montecarlo</div>
              <p><span className="tk-prompt">$ </span><span className="tk-cmd">mc runs get</span> <span className="tk-flag">--agent</span> <span className="tk-str">"support-triage"</span></p>
              <p className="tk-comment mt-1">// resolving run history…</p>
              <div className="mt-3 border border-[hsl(var(--term-border))] p-3">
                <p><span className="tk-key">status</span><span className="tk-punc">: </span><span className="tk-bool">verified</span></p>
                <p><span className="tk-key">tools_called</span><span className="tk-punc">: </span><span className="tk-num">14</span></p>
                <p><span className="tk-key">policy_violations</span><span className="tk-punc">: </span><span className="tk-num">0</span></p>
                <p><span className="tk-key">trace</span><span className="tk-punc">: </span><span className="tk-path">/runs/8f21c4</span></p>
              </div>
              <p className="mt-3"><span className="tk-prompt">$ </span><span className="term-cursor" /></p>
            </div>
          </div>
        </section>

        {/* Stats band */}
        <section className="border-b border-border/70 grid grid-cols-2 lg:grid-cols-4 divide-x divide-border/70">
          <Stat figure="12 yrs" label="Designing enterprise software" />
          <Stat figure="4" label="Companies, one industry" />
          <Stat figure="2" label="Products built from zero" />
          <Stat figure="100s" label="PRs merged, not mocked" />
        </section>

        {/* Work + side band */}
        <section className="border-b border-border/70 grid grid-cols-1 lg:grid-cols-2">
          <div className="border-b lg:border-b-0 lg:border-r border-border/70">
            <div className="px-5 pt-8 pb-3 band-label">Previously</div>
            <ul className="divide-y divide-border/70 border-t border-border/70">
              {WORK.map((item) => (
                <li key={item.title}>
                  <Row item={item} meta={WORK_YEARS[item.title]} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="px-5 pt-8 pb-3 band-label">Things I made on my own</div>
            <ul className="divide-y divide-border/70 border-t border-border/70">
              {SIDE.map((item) => (
                <li key={item.title}>
                  <Row item={item} />
                </li>
              ))}
              <li>
                <Row item={byTitle("Experience")} meta="CV" />
              </li>
            </ul>
          </div>
        </section>

        {/* Writing band */}
        <section className="border-b border-border/70">
          <div className="px-5 pt-8 pb-3 band-label">Writing on design &amp; AI</div>
          <ul className="divide-y divide-border/70 border-t border-border/70">
            {WORDS.map((item) => (
              <li key={item.title}>
                <Row item={item} />
              </li>
            ))}
          </ul>
        </section>

        {/* Lists band */}
        <section className="border-b border-border/70 grid grid-cols-1 md:grid-cols-2">
          <div className="px-5 py-8 border-b md:border-b-0 md:border-r border-border/70">
            <div className="flex items-baseline justify-between">
              <span className="band-label">Books</span>
              <Link to="/about/books" className="band-label hover:text-accent transition-colors">
                All {books.length} →
              </Link>
            </div>
            <ul className="mt-6 space-y-4">
              {recommendedBooks.map((b) => (
                <li key={b.id} className="flex items-baseline gap-3">
                  <span className="font-medium text-sm">{b.title}</span>
                  <span className="flex-1 border-b border-dotted border-border translate-y-[-2px]" />
                  <span className="text-xs text-muted-foreground shrink-0">{b.author}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-5 py-8">
            <div className="flex items-baseline justify-between">
              <span className="band-label">Records</span>
              <Link to="/about/records" className="band-label hover:text-accent transition-colors">
                All {records.length} →
              </Link>
            </div>
            <ul className="mt-6 space-y-4">
              {recentRecords.map((r) => (
                <li key={r.id} className="flex items-baseline gap-3">
                  <span className="font-medium text-sm">{r.album}</span>
                  <span className="flex-1 border-b border-dotted border-border translate-y-[-2px]" />
                  <span className="text-xs text-muted-foreground shrink-0">{r.artist}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Slacker texture band */}
        <section className="border-b border-border/70 px-5 py-8">
          <div className="flex items-center gap-6">
            <span className="band-label shrink-0">Slacker (1991)</span>
            <span className="h-px flex-1 bg-border/70" />
          </div>
          <div className="mt-6 grid grid-cols-4 md:grid-cols-8 gap-1 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            {gifs.map((item) => (
              <div key={item.title} className="aspect-square overflow-hidden bg-muted">
                <img
                  src={item.gif}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="px-5 py-8 flex flex-wrap items-center gap-6 band-label">
          <a href="mailto:hello@wrnkld.tv" className="hover:text-accent transition-colors">
            hello@wrnkld.tv
          </a>
          <Link to="/about/experience" className="hover:text-accent transition-colors">
            Experience
          </Link>
          <span className="sm:ml-auto opacity-60">wrnkld.tv</span>
        </footer>
      </div>
    </div>
  );
}