import { DetailLayout } from "@/components/DetailLayout";
import { experience, education } from "@/data/experience";

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
            <p className="font-body text-base text-foreground font-normal">{education.school}</p>
            <p className="font-body text-base text-muted-foreground">{education.degree}</p>
          </div>
        </div>
      </div>
    </DetailLayout>
  );
}
