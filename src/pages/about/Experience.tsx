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
            noHover
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-1 md:gap-8"
          >
            <div className="flex flex-col">
              <span className="font-medium text-foreground">{job.company}</span>
              <span className="text-muted-foreground">{job.years}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-foreground">{job.role}</span>
              {job.description && (
                <p className="text-muted-foreground/80 leading-relaxed">
                  {job.description}
                </p>
              )}
            </div>
          </Row>
        ))}
        <Row
          noHover
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-1 md:gap-8 border-b-0"
        >
          <span className="font-medium text-foreground">{education.school}</span>
          <span className="text-foreground">{education.degree}</span>
        </Row>
      </div>
    </DetailLayout>
  );
}
