import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { records } from "../../../data/records";

export default defineTool({
  name: "list_records",
  title: "List records",
  description: "List records (albums) from Matthew Stevens's collection. Optionally filter by artist or by year range.",
  inputSchema: {
    artist: z.string().optional().describe("Case-insensitive substring match on artist name."),
    yearFrom: z.number().int().optional().describe("Include records with year >= yearFrom."),
    yearTo: z.number().int().optional().describe("Include records with year <= yearTo."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ artist, yearFrom, yearTo }) => {
    let results = records;
    if (artist) {
      const q = artist.toLowerCase();
      results = results.filter((r) => r.artist.toLowerCase().includes(q));
    }
    if (typeof yearFrom === "number") results = results.filter((r) => r.year >= yearFrom);
    if (typeof yearTo === "number") results = results.filter((r) => r.year <= yearTo);
    const rows = results.map((r) => ({ artist: r.artist, album: r.album, year: r.year }));
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { count: rows.length, records: rows },
    };
  },
});