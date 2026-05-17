import { DetailLayout } from "@/components/DetailLayout";

function FootnoteRef({ number }: { number: number }) {
  return <sup className="text-muted-foreground">{number}</sup>;
}

export default function Claude() {
  return (
    <DetailLayout title="Pt 4 → Claude" subtitle="Words" colorClass="card-forest">
      <article className="font-body text-base text-muted-foreground leading-relaxed space-y-6">
        <p>One more quick update on design and AI.</p>

        <p>
          I have now read 900 think pieces about the future of design.
          Each one argues one of three things: design is dead; design is not dead,
          it has shifted (left, right, whatever); or design will never go away
          because nobody else can do what we do. I'll spare you another. Here's
          what's happening for me.
        </p>

        <p>I use Lovable, and I am deep in Claude Code.<FootnoteRef number={1} /></p>

        <p>
          At my current job, I know our front-end repo (well enough to be dangerous)
          and the broken workflows. I'm pushing my own PRs now, some small, some
          larger. Front-end engineers review them, and we have a code-review tool
          that handles most of the thorny stuff, like end-to-end tests. It works,
          and I like it more than I expected to.
        </p>

        <p>
          I'm also pushing Claude further into the product side of my work. At
          Monte Carlo, we have a semantic skill that reads Mixpanel data, Gong
          calls, and Linear tickets. My goal is to connect that directly to
          customer requests: what people are asking for, where things are breaking,
          and what I should fix next.
        </p>

        <p>
          Which brings me to the part where I might be participating in my own
          demise, and feeling very conflicted.
        </p>

        <p>
          The SaaS design role I've had for most of my career is getting squeezed
          from every direction. AI builds the prototype. AI reviews the PR. AI reads
          the customer calls. There's a version of this where the job gets a
          lot smaller, or disappears into a different job entirely.
        </p>

        <p>
          But the job has always been changing. The tools were never the point.
          And right now, for the first time in a while, I'm closer to the actual
          product than I've ever been. I like it. For now.
        </p>

        <p>Sorry if this is, in fact, a think piece.</p>

        <hr className="border-border" />
        <div className="text-sm text-muted-foreground space-y-2">
          <p><sup>1</sup> I'm no longer using Cursor, by the way. Found an IDE called Zed that I really like.</p>
        </div>
      </article>
    </DetailLayout>
  );
}
