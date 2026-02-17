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
    <DetailLayout title="Monte Carlo" subtitle="Work" colorClass="card-violet">
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Monte Carlo is the leading data and AI observability platform, helping data teams detect, resolve, and prevent data quality issues across the modern data stack.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Role</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Joined as founding designer to build and lead the design function from the ground up. Hired designers, established design systems, created research practices, and partnered directly with the founders and product leadership to shape the product vision.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Scale</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Grew the design team while shipping product across multiple workstreams. Balanced leadership responsibilities with hands-on product work, maintaining quality and consistency across the platform at both the system and detail level.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Performance</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Designed an end-to-end performance investigation workflow for modern data stacks, enabling teams to understand where cost and latency originate and why across Snowflake, dbt, Airflow, and Looker. The product connects anomaly detection, cost attribution, job-run timelines, and downstream consumer impact into a single guided experience—replacing ad-hoc debugging with a repeatable operational flow.
      </p>

      <img src={mcdWrites} alt="Monte Carlo write queries overview showing total credits and query performance trends" className="w-full h-auto border border-border/40" />

      <img src={mcdWrite} alt="Monte Carlo write query detail with observability agent explaining performance" className="w-full h-auto border border-border/40" />

      <img src={mcdPerfMon} alt="Monte Carlo query performance monitor configuration with alert conditions" className="w-full h-auto border border-border/40" />

      <h2 className="font-display text-lg font-medium text-foreground">Integrations</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Owned design for a scalable integrations platform, spanning data warehouses, orchestration frameworks, code repositories, and incident response tools. Standardized how alerts and events are configured and delivered across teams, improving consistency and reliability for data, platform, and engineering operators.
      </p>

      <img src={mcdIntegrations} alt="Monte Carlo integrations catalog showing available data warehouse and tool connections" className="w-full h-auto border border-border/40" />

      <img src={mcdAudiences} alt="Monte Carlo audience configuration with recipient channels and notification routing" className="w-full h-auto border border-border/40" />

      <img src={mcdJob} alt="Monte Carlo job performance view showing run time trends and failure tracking for dbt jobs" className="w-full h-auto border border-border/40" />

      <h2 className="font-display text-lg font-medium text-foreground">Permissions</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Designed a flexible permissions model supporting custom roles, granular sampling policies, and domain-scoped access controls. Enabled organizations to define who can view, edit, or manage monitors, alerts, and incident workflows.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <img src={mcdRoles} alt="Monte Carlo custom role creation with granular permission controls" className="w-full h-auto border border-border/40" />
        <img src={mcdSampling} alt="Monte Carlo integration detail showing sampling policies and connection configuration" className="w-full h-auto border border-border/40" />
      </div>

    </DetailLayout>
  );
}
