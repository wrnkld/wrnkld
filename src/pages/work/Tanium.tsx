import { PageLayout } from "@/components/PageLayout";

import taniumAssetVendor from "@/assets/tanium/tanium-asset-vendor.png";
import taniumAssuranceFindings from "@/assets/tanium/tanium-assurance-findings.png";
import taniumDiscoverInterfaces from "@/assets/tanium/tanium-discover-interfaces.png";
import taniumEnforceOverview from "@/assets/tanium/tanium-enforce-overview.png";
import taniumNavigationViews from "@/assets/tanium/tanium-navigation-views.png";
import taniumThreatAlerts from "@/assets/tanium/tanium-threat-alerts.png";
import taniumThreatDocuments from "@/assets/tanium/tanium-threat-documents.png";

export default function Tanium() {
  return (
    <PageLayout title="Tanium" subtitle="Work">
      <div className="space-y-6">
        <p className="prose mb-8">
          Enterprise security platform redesign. Led the product design for their 
          next-generation endpoint management console, serving millions of endpoints 
          across Fortune 500 companies.
        </p>
        
        <h2 className="font-display text-xl font-semibold mt-12 mb-4">The Challenge</h2>
        <p className="prose">
          Tanium's existing interface was built for power users but had become 
          unwieldy as the product expanded. Security teams were spending too much 
          time navigating between features and not enough time responding to threats.
        </p>
        
        <h2 className="font-display text-xl font-semibold mt-12 mb-4">The Approach</h2>
        <p className="prose">
          We conducted extensive research with security operations teams, mapping 
          their workflows and identifying the key moments that mattered most. The 
          redesign focused on surfacing critical information and reducing clicks 
          for common actions.
        </p>
        
        <h2 className="font-display text-xl font-semibold mt-12 mb-4">The Outcome</h2>
        <p className="prose">
          The new design reduced average task completion time by 40% and received 
          overwhelmingly positive feedback from enterprise customers during beta testing.
        </p>

        <div className="grid gap-4 mt-12">
          <img src={taniumNavigationViews} alt="Tanium Navigation Views" className="w-full rounded-md border border-border" />
          <img src={taniumThreatAlerts} alt="Tanium Threat Alerts" className="w-full rounded-md border border-border" />
          <img src={taniumThreatDocuments} alt="Tanium Threat Documents" className="w-full rounded-md border border-border" />
          <img src={taniumEnforceOverview} alt="Tanium Enforce Overview" className="w-full rounded-md border border-border" />
          <img src={taniumAssuranceFindings} alt="Tanium Assurance Findings" className="w-full rounded-md border border-border" />
          <img src={taniumAssetVendor} alt="Tanium Asset Vendor" className="w-full rounded-md border border-border" />
          <img src={taniumDiscoverInterfaces} alt="Tanium Discover Interfaces" className="w-full rounded-md border border-border" />
        </div>
      </div>
    </PageLayout>
  );
}
