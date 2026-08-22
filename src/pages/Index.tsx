import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Clock, LayoutGrid, Circle, Cherry } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WorkCarousel, type CarouselSlide } from "@/components/home/WorkCarousel";
import { essays } from "@/data/essays";

import analyticsAnalyze from "@/assets/sas/analytics-analyze.png";
import analyticsExplore from "@/assets/sas/analytics-explore.png";
import factoryResults from "@/assets/sas/factory-results.png";
import visualStatsRoles from "@/assets/sas/visual-stats-roles.png";
import rhbaWorkflowModeler from "@/assets/redhat/rhba-workflow-modeler.png";
import rhbaProjectMetrics from "@/assets/redhat/rhba-project-metrics.png";
import rhboRoster from "@/assets/redhat/rhbo-roster.png";
import rhbaAssetsList from "@/assets/redhat/rhba-assets-list.png";

const sasWork: CarouselSlide[] = [
  { src: analyticsAnalyze, alt: "SAS Model Studio analysis pipeline", caption: "Model Studio — analysis pipeline" },
  { src: analyticsExplore, alt: "SAS Model Studio exploration", caption: "Model Studio — exploration" },
  { src: factoryResults, alt: "SAS Factory Miner model comparison", caption: "Factory Miner — model comparison" },
  { src: visualStatsRoles, alt: "SAS Visual Statistics roles", caption: "Visual Statistics — variable roles" },
];

const redHatWork: CarouselSlide[] = [
  { src: rhbaWorkflowModeler, alt: "Red Hat Business Automation workflow modeler", caption: "Business Automation — workflow modeler" },
  { src: rhbaAssetsList, alt: "Red Hat Business Automation assets", caption: "Business Automation — project assets" },
  { src: rhbaProjectMetrics, alt: "Red Hat Business Automation metrics", caption: "Business Automation — project metrics" },
  { src: rhboRoster, alt: "Red Hat Business Optimizer roster", caption: "Business Optimizer — roster planning" },
];

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
  { title: "Tanium", category: "Work", to: "/work/tanium", note: "Endpoint security at scale", gif: "https://media.giphy.com/media/YPQ7McRYvkGrnPPg2x/giphy.gif" },
  { title: "StudyDrop", category: "Side", href: "https://studydrop.app", note: "UX research, without the friction", gif: "https://media.giphy.com/media/VbmrliOc1UMJDYYZRF/giphy.gif" },
  { title: "Sleeves", category: "Side", href: "https://sleeves.app", note: "Track albums, make lists, follow friends", gif: "https://media.giphy.com/media/gj0CJcKVtmAoSq5v9d/giphy.gif" },
  { title: "Books", category: "About", to: "/about/books", note: "I like making lists", gif: "https://media.giphy.com/media/TEEewgFfvMvvkSzw7w/giphy.gif" },
  { title: "Records", category: "About", to: "/about/records", note: "A relatively exhaustive list of records I like", gif: "https://media.giphy.com/media/KHEIcdVp8oSKo4zvmZ/giphy.gif" },
  { title: "Pt 4 → Claude", category: "Words", href: "#words", note: "Think piece #901", gif: "https://media.giphy.com/media/hX6UTr4GALucmRR38D/giphy.gif" },
  { title: "Pt 3 → Sleeves", category: "Words", href: "#words", note: "I built an app", gif: "https://media.giphy.com/media/XB3WTIY5GhgcBosgE4/giphy.gif" },
  { title: "Pt 2 → Vibes", category: "Words", href: "#words", note: "Prompts v Boxes", gif: "https://media.giphy.com/media/S9WCr3cTm6qHq6LmRi/giphy.gif" },
  { title: "Pt 1 → Tools", category: "Words", href: "#words", note: "TMI", gif: "https://media.giphy.com/media/MCXp9DOVi5xKQhicLs/giphy.gif" },
];

const CHIP: Record<Category, string> = {
  Work: "chip-work",
  About: "chip-about",
  Side: "chip-side",
  Words: "chip-words",
};

const CATEGORICAL_ORDER = [
  "Monte Carlo AI",
  "Tanium",
  "Sleeves",
  "StudyDrop",
  "Records",
  "Books",
];

type SortMode = "default" | "category";
type FilterMode = "all" | "dope";

const DOPE_TITLES = new Set([
  "Monte Carlo AI",
  "Tanium",
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
          <img src={item.gif} alt="" loading="lazy" className="w-full h-full object-cover" />
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
    return (
      <Link to={item.to} className="block h-full">
        {inner}
      </Link>
    );
  }
  if (item.href) {
    const external = item.href.startsWith("http");
    return (
      <a
        href={item.href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="block h-full"
      >
        {inner}
      </a>
    );
  }
  return inner;
}

function Band({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`border-t border-border/70 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="px-5 py-10 md:py-12">{children}</div>
      </div>
    </section>
  );
}

function BandHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 text-[1.625rem] md:text-[2.5rem] font-medium leading-[1.05] tracking-[-0.02em]">
      {children}
    </h2>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
      {children}
    </p>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-5 text-[2rem] md:text-[3.25rem] font-medium leading-[1.02] tracking-[-0.025em]">
      {children}
    </h2>
  );
}

export default function Index() {
  const [sort, setSort] = useState<SortMode>(() => {
    if (typeof window === "undefined") return "category";
    const s = sessionStorage.getItem("index-sort");
    return s === "category" || s === "default" ? (s as SortMode) : "category";
  });
  const handleSortChange = (v: SortMode) => {
    setSort(v);
    sessionStorage.setItem("index-sort", v);
  };
  const [filter, setFilter] = useState<FilterMode>(() => {
    if (typeof window === "undefined") return "dope";
    const s = sessionStorage.getItem("index-filter");
    return s === "all" || s === "dope" ? (s as FilterMode) : "dope";
  });
  const handleFilterChange = (v: FilterMode) => {
    setFilter(v);
    sessionStorage.setItem("index-filter", v);
  };

  const items = useMemo(() => {
    const base = filter === "dope" ? ITEMS.filter((i) => DOPE_TITLES.has(i.title)) : ITEMS;
    if (sort === "category") {
      return [...base].sort((a, b) => {
        const ai = CATEGORICAL_ORDER.indexOf(a.title);
        const bi = CATEGORICAL_ORDER.indexOf(b.title);
        if (ai === -1 && bi === -1) return a.title.localeCompare(b.title);
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
                  {(
                    [
                      {
                        key: "sort",
                        value: sort,
                        onChange: (v: string) => handleSortChange(v as SortMode),
                        options: [
                          { mode: "default", Icon: Clock, label: "Chronological" },
                          { mode: "category", Icon: LayoutGrid, label: "Categorical" },
                        ],
                      },
                      {
                        key: "filter",
                        value: filter,
                        onChange: (v: string) => handleFilterChange(v as FilterMode),
                        options: [
                          { mode: "all", Icon: Circle, label: "All" },
                          { mode: "dope", Icon: Cherry, label: "Favorites" },
                        ],
                      },
                    ] as const
                  ).map((group) => (
                    <Tabs key={group.key} value={group.value} onValueChange={group.onChange}>
                      <TabsList className="surface-tint p-1.5">
                        {group.options.map(({ mode, Icon, label }) => (
                          <Tooltip key={mode}>
                            <TooltipTrigger asChild>
                              <span className="inline-flex">
                                <TabsTrigger
                                  value={mode}
                                  aria-label={label}
                                  className="px-1.5 rounded data-[state=active]:shadow-[0_1px_2px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.06)]"
                                >
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

      {/* Earlier work — SAS and Red Hat */}
      <Band>
        <div className="max-w-4xl">
          <Eyebrow>Earlier — 2004 to 2019</Eyebrow>
          <BandHeading>SAS and Red Hat</BandHeading>
          <p className="mt-4 max-w-[48ch] text-[1rem] md:text-[1.0625rem] leading-[1.6] text-muted-foreground">
            Analytics platforms at SAS, hybrid-cloud automation at Red Hat.
            Before that, Frog and HumanCentric. Georgetown, BA Psychology.
          </p>
        </div>
        <div className="mt-8 max-w-5xl">
          <WorkCarousel slides={[...sasWork, ...redHatWork]} slideClassName="w-[78%] sm:w-[54%] lg:w-[38%]" />
        </div>
      </Band>

      {/* Words */}
      <Band id="words" className="border-b border-border/70">
        <div className="max-w-4xl">
          <Eyebrow>Words — Design &amp; AI</Eyebrow>
          <BandHeading>Four essays on building with agents</BandHeading>
        </div>
        <Accordion type="single" collapsible className="mt-8 max-w-3xl">
          {essays.map((essay) => (
            <AccordionItem key={essay.id} value={essay.id}>
              <AccordionTrigger>
                <span className="text-base md:text-lg font-medium tracking-[-0.01em]">
                  {essay.title}
                </span>
                <span className="ml-auto text-sm text-muted-foreground">{essay.note}</span>
              </AccordionTrigger>
              <AccordionContent>
                <article className="font-body text-[1.0625rem] text-muted-foreground leading-[1.7] space-y-6 max-w-[68ch]">
                  {essay.body}
                </article>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Band>

      <footer className="max-w-6xl mx-auto px-6">
        <div className="px-5 py-16 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a
            href="mailto:hello@wrnkld.tv"
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            hello@wrnkld.tv
          </a>
          <span>Raleigh, North Carolina</span>
        </div>
      </footer>
      </div>
    </TooltipProvider>
  );
}
