import { DetailLayout } from "@/components/DetailLayout";

import analyticsAnalyze from "@/assets/sas/analytics-analyze.png";
import analyticsExplore from "@/assets/sas/analytics-explore.png";
import analyticsPrepare from "@/assets/sas/analytics-prepare.png";
import analyticsReport from "@/assets/sas/analytics-report.png";
import sasDiagram from "@/assets/sas/sas-diagram.mp4";
import factoryData from "@/assets/sas/factory-data.png";
import factoryModelTemplates from "@/assets/sas/factory-model-templates.png";
import factoryProfile from "@/assets/sas/factory-profile.png";
import factoryResults from "@/assets/sas/factory-results.png";
import factorySegment from "@/assets/sas/factory-segment.png";
import visualStatsProperties from "@/assets/sas/visual-stats-properties.png";
import visualStatsRoles from "@/assets/sas/visual-stats-roles.png";
import visualStatsShare from "@/assets/sas/visual-stats-share.png";

export default function SAS() {
  return (
    <DetailLayout title="SAS" subtitle="Work" colorClass="card-indigo">
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        SAS is an enterprise analytics company focused on large-scale statistical 
        modeling, data science, and decisioning across regulated industries.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Arc</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Progressed from individual contributor to senior, principal, and team 
        lead—launching three major products along the way.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Model Studio</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Led design across the advanced analytics platform, coordinating multiple product managers
        and design teams spanning forecasting, text analytics, and core 
        analytics workflows. Established the flagship analytics platform that 
        remains central to SAS's ecosystem today.
      </p>

      <video src={sasDiagram} poster={analyticsAnalyze} autoPlay loop muted playsInline className="w-full h-auto border border-border/40" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <img src={analyticsPrepare} alt="SAS Analytics Prepare" className="w-full h-auto border border-border/40" />
        <img src={analyticsExplore} alt="SAS Analytics Explore" className="w-full h-auto border border-border/40" />
        <img src={analyticsAnalyze} alt="SAS Analytics Analyze" className="w-full h-auto border border-border/40" />
        <img src={analyticsReport} alt="SAS Analytics Report" className="w-full h-auto border border-border/40" />
      </div>

      <h2 className="font-display text-lg font-medium text-foreground">Factory Miner</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Delivered model comparison and selection workflows that ran multiple 
        statistical models in parallel, enabling teams to identify the strongest 
        performer using metrics like lift and cumulative lift.
      </p>

      <img src={factoryResults} alt="SAS Factory Results" className="w-full h-auto border border-border/40" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <img src={factoryData} alt="SAS Factory Data" className="w-full h-auto border border-border/40" />
        <img src={factoryProfile} alt="SAS Factory Profile" className="w-full h-auto border border-border/40" />
        <img src={factoryModelTemplates} alt="SAS Factory Model Templates" className="w-full h-auto border border-border/40" />
        <img src={factorySegment} alt="SAS Factory Segment" className="w-full h-auto border border-border/40" />
      </div>

      <h2 className="font-display text-lg font-medium text-foreground">Visual Statistics</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Built a drag-and-drop, visual interface for exploring statistical models, 
        making advanced analytics more accessible without flattening complexity.
      </p>

      <img src={visualStatsRoles} alt="SAS Visual Stats Roles" className="w-full h-auto border border-border/40" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={visualStatsProperties} alt="SAS Visual Stats Properties" className="w-full h-auto border border-border/40" />
        <img src={visualStatsShare} alt="SAS Visual Stats Share" className="w-full h-auto border border-border/40" />
      </div>
    </DetailLayout>
  );
}
