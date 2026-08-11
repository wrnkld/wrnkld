# Monte Carlo CLI demo on the case study page

Rebuild the uploaded `mc-api-demo.html` concept as a native React component in the CLI section of the Monte Carlo work page, so it inherits the site's type, gridlines, and spacing instead of living in an iframe.

## What it does

An interactive two-pane console. A scenario list on the left (Setup, Explore, Triage, Monitors — 12 commands), a terminal pane on the right. Clicking a scenario renders three stacked blocks: the CLI command, the HTTP request, and a 200 response whose JSON types itself out character by character before snapping into full syntax highlighting. Same "clickety click" behavior as the concept file, nothing auto-plays.

## Structure

```text
src/components/mc-cli/
  McCliDemo.tsx      shell, scenario nav, terminal chrome, click state
  TerminalBlocks.tsx CLI / HTTP / response renderers + typewriter
  highlight.tsx      JSON + CLI + HTTP tokenizers (React nodes, no innerHTML)
  scenarios.ts       all 12 scenarios, typed, copied verbatim from the concept
```

`src/pages/work/MonteCarlo.tsx` renders `<McCliDemo />` under the CLI heading, full-bleed like the PR table so it spans to the gridlines.

## Visual treatment

The concept is a dark terminal; the site is light slate. I'll keep the terminal itself dark — a terminal reading as a terminal is the point, and it works as a deliberate inset panel the way the images do — but reframe the chrome to match the site: no rounded 10px corners, `border-border/70` outer border, sharp edges, the site's mono stack, and the header/eyebrow copy dropped since the page already has a "CLI" heading and intro paragraph. The traffic-light dots stay. Syntax colors stay close to the original but get tuned so nothing glows.

## Responsive

Below `sm` the scenario nav collapses above the terminal into a horizontally scrollable row of chips grouped by category; the terminal body scrolls on its own and the long command lines wrap rather than overflow the page.

## Technical notes

- All highlighting becomes React elements. The original builds HTML strings and injects them via `innerHTML`; that gets rewritten as token arrays so there's no unsanitized markup path.
- Typewriter runs on a single `setTimeout` loop with a ref, cancelled on scenario change and unmount; it respects `prefers-reduced-motion` by rendering the highlighted JSON immediately.
- Colors go in as scoped CSS variables on the component's root in `index.css` (a `.mc-terminal` block), so no hardcoded Tailwind color utilities in the component.
- Scenario data is content, not logic: one typed array, easy to add commands later.
