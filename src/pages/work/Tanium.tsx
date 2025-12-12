import { PageLayout } from "@/components/PageLayout";

export default function Tanium() {
  return (
    <PageLayout title="Tanium" subtitle="Case Study">
      <div className="prose prose-lg max-w-none">
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
          Enterprise security platform redesign. Led the product design for their 
          next-generation endpoint management console, serving millions of endpoints 
          across Fortune 500 companies.
        </p>
        
        <div className="space-y-6 font-body text-foreground">
          <h2 className="font-display text-2xl font-semibold mt-12 mb-4">The Challenge</h2>
          <p className="leading-relaxed text-muted-foreground">
            Tanium's existing interface was built for power users but had become 
            unwieldy as the product expanded. Security teams were spending too much 
            time navigating between features and not enough time responding to threats.
          </p>
          
          <h2 className="font-display text-2xl font-semibold mt-12 mb-4">The Approach</h2>
          <p className="leading-relaxed text-muted-foreground">
            We conducted extensive research with security operations teams, mapping 
            their workflows and identifying the key moments that mattered most. The 
            redesign focused on surfacing critical information and reducing clicks 
            for common actions.
          </p>
          
          <h2 className="font-display text-2xl font-semibold mt-12 mb-4">The Outcome</h2>
          <p className="leading-relaxed text-muted-foreground">
            The new design reduced average task completion time by 40% and received 
            overwhelmingly positive feedback from enterprise customers during beta testing.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
