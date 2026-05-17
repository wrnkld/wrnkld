import { Link } from "react-router-dom";

type Category = "Work" | "Words" | "Side" | "About";

type Item = {
  title: string;
  category: Category;
  to?: string;
  href?: string;
  note?: string;
};

const ITEMS: Item[] = [
  { title: "Monte Carlo", category: "Work", to: "/work/montecarlo", note: "Data and AI observability" },
  { title: "Pt 3 → Sleeves", category: "Words", to: "/words/sleeves", note: "I built an app" },
  { title: "Sleeves", category: "Side", href: "https://sleeves.app", note: "Track albums, make lists, and follow friends" },
  { title: "Tanium", category: "Work", to: "/work/tanium", note: "Endpoint security at scale" },
  { title: "Experience 👨‍💼", category: "About", to: "/about/experience" },
  { title: "Pt 1 → Tools", category: "Words", to: "/words/tools", note: "TMI" },
  { title: "Red Hat", category: "Work", to: "/work/redhat", note: "Open source enterprise software" },
  { title: "Records", category: "About", to: "/about/records", note: "A relatively exhaustive list of records I like" },
  { title: "StudyDrop", category: "Side", href: "https://studydrop.app", note: "UX research, without the friction" },
  { title: "Pt 2 → Vibes", category: "Words", to: "/words/vibes", note: "Prompts v Boxes" },
  { title: "SAS", category: "Work", to: "/work/sas", note: "Enterprise analytics" },
  { title: "Books", category: "About", to: "/about/books", note: "Recommended in yellow" },
  { title: "Pt 4 → Claude", category: "Words", to: "/words/claude", note: "Think piece 901" },
];

const CHIP: Record<Category, string> = {
  "Work": "chip-work",
  "About": "chip-about",
  "Side": "chip-side",
  "Words": "chip-designai",
};

function Row({ item }: { item: Item }) {
  const inner = (
    <span
      className={`chip ${CHIP[item.category]} inline-flex items-baseline gap-2 px-3 py-1.5 rounded-lg`}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] opacity-70 inline-block w-12 shrink-0">
        {item.category}
      </span>
      <span className="text-base font-medium">{item.title}</span>
      {item.note && (
        <span className="hidden sm:inline text-sm opacity-70 font-normal">{item.note}</span>
      )}
    </span>
  );

  return (
    <li>
      {item.to ? (
        <Link to={item.to} className="group inline-block">{inner}</Link>
      ) : item.href ? (
        <a href={item.href} target="_blank" rel="noopener noreferrer" className="group inline-block">
          {inner}
        </a>
      ) : (
        inner
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