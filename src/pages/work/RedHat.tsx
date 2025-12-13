import { PageLayout } from "@/components/PageLayout";

import rhbaAssetsList from "@/assets/redhat/rhba-assets-list.png";
import rhbaComments from "@/assets/redhat/rhba-comments.png";
import rhbaContributors from "@/assets/redhat/rhba-contributors.png";
import rhbaEmptyState from "@/assets/redhat/rhba-empty-state.png";
import rhbaNavigator from "@/assets/redhat/rhba-navigator.png";
import rhbaProjectMetrics from "@/assets/redhat/rhba-project-metrics.png";
import rhbaPropertiesPanel from "@/assets/redhat/rhba-properties-panel.png";
import rhbaSpace from "@/assets/redhat/rhba-space.png";
import rhbaTrack from "@/assets/redhat/rhba-track.png";
import rhbaVersionControl from "@/assets/redhat/rhba-version-control.png";
import rhbaWorkflowModeler from "@/assets/redhat/rhba-workflow-modeler.png";
import rhboAvailability from "@/assets/redhat/rhbo-availability.png";
import rhboEmployees from "@/assets/redhat/rhbo-employees.png";
import rhboRoster from "@/assets/redhat/rhbo-roster.png";
import rhboRoute from "@/assets/redhat/rhbo-route.png";

export default function RedHat() {
  return (
    <PageLayout title="Red Hat" subtitle="Work">
      <div className="space-y-6">
        <p className="prose mb-8">
          Design system and developer experience. Built the foundations for 
          consistent design across Red Hat's suite of developer tools and 
          enterprise platforms.
        </p>
        
        <h2 className="font-display text-xl font-semibold mt-12 mb-4">The Challenge</h2>
        <p className="prose">
          Red Hat's product portfolio had grown organically, resulting in 
          inconsistent user experiences across tools. Developers were struggling 
          to move between products fluidly.
        </p>
        
        <h2 className="font-display text-xl font-semibold mt-12 mb-4">The Approach</h2>
        <p className="prose">
          We established PatternFly, a comprehensive design system that could 
          scale across dozens of products while respecting the unique needs of 
          each. The focus was on developer-friendly documentation and components.
        </p>
        
        <h2 className="font-display text-xl font-semibold mt-12 mb-4">The Outcome</h2>
        <p className="prose">
          PatternFly became the standard across Red Hat's product lines and was 
          open-sourced, gaining adoption in the broader enterprise design community.
        </p>

        <div className="grid gap-4 mt-12">
          <img src={rhbaWorkflowModeler} alt="Red Hat Business Automation Workflow Modeler" className="w-full rounded-md border border-border" />
          <img src={rhbaPropertiesPanel} alt="Red Hat Business Automation Properties Panel" className="w-full rounded-md border border-border" />
          <img src={rhbaNavigator} alt="Red Hat Business Automation Navigator" className="w-full rounded-md border border-border" />
          <img src={rhbaAssetsList} alt="Red Hat Business Automation Assets List" className="w-full rounded-md border border-border" />
          <img src={rhbaSpace} alt="Red Hat Business Automation Space" className="w-full rounded-md border border-border" />
          <img src={rhbaProjectMetrics} alt="Red Hat Business Automation Project Metrics" className="w-full rounded-md border border-border" />
          <img src={rhbaContributors} alt="Red Hat Business Automation Contributors" className="w-full rounded-md border border-border" />
          <img src={rhbaComments} alt="Red Hat Business Automation Comments" className="w-full rounded-md border border-border" />
          <img src={rhbaVersionControl} alt="Red Hat Business Automation Version Control" className="w-full rounded-md border border-border" />
          <img src={rhbaTrack} alt="Red Hat Business Automation Track" className="w-full rounded-md border border-border" />
          <img src={rhbaEmptyState} alt="Red Hat Business Automation Empty State" className="w-full rounded-md border border-border" />
          <img src={rhboAvailability} alt="Red Hat Business Optaplanner Availability" className="w-full rounded-md border border-border" />
          <img src={rhboEmployees} alt="Red Hat Business Optaplanner Employees" className="w-full rounded-md border border-border" />
          <img src={rhboRoster} alt="Red Hat Business Optaplanner Roster" className="w-full rounded-md border border-border" />
          <img src={rhboRoute} alt="Red Hat Business Optaplanner Route" className="w-full rounded-md border border-border" />
        </div>
      </div>
    </PageLayout>
  );
}
