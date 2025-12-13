import { PageLayout } from "@/components/PageLayout";

export default function RedHat() {
  return (
    <PageLayout title="Red Hat" subtitle="Work">
      <div className="prose prose-lg max-w-none">
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
          Design system and developer experience. Built the foundations for 
          consistent design across Red Hat's suite of developer tools and 
          enterprise platforms.
        </p>
        
        <div className="space-y-6 font-body text-foreground">
          <h2 className="font-display text-2xl font-semibold mt-12 mb-4">The Challenge</h2>
          <p className="leading-relaxed text-muted-foreground">
            Red Hat's product portfolio had grown organically, resulting in 
            inconsistent user experiences across tools. Developers were struggling 
            to move between products fluidly.
          </p>
          
          <h2 className="font-display text-2xl font-semibold mt-12 mb-4">The Approach</h2>
          <p className="leading-relaxed text-muted-foreground">
            We established PatternFly, a comprehensive design system that could 
            scale across dozens of products while respecting the unique needs of 
            each. The focus was on developer-friendly documentation and components.
          </p>
          
          <h2 className="font-display text-2xl font-semibold mt-12 mb-4">The Outcome</h2>
          <p className="leading-relaxed text-muted-foreground">
            PatternFly became the standard across Red Hat's product lines and was 
            open-sourced, gaining adoption in the broader enterprise design community.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
