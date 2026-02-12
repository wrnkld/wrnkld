import { DetailLayout } from "@/components/DetailLayout";

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
  return (
    <DetailLayout
      title="Experience"
      subtitle="About"
      colorClass="card-mustard"
    >

      <div>
        {experience.map((job, index) => (
          <div
            key={index}
            className="py-3 flex flex-col md:flex-row gap-1 md:gap-8"
          >
            <div className="shrink-0 md:w-48">
              <h3 className="font-display text-base font-bold text-foreground">{job.company}</h3>
              <p className="font-body text-base text-muted-foreground font-normal mt-1">{job.years}</p>
            </div>
            <div>
              <p className="font-body text-base text-foreground font-normal">{job.role}</p>
              {job.bullets && job.bullets.length === 1 ? (
                <p className="font-body text-base text-muted-foreground mt-1">{job.bullets[0]}</p>
              ) : (
                job.bullets?.map((bullet, i) => (
                  <div key={i} className="flex gap-1.5 mt-1">
                    <span className="font-body text-base text-muted-foreground shrink-0">→</span>
                    <p className="font-body text-base text-muted-foreground">{bullet}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
        <div className="py-3 flex flex-col md:flex-row gap-1 md:gap-8">
           <div className="shrink-0 md:w-48">
            <h3 className="font-display text-base font-bold text-foreground">Education</h3>
          </div>
          <div>
            <p className="font-body text-base text-foreground font-normal">Georgetown University</p>
            <p className="font-body text-base text-muted-foreground">BA Psychology, Cum Laude</p>
          </div>
        </div>
      </div>
    </DetailLayout>
  );
}
