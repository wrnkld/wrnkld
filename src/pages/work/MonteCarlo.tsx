import { DetailLayout } from "@/components/DetailLayout";

export default function MonteCarlo() {
  return (
    <DetailLayout title="Monte Carlo" subtitle="Work" colorClass="card-violet">
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Monte Carlo is the data observability platform that pioneered the category. We help data teams detect, resolve, and prevent data quality issues before they impact the business. I lead design across the entire product.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Challenge</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Build the design function from the ground up while shipping at startup speed. Balance the need to move fast with the complexity of enterprise data infrastructure—pipelines, warehouses, dashboards, and everything in between.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Observability</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Designed the core incident detection and resolution experience—helping data engineers understand what broke, when it broke, and what downstream assets were affected. Reduced mean time to detection and resolution across thousands of tables.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Lineage</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Built an interactive data lineage graph that visualizes dependencies across the entire data stack—from ingestion to BI dashboards. Made it possible to trace issues upstream to root cause and downstream to business impact.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Scale</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Grew the design team from zero to a small but mighty crew. Established design systems, critique rituals, and research practices that let us punch above our weight while staying nimble.
      </p>
    </DetailLayout>
  );
}
