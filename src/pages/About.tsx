import { PageLayout } from "@/components/PageLayout";

const experience = [
  { company: "Monte Carlo", role: "Head of Design", location: "San Francisco, CA", years: "2022 – present" },
  { company: "Workato", role: "Staff Product Designer", location: "Mountain View, CA", years: "2021 – 2022" },
  { company: "Tanium", role: "Staff Product Designer", location: "Emeryville, CA", years: "2019 – 2021" },
  { company: "Pendo", role: "Lead Product Designer", location: "Raleigh, NC", years: "2019 – 2019" },
  { company: "Red Hat", role: "Senior Interaction Designer", location: "Raleigh, NC", years: "2016 – 2019" },
  { company: "SAS", role: "Principal Interaction Designer", location: "Cary, NC", years: "2011 – 2016" },
  { company: "HumanCentric", role: "Product Design Manager", location: "Raleigh, NC", years: "2006 – 2011" },
  { company: "Frog", role: "Associate Interaction Designer", location: "Austin, TX", years: "2004 – 2006" },
];

export default function About() {
  return (
    <PageLayout title="About" subtitle="Experience">
      <div className="space-y-0">
        {experience.map((job, index) => (
          <div 
            key={index} 
            className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-2 md:gap-8 py-6 border-b border-border last:border-b-0"
          >
            <div>
              <h3 className="font-display text-lg font-medium text-foreground">{job.company}</h3>
              <p className="font-body text-muted-foreground">{job.role}</p>
            </div>
            <p className="font-body text-muted-foreground">{job.location}</p>
            <p className="font-body text-muted-foreground tabular-nums">{job.years}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
