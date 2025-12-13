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

export default function TMI() {
  return (
    <PageLayout title="Pt 1 → TMI" subtitle="Design & AI">
      <div className="relative">
        <article className="prose space-y-6">

          <p>
            Every time I log into LinkedIn, a product designer is bragging about how they 
            took their MCP server, jammed it into Perplexity, and generated design tokens 
            for Claude 27. I'm not here to brag — just to tell my story with AI tools. 
            I'll start with a bit of history (TMI) and then talk through building a real app.
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
            I love New Mexico and green chile, but I still have nightmares about studio crits.
          </p>

          <p className="relative">
            Fast-forward: I landed at frog design in Austin, Texas. I leaned fully into 
            the design side and set aside the "design technologist" identity. This was 
            peak Photoshop — gradients on gradients, shadows on shadows, buttons that 
            looked like Mike and Ikes<SideNote number={2}>Josh Hart would eat an entire box of these during film sessions</SideNote>.
          </p>

          <p>
            Then I moved to North Carolina and joined another consultancy, building all 
            sorts of products — picture frames, mobile phones, even a touchscreen insulin 
            device. We were still deep in Photoshop, but also Illustrator, Flash, and an 
            ever-growing mix of tools.
          </p>

          <p>
            The second third of my career was at big companies — SAS and Red Hat — where 
            I shifted to designing directly in the browser. I took the web skills I already 
            had and applied them to Bootstrap, open-source component libraries, HTML, CSS… 
            anything that let me design apps that actually worked, even if they didn't 
            always look the way they should. Some people loved these deliverables; some 
            people hated them.
          </p>

          <p className="relative">
            Then came Sketch — the first UI tool that finally felt purpose-built. I'm 
            skipping a whole graveyard of tools here: InVision, Principle (which I loved), 
            Adobe InDesign, Windows Presentation Foundation<SideNote number={3}>Wild times. We don't talk about WPF.</SideNote>, and whatever 
            Framer has reinvented itself into this year.
          </p>

          <p>
            The final third of my career has been in startups. And Figma. I like Figma 
            as much as the next person — it's powerful, it's everywhere — but it's also 
            just another tool, growing more complicated every year, as tools always do.
          </p>

          <p>
            So what? My point: design is abstraction. Everything is a prototype. Figma 
            is boxes. Sketch was boxes. Photoshop was boxes. Every tool has been pictures 
            of something — wired together, animated, exported, recreated. Tools come, 
            tools go, designers argue passionately about all of them… and the work remains 
            fundamentally the same: translating ideas into reality.
          </p>

          <p className="font-display text-xl text-foreground">
            So, can AI help do that?
          </p>

          {/* Mobile/tablet fallback footnotes */}
          <div className="xl:hidden">
            <hr className="border-border my-12" />
            <div className="space-y-3 text-sm text-muted-foreground">
              <p><sup>1</sup> Psychology major = no ragrets</p>
              <p><sup>2</sup> Josh Hart would eat an entire box of these during film sessions</p>
              <p><sup>3</sup> Wild times. We don't talk about WPF.</p>
            </div>
          </div>
        </article>
      </div>
    </PageLayout>
  );
}
