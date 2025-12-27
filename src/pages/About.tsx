import { SplitHeroLayout } from "@/components/SplitHeroLayout";

const experience = [
  { company: "Monte Carlo", role: "Head of Design", location: "San Francisco, CA", years: "2022 – present" },
  { company: "Workato", role: "Staff Product Designer", location: "Mountain View, CA", years: "2021 – 2022" },
  { company: "Tanium", role: "Senior Product Designer", location: "Emeryville, CA", years: "2019 – 2021" },
  { company: "Pendo", role: "Lead Product Designer", location: "Raleigh, NC", years: "2019 – 2019" },
  { company: "Red Hat", role: "Senior Interaction Designer", location: "Raleigh, NC", years: "2016 – 2019" },
  { company: "SAS", role: "Principal Interaction Designer", location: "Cary, NC", years: "2011 – 2016" },
  { company: "HumanCentric", role: "Product Design Manager", location: "Raleigh, NC", years: "2006 – 2011" },
  { company: "Frog", role: "Associate Interaction Designer", location: "Austin, TX", years: "2004 – 2006" },
];

export default function About() {
  return (
    <SplitHeroLayout title="Experience" subtitle="About" colorClass="card-terracotta">
      <div className="p-8 lg:p-12 xl:p-16">
        <div className="border border-border rounded-md overflow-hidden">
          {experience.map((job, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-[1fr_1fr_150px] gap-2 md:gap-8 py-6 px-6 border-b border-border last:border-b-0 text-lg hover:bg-muted/50 transition-colors"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{job.company}</h3>
                <p className="font-body text-muted-foreground">{job.location}</p>
              </div>
              <p className="font-body text-muted-foreground">{job.role}</p>
              <p className="font-body text-muted-foreground tabular-nums">{job.years}</p>
            </div>
          ))}
        </div>
      </div>
    </SplitHeroLayout>
  );
}