import { DetailLayout } from "@/components/DetailLayout";

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

import rhbaPreviewVideo from "@/assets/redhat/rhba-preview.mp4";
import rhbaTrackVideo from "@/assets/redhat/rhba-track.mp4";
import rhboRosterVideo from "@/assets/redhat/rhbo-roster.mp4";

export default function RedHat() {
  return (
    <DetailLayout title="Red Hat" subtitle="Work" colorClass="card-teal">
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Red Hat is an open-source enterprise software company known for bringing 
        Linux and middleware to enterprise scale. I worked there up until the 
        IBM acquisition.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Role</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Led a cross-disciplinary team of interaction designers, front-end 
        engineers, and brand designers to modernize the middleware portfolio.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Approach</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Designed in the open using PatternFly, working closely with the 
        open-source and developer communities for feedback and iteration.
      </p>

      <video src={rhbaPreviewVideo} poster={rhbaWorkflowModeler} autoPlay loop muted playsInline className="w-full h-auto border border-border/40 rounded-sm" />

      <div className="grid grid-cols-4">
        <img src={rhbaPropertiesPanel} alt="Red Hat Business Automation Properties Panel" className="w-full h-auto border border-border/40" />
        <img src={rhbaNavigator} alt="Red Hat Business Automation Navigator" className="w-full h-auto border border-border/40" />
        <img src={rhbaVersionControl} alt="Red Hat Business Automation Version Control" className="w-full h-auto border border-border/40" />
        <img src={rhbaComments} alt="Red Hat Business Automation Comments" className="w-full h-auto border border-border/40" />
      </div>

      <img src={rhbaProjectMetrics} alt="Red Hat Business Automation Project Metrics" className="w-full h-auto border border-border/40 rounded-sm" />

      <div className="grid grid-cols-2">
        <img src={rhbaAssetsList} alt="Red Hat Business Automation Assets List" className="w-full h-auto border border-border/40" />
        <img src={rhbaContributors} alt="Red Hat Business Automation Contributors" className="w-full h-auto border border-border/40" />
      </div>

      <video src={rhbaTrackVideo} poster={rhbaTrack} autoPlay loop muted playsInline className="w-full h-auto border border-border/40 rounded-sm" />

      <div className="grid grid-cols-2">
        <img src={rhbaEmptyState} alt="Red Hat Business Automation Empty State" className="w-full h-auto border border-border/40" />
        <img src={rhbaSpace} alt="Red Hat Business Automation Space" className="w-full h-auto border border-border/40" />
      </div>

      <h2 className="font-display text-lg font-medium text-foreground">Extend</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Created shared design patterns across Business Automation and Business 
        Optimization to improve consistency across the portfolio.
      </p>

      <video src={rhboRosterVideo} poster={rhboRoster} autoPlay loop muted playsInline className="w-full h-auto border border-border/40 rounded-sm" />

      <div className="grid grid-cols-4">
        <img src={rhboEmployees} alt="Red Hat Business Optaplanner Employees" className="w-full h-auto border border-border/40" />
        <img src={rhboAvailability} alt="Red Hat Business Optaplanner Availability" className="w-full h-auto border border-border/40" />
        <img src={rhboRoster} alt="Red Hat Business Optaplanner Roster" className="w-full h-auto border border-border/40" />
        <img src={rhboRoute} alt="Red Hat Business Optaplanner Route" className="w-full h-auto border border-border/40" />
      </div>
    </DetailLayout>
  );
}
