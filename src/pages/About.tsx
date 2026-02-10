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
      "Built and scaled the design team from founding designer to a multi-disciplinary group",
      "Defined product vision and design strategy for data observability platform",
      "Shipped end-to-end investigation workflows across Snowflake, dbt, Airflow, and Looker",
    ],
  },
  {
    company: "Workato",
    role: "Staff Product Designer",
    years: "2021 - 2022",
  },
  {
    company: "Tanium",
    role: "Senior Product Designer",
    years: "2019 - 2021",
    bullets: [
      "Designed asset discovery and network interface exploration tools",
      "Led design for compliance assurance and policy enforcement modules",
    ],
  },
  { company: "Pendo", role: "Lead Product Designer", years: "2019" },
  {
    company: "Red Hat",
    role: "Senior Interaction Designer",
    years: "2016 - 2019",
    bullets: [
      "Led cross-disciplinary design team modernizing the middleware portfolio",
      "Designed in the open using PatternFly with community feedback loops",
      "Created shared patterns across Business Automation and Business Optimization",
    ],
  },
  {
    company: "SAS",
    role: "Principal Interaction Designer",
    years: "2011 - 2016",
    bullets: [
      "Owned interaction design for visual analytics and statistical modeling products",
      "Shipped data preparation and reporting workflows used by enterprise customers",
    ],
  },
  { company: "HumanCentric", role: "Product Design Manager", years: "2006 - 2011" },
  { company: "Frog", role: "Associate Interaction Designer", years: "2004 - 2006" },
];

export default function About() {
  return (
    <DetailLayout title="Experience" subtitle="About" colorClass="card-mustard">
      <div className="border border-border rounded-md overflow-hidden">
        {experience.map((job, index) => (
          <div
            key={index}
            className="py-4 px-4 border-b border-border last:border-b-0 hover:bg-white transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-base font-medium text-foreground">{job.company}</h3>
              <p className="font-body text-sm text-muted-foreground">{job.years}</p>
            </div>
            <p className="font-body text-base text-muted-foreground">{job.role}</p>
            {job.bullets && (
              <ul className="mt-2 space-y-1">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-0.5 shrink-0">→</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </DetailLayout>
  );
}
