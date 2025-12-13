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

export default function RedHat() {
  return (
    <PageLayout title="Red Hat" subtitle="Work">
      <div className="space-y-12">
        <p className="prose">
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

        {/* Business Automation Platform - video + horizontal gallery */}
        <div className="space-y-4">
          <h2 className="font-display text-xl font-semibold">Business Automation</h2>
          <p className="prose">
            The workflow modeler was the heart of the platform. We redesigned it 
            to feel intuitive while supporting complex business process definitions.
          </p>
          <video 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rhba-platform-demo-HIDa2E47nQrPA59NvZFBmeQmWXGeB6.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
          />
          <ImageGallery images={[
            { src: rhbaWorkflowModeler, alt: "Red Hat Business Automation Workflow Modeler" },
            { src: rhbaPropertiesPanel, alt: "Red Hat Business Automation Properties Panel" },
            { src: rhbaNavigator, alt: "Red Hat Business Automation Navigator" },
          ]} />
        </div>

        {/* Project Management - horizontal gallery */}
        <div className="space-y-4">
          <h2 className="font-display text-xl font-semibold">Project Management</h2>
          <p className="prose">
            Teams needed visibility into project health and collaboration. We 
            designed spaces, metrics dashboards, and contributor views that 
            made team coordination seamless.
          </p>
          <ImageGallery images={[
            { src: rhbaSpace, alt: "Red Hat Business Automation Space" },
            { src: rhbaAssetsList, alt: "Red Hat Business Automation Assets List" },
            { src: rhbaProjectMetrics, alt: "Red Hat Business Automation Project Metrics" },
            { src: rhbaContributors, alt: "Red Hat Business Automation Contributors" },
          ]} />
        </div>

        {/* Collaboration - video + stacked */}
        <div className="space-y-4">
          <h2 className="font-display text-xl font-semibold">Collaboration & Version Control</h2>
          <p className="prose">
            Developer workflows demand robust version control. We integrated 
            comments, change tracking, and branching directly into the design tools.
          </p>
          <video 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rhba-track-demo-1iGpopbUyWNEkHm0ywCNKKtJBi3GZg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
          />
          <ImageGallery images={[
            { src: rhbaComments, alt: "Red Hat Business Automation Comments" },
            { src: rhbaVersionControl, alt: "Red Hat Business Automation Version Control" },
            { src: rhbaTrack, alt: "Red Hat Business Automation Track" },
            { src: rhbaEmptyState, alt: "Red Hat Business Automation Empty State" },
          ]} />
        </div>

        {/* OptaPlanner - video + horizontal gallery */}
        <div className="space-y-4">
          <h2 className="font-display text-xl font-semibold">OptaPlanner</h2>
          <p className="prose">
            Constraint-based scheduling for complex workforce problems. We designed 
            interfaces that made AI-powered optimization accessible to business users.
          </p>
          <video 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rhbo-roster-demo-gXuZmMh9Cr8GLDmQv1gRBPaR68ZO9G.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
          />
          <ImageGallery images={[
            { src: rhboRoster, alt: "Red Hat Business Optaplanner Roster" },
            { src: rhboEmployees, alt: "Red Hat Business Optaplanner Employees" },
            { src: rhboAvailability, alt: "Red Hat Business Optaplanner Availability" },
            { src: rhboRoute, alt: "Red Hat Business Optaplanner Route" },
          ]} />
        </div>

        <h2 className="font-display text-xl font-semibold mt-12 mb-4">The Outcome</h2>
        <p className="prose">
          PatternFly became the standard across Red Hat's product lines and was 
          open-sourced, gaining adoption in the broader enterprise design community.
        </p>
      </div>
    </PageLayout>
  );
}
