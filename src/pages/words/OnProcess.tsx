import { PageLayout } from "@/components/PageLayout";

export default function OnProcess() {
  return (
    <PageLayout title="On Process" subtitle="Words">
      <article className="prose space-y-6">
        <p>
          Process is a tool, not a religion. The goal isn't to follow a process 
          perfectly—it's to make good things. If your process is getting in the 
          way of that, change the process.
        </p>
        
        <p>
          That said, having no process is also a process, just a chaotic one. 
          The question isn't whether to have structure, but what kind of structure 
          serves the work best.
        </p>
        
        <p>
          I've found that the most productive pattern is to oscillate between 
          divergent and convergent thinking. Divergent phases are for exploration: 
          generating options, questioning assumptions, following tangents. Convergent 
          phases are for decisions: narrowing down, committing, executing.
        </p>
        
        <p>
          The mistake many teams make is trying to do both at once. Critiquing ideas 
          while generating them kills creativity. Exploring options while trying to 
          ship creates paralysis. Knowing which mode you're in—and having the 
          discipline to stay in it—is crucial.
        </p>
        
        <p>
          Documentation is underrated. Not process documentation (that's usually 
          overhead), but design documentation. Writing down why you made a decision 
          helps you make better decisions. It also helps when you need to revisit 
          the decision later, or explain it to someone new.
        </p>
        
        <p>
          Iteration is not the same as refinement. Iteration means trying fundamentally 
          different approaches. Refinement means polishing a chosen approach. Both are 
          necessary, but they happen at different times and require different mindsets.
        </p>
      </article>
    </PageLayout>
  );
}
