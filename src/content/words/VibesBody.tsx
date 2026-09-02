
export function VibesBody() {
  return (
    <article className="font-body text-base text-muted-foreground leading-relaxed space-y-6">
        <p>
          Pt 1 was probably too much information about my history with design 
          tools. Pt 2 is simpler: it's about all the new stuff.
        </p>

        <p>
          Like most designers right now, I've been working with Bolt, v0, Lovable, 
          Cursor, and the growing class of "describe it and it builds" tools. You 
          write prompts and a working interface appears. Taken together, they're 
          genuinely impressive. You're no longer drawing boxes to imply behavior—you're 
          shaping behavior directly.
        </p>

        <p>
          I've run into two limitations pretty quickly.
        </p>

        <p>
          The first is structural. Cursor aside, most of these tools generate <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-foreground/60 transition-colors">Tailwind</a> + <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-foreground/60 transition-colors">shadcn</a>-based
          UIs. That ecosystem overlaps conceptually with our internal component library, 
          but the code itself isn't portable. You still hit the same abstraction gap:
          cool prototype… how does this map to our components? A few tools let you 
          reference existing components, but most still treat design systems as 
          inspiration, not constraints.
        </p>

        <p>
          The second limitation is more subtle, and it compounds fast. When you lean 
          into Lovable—or any similar environment—you're implicitly committing to 
          rebuilding your app inside that tool. When you want to explore a new flow 
          or alternate idea, you need a foundation. The easiest foundation is whatever 
          you built last. The more you prototype, the deeper you get.
        </p>

        <p>
          These tools already feel more impactful than traditional design handoff 
          workflows, and the landscape will obviously keep changing and consolidating. 
          These predictions will almost certainly age badly, but a few things seem likely:
        </p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>AI app builders (like Lovable) keep smoothing out Git, deploys, and real component libraries (Mantine, Material UI, Radix, Chakra).</li>
          <li>AI code editors (like Cursor) keep me away from the terminal. Bash, npm, nvm—things I do not understand and would like to continue not understanding.</li>
          <li>The code keeps getting better.</li>
          <li>Design, product, and engineering roles continue to evolve.</li>
        </ol>

        <p>
          Whatever happens, I still wanted to try building something real 
          from scratch—on my own, mistakes and all (Pt 3 soon).
        </p>
      </article>
  );
}
