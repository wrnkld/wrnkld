import type { SankeyData } from "@/components/SankeyDiagram";

export const troubleshootingSankey: SankeyData = {
  nodes: [
    { name: "Paying customers", tone: "total" },
    { name: "Didn't run TSA", tone: "inactive" },
    { name: "Ran TSA", tone: "active" },
    { name: "Fewer than 3 a month", tone: "free" },
    { name: "All 3 free in a month", tone: "free" },
    { name: "More than 3 a month", detail: "All by hand", tone: "manual" },
    { name: "Automatic runs on", tone: "automatic" },
  ],
  links: [
    { source: 0, target: 1, value: 228 },
    { source: 0, target: 2, value: 242 },
    { source: 2, target: 3, value: 86 },
    { source: 2, target: 4, value: 52 },
    { source: 2, target: 5, value: 83 },
    { source: 2, target: 6, value: 21 },
  ],
};