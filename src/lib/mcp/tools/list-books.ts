import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { books } from "../../../data/books";

export default defineTool({
  name: "list_books",
  title: "List books",
  description: "List books from Matthew Stevens's reading list. Optionally filter to only recommended titles or by author (case-insensitive substring match).",
  inputSchema: {
    recommendedOnly: z.boolean().optional().describe("If true, return only recommended books."),
    author: z.string().optional().describe("Case-insensitive substring match on author name."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ recommendedOnly, author }) => {
    let results = books;
    if (recommendedOnly) results = results.filter((b) => b.recommended);
    if (author) {
      const q = author.toLowerCase();
      results = results.filter((b) => b.author.toLowerCase().includes(q));
    }
    const rows = results.map((b) => ({
      title: b.title,
      author: b.author,
      year: b.year,
      recommended: b.recommended,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { count: rows.length, books: rows },
    };
  },
});