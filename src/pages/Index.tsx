import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WorkCarousel, type CarouselSlide } from "@/components/home/WorkCarousel";
import { experience } from "@/data/experience";
import { books } from "@/data/books";
import { records } from "@/data/records";

import mcdWrites from "@/assets/montecarlo/mcd-writes.png";
import mcdPerfMon from "@/assets/montecarlo/mcd-perf-mon.png";
import mcdRoles from "@/assets/montecarlo/mcd-roles.png";
import taniumNavigation from "@/assets/tanium/tanium-navigation.mp4";
import taniumNavigationViews from "@/assets/tanium/tanium-navigation-views.png";
import taniumThreatAlerts from "@/assets/tanium/tanium-threat-alerts.png";
import taniumAssuranceFindings from "@/assets/tanium/tanium-assurance-findings.png";

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

const words = [
  { title: "Pt 4 → Claude", to: "/words/claude", note: "Think piece #901" },
  { title: "Pt 3 → Sleeves", to: "/words/sleeves", note: "I built an app" },
  { title: "Pt 2 → Vibes", to: "/words/vibes", note: "Prompts v boxes" },
  { title: "Pt 1 → Tools", to: "/words/tools", note: "TMI" },
];


function Band({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`border-t border-border/70 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="px-5 py-16 md:py-24">{children}</div>
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </p>
  );
}

export default function Index() {
  const recommendedBooks = books.filter((b) => b.recommended).slice(-6).reverse();
  const recentRecords = [...records].sort((a, b) => b.year - a.year).slice(0, 6);

  return (
    <div className="relative z-10 min-h-screen text-foreground">
      {/* Hero */}
      <header className="max-w-6xl mx-auto px-6">
        <div className="px-5 pt-24 pb-16 md:pt-40 md:pb-28">
          <h1 className="text-3xl md:text-5xl font-medium leading-[1.15] max-w-4xl">
            Matthew Stevens is a product designer in Raleigh, North Carolina.
            He&apos;s the Head of Design at Monte Carlo AI, where he builds the
            interfaces people use to trust their data and their agents.
          </h1>
          <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-4xl leading-relaxed">
            Twenty years of enterprise software — analytics, security,
            automation, observability. Lately he ships his own products too.
          </p>
          <p className="mt-6">
            <a
              href="mailto:hello@wrnkld.tv"
              className="text-foreground hover:text-muted-foreground transition-colors"
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
          <h2 className="mt-4 text-2xl md:text-4xl font-medium leading-tight">
            Monte Carlo AI
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            The leading agent trust platform. I joined as the founding designer
            and built the design function while staying in the product every
            day — observability, investigations, integrations, permissions, and
            the AI-assisted workflows underneath all of it.
          </p>
          <p className="mt-6">
            <Link
              to="/work/montecarlo"
              className="inline-flex items-center gap-1.5 text-foreground hover:text-muted-foreground transition-colors"
            >
              Read the case study <ArrowUpRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4">
          <img
            src={mcdWrites}
            alt="Monte Carlo AI writes view"
            className="w-full h-auto border border-border/40"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src={mcdPerfMon} alt="Monte Carlo AI performance monitoring" className="w-full h-auto border border-border/40" />
            <img src={mcdRoles} alt="Monte Carlo AI roles and permissions" className="w-full h-auto border border-border/40" />
          </div>
        </div>
      </Band>

      {/* Tanium */}
      <Band>
        <div className="max-w-4xl">
          <Eyebrow>Work — 2019 to 2021</Eyebrow>
          <h2 className="mt-4 text-2xl md:text-4xl font-medium leading-tight">Tanium</h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            Endpoint security across millions of devices in real time. I
            redesigned three flagship products and shipped two new ones from
            scratch: Assurance for MITRE ATT&amp;CK visibility, and Enforce for
            policy enforcement at enterprise scale.
          </p>
          <p className="mt-6">
            <Link
              to="/work/tanium"
              className="inline-flex items-center gap-1.5 text-foreground hover:text-muted-foreground transition-colors"
            >
              Read the case study <ArrowUpRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4">
          <video
            src={taniumNavigation}
            poster={taniumNavigationViews}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto border border-border/40"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src={taniumThreatAlerts} alt="Tanium threat alerts" className="w-full h-auto border border-border/40" />
            <img src={taniumAssuranceFindings} alt="Tanium Assurance findings" className="w-full h-auto border border-border/40" />
          </div>
        </div>
      </Band>

      {/* Own products */}
      <Band>
        <div className="max-w-4xl">
          <Eyebrow>Built and shipped solo</Eyebrow>
          <h2 className="mt-4 text-2xl md:text-4xl font-medium leading-tight">
            Two products of my own
          </h2>
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

      {/* Earlier work carousel */}
      <Band>
        <div className="max-w-4xl">
          <Eyebrow>Earlier — 2011 to 2019</Eyebrow>
          <h2 className="mt-4 text-2xl md:text-4xl font-medium leading-tight">
            SAS and Red Hat
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            Analytics platforms at SAS, hybrid-cloud and automation tooling at
            Red Hat. Dense, technical, long-lived software — some of it still
            shipping.
          </p>
        </div>
        <div className="mt-12">
          <WorkCarousel slides={earlierWork} />
        </div>
      </Band>

      {/* Experience */}
      <Band>
        <div className="max-w-4xl">
          <Eyebrow>Experience</Eyebrow>
          <h2 className="mt-4 text-2xl md:text-4xl font-medium leading-tight">
            Where I&apos;ve been
          </h2>
        </div>
        <div className="mt-12 max-w-4xl">
          {experience.map((job) => (
            <div
              key={job.company + job.years}
              className="py-5 border-t border-border/70 flex flex-col gap-1 lg:grid lg:grid-cols-3 lg:gap-8"
            >
              <div className="lg:col-span-1">
                <h3 className="text-base font-medium">{job.company}</h3>
                <p className="text-base text-muted-foreground mt-1">{job.years}</p>
              </div>
              <div className="lg:col-span-2">
                <p className="text-base">{job.role}</p>
                {job.description && (
                  <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                    {job.description}
                  </p>
                )}
              </div>
            </div>
          ))}
          <div className="py-5 border-t border-border/70 flex flex-col gap-1 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-base font-medium">Education</h3>
            </div>
            <div className="lg:col-span-2">
              <p className="text-base">Georgetown University</p>
              <p className="text-base text-muted-foreground">BA Psychology, Cum Laude</p>
            </div>
          </div>
        </div>
      </Band>

      {/* Lists: books + records */}
      <Band>
        <div className="max-w-4xl">
          <Eyebrow>Lists</Eyebrow>
          <h2 className="mt-4 text-2xl md:text-4xl font-medium leading-tight">
            Books and records
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            I keep exhaustive lists. Here&apos;s a slice of each.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 max-w-4xl">
          <div>
            <div className="flex items-baseline justify-between border-b border-border/70 pb-3">
              <h3 className="text-base font-medium">Recommended books</h3>
              <Link
                to="/about/books"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                All books <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <ul>
              {recommendedBooks.map((b) => (
                <li key={b.id} className="py-3 border-b border-border/40 flex justify-between gap-4">
                  <span className="text-base">
                    {b.title}
                    <span className="text-muted-foreground"> — {b.author}</span>
                  </span>
                  <span className="text-sm text-muted-foreground shrink-0">{b.year}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-baseline justify-between border-b border-border/70 pb-3">
              <h3 className="text-base font-medium">Recent records</h3>
              <Link
                to="/about/records"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                All records <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <ul>
              {recentRecords.map((r) => (
                <li key={r.id} className="py-3 border-b border-border/40 flex justify-between gap-4">
                  <span className="text-base">
                    {r.album}
                    <span className="text-muted-foreground"> — {r.artist}</span>
                  </span>
                  <span className="text-sm text-muted-foreground shrink-0">{r.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Band>

      {/* Words */}
      <Band>
        <div className="max-w-4xl">
          <Eyebrow>Words — Design &amp; AI</Eyebrow>
          <h2 className="mt-4 text-2xl md:text-4xl font-medium leading-tight">
            Four essays about building with agents
          </h2>
        </div>
        <ul className="mt-12 max-w-4xl">
          {words.map((w) => (
            <li key={w.to} className="border-t border-border/70">
              <Link
                to={w.to}
                className="group flex items-baseline justify-between gap-6 py-5 transition-colors"
              >
                <span className="text-base md:text-lg">{w.title}</span>
                <span className="flex items-baseline gap-3 text-sm text-muted-foreground">
                  {w.note}
                  <ArrowUpRight className="h-4 w-4 transition-colors group-hover:text-foreground" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Band>

      {/* Vibes */}
      <Band className="border-b border-border/70">
        <div className="max-w-4xl">
          <Eyebrow>Vibes</Eyebrow>
          <h2 className="mt-4 text-2xl md:text-4xl font-medium leading-tight">
            Slacker, mostly
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            Every project in here used to be one of these. They earned a spot at
            the bottom instead.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
          {vibes.map((src) => (
            <div
              key={src}
              className="aspect-square overflow-hidden border border-border/40 bg-muted/30"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
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
