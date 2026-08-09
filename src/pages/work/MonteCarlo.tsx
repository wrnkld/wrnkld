import { DetailLayout } from "@/components/DetailLayout";

import mcdWrites from "@/assets/montecarlo/mcd-writes.png";
import mcdWrite from "@/assets/montecarlo/mcd-write.png";
import mcdPerfMon from "@/assets/montecarlo/mcd-perf-mon.png";
import mcdIntegrations from "@/assets/montecarlo/mcd-integrations.png";
import mcdAudiences from "@/assets/montecarlo/mcd-audiences.png";
import mcdRoles from "@/assets/montecarlo/mcd-roles.png";
import mcdSampling from "@/assets/montecarlo/mcd-sampling.png";
import mcdJob from "@/assets/montecarlo/mcd-job.png";

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
