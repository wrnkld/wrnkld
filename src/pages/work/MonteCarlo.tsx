import { DetailLayout } from "@/components/DetailLayout";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpDown, Plus, Minus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import mcdWrites from "@/assets/montecarlo/mcd-writes.png";
import mcdWrite from "@/assets/montecarlo/mcd-write.png";
import mcdIntegrations from "@/assets/montecarlo/mcd-addint.png";
import mcdJob from "@/assets/montecarlo/mcd-job.png";
import { SankeyDiagram } from "@/components/SankeyDiagram";
import { troubleshootingSankey } from "@/data/troubleshooting";
import { customerFeedback, representativeFeedback, researchStats } from "@/data/customerResearch";
import { pullRequests } from "@/data/monteCarloPullRequests";

const AGENT_DOCS = [
  {
    title: "components.md",
    body: `# Components\n\nPlaceholder — paste the real file here.\n\n## Rules\n\n- Use existing components before composing new ones\n- ...`,
  },
  {
    title: "patterns.md",
    body: `# Patterns\n\nPlaceholder — paste the real file here.\n\n## Rules\n\n- Reuse established page patterns\n- ...`,
  },
  {
    title: "tokens.md",
    body: `# Tokens\n\nPlaceholder — paste the real file here.\n\n## Rules\n\n- Use design tokens, never hardcoded values\n- ...`,
  },
  {
    title: "agents.md",
    body: `# Agents\n\nPlaceholder — paste the real file here.\n\n## Rules\n\n- Do not invent new patterns\n- ...`,
  },
];



export default function MonteCarlo() {
  type SortField = "order" | "title" | "files" | "additions" | "deletions";
  const [sortField, setSortField] = useState<SortField>("order");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  type FeedbackSortField = "customer" | "role" | "studies";
  const [feedbackSortField, setFeedbackSortField] = useState<FeedbackSortField>("customer");
  const [feedbackSortDirection, setFeedbackSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedPullRequests = useMemo(() => {
    const value = (pr: (typeof pullRequests)[number]) => pr[sortField];
    return [...pullRequests].sort((a, b) => {
      const av = value(a);
      const bv = value(b);
      const comparison =
        typeof av === "string" && typeof bv === "string" ? av.localeCompare(bv) : Number(av) - Number(bv);
      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [sortField, sortDirection]);

  const handleFeedbackSort = (field: FeedbackSortField) => {
    if (feedbackSortField === field) {
      setFeedbackSortDirection(feedbackSortDirection === "asc" ? "desc" : "asc");
    } else {
      setFeedbackSortField(field);
      setFeedbackSortDirection("asc");
    }
  };

  const sortedFeedback = useMemo(() => {
    const value = (fb: (typeof customerFeedback)[number]) => fb[feedbackSortField];
    return [...representativeFeedback].sort((a, b) => {
      const av = value(a);
      const bv = value(b);
      const comparison =
        typeof av === "string" && typeof bv === "string" ? av.localeCompare(bv) : Number(av) - Number(bv);
      return feedbackSortDirection === "asc" ? comparison : -comparison;
    });
  }, [feedbackSortField, feedbackSortDirection]);

  const SortHeader = ({ field, children }: { field: SortField; children: React.ReactNode }) => (
    <button
      onClick={() => handleSort(field)}
      className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
    >
      {children}
      <ArrowUpDown className="h-3 w-3" />
    </button>
  );

  const FeedbackSortHeader = ({ field, children }: { field: FeedbackSortField; children: React.ReactNode }) => (
    <button
      onClick={() => handleFeedbackSort(field)}
      className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
    >
      {children}
      <ArrowUpDown className="h-3 w-3" />
    </button>
  );

  return (
    <DetailLayout title="Monte Carlo AI">
      <p className="lead">
        Monte Carlo helps data teams detect, investigate, and resolve data quality issues across their data and AI systems.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Role</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Joined as founding designer and built the design function while remaining hands-on across the product. Partnered with founders, product, and engineering to shape the platform, hired and mentored designers, and established research and design-system practices.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Understanding adoption</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Analyzed troubleshooting agent usage across 470 paying customers over two months. Nearly half never used the agent, while only 21 enabled automatic runs. The analysis highlighted opportunities to improve adoption and encourage more sustained usage.
      </p>
      <figure className="overflow-x-auto touch-auto">
        <SankeyDiagram data={troubleshootingSankey} label="TSA usage: 470 paying customers split into 228 who didn't run TSA and 242 who did; those 242 split into 86 below three monthly runs, 52 using all three free runs, 83 manual users above three runs, and 21 with automatic runs on." />
      </figure>

      <h2 className="font-display text-lg font-medium text-foreground">Query performance</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Designed investigation workflows that connect query costs, latency, execution history, and AI-generated analysis across Snowflake, dbt, Airflow, and Looker.
      </p>

<img src={mcdWrites} alt="Monte Carlo write queries overview showing total credits and query performance trends" className="w-full h-auto border border-border/40" />

<img src={mcdWrite} alt="Monte Carlo write query detail with observability agent explaining performance" className="w-full h-auto border border-border/40" />

<h2 className="font-display text-lg font-medium text-foreground">Integrations</h2>
<p className="font-body text-base text-muted-foreground leading-relaxed">
  Designed a unified framework for connecting data warehouses, orchestration tools, repositories, BI platforms, and incident-response systems.
</p>

<img src={mcdIntegrations} alt="Monte Carlo add integration page showing integration categories and popular connections" className="w-full h-auto border border-border/40" />

<img src={mcdJob} alt="Monte Carlo job performance view showing run time trends and failure tracking for dbt jobs" className="w-full h-auto border border-border/40" />

      <h2 className="font-display text-lg font-medium text-foreground">Design engineer</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Contributed directly to the production frontend through AI-assisted development, with more than 300 closed pull requests spanning AI workflows, product features, design systems, accessibility, and UX improvements.
      </p>

      <div className="full-bleed border-y border-border/70 overflow-hidden table-gutter">
        <Table>
          <TableHeader>
            <TableRow className="surface-tint-hover border-b-border/70">
              <TableHead className="w-[90px] hidden md:table-cell">
                <SortHeader field="order">PR</SortHeader>
              </TableHead>
              <TableHead>
                <SortHeader field="title">Title</SortHeader>
              </TableHead>
              <TableHead className="text-right w-[90px] hidden md:table-cell">
                <SortHeader field="files">Files</SortHeader>
              </TableHead>
              <TableHead className="text-right w-[70px] hidden md:table-cell">
                <SortHeader field="additions">Added</SortHeader>
              </TableHead>
              <TableHead className="text-right w-[70px] hidden md:table-cell">
                <SortHeader field="deletions">Removed</SortHeader>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedPullRequests.map((pr) => (
              <TableRow key={pr.order} className="border-b border-border/70 transition-colors surface-tint-hover">
                <TableCell className="text-muted-foreground tabular-nums hidden md:table-cell">{pr.id === null ? "—" : `#${pr.id}`}</TableCell>
                <TableCell className="text-foreground">{pr.title}</TableCell>
                <TableCell className="text-right text-muted-foreground tabular-nums whitespace-nowrap hidden md:table-cell">
                  {pr.files}
                </TableCell>
                <TableCell className="text-right tabular-nums whitespace-nowrap text-additions w-[70px] hidden md:table-cell">
                  +{pr.additions}
                </TableCell>
                <TableCell className="text-right tabular-nums whitespace-nowrap text-deletions w-[70px] hidden md:table-cell">
                  −{pr.deletions}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <h2 className="font-display text-lg font-medium text-foreground">Design system for agents</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Documented the design system in markdown files for AI agents, so generated UI uses existing patterns instead of inventing new ones.
      </p>

      <div className="border-t border-border/70 not-prose">
        {AGENT_DOCS.map((doc) => (
          <AgentDocRow key={doc.title} title={doc.title} body={doc.body} />
        ))}
      </div>

      <h2 className="font-display text-lg font-medium text-foreground">Customer advisory board</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Built a customer advisory board and a lightweight research practice to keep design decisions grounded in real usage. Ran structured interviews, feedback sessions, and quarterly reviews with data teams, then turned those insights into roadmap input, clearer prioritization, and tighter product–design–engineering alignment.
      </p>

      <dl className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4 not-prose font-body">
        {[
          { value: researchStats.participants, label: "Participants" },
          { value: researchStats.companies, label: "Companies" },
          { value: researchStats.studies, label: "Studies" },
        ].map((stat) => (
          <div key={stat.label} className="min-w-0 rounded-lg border border-border/70 p-4">
            <dt className="text-sm text-muted-foreground leading-relaxed">{stat.label}</dt>
            <dd className="mt-2 text-4xl font-medium text-foreground tabular-nums">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <div className="full-bleed border-y border-border/70 overflow-hidden table-gutter">
        <Table>
          <TableHeader>
            <TableRow className="surface-tint-hover border-b-border/70">
              <TableHead className="w-[180px]">
                <FeedbackSortHeader field="customer">Customer</FeedbackSortHeader>
              </TableHead>
              <TableHead className="w-[160px]">
                <FeedbackSortHeader field="role">Role</FeedbackSortHeader>
              </TableHead>
              <TableHead className="text-right w-[90px]">
                <FeedbackSortHeader field="studies">Studies</FeedbackSortHeader>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedFeedback.map((fb) => (
              <TableRow key={fb.id} className="border-b border-border/70 transition-colors surface-tint-hover">
                <TableCell className="text-foreground">{fb.customer}</TableCell>
                <TableCell className="text-muted-foreground">{fb.role}</TableCell>
                <TableCell className="text-right text-muted-foreground tabular-nums whitespace-nowrap">{fb.studies}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    </DetailLayout>
  );
}
