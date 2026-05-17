import { Link } from "react-router-dom";

type Item = { title: string; to?: string; href?: string; note?: string };
type Section = { name: string; items: Item[] };

const SECTIONS: Section[] = [
  {
    name: "Work",
    items: [
      { title: "Monte Carlo", to: "/work/montecarlo", note: "Data and AI observability" },
      { title: "Tanium",      to: "/work/tanium",     note: "Endpoint security at scale" },
      { title: "Red Hat",     to: "/work/redhat",     note: "Open source enterprise software" },
      { title: "SAS",         to: "/work/sas",        note: "Enterprise analytics" },
    ],
  },
  {
    name: "Design & AI",
    items: [
      { title: "Pt 1 — Tools",   to: "/designai/tools" },
      { title: "Pt 2 — Vibes",   to: "/designai/vibes" },
      { title: "Pt 3 — Sleeves", to: "/designai/sleeves" },
      { title: "Pt 4 — Claude",  to: "/designai/claude" },
    ],
  },
  {
    name: "Side projects",
    items: [
      { title: "Sleeves",   href: "https://sleeves.app",   note: "Track albums, make lists" },
      { title: "StudyDrop", href: "https://studydrop.app", note: "UX research, without the friction" },
    ],
  },
  {
    name: "About",
    items: [
      { title: "Experience", to: "/about/experience" },
      { title: "Books",      to: "/about/books" },
      { title: "Records",    to: "/about/records" },
    ],
  },
];

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

        <main className="space-y-12">
          {SECTIONS.map((section) => (
            <section key={section.name}>
              <h2 className="text-sm text-muted-foreground mb-3">{section.name}</h2>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.title} className="flex items-baseline justify-between gap-4">
                    {item.to ? (
                      <Link
                        to={item.to}
                        className="text-foreground hover:text-muted-foreground transition-colors"
                      >
                        {item.title}
                      </Link>
                    ) : item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-muted-foreground transition-colors"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{item.title}</span>
                    )}
                    {item.note && (
                      <span className="text-sm text-muted-foreground text-right">{item.note}</span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
