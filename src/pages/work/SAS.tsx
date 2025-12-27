import { SplitHeroLayout } from "@/components/SplitHeroLayout";

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
    <SplitHeroLayout title="SAS" subtitle="Work" colorClass="card-terracotta">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        <p className="prose">
          SAS is an enterprise analytics company focused on large-scale statistical 
          modeling, data science, and decisioning across regulated industries.
        </p>
        
        <h2 className="font-display text-xl font-semibold mt-12 mb-4">Arc</h2>
        <p className="prose">
          Progressed from individual contributor to senior, principal, and team 
          lead—launching three major products along the way.
        </p>
      </div>

      {/* Analytics Platform Section */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="font-display text-xl font-semibold mb-4">Model Studio</h2>
        <p className="prose">
          Led design across the advanced analytics platform, coordinating multiple product managers
          and design teams spanning forecasting, text analytics, and core 
          analytics workflows. Established the flagship analytics platform that 
          remains central to SAS's ecosystem today.
        </p>
      </div>

      {/* Analytics Video - BIG */}
      <div className="mt-12 max-w-6xl mx-auto px-6">
        <video src={sasDiagram} poster={analyticsAnalyze} autoPlay loop muted playsInline className="w-full h-auto block" />
      </div>

      {/* Analytics 4-up */}
      <div className="mt-8 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-4">
          <img src={analyticsPrepare} alt="SAS Analytics Prepare" className="w-full h-auto" />
          <img src={analyticsExplore} alt="SAS Analytics Explore" className="w-full h-auto" />
          <img src={analyticsAnalyze} alt="SAS Analytics Analyze" className="w-full h-auto" />
          <img src={analyticsReport} alt="SAS Analytics Report" className="w-full h-auto" />
        </div>
      </div>

      {/* Factory Miner Section */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="font-display text-xl font-semibold mb-4">Factory Miner</h2>
        <p className="prose">
          Delivered model comparison and selection workflows that ran multiple 
          statistical models in parallel, enabling teams to identify the strongest 
          performer using metrics like lift and cumulative lift.
        </p>
      </div>

      {/* Factory 1-up */}
      <div className="mt-12 max-w-6xl mx-auto px-6">
        <img src={factoryResults} alt="SAS Factory Results" className="w-full h-auto" />
      </div>

      {/* Factory 4-up */}
      <div className="mt-8 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-4">
          <img src={factoryData} alt="SAS Factory Data" className="w-full h-auto" />
          <img src={factoryProfile} alt="SAS Factory Profile" className="w-full h-auto" />
          <img src={factoryModelTemplates} alt="SAS Factory Model Templates" className="w-full h-auto" />
          <img src={factorySegment} alt="SAS Factory Segment" className="w-full h-auto" />
        </div>
      </div>

      {/* Visual Statistics Section */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="font-display text-xl font-semibold mb-4">Visual Statistics</h2>
        <p className="prose">
          Built a drag-and-drop, visual interface for exploring statistical models, 
          making advanced analytics more accessible without flattening complexity.
        </p>
      </div>

      {/* Visual Stats 1-up BIG */}
      <div className="mt-12 max-w-6xl mx-auto px-6">
        <img src={visualStatsRoles} alt="SAS Visual Stats Roles" className="w-full h-auto" />
      </div>

      {/* Visual Stats 2-up */}
      <div className="mt-8 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-4">
          <img src={visualStatsProperties} alt="SAS Visual Stats Properties" className="w-full h-auto" />
          <img src={visualStatsShare} alt="SAS Visual Stats Share" className="w-full h-auto" />
        </div>
      </div>
    </SplitHeroLayout>
  );
}
