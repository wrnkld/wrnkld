import { PageLayout } from "@/components/PageLayout";
import { Link } from "react-router-dom";

function SideNote({ number, children }: { number: number; children: React.ReactNode }) {
  return (
    <>
      <sup className="text-muted-foreground">{number}</sup>
      <span className="absolute right-0 translate-x-full pl-8 w-48 text-sm text-muted-foreground hidden xl:inline-block">
        <sup>{number}</sup> {children}
      </span>
    </>
  );
}

export default function Vibes() {
  return (
    <PageLayout title="Pt 2 → Vibes" subtitle="Design & AI">
      <div className="relative">
        <article className="prose space-y-6">
          <p>
            <Link to="/designai/tools" className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity">Part 1</Link> was probably too much information about my history with design 
            tools. Part 2 is simpler: it's about all the new stuff.
          </p>

          <p className="relative">
            Like most designers right now, I've been working with Bolt, v0, Lovable, 
            Cursor, and the growing class of "describe it and it builds" tools.<SideNote number={1}>Disclaimer: I have not yet dug deep on Figma Make or MCP</SideNote> You 
            write prompts and a working interface appears. Taken together, they're 
            genuinely impressive. You're no longer drawing boxes to imply behavior—you're 
            shaping behavior directly.
          </p>

          <p>
            I've run into two limitations pretty quickly.
          </p>

          <p>
            The first is structural. Most of these tools generate Tailwind + shadcn-based 
            UIs. That ecosystem overlaps conceptually with our internal component library, 
            but the code itself isn't portable. You still hit the same abstraction gap: 
            cool prototype… how does this map to our components? A few tools let you 
            reference existing components, but most still treat design systems as 
            inspiration, not constraints.
          </p>

          <p className="relative">
            The second limitation is more subtle, and it compounds fast. When you lean 
            into Lovable—or any similar environment—you're implicitly committing to 
            rebuilding your app inside that tool. When you want to explore a new flow 
            or alternate idea, you need a foundation. The easiest foundation is whatever 
            you built last. The more you prototype, the deeper you get.<SideNote number={2}>💸 credits</SideNote>
          </p>

          <p>
            These tools already feel more impactful than traditional design handoff 
            workflows, and the landscape will obviously keep changing and consolidating. 
            This will almost certainly age badly, but a few things seem likely:
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>Cursor keeps me away from the terminal. Bash, npm, nvm—things I do not understand and would like to continue not understanding.</li>
            <li>Lovable keeps smoothing out Git, deploys, and real component libraries (Mantine, Material UI, Radix, Chakra). Fewer sharp edges, more stuff that actually plugs into how teams build products.</li>
            <li>The code keeps getting better. Who am I to judge?</li>
          </ul>

          <p>
            Anyway, whatever happens, I still wanted to try building something real 
            from scratch—on my own, mistakes and all.
          </p>

          {/* Mobile/tablet fallback footnotes */}
          <div className="xl:hidden">
            <hr className="border-border my-12" />
            <div className="space-y-3 text-sm text-muted-foreground">
              <p><sup>1</sup> Disclaimer: I have not yet dug deep on Figma Make or MCP</p>
              <p><sup>2</sup> 💸 credits</p>
            </div>
          </div>
        </article>
      </div>
    </PageLayout>
  );
}
