import type { ReactNode } from "react";

function Ref({ n }: { n: number }) {
  return <sup className="text-muted-foreground">{n}</sup>;
}

function Part({ children }: { children: ReactNode }) {
  return <span className="text-foreground">{children}</span>;
}

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground hover:text-muted-foreground transition-colors"
    >
      {children}
    </a>
  );
}

function Notes({ children }: { children: ReactNode }) {
  return (
    <>
      <hr className="border-t border-border/70" />
      <div className="text-sm text-muted-foreground space-y-2">{children}</div>
    </>
  );
}

function Sub({ children }: { children: ReactNode }) {
  return <h3 className="font-display text-lg font-medium text-foreground">{children}</h3>;
}

export type Essay = {
  id: string;
  title: string;
  note: string;
  body: ReactNode;
};

export const essays: Essay[] = [
  {
    id: "claude",
    title: "Pt 4 → Claude",
    note: "Think piece #901",
    body: (
      <>
        <p>One more quick update on design and AI.</p>
        <p>
          I have now read 900 think pieces about the future of design. Each one argues
          one of three things: design is dead; design is not dead, it has shifted
          (left, right, whatever); or design will never go away because nobody else can
          do what we do. I&apos;ll spare you another. Here&apos;s what&apos;s happening
          for me.
        </p>
        <p>
          I use Lovable, and I am deep in Claude Code.
          <Ref n={1} />
        </p>
        <p>
          At my current job, I know our front-end repo (well enough to be dangerous) and
          the broken workflows. I&apos;m pushing my own PRs now, some small, some larger.
          Front-end engineers review them, and we have a code-review tool that handles
          most of the thorny stuff, like end-to-end tests. It works, and I like it more
          than I expected to.
        </p>
        <p>
          I&apos;m also pushing Claude further into the product side of my work. At Monte
          Carlo, we have a semantic skill that reads Mixpanel data, Gong calls, and
          Linear tickets. My goal is to connect that directly to customer requests: what
          people are asking for, where things are breaking, and what I should fix next.
        </p>
        <p>
          Which brings me to the part where I might be participating in my own demise,
          and feeling very conflicted.
          <Ref n={2} />
        </p>
        <p>
          The SaaS design role I&apos;ve had for most of my career is getting squeezed
          from every direction. AI builds the prototype. AI reviews the PR. AI reads the
          customer calls. There&apos;s a version of this where the job gets a lot
          smaller, or disappears into a different job entirely.
        </p>
        <p>
          But the job evolves. The tools change. I&apos;m closer to the actual product
          than I&apos;ve ever been and I like it. For now.
        </p>
        <p>Sorry if this is, in fact, a think piece.</p>
        <Notes>
          <p>
            <sup>1</sup> I&apos;m no longer using Cursor, by the way. Found an IDE called
            Zed that I really like.
          </p>
          <p>
            <sup>2</sup> I like to call AI agents &ldquo;dummy.&rdquo;
          </p>
        </Notes>
      </>
    ),
  },
  {
    id: "sleeves",
    title: "Pt 3 → Sleeves",
    note: "I built an app",
    body: (
      <>
        <p>
          You can&apos;t really quibble with <Part>Pt 1</Part> — it&apos;s basically my
          life story. You could nitpick <Part>Pt 2</Part>, especially when I admit I
          haven&apos;t explored Figma Make. But Pt 3 is different. It&apos;s where
          I&apos;m deliberately pushing into new territory.
        </p>
        <p>
          My app, <Ext href="https://sleeves.app">Sleeves</Ext>, is super simple: you
          search for music albums and mark your favorites, or current listens. You can
          make lists, follow friends, and write reviews. That&apos;s it. Pretty basic.
          But I wanted it to work for real, real.
          <Ref n={1} />
        </p>
        <p>Here&apos;s the stack I used to make that happen:</p>

        <Sub>Lovable</Sub>
        <p>
          As I mentioned in <Part>Pt 2</Part>, I tried almost every AI app builder and
          ended up with Lovable. It&apos;s hard to overstate how much better it is than
          it was a few months ago. I burned through credits and spent about $200 total,
          but with loose wireframes, decent prompts, and a lot of help from ChatGPT, I
          had something working in a couple of weeks.
        </p>

        <Sub>ChatGPT</Sub>
        <p>
          I should think more about my prompts in general.
          <Ref n={2} /> For this project, at least at the start, I did. ChatGPT helped at
          almost every step, especially early architecture decisions.
        </p>

        <Sub>Supabase</Sub>
        <p>
          Lovable integrates with Supabase for Postgres, auth, and storage. I needed a
          database and login flow, and this handled both. The integration is mostly
          invisible to me, which is fine — I know it&apos;s there and that it works.
        </p>

        <Sub>Resend</Sub>
        <p>
          I decided users should get a welcome email. Lovable suggested Resend. I signed
          up, wired a couple of keys, and got it working without leaving the free tier.
        </p>

        <Sub>Vercel</Sub>
        <p>
          Once I had a working product with auth and emails, I needed it deployed
          somewhere that wasn&apos;t a Lovable subdomain. Lovable recommended Vercel,
          which worked out since I already use it for this portfolio.
        </p>

        <Sub>Namecheap</Sub>
        <p>
          I bought a domain on Namecheap, then pointed the DNS at Vercel so it would
          serve the app under the real domain. With some help from ChatGPT, this mostly
          worked on the first try.
        </p>

        <Sub>GitHub</Sub>
        <p>
          Eventually, I had to put this in GitHub because… It&apos;s code. More
          importantly, I wanted a path out of the Lovable universe so I wouldn&apos;t
          have to pay maintenance forever.
        </p>

        <Sub>Cursor</Sub>
        <p>
          Here&apos;s where I briefly lost the plot. Cursor is impressive, but I
          initially couldn&apos;t get the project running locally and needed help to get
          through the git and npm setup. Once it was running, Cursor handled most of the
          cleanup. I used ChatGPT to sanity-check its suggestions and keep the refactor
          constrained — effectively using one AI to guide another AI while it cleaned up
          code generated by a third. The end result works and feels reasonably stable,
          which is both reassuring and a little unsettling.
        </p>
        <p>
          End of interview!
          <Ref n={3} /> None of this is especially impressive on its own. Sleeves is
          small, the stack is conventional, and the tools did most of the heavy lifting.
          But that&apos;s the point. It&apos;s real, it works, and I learned a lot
          building it.
        </p>
        <Notes>
          <p>
            <sup>1</sup>{" "}
            <Ext href="https://www.youtube.com/watch?v=gPNdFHSLAeI">
              youtube.com/watch?v=gPNdFHSLAeI
            </Ext>
          </p>
          <p>
            <sup>2</sup> Less cursing, less ALL CAPS
          </p>
          <p>
            <sup>3</sup>{" "}
            <Ext href="https://www.youtube.com/watch?v=RFZZEpNKjg0">
              youtube.com/watch?v=RFZZEpNKjg0
            </Ext>
          </p>
        </Notes>
      </>
    ),
  },
  {
    id: "vibes",
    title: "Pt 2 → Vibes",
    note: "Prompts v boxes",
    body: (
      <>
        <p>
          <Part>Pt 1</Part> was probably too much information about my history with
          design tools. Pt 2 is simpler: it&apos;s about all the new stuff.
        </p>
        <p>
          Like most designers right now, I&apos;ve been working with Bolt, v0, Lovable,
          Cursor, and the growing class of &ldquo;describe it and it builds&rdquo; tools.
          <Ref n={1} /> You write prompts and a working interface appears. Taken
          together, they&apos;re genuinely impressive. You&apos;re no longer drawing
          boxes to imply behavior — you&apos;re shaping behavior directly.
        </p>
        <p>I&apos;ve run into two limitations pretty quickly.</p>
        <p>
          The first is structural. Cursor aside, most of these tools generate{" "}
          <Ext href="https://tailwindcss.com">Tailwind</Ext> +{" "}
          <Ext href="https://ui.shadcn.com">shadcn</Ext>-based UIs. That ecosystem
          overlaps conceptually with our internal component library, but the code itself
          isn&apos;t portable. You still hit the same abstraction gap: cool prototype…
          how does this map to our components? A few tools let you reference existing
          components, but most still treat design systems as inspiration, not
          constraints.
        </p>
        <p>
          The second limitation is more subtle, and it compounds fast. When you lean into
          Lovable — or any similar environment — you&apos;re implicitly committing to
          rebuilding your app inside that tool. When you want to explore a new flow or
          alternate idea, you need a foundation. The easiest foundation is whatever you
          built last. The more you prototype, the deeper you get.
          <Ref n={2} />
        </p>
        <p>
          These tools already feel more impactful than traditional design handoff
          workflows, and the landscape will obviously keep changing and consolidating.
          These predictions will almost certainly age badly, but a few things seem
          likely:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            AI app builders (like Lovable) keep smoothing out Git, deploys, and real
            component libraries (Mantine, Material UI, Radix, Chakra).
          </li>
          <li>
            AI code editors (like Cursor) keep me away from the terminal. Bash, npm,
            nvm — things I do not understand and would like to continue not
            understanding.
          </li>
          <li>
            The code keeps getting better.
            <Ref n={3} />
          </li>
          <li>Design, product, and engineering roles continue to evolve.</li>
        </ol>
        <p>
          Whatever happens, I still wanted to try building something real from
          scratch — on my own, mistakes and all (<Part>Pt 3</Part>).
        </p>
        <Notes>
          <p>
            <sup>1</sup> Disclaimer: I have not yet dug deep on Figma Make or MCP
          </p>
          <p>
            <sup>2</sup> 💸 credits
          </p>
          <p>
            <sup>3</sup> Who am I to judge?
          </p>
        </Notes>
      </>
    ),
  },
  {
    id: "tools",
    title: "Pt 1 → Tools",
    note: "TMI",
    body: (
      <>
        <p>
          Every time I log into LinkedIn, a product designer is sharing how they took
          their MCP server, plugged it into Perplexity, and generated design tokens for
          Claude 27. Designers have never been short on tools. I&apos;ll start with my
          personal history and then talk through building a real app with AI.
        </p>
        <p>
          Twenty-ish years ago, I taught myself how to build websites so I could land a
          job.
          <Ref n={1} /> That eventually got me hired at an agency in Washington, DC,
          creating sites for embassies — Italy, Ecuador, Rwanda, Iceland, and so on. This
          was the era of chopping up assets, slicing everything into a thousand GIFs, and
          praying IE6 wouldn&apos;t explode.
        </p>
        <p>
          Somewhere in here, I tried architecture school in New Mexico. That… didn&apos;t
          stick. I love New Mexico and green chile, but I still have stress dreams about
          studio crits.
        </p>
        <p>
          Fast-forward: I landed at frog design in Austin, Texas. I leaned fully into the
          design side and set aside the &ldquo;design technologist&rdquo; identity. This
          was peak Photoshop — gradients on gradients, shadows on shadows, buttons that
          looked like Mike and Ikes.
          <Ref n={2} />
        </p>
        <p>
          Then I moved to North Carolina and joined another consultancy, building all
          sorts of products — picture frames, mobile phones, touchscreen insulin devices.
          We were still deep in Photoshop, but also Illustrator, Flash, and an
          ever-growing mix of tools.
        </p>
        <p>
          The second third of my career was at big companies — SAS and Red Hat — where I
          shifted to designing directly in the browser. I took the web skills I already
          had and applied them to Bootstrap, open-source component libraries, HTML,
          CSS… anything that let me design apps that actually worked, even if they
          didn&apos;t always look the way they should.
        </p>
        <p>
          Then came Sketch — the first UI tool that finally felt purpose-built. I&apos;m
          skipping a whole graveyard of tools here: InVision, Principle (which I loved),
          Adobe InDesign, Windows Presentation Foundation,
          <Ref n={3} /> and whatever Framer has reinvented itself into this year.
        </p>
        <p>
          The final third of my career has been in startups. And Figma. I like Figma as
          much as the next person
          <Ref n={4} /> — it&apos;s powerful, it&apos;s everywhere — but it&apos;s also
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
          So, can AI help do that? I get into that in <Part>Pt 2</Part>.
        </p>
        <Notes>
          <p>
            <sup>1</sup> Psychology major = no ragrets
          </p>
          <p>
            <sup>2</sup> Shout out Josh Hart
          </p>
          <p>
            <sup>3</sup> Expression Blend somehow more complicated than Photoshop
          </p>
          <p>
            <sup>4</sup> Maybe slightly less
          </p>
        </Notes>
      </>
    ),
  },
];
