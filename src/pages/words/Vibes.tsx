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
            I don't know if "vibe coding" is even the right phrase anymore, but like 
            most designers right now, I've been working with Bolt, v0, Lovable, and 
            the growing class of "describe it, and we'll code it" platforms.<SideNote number={1}>Disclaimer: I have not yet dug deep on Figma Make or MCP</SideNote> You type 
            prompts and a working interface appears. Taken together, they're pretty 
            amazing. You're no longer drawing boxes to suggest behavior—you're shaping 
            behavior directly.
          </p>

          <p>
            These tools are incredible, but I've run into two significant limitations.
          </p>

          <p>
            The first is that they all rely on Tailwind and shadcn. Those libraries 
            share some DNA with (y)our internal component library, but the actual code, 
            classes, and visuals aren't directly usable. This will probably change soon. 
            Until then, you keep running into the same abstraction problem: Cool 
            prototype… how does this map to our components?
          </p>

          <p className="relative">
            The second limitation is more subtle, but it compounds quickly. If you lean 
            into Lovable or any similar platform, you're implicitly committing to 
            rebuilding your entire app inside that environment. The moment you want to 
            prototype a new flow or alternate concept, you need something to build on 
            top of. The easiest "something" is whatever you last built. The more you 
            prototype, the deeper you get.<SideNote number={2}>💸 credits</SideNote>
          </p>

          <p>
            While these tools are more impactful than Figma (or Sketch, or Zeplin, or 
            the whole graveyard), they still don't reliably produce production-ready code. 
            I still wanted to know if I could build something real.
          </p>

          <p>
            So I did—<a href="https://sleeves.app" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity">Sleeves</a>! I'll share how in part 3.
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
