import { DetailLayout } from "@/components/DetailLayout";
import { useMemo, useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { McCliDemo } from "@/components/mc-cli/McCliDemo";
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
];

const customerFeedback = [
  { id: 1, customer: "Jaguar Land Rover", name: "Isha Shah", email: "ishah@partner.jaguarlandrover.com", contact: "Email", checkIn: "Emailed", settings: "--", codeChanges: "--", terms: "--", cardSort: "Sent" },
  { id: 2, customer: "Verizon Connect", name: "Lorenzo Belloni", email: "lorenzo.belloni@verizonconnect.com", contact: "Slack", checkIn: "Get back mid-Sept", settings: "--", codeChanges: "--", terms: "--", cardSort: "Sent" },
  { id: 3, customer: "Monday", name: "Adir Halfon", email: "adirh@monday.com", contact: "Slack", checkIn: "Sent", settings: "--", codeChanges: "Sent", terms: "Complete", cardSort: "--" },
  { id: 4, customer: "Skyscanner", name: "Becky Woolley", email: "becky.woolley@skyscanner.net", contact: "Slack", checkIn: "Sent", settings: "--", codeChanges: "Sent", terms: "Complete", cardSort: "--" },
  { id: 5, customer: "Richemont", name: "Claudio Valerio", email: "claudio.valerio@richemont.com", contact: "Email", checkIn: "Sent", settings: "--", codeChanges: "--", terms: "--", cardSort: "Sent" },
  { id: 6, customer: "Virgin", name: "Darshana Ganguly", email: "v.darshana.ganguly@virgin.com", contact: "Slack", checkIn: "Sent", settings: "--", codeChanges: "--", terms: "--", cardSort: "Sent" },
  { id: 7, customer: "Auto Trader", name: "David Whittingham", email: "david.whittingham@autotrader.co.uk", contact: "Slack", checkIn: "Sent", settings: "--", codeChanges: "Sent", terms: "Complete", cardSort: "--" },
  { id: 8, customer: "Richemont", name: "Delphine Zihlmann", email: "delphine.zihlmann@richemont.com", contact: "Email", checkIn: "Sent", settings: "--", codeChanges: "--", terms: "--", cardSort: "Sent" },
  { id: 9, customer: "Pagaya", name: "Eitan Sheffer", email: "eitan.sheffer@pagaya.com", contact: "Slack", checkIn: "Sent", settings: "Flat", codeChanges: "Sent", terms: "Complete", cardSort: "--" },
  { id: 10, customer: "Roche", name: "Hendrik Serruys", email: "hendrik.serruys@contractors.roche.com", contact: "Email", checkIn: "Sent", settings: "--", codeChanges: "--", terms: "--", cardSort: "Sent" },
  { id: 11, customer: "Skyscanner", name: "JM Laplante", email: "jm.laplante@skyscanner.net", contact: "Slack", checkIn: "Sent", settings: "--", codeChanges: "--", terms: "Complete", cardSort: "--" },
  { id: 12, customer: "Old Mutual", name: "Manrich Kotze", email: "Manrich.Kotze@projectolympus.co.za", contact: "Email", checkIn: "Sent", settings: "--", codeChanges: "--", terms: "--", cardSort: "Sent" },
  { id: 13, customer: "Kolibri Games", name: "Matheus Dantas", email: "matheus.dantas@kolibrigames.com", contact: "Slack", checkIn: "Sent", settings: "--", codeChanges: "Sent", terms: "DNP", cardSort: "--" },
  { id: 14, customer: "Jaguar Land Rover", name: "Rishikesh Zade", email: "rzade1@partner.jaguarlandrover.com", contact: "Email", checkIn: "Sent", settings: "--", codeChanges: "--", terms: "--", cardSort: "Sent" },
  { id: 15, customer: "Richemont", name: "Stephane Madet", email: "stephane.madet@richemont.com", contact: "Email", checkIn: "Sent", settings: "--", codeChanges: "--", terms: "--", cardSort: "Sent" },
  { id: 16, customer: "Virgin", name: "Tamas Szenczi", email: "v.tamas.szenczi@virgin.com", contact: "Slack", checkIn: "Sent", settings: "--", codeChanges: "--", terms: "--", cardSort: "Sent" },
  { id: 17, customer: "Roche", name: "Timothy Gaertner", email: "timothy.gaertner@roche.com", contact: "Email", checkIn: "Sent", settings: "--", codeChanges: "--", terms: "--", cardSort: "Sent" },
  { id: 18, customer: "OLX", name: "Marcin Binkowski", email: "marcin.binkowski@olx.pl", contact: "Slack", checkIn: "Yes", settings: "--", codeChanges: "Complete", terms: "Complete", cardSort: "--" },
  { id: 19, customer: "Aer Lingus", name: "Adina Starvar", email: "adina.stavar@aerlingus.com", contact: "Email", checkIn: "Yes", settings: "--", codeChanges: "--", terms: "--", cardSort: "Sent" },
  { id: 20, customer: "Toast", name: "Alisa Aylward", email: "alisa.aylward@toasttab.com", contact: "Slack", checkIn: "Yes", settings: "--", codeChanges: "Sent", terms: "--", cardSort: "Sent" },
  { id: 21, customer: "Toast", name: "Angela Potter", email: "angela.delatorre@toasttab.com", contact: "Slack", checkIn: "Yes", settings: "--", codeChanges: "--", terms: "--", cardSort: "Sent" },
  { id: 22, customer: "Sirius XM", name: "Armen Zaybekian", email: "armen.zaybekian@siriusxm.com", contact: "Slack", checkIn: "Yes", settings: "--", codeChanges: "--", terms: "Complete", cardSort: "--" },
  { id: 23, customer: "Skyscanner", name: "George Berdal", email: "george.berdal@skyscanner.net", contact: "Slack", checkIn: "Yes", settings: "Flat", codeChanges: "--", terms: "DNP", cardSort: "--" },
  { id: 24, customer: "Yape", name: "Jorge Plasencia", email: "jorgeeplasencia@yape.com.pe", contact: "Slack", checkIn: "Yes", settings: "DNP", codeChanges: "--", terms: "--", cardSort: "--" },
  { id: 25, customer: "Lyst", name: "Katie Woodruff", email: "katie.woodruff@ly.st", contact: "Slack", checkIn: "Yes", settings: "--", codeChanges: "Sent", terms: "Complete", cardSort: "--" },
  { id: 26, customer: "Swapfiets", name: "Natalia Remizova", email: "natalia.remizova@swapfiets.com", contact: "Slack", checkIn: "Yes", settings: "--", codeChanges: "--", terms: "--", cardSort: "Sent" },
  { id: 27, customer: "Sirius XM", name: "Rahul Gadodia", email: "rahul.gadodia@siriusxm.com", contact: "Slack", checkIn: "Yes", settings: "--", codeChanges: "--", terms: "Complete", cardSort: "--" },
  { id: 28, customer: "Delivery Hero", name: "Sahil Mehta", email: "sahil.mehta@deliveryhero.com", contact: "Slack", checkIn: "Yes", settings: "Flat", codeChanges: "Sent", terms: "Complete", cardSort: "--" },
  { id: 29, customer: "Checkout", name: "Serge Bouschet", email: "serge.bouschet@checkout.com", contact: "Slack", checkIn: "Yes", settings: "Flat", codeChanges: "Complete", terms: "Complete", cardSort: "--" },
];

export default function MonteCarlo() {
  type SortField = "id" | "title" | "files" | "additions" | "deletions";
  const [sortField, setSortField] = useState<SortField>("id");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  type FeedbackSortField = "customer" | "name" | "contact" | "checkIn" | "settings" | "codeChanges" | "terms" | "cardSort";
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
    return [...customerFeedback].sort((a, b) => {
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
        Monte Carlo AI is the leading agent trust platform, helping data teams detect, resolve, and prevent data quality issues across the modern data stack.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Role</h2>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        Joined as founding designer and built the design function while remaining hands-on across the product. Partnered with founders, product, and engineering to shape the platform, hired and mentored designers, and established research and design-system practices.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Shipping</h2>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        Contributed directly to the frontend through AI-assisted development. Shipped changes across AI workflows, navigation, monitoring, and product quality through hundreds of merged pull requests.
      </p>

      <div className="full-bleed border-y border-border/70 overflow-hidden table-gutter">
        <Table>
          <TableHeader>
            <TableRow className="surface-tint-hover border-b-border/70">
              <TableHead className="w-[90px] hidden sm:table-cell">
                <SortHeader field="id">PR</SortHeader>
              </TableHead>
              <TableHead>
                <SortHeader field="title">Title</SortHeader>
              </TableHead>
              <TableHead className="text-right w-[90px] hidden sm:table-cell">
                <SortHeader field="files">Files</SortHeader>
              </TableHead>
              <TableHead className="text-right w-[70px] hidden sm:table-cell">
                <SortHeader field="additions">Added</SortHeader>
              </TableHead>
              <TableHead className="text-right w-[70px] hidden sm:table-cell">
                <SortHeader field="deletions">Removed</SortHeader>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedPullRequests.map((pr) => (
              <TableRow key={pr.id} className="border-b border-border/70 transition-colors surface-tint-hover">
                <TableCell className="text-muted-foreground tabular-nums hidden sm:table-cell">#{pr.id}</TableCell>
                <TableCell className="text-foreground">{pr.title}</TableCell>
                <TableCell className="text-right text-muted-foreground tabular-nums whitespace-nowrap hidden sm:table-cell">
                  {pr.files}
                </TableCell>
                <TableCell className="text-right tabular-nums whitespace-nowrap text-additions w-[70px] hidden sm:table-cell">
                  +{pr.additions}
                </TableCell>
                <TableCell className="text-right tabular-nums whitespace-nowrap text-deletions w-[70px] hidden sm:table-cell">
                  −{pr.deletions}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <h2 className="font-display text-lg font-medium text-foreground">Performance</h2>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        Designed an end-to-end investigation workflow connecting cost, latency, query behavior, and operational context across Snowflake, dbt, Airflow, and Looker.
      </p>

      <img src={mcdWrites} alt="Monte Carlo write queries overview showing total credits and query performance trends" className="w-full h-auto border border-border/40" />

      <img src={mcdWrite} alt="Monte Carlo write query detail with observability agent explaining performance" className="w-full h-auto border border-border/40" />

      <img src={mcdPerfMon} alt="Monte Carlo query performance monitor configuration with alert conditions" className="w-full h-auto border border-border/40" />

      <h2 className="font-display text-lg font-medium text-foreground">Integrations</h2>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        Designed a scalable integrations framework for warehouses, orchestration tools, repositories, BI platforms, and incident-response systems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={mcdIntegrations} alt="Monte Carlo integrations catalog showing available data warehouse and tool connections" className="w-full h-auto border border-border/40" />
        <img src={mcdAudiences} alt="Monte Carlo audience configuration with recipient channels and notification routing" className="w-full h-auto border border-border/40" />
      </div>

      <img src={mcdJob} alt="Monte Carlo job performance view showing run time trends and failure tracking for dbt jobs" className="w-full h-auto border border-border/40" />

      <h2 className="font-display text-lg font-medium text-foreground">Customer feedback</h2>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        Built a customer advisory board and a lightweight research practice to keep design decisions grounded in real usage. Ran structured interviews, feedback sessions, and quarterly reviews with data teams, then turned those insights into roadmap input, clearer prioritization, and tighter product–design–engineering alignment.
      </p>

      <div className="full-bleed border-y border-border/70 overflow-hidden table-gutter">
        <Table>
          <TableHeader>
            <TableRow className="surface-tint-hover border-b-border/70">
              <TableHead className="w-[90px] hidden sm:table-cell">
                <FeedbackSortHeader field="date">Date</FeedbackSortHeader>
              </TableHead>
              <TableHead className="w-[180px] hidden sm:table-cell">
                <FeedbackSortHeader field="company">Company</FeedbackSortHeader>
              </TableHead>
              <TableHead className="w-[140px] hidden sm:table-cell">
                <FeedbackSortHeader field="session">Session</FeedbackSortHeader>
              </TableHead>
              <TableHead>
                <FeedbackSortHeader field="insight">Insight</FeedbackSortHeader>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedFeedback.map((fb) => (
              <TableRow key={fb.id} className="border-b border-border/70 transition-colors surface-tint-hover">
                <TableCell className="text-muted-foreground tabular-nums hidden sm:table-cell">{fb.date}</TableCell>
                <TableCell className="text-foreground hidden sm:table-cell">{fb.company}</TableCell>
                <TableCell className="text-muted-foreground hidden sm:table-cell">{fb.session}</TableCell>
                <TableCell className="text-foreground">{fb.insight}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <h2 className="font-display text-lg font-medium text-foreground">CLI</h2>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        Explored a new way for people and AI agents to interact directly with Monte Carlo's APIs—inspecting assets, investigating incidents, and taking action outside the main application.
      </p>

      <McCliDemo />

    </DetailLayout>
  );
}
