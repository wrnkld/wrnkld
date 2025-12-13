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
    <PageLayout title="Red Hat" subtitle="Work" fullWidthContent>
      <div className="max-w-4xl mx-auto px-6 space-y-6">
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
      </div>

      {/* 4-column grid */}
      <div className="mt-12 max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-4">
          <img src={rhbaPropertiesPanel} alt="Red Hat Business Automation Properties Panel" className="w-full h-auto transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2" />
          <img src={rhbaNavigator} alt="Red Hat Business Automation Navigator" className="w-full h-auto transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2" />
          <img src={rhbaAssetsList} alt="Red Hat Business Automation Assets List" className="w-full h-auto transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2" />
          <img src={rhbaSpace} alt="Red Hat Business Automation Space" className="w-full h-auto transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2" />
        </div>
      </div>

      {/* Text section */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="font-display text-xl font-semibold mb-4">Business Automation</h2>
        <p className="prose">
          The workflow modeler enables business analysts to create and manage 
          complex automation workflows visually, bridging the gap between 
          technical implementation and business requirements.
        </p>
      </div>

      {/* Full-width image */}
      <div className="mt-12">
        <img src={rhbaWorkflowModeler} alt="Red Hat Business Automation Workflow Modeler" className="w-full h-auto" />
      </div>

      {/* 4-column grid */}
      <div className="mt-12 max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-4">
          <img src={rhbaContributors} alt="Red Hat Business Automation Contributors" className="w-full h-auto transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2" />
          <img src={rhbaComments} alt="Red Hat Business Automation Comments" className="w-full h-auto transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2" />
          <img src={rhbaVersionControl} alt="Red Hat Business Automation Version Control" className="w-full h-auto transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2" />
          <img src={rhbaTrack} alt="Red Hat Business Automation Track" className="w-full h-auto transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2" />
        </div>
      </div>

      {/* Text section */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="font-display text-xl font-semibold mb-4">Collaboration & Metrics</h2>
        <p className="prose">
          Project insights and collaboration tools help teams track progress, 
          manage contributions, and maintain visibility across complex 
          automation initiatives.
        </p>
      </div>

      {/* Full-width image */}
      <div className="mt-12">
        <img src={rhbaProjectMetrics} alt="Red Hat Business Automation Project Metrics" className="w-full h-auto" />
      </div>

      {/* Full-width image */}
      <div className="mt-8">
        <img src={rhbaEmptyState} alt="Red Hat Business Automation Empty State" className="w-full h-auto" />
      </div>

      {/* Text section */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="font-display text-xl font-semibold mb-4">OptaPlanner</h2>
        <p className="prose">
          Constraint-based optimization for complex scheduling problems. 
          OptaPlanner helps organizations solve vehicle routing, employee 
          rostering, and resource allocation challenges.
        </p>
      </div>

      {/* 4-column grid */}
      <div className="mt-12 max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-4">
          <img src={rhboEmployees} alt="Red Hat Business Optaplanner Employees" className="w-full h-auto transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2" />
          <img src={rhboRoster} alt="Red Hat Business Optaplanner Roster" className="w-full h-auto transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2" />
          <img src={rhboAvailability} alt="Red Hat Business Optaplanner Availability" className="w-full h-auto transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2" />
          <img src={rhboRoute} alt="Red Hat Business Optaplanner Route" className="w-full h-auto transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2" />
        </div>
      </div>
    </PageLayout>
  );
}
