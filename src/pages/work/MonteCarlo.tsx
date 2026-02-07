import { DetailLayout } from "@/components/DetailLayout";

export default function MonteCarlo() {
  return (
    <DetailLayout title="Monte Carlo" subtitle="Work" colorClass="card-mustard">
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Monte Carlo is the leading data observability platform, helping data teams detect, resolve, and prevent data quality issues across the modern data stack. Think of it as monitoring for your data pipelines—except instead of servers going down, it's your revenue dashboard silently lying to the CFO.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Role</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Joined as Head of Design to build and lead the design function from the ground up. Hired designers, established design systems, created research practices, and somehow convinced engineers that pixels do in fact matter. Partnered directly with the founders and product leadership to shape the product vision across the entire platform.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">The Problem</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Data breaks constantly and nobody notices until someone important asks why the numbers look wrong in a board meeting. Monte Carlo exists because data pipelines are held together with duct tape and optimism, and someone needed to build the thing that tells you when it all falls apart—before your stakeholders do.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Observability</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Redesigned the core incident detection and resolution experience—turning a firehose of anomaly alerts into something a human could actually triage without losing their mind. Built workflows that surface the signal, suppress the noise, and give data engineers context instead of just another red dot demanding their attention at 2am.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Lineage</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Led the redesign of data lineage visualization—a fancy way of saying "draw lines between tables so people can figure out where their data came from and why it's wrong." Took a tangled graph that looked like a conspiracy theory corkboard and turned it into something navigable, interactive, and actually useful for root cause analysis.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Design System</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Built a component library and design system from scratch because the existing UI was a patchwork of one-off components held together by developer good intentions and inconsistent spacing. Established tokens, patterns, and guidelines that made it possible for the team to ship coherent interfaces without a designer reviewing every pull request like a hall monitor.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Scale</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Grew the design team while simultaneously shipping product across multiple workstreams. Balanced the glamorous work of hiring, mentoring, and building culture with the less glamorous work of fixing tooltip alignment and debating whether "warning" should be yellow or amber. Spoiler: it's amber.
      </p>
    </DetailLayout>
  );
}
