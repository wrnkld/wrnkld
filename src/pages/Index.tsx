import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion, LayoutGroup } from "motion/react";
import { ArrowDownAZ, LayoutGrid, Clock } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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

const CATEGORY_ORDER: Category[] = ["Work", "Side", "About", "Words"];
type SortMode = "default" | "alpha" | "category";

function RowInner({ item }: { item: Item }) {
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

  if (item.to) {
    return <Link to={item.to} className="group inline-block">{inner}</Link>;
  }
  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="group inline-block">
        {inner}
      </a>
    );
  }
  return inner;
}

export default function Index() {
  const [sort, setSort] = useState<SortMode>("default");

  const items = useMemo(() => {
    if (sort === "alpha") {
      return [...ITEMS].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sort === "category") {
      return [...ITEMS].sort((a, b) => {
        const c = CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
        return c !== 0 ? c : a.title.localeCompare(b.title);
      });
    }
    return ITEMS;
  }, [sort]);

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
          <TooltipProvider delayDuration={150}>
            <Tabs value={sort} onValueChange={(v) => setSort(v as SortMode)} className="mb-4">
              <TabsList className="h-9 rounded-md bg-muted p-0.5">
                {([
                  { mode: "default" as const, Icon: Clock, label: "Chronological" },
                  { mode: "category" as const, Icon: LayoutGrid, label: "Categorical" },
                  { mode: "alpha" as const, Icon: ArrowDownAZ, label: "Alphabetical" },
                ]).map(({ mode, Icon, label }) => {
                  const isSelected = sort === mode;

                  return (
                  <Tooltip key={mode}>
                    <TooltipTrigger asChild>
                      <TabsTrigger
                        value={mode}
                        aria-label={label}
                        className={`h-8 w-9 rounded-sm transition-colors hover:bg-background/15 hover:text-foreground ${
                          isSelected
                            ? "bg-foreground text-background"
                            : "text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </TabsTrigger>
                    </TooltipTrigger>
                    <TooltipContent>{label}</TooltipContent>
                  </Tooltip>
                  );
                })}
              </TabsList>
            </Tabs>
          </TooltipProvider>
          <LayoutGroup>
            <ul className="space-y-3">
              {items.map((item) => (
                <motion.li
                  key={item.title}
                  layout
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                >
                  <RowInner item={item} />
                </motion.li>
              ))}
            </ul>
          </LayoutGroup>
        </main>
      </div>
    </div>
  );
}