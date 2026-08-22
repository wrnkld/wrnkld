import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { essays } from "@/data/essays";

type Entry = { title: string; note?: string; to?: string; href?: string };

const WORK: Entry[] = [
  { title: "Monte Carlo AI", note: "Agent trust platform", to: "/work/montecarlo" },
  { title: "Tanium", note: "Endpoint security at scale", to: "/work/tanium" },
];

const SIDE: Entry[] = [
  { title: "StudyDrop", note: "UX research, without the friction", href: "https://studydrop.app" },
  { title: "Sleeves", note: "Track albums, make lists, follow friends", href: "https://sleeves.app" },
];

const ABOUT: Entry[] = [
  { title: "Experience", note: "Twenty years of design work", to: "/about/experience" },
  { title: "Books", note: "Everything I've read, recommended in pink", to: "/about/books" },
  { title: "Records", note: "A relatively exhaustive list of records I like", to: "/about/records" },
];

function Row({ entry }: { entry: Entry }) {
  const label = (
    <>
      <span className="text-foreground">{entry.title}</span>
      {entry.note && (
        <span className="text-muted-foreground"> — {entry.note}</span>
      )}
    </>
  );

  if (entry.to) {
    return (
      <li>
        <Link to={entry.to} className="hover:text-muted-foreground transition-colors">
          {label}
        </Link>
      </li>
    );
  }
  if (entry.href) {
    return (
      <li>
        <a
          href={entry.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-muted-foreground transition-colors"
        >
          {label}
        </a>
      </li>
    );
  }
  return <li>{label}</li>;
}

function Section({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-sm uppercase tracking-[0.14em] text-muted-foreground">{title}</h2>
      <ul className="mt-3 space-y-1.5">
        {entries.map((e) => (
          <Row key={e.title} entry={e} />
        ))}
      </ul>
    </section>
  );
}

export default function Index() {
  return (
    <div className="relative z-10 min-h-screen text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <header>
          <h1 className="text-2xl font-medium">Matthew Stevens</h1>
          <p className="mt-2 text-muted-foreground">
            Product designer and builder in Raleigh, North Carolina.{" "}
            <a
              href="mailto:hello@wrnkld.tv"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              hello@wrnkld.tv
            </a>
          </p>
        </header>

        <main>
          <Section title="Work" entries={WORK} />
          <Section title="Side" entries={SIDE} />
          <Section title="About" entries={ABOUT} />

          <section className="mt-10">
            <h2 className="text-sm uppercase tracking-[0.14em] text-muted-foreground">Words</h2>
            <Accordion type="single" collapsible className="mt-3">
              {essays.map((essay) => (
                <AccordionItem key={essay.id} value={essay.id} className="border-none">
                  <AccordionTrigger className="py-1.5 hover:no-underline text-left">
                    <span>
                      <span className="text-foreground font-normal">{essay.title}</span>
                      <span className="text-muted-foreground font-normal"> — {essay.note}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="prose py-4 space-y-4">{essay.body}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </main>
      </div>
    </div>
  );
}
