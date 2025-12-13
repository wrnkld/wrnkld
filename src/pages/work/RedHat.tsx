import { PageLayout } from "@/components/PageLayout";
import { ImageGallery } from "@/components/ImageGallery";

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

const images = [
  { src: rhbaWorkflowModeler, alt: "Red Hat Business Automation Workflow Modeler" },
  { src: rhbaPropertiesPanel, alt: "Red Hat Business Automation Properties Panel" },
  { src: rhbaNavigator, alt: "Red Hat Business Automation Navigator" },
  { src: rhbaAssetsList, alt: "Red Hat Business Automation Assets List" },
  { src: rhbaSpace, alt: "Red Hat Business Automation Space" },
  { src: rhbaProjectMetrics, alt: "Red Hat Business Automation Project Metrics" },
  { src: rhbaContributors, alt: "Red Hat Business Automation Contributors" },
  { src: rhbaComments, alt: "Red Hat Business Automation Comments" },
  { src: rhbaVersionControl, alt: "Red Hat Business Automation Version Control" },
  { src: rhbaTrack, alt: "Red Hat Business Automation Track" },
  { src: rhbaEmptyState, alt: "Red Hat Business Automation Empty State" },
  { src: rhboAvailability, alt: "Red Hat Business Optaplanner Availability" },
  { src: rhboEmployees, alt: "Red Hat Business Optaplanner Employees" },
  { src: rhboRoster, alt: "Red Hat Business Optaplanner Roster" },
  { src: rhboRoute, alt: "Red Hat Business Optaplanner Route" },
];

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

      <div className="mt-12">
        <ImageGallery images={images} />
      </div>
    </PageLayout>
  );
}
