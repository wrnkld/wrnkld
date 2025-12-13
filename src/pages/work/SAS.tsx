import { PageLayout } from "@/components/PageLayout";

import analyticsAnalyze from "@/assets/sas/analytics-analyze.png";
import analyticsExplore from "@/assets/sas/analytics-explore.png";
import analyticsPrepare from "@/assets/sas/analytics-prepare.png";
import analyticsReport from "@/assets/sas/analytics-report.png";
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
    <PageLayout title="SAS" subtitle="Work">
      <div className="space-y-6">
        <p className="prose mb-8">
          Analytics platform modernization. Helped transition a legacy analytics 
          suite to a modern, web-based experience while maintaining the power 
          and flexibility that data scientists rely on.
        </p>
        
        <h2 className="font-display text-xl font-semibold mt-12 mb-4">The Challenge</h2>
        <p className="prose">
          SAS had decades of powerful analytics capabilities locked in desktop 
          applications. The goal was to bring these to the web without sacrificing 
          the depth that made SAS the industry standard.
        </p>
        
        <h2 className="font-display text-xl font-semibold mt-12 mb-4">The Approach</h2>
        <p className="prose">
          We worked closely with data scientists to understand their mental models 
          and workflows. The design system we created balanced familiar patterns 
          with modern interaction paradigms.
        </p>
        
        <h2 className="font-display text-xl font-semibold mt-12 mb-4">The Outcome</h2>
        <p className="prose">
          The new web platform launched to strong adoption, with users praising 
          the improved collaboration features and accessibility.
        </p>

        <div className="grid gap-4 mt-12">
          <img src={analyticsExplore} alt="SAS Analytics Explore" className="w-full rounded-md border border-border" />
          <img src={analyticsPrepare} alt="SAS Analytics Prepare" className="w-full rounded-md border border-border" />
          <img src={analyticsAnalyze} alt="SAS Analytics Analyze" className="w-full rounded-md border border-border" />
          <img src={analyticsReport} alt="SAS Analytics Report" className="w-full rounded-md border border-border" />
          <img src={factoryData} alt="SAS Factory Data" className="w-full rounded-md border border-border" />
          <img src={factoryModelTemplates} alt="SAS Factory Model Templates" className="w-full rounded-md border border-border" />
          <img src={factoryProfile} alt="SAS Factory Profile" className="w-full rounded-md border border-border" />
          <img src={factoryResults} alt="SAS Factory Results" className="w-full rounded-md border border-border" />
          <img src={factorySegment} alt="SAS Factory Segment" className="w-full rounded-md border border-border" />
          <img src={visualStatsProperties} alt="SAS Visual Stats Properties" className="w-full rounded-md border border-border" />
          <img src={visualStatsRoles} alt="SAS Visual Stats Roles" className="w-full rounded-md border border-border" />
          <img src={visualStatsShare} alt="SAS Visual Stats Share" className="w-full rounded-md border border-border" />
        </div>
      </div>
    </PageLayout>
  );
}
