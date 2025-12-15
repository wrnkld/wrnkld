import { PageLayout } from "@/components/PageLayout";

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

export default function Tools() {
  return (
    <PageLayout title="Pt 1 → Tools" subtitle="Design & AI">
      <div className="relative">
        <article className="prose space-y-6">

          <p>
            Every time I log into LinkedIn, a product designer is sharing how they took 
            their MCP server, plugged it into Perplexity, and generated design tokens 
            for Claude 27. Designers have never been short on tools. I'll start with my 
            personal history and then talk through building a real app with AI.
          </p>

          <p className="relative">
            Twenty-ish years ago, I taught myself how to build websites so I could land 
            a job<SideNote number={1}>Psychology major = no ragrets</SideNote>. That eventually got me hired at an agency in Washington, DC, 
            creating sites for embassies — Italy, Ecuador, Rwanda, Iceland, and so on. 
            This was the era of chopping up assets, slicing everything into a thousand GIFs, 
            and praying IE6 wouldn't explode.
          </p>

          <p>
            Somewhere in here, I tried architecture school in New Mexico. That… didn't stick. 
            I love New Mexico and green chile, but I still have stress dreams about studio crits.
          </p>

          <p className="relative">
            Fast-forward: I landed at frog design in Austin, Texas. I leaned fully into 
            the design side and set aside the "design technologist" identity. This was 
            peak Photoshop — gradients on gradients, shadows on shadows, buttons that 
            looked like Mike and Ikes<SideNote number={2}>Shout out Josh Hart</SideNote>.
          </p>

          <p>
            Then I moved to North Carolina and joined another consultancy, building all 
            sorts of products — picture frames, mobile phones, touchscreen insulin devices. 
            We were still deep in Photoshop, but also Illustrator, Flash, and an 
            ever-growing mix of tools.
          </p>

          <p>
            The second third of my career was at big companies — SAS and Red Hat — where 
            I shifted to designing directly in the browser. I took the web skills I already 
            had and applied them to Bootstrap, open-source component libraries, HTML, CSS… 
            anything that let me design apps that actually worked, even if they didn't 
            always look the way they should.
          </p>

          <p className="relative">
            Then came Sketch — the first UI tool that finally felt purpose-built. I'm 
            skipping a whole graveyard of tools here: InVision, Principle (which I loved), 
            Adobe InDesign, Windows Presentation Foundation<SideNote number={3}>Expression Blend somehow more complicated than Photoshop</SideNote>, and whatever 
            Framer has reinvented itself into this year.
          </p>

          <p className="relative">
            The final third of my career has been in startups. And Figma. I like Figma 
            as much as the next person<SideNote number={4}>Maybe slightly less</SideNote> — it's powerful, it's everywhere — but it's also 
            just another tool, growing more complicated every year, as tools always do.
          </p>

          <p>
            So what? My point: design is abstraction. Everything is a prototype. Figma, 
            Sketch, and Photoshop were all boxes. Some of those boxes clicked; none were 
            the thing itself. Every tool has been pictures of something — wired together, 
            animated, exported, recreated. Tools come, tools go, designers argue 
            passionately about all of them… and the work remains fundamentally the same: 
            translating ideas into <span className="text-foreground">reality</span>.
          </p>

          <p>
            So, can AI help do that? I'll get into that in part 2. This is a <s>17-part</s> 3-part series.
          </p>

          {/* Mobile/tablet fallback footnotes */}
          <div className="xl:hidden">
            <hr className="border-border my-12" />
            <div className="space-y-3 text-sm text-muted-foreground">
              <p><sup>1</sup> Psychology major = no ragrets</p>
              <p><sup>2</sup> Shout out Josh Hart</p>
              <p><sup>3</sup> Expression Blend somehow more complicated than Photoshop</p>
              <p><sup>4</sup> Maybe slightly less</p>
            </div>
          </div>
        </article>
      </div>
    </PageLayout>
  );
}
