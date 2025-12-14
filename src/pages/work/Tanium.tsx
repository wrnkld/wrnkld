import { PageLayout } from "@/components/PageLayout";

import taniumAssetVendor from "@/assets/tanium/tanium-asset-vendor.png";
import taniumDiscoverInterfaces from "@/assets/tanium/tanium-discover-interfaces.png";
import taniumThreatAlerts from "@/assets/tanium/tanium-threat-alerts.png";
import taniumThreatDocuments from "@/assets/tanium/tanium-threat-documents.png";

import taniumNavigation from "@/assets/tanium/tanium-navigation.mp4";
import taniumAssurance from "@/assets/tanium/TaniumAssurance.mov";
import taniumDiscover from "@/assets/tanium/TaniumDiscover.mov";
import taniumEnforce from "@/assets/tanium/TaniumEnforce.mov";

export default function Tanium() {
  return (
    <PageLayout title="Tanium" subtitle="Work" fullWidthContent>
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <p className="prose mb-8">
          Tanium is a large-scale endpoint security platform used by some of the world's biggest organizations to manage, secure, and respond across millions of devices in real time. I worked on the product during a period of rapid growth and sustained pressure.
        </p>
        
        <h2 className="font-display text-xl font-semibold mt-12 mb-4">Challenge</h2>
        <p className="prose">
          Support as many products as humanly possible, move fast, and keep shipping through peak COVID years—when timelines were tight, stakes were high, and work was a reliable distraction.
        </p>
        
        <h2 className="font-display text-xl font-semibold mt-12 mb-4">Reinvent</h2>
        <p className="prose">
          Redesigned three flagship products—Discover, Asset, and Threat Response—simplifying dense interfaces, tightening information architecture, and speeding up core security workflows.
        </p>
        
        <h2 className="font-display text-xl font-semibold mt-12 mb-4">Ship</h2>
        <p className="prose">
          Built and shipped two entirely new products from scratch: Assure, focused on MITRE ATT&CK visibility, and Enforce, designed for policy enforcement at enterprise scale.
        </p>
      </div>

      {/* Video - Navigation */}
      <div className="mt-12 max-w-6xl mx-auto px-6">
        <video src={taniumNavigation} autoPlay loop muted playsInline className="w-full h-auto" />
      </div>

      {/* Two-up Threat Response images */}
      <div className="mt-12 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-4">
          <img src={taniumThreatAlerts} alt="Tanium Threat Alerts" className="w-full h-auto" />
          <img src={taniumThreatDocuments} alt="Tanium Threat Documents" className="w-full h-auto" />
        </div>
      </div>

      {/* Video - Assurance */}
      <div className="mt-12 max-w-6xl mx-auto px-6">
        <video src={taniumAssurance} autoPlay loop muted playsInline className="w-full h-auto" />
      </div>

      {/* Video - Discover */}
      <div className="mt-12 max-w-6xl mx-auto px-6">
        <video src={taniumDiscover} autoPlay loop muted playsInline className="w-full h-auto" />
      </div>

      {/* Two-up Asset and Discover images */}
      <div className="mt-12 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-4">
          <img src={taniumDiscoverInterfaces} alt="Tanium Discover Interfaces" className="w-full h-auto" />
          <img src={taniumAssetVendor} alt="Tanium Asset Vendor" className="w-full h-auto" />
        </div>
      </div>

      {/* Video - Enforce */}
      <div className="mt-12 max-w-6xl mx-auto px-6">
        <video src={taniumEnforce} autoPlay loop muted playsInline className="w-full h-auto" />
      </div>
    </PageLayout>
  );
}
