import { DetailLayout } from "@/components/DetailLayout";

export default function MonteCarlo() {
  return (
    <DetailLayout title="Monte Carlo" subtitle="Work" colorClass="card-mustard">
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
        Designed monitoring and dashboards that surface and troubleshoot slow queries, ETL jobs, and pipeline bottlenecks across Snowflake, dbt, Airflow, and Looker. Users can drill from high-level cost spikes down to individual query metadata, gantt-view job runs, and consumer-facing latency—turning performance investigation from guesswork into a guided workflow.
      </p>
    </DetailLayout>
  );
}
