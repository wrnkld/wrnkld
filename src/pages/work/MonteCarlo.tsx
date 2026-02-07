import { DetailLayout } from "@/components/DetailLayout";

export default function MonteCarlo() {
  return (
    <DetailLayout title="Monte Carlo" subtitle="Work" colorClass="card-mustard">
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Monte Carlo is the leading data observability platform, helping data teams detect, resolve, and prevent data quality issues across the modern data stack.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Role</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Joined as founding designer to build and lead the design function from the ground up. Hired designers, established design systems, created research practices, and partnered directly with the founders and product leadership to shape the product vision across the entire platform.
      </p>



      <h2 className="font-display text-lg font-medium text-foreground">Scale</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Grew the design team while simultaneously shipping product across multiple workstreams. Balanced the glamorous work of hiring, mentoring, and building culture with the less glamorous work of fixing tooltip alignment and debating whether "warning" should be yellow or amber. Spoiler: it's amber.
      </p>
    </DetailLayout>
  );
}
