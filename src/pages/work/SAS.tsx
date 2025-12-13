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

const images = [
  { src: analyticsExplore, alt: "SAS Analytics Explore" },
  { src: analyticsPrepare, alt: "SAS Analytics Prepare" },
  { src: analyticsAnalyze, alt: "SAS Analytics Analyze" },
  { src: analyticsReport, alt: "SAS Analytics Report" },
  { src: factoryData, alt: "SAS Factory Data" },
  { src: factoryModelTemplates, alt: "SAS Factory Model Templates" },
  { src: factoryProfile, alt: "SAS Factory Profile" },
  { src: factoryResults, alt: "SAS Factory Results" },
  { src: factorySegment, alt: "SAS Factory Segment" },
  { src: visualStatsProperties, alt: "SAS Visual Stats Properties" },
  { src: visualStatsRoles, alt: "SAS Visual Stats Roles" },
  { src: visualStatsShare, alt: "SAS Visual Stats Share" },
];

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

      <div className="mt-12">
        <ImageGallery images={images} />
      </div>
    </PageLayout>
  );
}
