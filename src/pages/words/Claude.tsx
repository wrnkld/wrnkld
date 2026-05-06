import { DetailLayout } from "@/components/DetailLayout";

export default function Claude() {
  return (
    <DetailLayout title="Pt 4 → Claude" subtitle="Design & AI" colorClass="card-forest">
      <article className="font-body text-base text-muted-foreground leading-relaxed space-y-6">
        <p>One more quick update on design and AI.</p>

        <p>
          I've now read approximately 900 think pieces about the future of design.
          Each one argues one of three things: design is dead; design is not dead,
          it has shifted (left, right, whatever); or design will never go away
          because nobody else can do what we do. I'll spare you another. Here's
          what's happening for me.
        </p>

        <p>I'm deep in Claude Code.</p>

        <p>
          It works for me more than any of the AI-assisted Figma workflows that
          keep showing up in my LinkedIn feed — partly because I never really
          liked Figma that much to begin with. I respected it, used it every day
          for years, and got pretty adept at it. But it always felt like a very
          sophisticated way to draw pictures of software rather than make it.
          Every handoff was a translation exercise. Every prototype was a polite
          fiction.
        </p>

        <p>
          At my current job, I know our front-end repo well enough to be
          dangerous — our design system, obviously, and the broken workflows
          I've been staring at long enough to actually fix. I'm pushing my own
          PRs now, some small, some larger. Front-end engineers review them, and
          we have a code review skill that handles most of the thorny stuff like
          end-to-end tests. It works, and I like it more than I expected to.
        </p>

        <p>
          I'm also pushing Claude further into the product side of my work. At
          Monte Carlo, we have a semantic skill that reads Mixpanel data, Gong
          calls, and Linear tickets together. The goal is to connect that
          directly to customer requests: what are people asking for, where is it
          breaking, what should I fix next.
        </p>

        <p>
          Which brings me to the part where I might be participating in my own
          demise, and feeling very conflicted.
        </p>

        <p>
          The SaaS design role I've had for most of my career — spec the flow,
          file the ticket, wait for the sprint — is getting compressed from
          every direction. AI builds the prototype. AI reviews the PR. AI reads
          the customer calls. There's a version of this where the job gets a
          lot smaller, or disappears into a different job entirely.
        </p>

        <p>
          But the job has always been changing. The tools were never the point.
          And right now, for the first time in a while, I'm closer to the actual
          product than I've ever been — pushing fixes, reading diffs, watching
          things change in production. That doesn't feel like shrinking. It
          feels like the job finally making sense.
        </p>

        <p>
          I'm no longer using Cursor, by the way. Found an IDE called Zed that I
          like a lot.
        </p>

        <p>Sorry if this is, in fact, a think piece.</p>
      </article>
    </DetailLayout>
  );
}
