import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "about",
  title: "About Matthew Stevens",
  description: "Get a short bio and contact info for Matthew Stevens.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "Matthew Stevens",
      email: "hello@wrnkld.tv",
      site: "https://wrnkld.lovable.app",
      summary:
        "Designer. Founding designer at Monte Carlo (data and AI observability). Previously Tanium, Red Hat, SAS. Side projects: StudyDrop, Sleeves.",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});