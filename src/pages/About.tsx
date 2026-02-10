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
  {
    company: "HumanCentric",
    role: "Product Design Manager",
    years: "2006 - 2011",
    bullets: [
      "Managed a team of designers delivering UX for enterprise and government clients",
      "Established design processes and quality standards across concurrent projects",
    ],
  },
  { company: "Frog", role: "Associate Interaction Designer", years: "2004 - 2006" },
];

export default function About() {
  const handlePrint = () => window.print();

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
      <div className="hidden print:block print:mb-6">
        <h2 className="font-display text-2xl font-medium text-foreground">Matthew Stevens</h2>
        <div className="flex gap-4 mt-1">
          <a href="https://www.wrnkld.tv/" className="font-body text-sm text-muted-foreground">wrnkld.tv</a>
          <a href="https://www.linkedin.com/in/wrnkld/" className="font-body text-sm text-muted-foreground">linkedin.com/in/wrnkld</a>
        </div>
      </div>

      <div>
        {experience.map((job, index) => (
          <div
            key={index}
            className="py-4 print:py-3 flex gap-8"
          >
            <div className="shrink-0 w-64">
              <h3 className="font-display text-base font-bold text-foreground print:text-sm">{job.company}</h3>
              <p className="font-body text-base text-muted-foreground print:text-sm">{job.role}</p>
              <p className="font-body text-sm text-muted-foreground/60 print:text-xs">{job.years}</p>
            </div>
            {job.bullets && (
              <ul className="space-y-1 pt-0.5">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2 print:text-xs">
                    <span className="mt-0.5 shrink-0">→</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div className="py-4 print:py-3">
          <h3 className="font-display text-base font-medium text-foreground print:text-sm">Education</h3>
          <p className="font-body text-base text-muted-foreground print:text-sm">Georgetown University — BA Psychology, Cum Laude</p>
        </div>
      </div>
    </DetailLayout>
  );
}
