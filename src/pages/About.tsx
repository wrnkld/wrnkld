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
  },
  {
    company: "Workato",
    role: "Staff Product Designer",
    years: "2021 - 2022",
    bullets: [
      "Designed automation workflows for enterprise integration platform",
    ],
  },
  {
    company: "Tanium",
    role: "Senior Product Designer",
    years: "2019 - 2021",
    bullets: [
      "Designed asset discovery, compliance assurance, and policy enforcement modules",
    ],
  },
  {
    company: "Pendo",
    role: "Lead Product Designer",
    years: "2019",
    bullets: [
      "Led design for product analytics and user engagement tools",
    ],
  },
  {
    company: "Red Hat",
    role: "Senior Interaction Designer",
    years: "2016 - 2019",
    bullets: [
      "Led cross-disciplinary design team modernizing the middleware portfolio",
    ],
  },
  {
    company: "SAS",
    role: "Principal Interaction Designer",
    years: "2011 - 2016",
    bullets: [
      "Owned interaction design for visual analytics and statistical modeling products",
    ],
  },
  {
    company: "HumanCentric",
    role: "Product Design Manager",
    years: "2006 - 2011",
    bullets: [
      "Managed a team of designers delivering UX for enterprise and government clients",
    ],
  },
  { company: "Frog", role: "Associate Interaction Designer", years: "2004 - 2006",
    bullets: [
      "Contributed to interaction design for consumer electronics and enterprise clients",
    ],
  },
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
      <div className="hidden print:flex print:mb-6 print:gap-8">
        <div className="shrink-0 w-64">
          <h2 className="font-display text-2xl font-medium text-foreground">Matthew Stevens</h2>
        </div>
        <ul className="space-y-1 pt-0.5">
          <li className="font-body text-sm text-muted-foreground flex items-start gap-2 print:text-xs">
            <span className="mt-0.5 shrink-0">→</span>
            <a href="https://www.wrnkld.tv/">wrnkld.tv</a>
          </li>
          <li className="font-body text-sm text-muted-foreground flex items-start gap-2 print:text-xs">
            <span className="mt-0.5 shrink-0">→</span>
            <a href="https://www.linkedin.com/in/wrnkld/">linkedin.com/in/wrnkld</a>
          </li>
        </ul>
      </div>

      <div>
        {experience.map((job, index) => (
          <div
            key={index}
            className={`py-4 print:py-3 flex gap-8 ${index > 0 ? 'border-t border-border/40' : ''}`}
          >
            <div className="shrink-0 w-64">
              <h3 className="font-display text-base font-bold text-foreground print:text-sm">{job.company}</h3>
              <p className="font-body text-base text-muted-foreground font-normal print:text-xs">{job.years}</p>
            </div>
            <div className="space-y-1">
              <p className="font-body text-base text-foreground font-normal print:text-sm">{job.role}</p>
              {job.bullets && (
                <ul className="space-y-1 pt-0.5">
                  {job.bullets.map((bullet, i) => (
                  <li key={i} className="font-body text-base text-muted-foreground print:text-xs">
                    {bullet}
                  </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
        <div className="py-4 print:py-3 border-t border-border/40 flex gap-8">
          <div className="shrink-0 w-64">
            <h3 className="font-display text-base font-bold text-foreground print:text-sm">Education</h3>
          </div>
          <div>
            <p className="font-body text-base text-foreground font-normal print:text-sm">Georgetown University</p>
            <p className="font-body text-base text-muted-foreground print:text-xs">BA Psychology, Cum Laude</p>
          </div>
        </div>
      </div>
    </DetailLayout>
  );
}
