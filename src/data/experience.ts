export interface Job {
  company: string;
  role: string;
  years: string;
  description?: string;
}

export const experience: Job[] = [
  {
    company: "Monte Carlo AI",
    role: "Head of Design",
    years: "2022 - Present",
    description:
      "Joined as founding designer and built the design function while remaining hands-on. Designed core workflows across observability, investigations, integrations, permissions, and AI-assisted data operations. Hired and mentored the team and established our design system and research practice.",
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
      "Led Threat Response, launched Enforce, and supported Asset, Discover, and Impact across Tanium’s security platform.",
  },
  {
    company: "Pendo",
    role: "Lead Product Designer",
    years: "2019",
    description:
      "Designed core product experiences across Pendo's analytics platform.",
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

/** Shown as the last row of the homepage list and as the Education block on the Experience page. */
export const education = {
  company: "Georgetown",
  school: "Georgetown University",
  degree: "BA Psychology, Cum Laude",
};
