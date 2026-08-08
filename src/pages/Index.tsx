import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Clock, LayoutGrid, AArrowDown, Circle, Cherry } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  { title: "Monte Carlo", category: "Work", to: "/work/montecarlo", note: "Agent trust platform", gif: "https://media.giphy.com/media/j5nLG5ZTChFwGsmGnV/giphy.gif" },
  { title: "Experience", category: "About", to: "/about/experience", note: "💼", gif: "https://media.giphy.com/media/JnAqFgTk5AcxbfhtPL/giphy.gif" },
  { title: "Pt 4 → Claude", category: "Words", to: "/words/claude", note: "Think piece #901", gif: "https://media.giphy.com/media/hX6UTr4GALucmRR38D/giphy.gif" },
  { title: "StudyDrop", category: "Side", href: "https://studydrop.app", note: "UX research, without the friction", gif: "https://media.giphy.com/media/VbmrliOc1UMJDYYZRF/giphy.gif" },
  { title: "Sleeves", category: "Side", href: "https://sleeves.app", note: "Track albums, make lists, and follow friends", gif: "https://media.giphy.com/media/gj0CJcKVtmAoSq5v9d/giphy.gif" },
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

const CATEGORY_ORDER: Category[] = ["Work", "Side", "About", "Words"];
const CATEGORICAL_ORDER = [
  "Monte Carlo",
  "Tanium",
  "Red Hat",
  "SAS",
  "Sleeves",
  "StudyDrop",
  "Experience",
  "Records",
  "Books",
];
type SortMode = "default" | "category" | "alpha";
type FilterMode = "all" | "dope";
const DOPE_TITLES = new Set([
  "Monte Carlo",
  "Experience",
  "Books",
  "StudyDrop",
  "Sleeves",
  "Records",
]);

function Card({ item }: { item: Item }) {
  const inner = (
    <div className="group h-full flex flex-col gap-3 p-5 transition-colors surface-tint-hover">
      {item.gif && (
        <div className="aspect-[4/3] overflow-hidden rounded-md border border-border/40 bg-muted/30">
          <img
            src={item.gif}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex items-center gap-2">
        <span
          className={`chip ${CHIP[item.category]} font-mono text-[10px] uppercase tracking-[0.14em] px-2 py-0.5 rounded`}
        >
          {item.category}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-medium leading-snug">{item.title}</h2>
        {item.note && (
          <p className="text-sm text-muted-foreground leading-snug">{item.note}</p>
        )}
      </div>
    </div>
  );

  if (item.to) {
    return <Link to={item.to} className="block h-full">{inner}</Link>;
  }
  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    );
  }
  return inner;
}

export default function Index() {
  const [sort, setSort] = useState<SortMode>(() => {
    if (typeof window === "undefined") return "default";
    const s = sessionStorage.getItem("index-sort");
    return s === "category" || s === "alpha" || s === "default" ? s : "default";
  });
  const handleSortChange = (v: SortMode) => {
    setSort(v);
    sessionStorage.setItem("index-sort", v);
  };
  const [filter, setFilter] = useState<FilterMode>(() => {
    if (typeof window === "undefined") return "all";
    return sessionStorage.getItem("index-filter") === "dope" ? "dope" : "all";
  });
  const handleFilterChange = (v: FilterMode) => {
    setFilter(v);
    sessionStorage.setItem("index-filter", v);
  };

  const items = useMemo(() => {
    const base = filter === "dope" ? ITEMS.filter((i) => DOPE_TITLES.has(i.title)) : ITEMS;
    if (sort === "alpha") {
      return [...base].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sort === "category") {
      return [...base].sort((a, b) => {
        const ai = CATEGORICAL_ORDER.indexOf(a.title);
        const bi = CATEGORICAL_ORDER.indexOf(b.title);
        // Words: sort by title (Pt 1 → Pt 4), always last
        if (ai === -1 && bi === -1) {
          return a.title.localeCompare(b.title);
        }
        if (ai === -1) return 1;
        if (bi === -1) return -1;
        return ai - bi;
      });
    }
    return base;
  }, [sort, filter]);

  return (
    <TooltipProvider delayDuration={200}>
    <div className="relative z-10 min-h-screen text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <header className="border-t border-b border-border/70">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-5">
              <h1 className="text-2xl font-medium">Matthew Stevens</h1>
              <p className="text-muted-foreground mt-2">
                <a
                  href="mailto:hello@wrnkld.tv"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  hello@wrnkld.tv
                </a>
              </p>
            </div>
            <div className="p-5 sm:col-span-1 lg:col-span-2 flex sm:justify-end sm:items-end">
              <div className="inline-flex items-center gap-2">
                {([
                  {
                    key: "sort",
                    value: sort,
                    onChange: (v: string) => handleSortChange(v as SortMode),
                    options: [
                      { mode: "default", Icon: Clock, label: "Chronological" },
                      { mode: "category", Icon: LayoutGrid, label: "Categorical" },
                      { mode: "alpha", Icon: AArrowDown, label: "Alphabetical" },
                    ],
                  },
                  {
                    key: "filter",
                    value: filter,
                    onChange: (v: string) => handleFilterChange(v as FilterMode),
                    options: [
                      { mode: "all", Icon: Circle, label: "Everything" },
                      { mode: "dope", Icon: Cherry, label: "Favorites" },
                    ],
                  },
                ]).map((group) => (
                  <Tabs key={group.key} value={group.value} onValueChange={group.onChange}>
                    <TabsList className="surface-tint p-1.5">
                      {group.options.map(({ mode, Icon, label }) => (
                        <Tooltip key={mode}>
                          <TooltipTrigger asChild>
                            <span className="inline-flex">
                              <TabsTrigger value={mode} aria-label={label} className="px-1.5 rounded data-[state=active]:shadow-[0_1px_2px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.06)]">
                                <Icon className="h-4 w-4" />
                              </TabsTrigger>
                            </span>
                          </TooltipTrigger>
                          <TooltipContent className="hidden sm:block">{label}</TooltipContent>
                        </Tooltip>
                      ))}
                    </TabsList>
                  </Tabs>
                ))}
              </div>
            </div>
          </div>
        </header>

        <main>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-b border-border/70">
            {items.map((item) => (
              <motion.li
                key={item.title}
                layout
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="border-b border-border/70 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
              >
                <Card item={item} />
              </motion.li>
            ))}
          </ul>
        </main>
      </div>
    </div>
    </TooltipProvider>
  );
}