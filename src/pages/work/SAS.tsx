import { PageLayout } from "@/components/PageLayout";
import { ImageGallery } from "@/components/ImageGallery";

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
      <div className="space-y-12">
        <p className="prose">
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

        {/* Visual Analytics - video + horizontal gallery */}
        <div className="space-y-4">
          <h2 className="font-display text-xl font-semibold">Visual Analytics</h2>
          <p className="prose">
            The analytics workflow moved through distinct phases: exploration, 
            preparation, analysis, and reporting. Each phase needed its own 
            focused interface while maintaining context across the journey.
          </p>
          <video 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/analytics-diagram-N1SfmA3GOq8odycmR4nqJ1leUzL0yQ.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
          />
          <ImageGallery images={[
            { src: analyticsExplore, alt: "SAS Analytics Explore" },
            { src: analyticsPrepare, alt: "SAS Analytics Prepare" },
            { src: analyticsAnalyze, alt: "SAS Analytics Analyze" },
            { src: analyticsReport, alt: "SAS Analytics Report" },
          ]} />
        </div>

        {/* Model Factory - horizontal gallery */}
        <div className="space-y-4">
          <h2 className="font-display text-xl font-semibold">Model Factory</h2>
          <p className="prose">
            Building machine learning models at scale required a factory-like 
            approach. We designed templates, profiling tools, and result 
            visualization that accelerated the modeling process.
          </p>
          <ImageGallery images={[
            { src: factoryModelTemplates, alt: "SAS Factory Model Templates" },
            { src: factoryData, alt: "SAS Factory Data" },
            { src: factoryProfile, alt: "SAS Factory Profile" },
            { src: factorySegment, alt: "SAS Factory Segment" },
            { src: factoryResults, alt: "SAS Factory Results" },
          ]} />
        </div>

        {/* Visual Statistics - stacked */}
        <div className="space-y-4">
          <h2 className="font-display text-xl font-semibold">Visual Statistics</h2>
          <p className="prose">
            Statistical modeling needed to be accessible without sacrificing rigor. 
            We designed role-based interfaces that guided users through proper 
            variable assignment and model configuration.
          </p>
          <img src={visualStatsRoles} alt="SAS Visual Stats Roles" className="w-full" />
          <img src={visualStatsProperties} alt="SAS Visual Stats Properties" className="w-full" />
          <img src={visualStatsShare} alt="SAS Visual Stats Share" className="w-full" />
        </div>

        <h2 className="font-display text-xl font-semibold mt-12 mb-4">The Outcome</h2>
        <p className="prose">
          The new web platform launched to strong adoption, with users praising 
          the improved collaboration features and accessibility.
        </p>
      </div>
    </PageLayout>
  );
}
