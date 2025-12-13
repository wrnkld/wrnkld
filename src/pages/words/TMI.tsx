import { PageLayout } from "@/components/PageLayout";

export default function OnDesign() {
  return (
    <PageLayout title="Pt 1 → TMI" subtitle="Design & AI">
      <article className="prose space-y-6">

        <p>
          Every time I log into LinkedIn, a product designer is bragging about how they 
          took their MCP server, jammed it into Perplexity, and generated design tokens 
          for Claude 27. I'm not here to brag — just to tell my story with AI tools. 
          I'll start with a bit of history (TMI) and then talk through building a real app.
        </p>

        <p>
          Twenty-ish years ago, I taught myself how to build websites so I could land 
          a job<sup className="text-muted-foreground">1</sup>. That eventually got me hired at an agency in Washington, DC, 
          creating sites for embassies — Italy, Ecuador, Rwanda, Iceland, and so on. 
          This was the era of chopping up assets, slicing everything into a thousand GIFs, 
          and praying IE6 wouldn't explode.
        </p>

        <p>
          Somewhere in here, I tried architecture school in New Mexico. That… didn't stick. 
          I love New Mexico and green chile, but I still have nightmares about studio crits.
        </p>

        <p>
          Fast-forward: I landed at frog design in Austin, Texas. I leaned fully into 
          the design side and set aside the "design technologist" identity. This was 
          peak Photoshop — gradients on gradients, shadows on shadows, buttons that 
          looked like Mike and Ikes<sup className="text-muted-foreground">2</sup>.
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

        <p>
          Then came Sketch — the first UI tool that finally felt purpose-built. I'm 
          skipping a whole graveyard of tools here: InVision, Principle (which I loved), 
          Adobe InDesign, Windows Presentation Foundation<sup className="text-muted-foreground">3</sup>, and whatever 
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

        {/* Footnotes */}
        <hr className="border-border my-12" />
        
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            <sup>1</sup> Psychology major = no ragrets
          </p>
          <p>
            <sup>2</sup> Delicious and fruity, just like our design work
          </p>
          <p>
            <sup>3</sup> Wild times. We don't talk about WPF.
          </p>
        </div>
      </article>
    </PageLayout>
  );
}
