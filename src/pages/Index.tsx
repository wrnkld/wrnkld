import { Link } from "react-router-dom";

type Category = "Work" | "Design & AI" | "Side" | "About";

type Item = {
  title: string;
  category: Category;
  to?: string;
  href?: string;
  note?: string;
};

const ITEMS: Item[] = [
  { title: "Monte Carlo", category: "Work", to: "/work/montecarlo", note: "Data and AI observability" },
  { title: "Pt 3 — Sleeves", category: "Design & AI", to: "/designai/sleeves" },
  { title: "Sleeves", category: "Side", href: "https://sleeves.app", note: "Track albums, make lists, and follow friends." },
  { title: "Tanium", category: "Work", to: "/work/tanium", note: "Endpoint security at scale" },
  { title: "Experience", category: "About", to: "/about/experience" },
  { title: "Pt 1 — Tools", category: "Design & AI", to: "/designai/tools" },
  { title: "Red Hat", category: "Work", to: "/work/redhat", note: "Open source enterprise software" },
  { title: "Records", category: "About", to: "/about/records" },
  { title: "StudyDrop", category: "Side", href: "https://studydrop.app", note: "UX research, without the friction" },
  { title: "Pt 2 — Vibes", category: "Design & AI", to: "/designai/vibes" },
  { title: "SAS", category: "Work", to: "/work/sas", note: "Enterprise analytics" },
  { title: "Books", category: "About", to: "/about/books" },
  { title: "Pt 4 — Claude", category: "Design & AI", to: "/designai/claude" },
];

const CHIP: Record<Category, string> = {
  "Work": "bg-[hsl(var(--chip-work))]",
  "About": "bg-[hsl(var(--chip-about))]",
  "Side": "bg-[hsl(var(--chip-side))]",
  "Design & AI": "bg-[hsl(var(--chip-designai))]",
};

function Row({ item }: { item: Item }) {
  const inner = (
    <span
      className={`${CHIP[item.category]} text-[hsl(var(--chip-ink))] inline-flex items-baseline gap-3 px-2.5 py-1 rounded-sm transition-all duration-300 ease-out group-hover:px-4 group-hover:tracking-[0.01em]`}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] opacity-70">
        {item.category}
      </span>
      <span className="text-base font-medium">{item.title}</span>
    </span>
  );

  return (
    <li className="flex items-baseline justify-between gap-6 group">
      {item.to ? (
        <Link to={item.to}>{inner}</Link>
      ) : item.href ? (
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : (
        inner
      )}
      {item.note && (
        <span className="text-sm text-muted-foreground text-right shrink-0 max-w-[55%]">
          {item.note}
        </span>
      )}
    </li>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-16">
          <h1 className="text-2xl font-medium">Matthew Stevens</h1>
          <p className="text-muted-foreground mt-2">
            <a
              href="mailto:hello@wrnkld.tv"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              hello@wrnkld.tv
            </a>
          </p>
        </header>

        <main>
          <ul className="space-y-3">
            {ITEMS.map((item) => (
              <Row key={item.title} item={item} />
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}