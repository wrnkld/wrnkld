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
    <PageLayout title="SAS" subtitle="Work" fullWidthContent>
      <div className="max-w-4xl mx-auto px-6 space-y-6">
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
      </div>

      {/* Video - Analytics Diagram */}
      <div className="mt-12 max-w-6xl mx-auto px-6">
        <video src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/analytics-diagram-N1SfmA3GOq8odycmR4nqJ1leUzL0yQ.mp4" autoPlay loop muted playsInline className="w-full h-auto" />
      </div>

      {/* Analytics Section */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="font-display text-xl font-semibold mb-4">Visual Analytics</h2>
        <p className="prose">
          The analytics suite enables data scientists to explore, prepare, and 
          analyze datasets through an intuitive visual interface, reducing the 
          barrier to advanced statistical analysis.
        </p>
      </div>

      {/* Analytics 4-up */}
      <div className="mt-12 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-4">
          <img src={analyticsExplore} alt="SAS Analytics Explore" className="w-full h-auto" />
          <img src={analyticsPrepare} alt="SAS Analytics Prepare" className="w-full h-auto" />
          <img src={analyticsAnalyze} alt="SAS Analytics Analyze" className="w-full h-auto" />
          <img src={analyticsReport} alt="SAS Analytics Report" className="w-full h-auto" />
        </div>
      </div>

      {/* Factory Section */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="font-display text-xl font-semibold mb-4">Model Factory</h2>
        <p className="prose">
          Automated model building and deployment pipeline that enables teams to 
          create, test, and iterate on predictive models at scale.
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
          <img src={factoryModelTemplates} alt="SAS Factory Model Templates" className="w-full h-auto" />
          <img src={factoryProfile} alt="SAS Factory Profile" className="w-full h-auto" />
          <img src={factorySegment} alt="SAS Factory Segment" className="w-full h-auto" />
        </div>
      </div>

      {/* Visual Statistics Section */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="font-display text-xl font-semibold mb-4">Visual Statistics</h2>
        <p className="prose">
          Statistical modeling tools that make advanced techniques accessible 
          to analysts of all skill levels, with clear visualizations and 
          collaborative sharing capabilities.
        </p>
      </div>

      {/* Visual Stats 3-up */}
      <div className="mt-12 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-4">
          <img src={visualStatsRoles} alt="SAS Visual Stats Roles" className="w-full h-auto" />
          <img src={visualStatsProperties} alt="SAS Visual Stats Properties" className="w-full h-auto" />
          <img src={visualStatsShare} alt="SAS Visual Stats Share" className="w-full h-auto" />
        </div>
      </div>
    </PageLayout>
  );
}
