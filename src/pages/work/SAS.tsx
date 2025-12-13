import { PageLayout } from "@/components/PageLayout";

export default function SAS() {
  return (
    <PageLayout title="SAS" subtitle="Work">
      <div className="prose prose-lg max-w-none">
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
          Analytics platform modernization. Helped transition a legacy analytics 
          suite to a modern, web-based experience while maintaining the power 
          and flexibility that data scientists rely on.
        </p>
        
        <div className="space-y-6 font-body text-foreground">
          <h2 className="font-display text-2xl font-semibold mt-12 mb-4">The Challenge</h2>
          <p className="leading-relaxed text-muted-foreground">
            SAS had decades of powerful analytics capabilities locked in desktop 
            applications. The goal was to bring these to the web without sacrificing 
            the depth that made SAS the industry standard.
          </p>
          
          <h2 className="font-display text-2xl font-semibold mt-12 mb-4">The Approach</h2>
          <p className="leading-relaxed text-muted-foreground">
            We worked closely with data scientists to understand their mental models 
            and workflows. The design system we created balanced familiar patterns 
            with modern interaction paradigms.
          </p>
          
          <h2 className="font-display text-2xl font-semibold mt-12 mb-4">The Outcome</h2>
          <p className="leading-relaxed text-muted-foreground">
            The new web platform launched to strong adoption, with users praising 
            the improved collaboration features and accessibility.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
