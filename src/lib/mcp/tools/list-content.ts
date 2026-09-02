import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const WORK = [
  { title: "Monte Carlo", url: "https://wrnkld.lovable.app/work/montecarlo", note: "Data and AI observability" },
  { title: "Tanium", url: "https://wrnkld.lovable.app/work/tanium", note: "Endpoint security at scale" },
];

const WORDS: { title: string; url: string; note: string }[] = [];

const SIDE = [
  { title: "StudyDrop", url: "https://studydrop.app", note: "UX research, without the friction" },
  { title: "Sleeves", url: "https://sleeves.app", note: "Track albums, make lists, follow friends" },
];

export default defineTool({
  name: "list_content",
  title: "List site content",
  description: "List Matthew Stevens's portfolio content by category: work (case studies), words (essays), or side (side projects).",
  inputSchema: {
    category: z.enum(["work", "words", "side", "all"]).default("all").describe("Which category to list."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const cat = category ?? "all";
    const out: Record<string, unknown> = {};
    if (cat === "work" || cat === "all") out.work = WORK;
    if (cat === "words" || cat === "all") out.words = WORDS;
    if (cat === "side" || cat === "all") out.side = SIDE;
    return {
      content: [{ type: "text", text: JSON.stringify(out, null, 2) }],
      structuredContent: out,
    };
  },
});