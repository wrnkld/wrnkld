import { DetailLayout } from "@/components/DetailLayout";

const experience: {
  company: string;
  role: string;
  years: string;
  description?: string;
}[] = [
  {
    company: "StudyDrop",
    role: "Product Designer & Builder",
    years: "2026 - Present",
    description:
      "Launched a UX research platform for surveys, card sorting, tree testing, and first-click testing.",
  },
  {
    company: "Sleeves",
    role: "Product Designer & Builder",
    years: "2025 - Present",
    description:
      "Built and shipped a social music app using Lovable, Claude Code, ChatGPT, React, Supabase, GitHub, and Vercel.",
  },
  {
    company: "Monte Carlo",
    role: "Head of Design",
    years: "2022 - Present",
    description:
      "Joined as founding designer and built the design function while remaining hands-on across the product. Designed core workflows for observability, investigations, integrations, permissions, and AI-assisted data operations. Hired and mentored designers; established the design system, research practice, and operating model.",
  },
  {
    company: "Workato",
    role: "Staff Product Designer",
    years: "2021 - 2022",
    description:
      "Designed Workflow Apps, turning complex automation into reusable enterprise applications.",
  },
  {
    company: "Tanium",
    role: "Senior Product Designer",
    years: "2019 - 2021",
    description:
      "Led Threat Response and launched two enterprise security products.",
  },
  {
    company: "Pendo",
    role: "Lead Product Designer",
    years: "2019",
    description:
      "Designed core product experiences and improved platform consistency.",
  },
  {
    company: "Red Hat",
    role: "Senior Interaction Designer",
    years: "2016 - 2019",
    description:
      "Led UX for hybrid-cloud products using PatternFly and open-source collaboration.",
  },
  {
    company: "SAS",
    role: "Principal Interaction Designer",
    years: "2011 - 2016",
    description:
      "Redesigned SAS's flagship analytics platform and launched two enterprise products.",
  },
  {
    company: "HumanCentric",
    role: "Product Design Manager",
    years: "2006 - 2011",
    description:
      "Managed an eight-person UX team while remaining hands-on with enterprise client work.",
  },
  { company: "Frog", role: "Associate Interaction Designer", years: "2004 - 2006",
    description:
      "Designed products for Microsoft, HP, and Dell.",
  },
];

export default function About() {
  return (
    <DetailLayout
      title="Experience"
      subtitle="About"
    >

      <div>
        {experience.map((job, index) => (
          <div
            key={index}
            className="py-3 flex flex-col gap-1 lg:grid lg:grid-cols-3 lg:gap-8"
          >
            <div className="lg:col-span-1">
              <h3 className="font-display text-base font-bold text-foreground">{job.company}</h3>
              <p className="font-body text-base text-muted-foreground font-normal mt-1">{job.years}</p>
            </div>
            <div className="lg:col-span-2">
              <p className="font-body text-base text-foreground font-normal">{job.role}</p>
              {job.description && (
                <p className="font-body text-base text-muted-foreground mt-1">{job.description}</p>
              )}
            </div>
          </div>
        ))}
        <div className="py-3 flex flex-col gap-1 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-1">
            <h3 className="font-display text-base font-bold text-foreground">Education</h3>
          </div>
          <div className="lg:col-span-2">
            <p className="font-body text-base text-foreground font-normal">Georgetown University</p>
            <p className="font-body text-base text-muted-foreground">BA Psychology, Cum Laude</p>
          </div>
        </div>
      </div>
    </DetailLayout>
  );
}
