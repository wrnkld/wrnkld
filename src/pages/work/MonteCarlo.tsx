import { DetailLayout } from "@/components/DetailLayout";

import mcdWrites from "@/assets/montecarlo/mcd-writes.png";
import mcdWrite from "@/assets/montecarlo/mcd-write.png";
import mcdPerfMon from "@/assets/montecarlo/mcd-perf-mon.png";

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

      <h2 className="font-display text-lg font-medium text-foreground">Permissions</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Designed a flexible permissions model supporting custom roles, granular sampling policies, and domain-scoped access controls. Enabled organizations to define who can view, edit, or manage monitors, alerts, and incident workflows—down to individual table and pipeline levels. Built admin tooling for role assignment, permission inheritance, and audit logging, giving platform teams full control over data access governance without requiring engineering intervention.
      </p>

    </DetailLayout>
  );
}
