import { DetailLayout } from "@/components/DetailLayout";

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
    <DetailLayout title="Experience" subtitle="About" colorClass="card-mustard">
      <div className="border border-border rounded-md overflow-hidden">
        {experience.map((job, index) => (
          <div 
            key={index}
            className="flex flex-col md:flex-row md:items-center justify-between py-4 px-4 border-b border-border last:border-b-0 hover:bg-white transition-colors duration-200"
          >
            <div>
              <h3 className="font-display text-base font-medium text-foreground">{job.company}</h3>
              <p className="font-body text-sm text-muted-foreground">{job.role}</p>
            </div>
            <div className="md:text-right">
              <p className="font-body text-sm text-muted-foreground">{job.location}</p>
              <p className="font-body text-sm text-muted-foreground">{job.years}</p>
            </div>
          </div>
        ))}
      </div>
    </DetailLayout>
  );
}
