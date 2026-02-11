import { DetailLayout } from "@/components/DetailLayout";
import { Printer } from "lucide-react";

const experience: {
  company: string;
  role: string;
  years: string;
  bullets?: string[];
}[] = [
  {
    company: "Monte Carlo",
    role: "Head of Design",
    years: "2022 - Present",
    bullets: [
      "Founding design leader; built and scaled the design organization, hiring and mentoring senior talent while establishing operating standards.",
      "Drove UX strategy across the data observability platform, shaping foundational workflows and system-level coherence.",
      "Led customer research and executive alignment to inform product direction and platform evolution.",
      "Advanced AI-driven and agentic workflows that made complex data systems usable and trustworthy for expert teams.",
    ],
  },
  {
    company: "Workato",
    role: "Staff Product Designer",
    years: "2021 - 2022",
    bullets: [
      "Owned UX for Workato Workflow Apps, turning complex automation configuration into a reusable, productized experience for enterprise users",
    ],
  },
  {
    company: "Tanium",
    role: "Senior Product Designer",
    years: "2019 - 2021",
    bullets: [
      "Led UX for Threat Response and launched two new products while supporting multiple additional product teams",
    ],
  },
  {
    company: "Pendo",
    role: "Lead Product Designer",
    years: "2019",
    bullets: [
      "Led design for core product areas and strengthened system-level consistency across the platform",
    ],
  },
  {
    company: "Red Hat",
    role: "Senior Interaction Designer",
    years: "2016 - 2019",
    bullets: [
      "Directed UX initiatives across a five-person team, delivering enterprise improvements grounded in open-source collaboration and PatternFly standards",
    ],
  },
  {
    company: "SAS",
    role: "Principal Interaction Designer",
    years: "2011 - 2016",
    bullets: [
      "Led UX for SAS's flagship analytics platform, driving a foundational redesign and bringing two new enterprise products to market",
    ],
  },
  {
    company: "HumanCentric",
    role: "Product Design Manager",
    years: "2006 - 2011",
    bullets: [
      "Balanced hands-on design with leadership of an eight-person UX team serving enterprise clients",
    ],
  },
  { company: "Frog", role: "Associate Interaction Designer", years: "2004 - 2006",
    bullets: [
      "Contributed to high-profile client engagements for Microsoft, HP, and Dell, building foundational interaction design expertise",
    ],
  },
];

export default function About() {
  const handlePrint = () => {
    // If inside an iframe (Lovable preview), open in new tab for printing
    if (window.self !== window.top) {
      const newWindow = window.open(window.location.href, '_blank');
      if (newWindow) {
        newWindow.addEventListener('load', () => newWindow.print());
      }
    } else {
      window.print();
    }
  };

  return (
    <DetailLayout
      title="Experience"
      subtitle="About"
      colorClass="card-mustard"
      headerAction={
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors print:hidden"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>PDF</span>
        </button>
      }
    >
      {/* Print-only header */}
      <div className="hidden print:block print:mb-4">
        <h2 className="font-display text-2xl print:text-lg font-medium text-foreground">Matthew Stevens</h2>
        <p className="font-body text-base print:text-sm text-muted-foreground mt-1"><a href="https://www.wrnkld.tv/">wrnkld.tv</a></p>
        <p className="font-body text-base print:text-sm text-muted-foreground"><a href="https://www.linkedin.com/in/wrnkld/">linkedin.com/in/wrnkld</a></p>
      </div>

      <div>
        {experience.map((job, index) => (
          <div
            key={index}
            className="py-4 print:py-2 flex flex-col md:flex-row print:flex-row gap-1 md:gap-8 print:gap-8"
          >
            <div className="shrink-0 md:w-56 print:w-56">
              <h3 className="font-display text-base print:text-sm font-bold text-foreground">{job.company}</h3>
              <p className="font-body text-base print:text-sm text-muted-foreground font-normal mt-1">{job.years}</p>
            </div>
            <div>
              <p className="font-body text-base print:text-sm text-foreground font-normal">{job.role}</p>
              {job.bullets && job.bullets.length === 1 ? (
                <p className="font-body text-base print:text-sm text-muted-foreground mt-1">{job.bullets[0]}</p>
              ) : (
                job.bullets?.map((bullet, i) => (
                  <div key={i} className="flex gap-1.5 mt-1">
                    <span className="font-body text-base print:text-sm text-muted-foreground shrink-0">→</span>
                    <p className="font-body text-base print:text-sm text-muted-foreground">{bullet}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
        <div className="py-4 print:py-2 flex flex-col md:flex-row print:flex-row gap-1 md:gap-8 print:gap-8">
           <div className="shrink-0 md:w-56 print:w-56">
            <h3 className="font-display text-base print:text-sm font-bold text-foreground">Education</h3>
          </div>
          <div>
            <p className="font-body text-base print:text-sm text-foreground font-normal">Georgetown University</p>
            <p className="font-body text-base print:text-sm text-muted-foreground">BA Psychology, Cum Laude</p>
          </div>
        </div>


      </div>
    </DetailLayout>
  );
}
