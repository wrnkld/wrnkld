import { defineMcp } from "@lovable.dev/mcp-js";
import aboutTool from "./tools/about";
import listBooksTool from "./tools/list-books";
import listRecordsTool from "./tools/list-records";
import listContentTool from "./tools/list-content";

export default defineMcp({
  name: "wrnkld-mcp",
  title: "Matthew Brennan Stevens — Portfolio",
  version: "0.1.0",
  instructions:
    "Public tools for Matthew Stevens's portfolio site. Use `about` for bio and contact. Use `list_content` for work, words (essays), and side projects. Use `list_books` and `list_records` to browse his reading list and record collection.",
  tools: [aboutTool, listBooksTool, listRecordsTool, listContentTool],
});