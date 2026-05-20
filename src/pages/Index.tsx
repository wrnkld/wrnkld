import { Link } from "react-router-dom";
import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  gif?: string;
};

const ITEMS: Item[] = [
  { title: "Monte Carlo", category: "Work", to: "/work/montecarlo", note: "Data and AI observability", gif: "https://media.giphy.com/media/j5nLG5ZTChFwGsmGnV/giphy.gif" },
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
type SortMode = "default" | "alpha" | "category";

function RowInner({
  item,
  onHover,
  onLeave,
}: {
  item: Item;
  onHover: (item: Item) => void;
  onLeave: () => void;
}) {
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
    return (
      <Link
        to={item.to}
        className="group inline-block"
        onMouseEnter={() => onHover(item)}
        onMouseLeave={onLeave}
      >
        {inner}
      </Link>
    );
  }
  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-block"
        onMouseEnter={() => onHover(item)}
        onMouseLeave={onLeave}
      >
        {inner}
      </a>
    );
  }
  return inner;
}

export default function Index() {
  const [sort, setSort] = useState<SortMode>(() => {
    if (typeof window === "undefined") return "default";
    const saved = sessionStorage.getItem("index-sort");
    return saved === "alpha" || saved === "category" || saved === "default" ? saved : "default";
  });

  const handleSortChange = (v: SortMode) => {
    setSort(v);
    sessionStorage.setItem("index-sort", v);
  };

  const items = useMemo(() => {
    if (sort === "alpha") {
      return [...ITEMS].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sort === "category") {
      return [...ITEMS].sort((a, b) => {
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
    return ITEMS;
  }, [sort]);

  const [hovered, setHovered] = useState<Item | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => setCursor({ x, y }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground" onMouseMove={handleMouseMove}>
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
          <Tabs value={sort} onValueChange={(v) => handleSortChange(v as SortMode)} className="mb-4">
            <TooltipProvider delayDuration={250}>
              <TabsList className="h-9 rounded-lg bg-muted p-0.5">
                {([
                  { mode: "default" as const, Icon: Clock, label: "Chronological" },
                  { mode: "category" as const, Icon: LayoutGrid, label: "Categorical" },
                  { mode: "alpha" as const, Icon: ArrowDownAZ, label: "Alphabetical" },
                ]).map(({ mode, Icon, label }) => (
                  <Tooltip key={mode}>
                    <TooltipTrigger asChild>
                      <TabsTrigger
                        value={mode}
                        aria-label={label}
                        className="h-8 w-9 rounded-md p-0 text-muted-foreground transition-colors aria-[selected=true]:bg-foreground aria-[selected=true]:text-background data-[state=active]:shadow-none"
                      >
                        <Icon className="h-4 w-4" />
                      </TabsTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="hidden sm:block">{label}</TooltipContent>
                  </Tooltip>
                ))}
              </TabsList>
            </TooltipProvider>
          </Tabs>
          <ul className="space-y-3">
            {items.map((item) => (
              <motion.li
                key={item.title}
                layout
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              >
                <RowInner
                  item={item}
                  onHover={(it) => setHovered(it)}
                  onLeave={() => setHovered(null)}
                />
              </motion.li>
            ))}
          </ul>
        </main>
      </div>

      {/* Cursor-following gif preview — desktop hover only */}
      <AnimatePresence>
        {hovered?.gif && (() => {
          const W = 384;
          const margin = 16;
          const vw = typeof window !== "undefined" ? window.innerWidth : 1024;
          const vh = typeof window !== "undefined" ? window.innerHeight : 768;
          const flipX = cursor.x + 20 + W + margin > vw;
          const left = flipX ? Math.max(margin, cursor.x - 20 - W) : cursor.x + 20;
          // Assume tall-ish gif; clamp top so it never goes below viewport
          const estH = W; // square-ish fallback for clamping
          let top = cursor.y + 20;
          if (top + estH + margin > vh) top = Math.max(margin, vh - estH - margin);
          return (
            <motion.img
              key={hovered.title}
              src={hovered.gif}
              alt=""
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.15 }}
              style={{ top, left, width: W, maxHeight: vh - margin * 2 }}
              className="hidden sm:block fixed z-50 pointer-events-none h-auto object-contain rounded-lg border border-border/40 shadow-lg"
            />
          );
        })()}
      </AnimatePresence>
    </div>
  );
}