import { PageLayout } from "@/components/PageLayout";

export default function OnDesign() {
  return (
    <PageLayout title="On Design" subtitle="Words">
      <article className="prose space-y-6">
        <p>
          Design is not about making things pretty. It's about making things work. 
          The visual layer is just one dimension of a much larger problem space that 
          includes behavior, context, constraints, and human psychology.
        </p>
        
        <p>
          Good design is invisible. When something is well-designed, you don't notice 
          the design—you just use the thing. The buttons are where you expect them. 
          The information hierarchy guides your eye naturally. The interactions feel 
          intuitive because they map to mental models you already have.
        </p>
        
        <p>
          The best designers I know are obsessive observers. They watch how people 
          actually use things, not how they say they use things. They notice the 
          workarounds, the hesitations, the moments of confusion. These observations 
          become the seeds of better solutions.
        </p>
        
        <p>
          Constraints are not the enemy of creativity—they're the engine of it. 
          Every great design is a response to specific limitations: technical, 
          budgetary, temporal. Working within constraints forces you to find 
          solutions you never would have discovered in an unlimited sandbox.
        </p>
        
        <p>
          The craft matters. Typography, spacing, color, motion—these details 
          accumulate into an experience that either feels considered or careless. 
          Users may not be able to articulate why one interface feels professional 
          and another feels amateurish, but they feel it.
        </p>
      </article>
    </PageLayout>
  );
}
