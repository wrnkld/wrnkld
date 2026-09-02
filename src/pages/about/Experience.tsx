import { DetailLayout } from "@/components/DetailLayout";
import { Row } from "@/components/Row";
import { experience, education } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <DetailLayout title="Experience">
      <div className="-mx-5 border-t border-border/70">
        {experience.map((job) => (
          <Row
            key={job.company}
            className="flex flex-col gap-1 lg:grid lg:grid-cols-3 lg:gap-8"
          >
            <span className="text-foreground">{job.company}</span>
            <span className="text-muted-foreground">{job.role}</span>
            <span className="text-muted-foreground">{job.years}</span>
            {job.description && (
              <p className="text-muted-foreground/80 leading-relaxed lg:col-start-2 lg:col-span-1">
                {job.description}
              </p>
            )}
          </Row>
        ))}
        <Row className="flex flex-col gap-1 lg:grid lg:grid-cols-3 lg:gap-8">
          <span className="text-foreground">{education.school}</span>
          <span className="text-muted-foreground">{education.degree}</span>
          <span className="text-muted-foreground" />
        </Row>
      </div>
    </DetailLayout>
  );
}
