import { PageLayout } from "@/components/PageLayout";
import { ImageGallery } from "@/components/ImageGallery";

import taniumAssetVendor from "@/assets/tanium/tanium-asset-vendor.png";
import taniumAssuranceFindings from "@/assets/tanium/tanium-assurance-findings.png";
import taniumDiscoverInterfaces from "@/assets/tanium/tanium-discover-interfaces.png";
import taniumEnforceOverview from "@/assets/tanium/tanium-enforce-overview.png";
import taniumNavigationViews from "@/assets/tanium/tanium-navigation-views.png";
import taniumThreatAlerts from "@/assets/tanium/tanium-threat-alerts.png";
import taniumThreatDocuments from "@/assets/tanium/tanium-threat-documents.png";

export default function Tanium() {
  return (
    <PageLayout title="Tanium" subtitle="Work" fullWidthContent>
      <div className="space-y-12">
        <div className="max-w-4xl mx-auto px-6">
          <p className="prose">
            Enterprise security platform redesign. Led the product design for their 
            next-generation endpoint management console, serving millions of endpoints 
            across Fortune 500 companies.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-xl font-semibold mb-4">The Challenge</h2>
          <p className="prose">
            Tanium's existing interface was built for power users but had become 
            unwieldy as the product expanded. Security teams were spending too much 
            time navigating between features and not enough time responding to threats.
          </p>
        </div>

        {/* Navigation section - video + stacked images */}
        <div className="space-y-4">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-xl font-semibold">Unified Navigation</h2>
            <p className="prose">
              We consolidated dozens of disconnected modules into a coherent navigation 
              system. Views could be saved, shared, and accessed from anywhere in the platform.
            </p>
          </div>
          <div className="max-w-4xl mx-auto px-6">
            <video 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TaniumNavigation-ceK7d3kliX5iYIs21ePVMiAYSHzEsF.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            />
          </div>
          <div className="max-w-4xl mx-auto px-6">
            <img src={taniumNavigationViews} alt="Tanium Navigation Views" className="w-full" />
          </div>
        </div>

        {/* Threat Response section - horizontal gallery */}
        <div className="space-y-4">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-xl font-semibold">Threat Response</h2>
            <p className="prose">
              Security analysts needed to move fast. We designed a threat intelligence 
              interface that surfaced critical alerts and provided immediate context 
              for investigation.
            </p>
          </div>
          <ImageGallery images={[
            { src: taniumThreatAlerts, alt: "Tanium Threat Alerts" },
            { src: taniumThreatDocuments, alt: "Tanium Threat Documents" },
            { src: taniumEnforceOverview, alt: "Tanium Enforce Overview" },
          ]} />
        </div>

        {/* Assurance section - video + stacked */}
        <div className="space-y-4">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-xl font-semibold">Compliance & Assurance</h2>
            <p className="prose">
              Tracking compliance across millions of endpoints is complex. We created 
              a findings-first view that helped teams prioritize remediation efforts.
            </p>
          </div>
          <div className="max-w-4xl mx-auto px-6">
            <video 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TaniumAssurance-9svGoSVb8LcrLJspg2EBTzCy2PrLfv.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            />
          </div>
          <div className="max-w-4xl mx-auto px-6">
            <img src={taniumAssuranceFindings} alt="Tanium Assurance Findings" className="w-full" />
          </div>
        </div>

        {/* Discover section - video + horizontal gallery */}
        <div className="space-y-4">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-xl font-semibold">Asset Discovery</h2>
            <p className="prose">
              Understanding what's on your network is the foundation of security. 
              The discovery module mapped interfaces, vendors, and relationships 
              across the entire infrastructure.
            </p>
          </div>
          <div className="max-w-4xl mx-auto px-6">
            <video 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TaniumDiscover-RSFf4NVTidfRFMSbmgsXhIo2x4Wo6K.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            />
          </div>
          <ImageGallery images={[
            { src: taniumDiscoverInterfaces, alt: "Tanium Discover Interfaces" },
            { src: taniumAssetVendor, alt: "Tanium Asset Vendor" },
          ]} />
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-xl font-semibold mb-4">The Outcome</h2>
          <p className="prose">
            The new design reduced average task completion time by 40% and received 
            overwhelmingly positive feedback from enterprise customers during beta testing.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
