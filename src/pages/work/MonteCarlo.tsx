import { DetailLayout } from "@/components/DetailLayout";
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
import mcdPerfMon from "@/assets/montecarlo/mcd-perf-mon.png";
import mcdIntegrations from "@/assets/montecarlo/mcd-integrations.png";
import mcdAudiences from "@/assets/montecarlo/mcd-audiences.png";
import mcdRoles from "@/assets/montecarlo/mcd-roles.png";
import mcdSampling from "@/assets/montecarlo/mcd-sampling.png";
import mcdJob from "@/assets/montecarlo/mcd-job.png";

const pullRequests = [
  { id: 15254, title: "Remove the copy link action from asset detail pages", files: 2, additions: 2, deletions: 21 },
  { id: 15255, title: "Fix the data product asset selector layout", files: 4, additions: 91, deletions: 62 },
  { id: 15252, title: "Render legacy monitor details as metadata list section cards", files: 4, additions: 281, deletions: 361 },
  { id: 15253, title: "Drop the bespoke styling layer on the Resources menu", files: 7, additions: 171, deletions: 79 },
  { id: 15228, title: "Remove deleted alert comments from the Apollo cache", files: 11, additions: 385, deletions: 137 },
  { id: 15251, title: "Withhold generated-key dismissal until the list refetch lands", files: 3, additions: 74, deletions: 7 },
  { id: 15209, title: "Rework the SCIM settings page into cards with a modal editor", files: 16, additions: 390, deletions: 279 },
  { id: 15196, title: "Remove noise from the alert page", files: 25, additions: 256, deletions: 379 },
  { id: 15072, title: "Agents list: header Add button, search, and persisted view", files: 2, additions: 214, deletions: 12 },
  { id: 15090, title: "Alert page: remove the header chip row, move priority into the Details rail", files: 14, additions: 96, deletions: 300 },
  { id: 15054, title: "Move the Monitors Apply properties button onto the bulk-actions row", files: 2, additions: 2, deletions: 2 },
  { id: 15071, title: "Match the Alerts toolbar to the Monitors tab layout", files: 4, additions: 131, deletions: 48 },
  { id: 15038, title: "Show the ETL integrations announcement banner on the Integrations settings page", files: 1, additions: 5, deletions: 1 },
  { id: 15039, title: "Move the Monitors Columns button onto the bulk-actions row", files: 2, additions: 7, deletions: 6 },
  { id: 15037, title: "Remove Alerts from default Monitors list filters", files: 4, additions: 14, deletions: 11 },
  { id: 15008, title: "Add ETL integrations announcement banner to the Jobs page", files: 8, additions: 286, deletions: 13 },
  { id: 14942, title: "Let the asset nav tree and Operations agent panel open independently", files: 21, additions: 368, deletions: 178 },
  { id: 14945, title: "Add ETL & orchestration integrations sidebar callout", files: 5, additions: 203, deletions: 17 },
  { id: 14921, title: "Fix invisible Copy button in the AI tool triage drawer in light mode", files: 2, additions: 18, deletions: 9 },
  { id: 14884, title: "Add a Type column to the alerts table", files: 10, additions: 230, deletions: 33 },
];

export default function MonteCarlo() {
  return (
    <DetailLayout title="Monte Carlo AI" subtitle="Work">
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Monte Carlo AI is the leading agent trust platform, helping data teams detect, resolve, and prevent data quality issues across the modern data stack.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Shipping</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Contributed directly to the frontend through AI-assisted development. Shipped changes across AI workflows, navigation, monitoring, and product quality through hundreds of merged pull requests.
      </p>

      <div className="full-bleed border-y border-border/70 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b-border/70">
              <TableHead className="w-[90px]">PR</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-right w-[90px]">Files</TableHead>
              <TableHead className="text-right w-[140px]" colSpan={2}>
                Changes
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pullRequests.map((pr) => (
              <TableRow key={pr.id} className="border-b border-border/70 transition-colors surface-tint-hover">
                <TableCell className="text-muted-foreground tabular-nums">#{pr.id}</TableCell>
                <TableCell className="text-foreground">{pr.title}</TableCell>
                <TableCell className="text-right text-muted-foreground tabular-nums whitespace-nowrap">
                  {pr.files}
                </TableCell>
                <TableCell className="text-right tabular-nums whitespace-nowrap text-additions w-[70px]">
                  +{pr.additions}
                </TableCell>
                <TableCell className="text-right tabular-nums whitespace-nowrap text-deletions w-[70px]">
                  −{pr.deletions}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <h2 className="font-display text-lg font-medium text-foreground">CLI</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Explored a new way for people and AI agents to interact directly with Monte Carlo's APIs—inspecting assets, investigating incidents, and taking action outside the main application.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Role</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Joined as founding designer and built the design function while remaining hands-on across the product. Partnered with founders, product, and engineering to shape the platform, hired and mentored designers, and established research and design-system practices.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Performance</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Designed an end-to-end investigation workflow connecting cost, latency, query behavior, and operational context across Snowflake, dbt, Airflow, and Looker.
      </p>

      <img src={mcdWrites} alt="Monte Carlo write queries overview showing total credits and query performance trends" className="w-full h-auto border border-border/40" />

      <img src={mcdWrite} alt="Monte Carlo write query detail with observability agent explaining performance" className="w-full h-auto border border-border/40" />

      <img src={mcdPerfMon} alt="Monte Carlo query performance monitor configuration with alert conditions" className="w-full h-auto border border-border/40" />

      <h2 className="font-display text-lg font-medium text-foreground">Integrations</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Designed a scalable integrations framework for warehouses, orchestration tools, repositories, BI platforms, and incident-response systems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={mcdIntegrations} alt="Monte Carlo integrations catalog showing available data warehouse and tool connections" className="w-full h-auto border border-border/40" />
        <img src={mcdAudiences} alt="Monte Carlo audience configuration with recipient channels and notification routing" className="w-full h-auto border border-border/40" />
      </div>

      <img src={mcdJob} alt="Monte Carlo job performance view showing run time trends and failure tracking for dbt jobs" className="w-full h-auto border border-border/40" />

      <h2 className="font-display text-lg font-medium text-foreground">Permissions</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Designed a flexible permissions model supporting custom roles, domain-scoped access, and granular policies across assets, monitors, alerts, integrations, and sampling.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={mcdRoles} alt="Monte Carlo custom role creation with granular permission controls" className="w-full h-auto border border-border/40" />
        <img src={mcdSampling} alt="Monte Carlo integration detail showing sampling policies and connection configuration" className="w-full h-auto border border-border/40" />
      </div>

    </DetailLayout>
  );
}
