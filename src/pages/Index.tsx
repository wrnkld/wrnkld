import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WorkCarousel, type CarouselSlide } from "@/components/home/WorkCarousel";
import { experience } from "@/data/experience";
import { essays } from "@/data/essays";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { McCliDemo } from "@/components/mc-cli/McCliDemo";
import { books } from "@/data/books";
import { records } from "@/data/records";


import taniumEnforce from "@/assets/tanium/tanium-enforce.mp4";
import taniumEnforceOverview from "@/assets/tanium/tanium-enforce-overview.png";

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
        <div className="px-5 py-16 md:py-24">{children}</div>
      </div>
    </section>
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

function Lede({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 max-w-[46ch] text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] text-muted-foreground">
      {children}
    </p>
  );
}

export default function Index() {
  const recommendedBooks = books.filter((b) => b.recommended).slice(-9).reverse();
  const recentRecords = [...records].sort((a, b) => b.year - a.year).slice(0, 9);

  return (
    <div className="relative z-10 min-h-screen text-foreground">
      {/* Hero */}
      <header className="max-w-6xl mx-auto px-6">
        <div className="px-5 pt-28 pb-20 md:pt-44 md:pb-32">
          <h1 className="text-[2.5rem] md:text-[4.5rem] lg:text-[5.25rem] font-medium leading-[0.98] tracking-[-0.04em] max-w-[22ch]">
            Matthew Stevens designs enterprise software.
          </h1>
          <p className="mt-8 max-w-[42ch] text-[1.0625rem] md:text-xl leading-[1.6] text-muted-foreground">
            Head of Design at Monte Carlo AI. Raleigh, North Carolina.
          </p>
          <p className="mt-8">
            <a
              href="mailto:hello@wrnkld.tv"
              className="text-base md:text-lg text-foreground hover:text-muted-foreground transition-colors"
            >
              hello@wrnkld.tv
            </a>
          </p>
        </div>
      </header>


      {/* Monte Carlo AI */}
      <Band>
        <div className="max-w-4xl">
          <Eyebrow>Work — 2022 to present</Eyebrow>
          <Heading>Monte Carlo AI</Heading>
          <Lede>
            The leading agent trust platform. I joined as the founding designer
            and built the design function while staying in the product every day.
          </Lede>
          <p className="mt-6">
            <Link
              to="/work/montecarlo"
              className="inline-flex items-center gap-1.5 text-foreground hover:text-muted-foreground transition-colors"
            >
              Read the case study <ArrowUpRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
        <div className="mt-12">
          <McCliDemo defaultScenarioId="search" />
        </div>
      </Band>

      {/* Tanium */}
      <Band>
        <div className="max-w-4xl">
          <Eyebrow>Work — 2019 to 2021</Eyebrow>
          <Heading>Tanium</Heading>
          <Lede>
            Endpoint security across millions of devices in real time. Three
            flagship redesigns and two products shipped from scratch.
          </Lede>
          <p className="mt-6">
            <Link
              to="/work/tanium"
              className="inline-flex items-center gap-1.5 text-foreground hover:text-muted-foreground transition-colors"
            >
              Read the case study <ArrowUpRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
        <div className="mt-12">
          <video
            src={taniumEnforce}
            poster={taniumEnforceOverview}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto border border-border/40"
          />
        </div>
      </Band>

      {/* Own products */}
      <Band>
        <div className="max-w-4xl">
          <Eyebrow>Built and shipped solo</Eyebrow>
          <Heading>Two products of my own</Heading>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {[
            {
              name: "StudyDrop",
              href: "https://studydrop.app",
              blurb:
                "UX research without the friction — surveys, card sorting, tree testing, and first-click testing in one place.",
            },
            {
              name: "Sleeves",
              href: "https://sleeves.app",
              blurb:
                "Track albums, make lists, follow friends. A social music app for people who still think in records.",
            },
          ].map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3"
            >
              <h3 className="text-xl md:text-2xl font-medium inline-flex items-center gap-1.5">
                {p.name}
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">{p.blurb}</p>
            </a>
          ))}
        </div>
      </Band>

      {/* Earlier work — SAS and Red Hat, 50/50 */}
      <Band>
        <div className="max-w-4xl">
          <Eyebrow>Earlier — 2011 to 2019</Eyebrow>
          <Heading>SAS and Red Hat</Heading>
          <Lede>
            Analytics platforms at SAS, automation tooling at Red Hat. Dense,
            technical, long-lived software.
          </Lede>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          <div>
            <h3 className="pb-4 border-b border-border/70 text-lg font-medium tracking-[-0.01em]">
              SAS
            </h3>
            <div className="mt-6">
              <WorkCarousel slides={sasWork} slideClassName="w-full" />
            </div>
          </div>
          <div>
            <h3 className="pb-4 border-b border-border/70 text-lg font-medium tracking-[-0.01em]">
              Red Hat
            </h3>
            <div className="mt-6">
              <WorkCarousel slides={redHatWork} slideClassName="w-full" />
            </div>
          </div>
        </div>
      </Band>




      {/* Books */}
      <Band>
        <div className="max-w-4xl">
          <Eyebrow>Lists — Reading</Eyebrow>
          <Heading>Books</Heading>
          <Lede>Recommendations from an exhaustive list.</Lede>
          <p className="mt-6">
            <Link
              to="/about/books"
              className="inline-flex items-center gap-1.5 text-foreground hover:text-muted-foreground transition-colors"
            >
              Every book I&apos;ve read <ArrowUpRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
        <ul className="mt-12 max-w-3xl">
          {recommendedBooks.map((b) => (
            <li key={b.id} className="py-4 border-t border-border/70 flex items-baseline justify-between gap-4">
              <span className="text-base leading-snug">
                {b.title}
                <span className="block text-muted-foreground">{b.author}</span>
              </span>
              <span className="font-mono text-xs text-muted-foreground shrink-0">{b.year}</span>
            </li>
          ))}
        </ul>
      </Band>

      {/* Records */}
      <Band>
        <div className="max-w-4xl">
          <Eyebrow>Lists — Listening</Eyebrow>
          <Heading>Records</Heading>
          <Lede>The most recent things in rotation.</Lede>
          <p className="mt-6">
            <Link
              to="/about/records"
              className="inline-flex items-center gap-1.5 text-foreground hover:text-muted-foreground transition-colors"
            >
              Every record I own <ArrowUpRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
        <ul className="mt-12 max-w-3xl">
          {recentRecords.map((r) => (
            <li key={r.id} className="py-4 border-t border-border/70 flex items-baseline justify-between gap-4">
              <span className="text-base leading-snug">
                {r.album}
                <span className="block text-muted-foreground">{r.artist}</span>
              </span>
              <span className="font-mono text-xs text-muted-foreground shrink-0">{r.year}</span>
            </li>
          ))}
        </ul>
      </Band>


      {/* Words */}
      <Band id="words" className="border-b border-border/70">
        <div className="max-w-4xl">
          <Eyebrow>Words — Design &amp; AI</Eyebrow>
          <Heading>Four essays about building with agents</Heading>
          <Lede>Written in order, best read that way. Open one.</Lede>
        </div>
        <Accordion type="single" collapsible className="mt-12 max-w-3xl">
          {essays.map((essay) => (
            <AccordionItem key={essay.id} value={essay.id}>
              <AccordionTrigger>
                <span className="text-lg md:text-xl font-medium tracking-[-0.01em]">
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
  );
}
