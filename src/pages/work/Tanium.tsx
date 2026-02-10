import { DetailLayout } from "@/components/DetailLayout";

import taniumAssetVendor from "@/assets/tanium/tanium-asset-vendor.png";
import taniumDiscoverInterfaces from "@/assets/tanium/tanium-discover-interfaces.png";
import taniumThreatAlerts from "@/assets/tanium/tanium-threat-alerts.png";
import taniumThreatDocuments from "@/assets/tanium/tanium-threat-documents.png";
import taniumAssuranceFindings from "@/assets/tanium/tanium-assurance-findings.png";
import taniumEnforceOverview from "@/assets/tanium/tanium-enforce-overview.png";
import taniumNavigationViews from "@/assets/tanium/tanium-navigation-views.png";

import taniumNavigation from "@/assets/tanium/tanium-navigation.mp4";
import taniumAssurance from "@/assets/tanium/tanium-assurance.mp4";
import taniumDiscover from "@/assets/tanium/tanium-discover.mp4";
import taniumEnforce from "@/assets/tanium/tanium-enforce.mp4";

export default function Tanium() {
  return (
    <DetailLayout title="Tanium" subtitle="Work" colorClass="card-coral">
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Tanium is a large-scale endpoint security platform used by some of the world's biggest organizations to manage, secure, and respond across millions of devices in real time. I worked on the product during a period of rapid growth and sustained pressure.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Challenge</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Support as many products as humanly possible, move fast, and keep shipping through peak COVID years—when timelines were tight, stakes were high, and work was a reliable distraction.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Reinvent</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Redesigned three flagship products—Discover, Asset, and Threat Response—simplifying dense interfaces, tightening information architecture, and speeding up core security workflows.
      </p>

      <h2 className="font-display text-lg font-medium text-foreground">Ship</h2>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        Built and shipped two entirely new products from scratch: Assurance, focused on MITRE ATT&CK visibility, and Enforce, designed for policy enforcement at enterprise scale.
      </p>

      <video src={taniumNavigation} poster={taniumNavigationViews} autoPlay loop muted playsInline className="w-full h-auto border border-border/40" />

      <div className="grid grid-cols-2 gap-4">
        <img src={taniumThreatAlerts} alt="Tanium Threat Alerts" className="w-full h-auto border border-border/40" />
        <img src={taniumThreatDocuments} alt="Tanium Threat Documents" className="w-full h-auto border border-border/40" />
      </div>

      <video src={taniumAssurance} poster={taniumAssuranceFindings} autoPlay loop muted playsInline className="w-full h-auto border border-border/40" />

      <video src={taniumDiscover} poster={taniumDiscoverInterfaces} autoPlay loop muted playsInline className="w-full h-auto border border-border/40" />

      <div className="grid grid-cols-2 gap-4">
        <img src={taniumDiscoverInterfaces} alt="Tanium Discover Interfaces" className="w-full h-auto border border-border/40" />
        <img src={taniumAssetVendor} alt="Tanium Asset Vendor" className="w-full h-auto border border-border/40" />
      </div>

      <video src={taniumEnforce} poster={taniumEnforceOverview} autoPlay loop muted playsInline className="w-full h-auto border border-border/40" />
    </DetailLayout>
  );
}
