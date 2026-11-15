import { useMemo } from "react";
import { sankey, sankeyLeft, sankeyLinkHorizontal, type SankeyNodeMinimal, type SankeyLinkMinimal } from "d3-sankey";

type NodeData = { name: string; detail?: string; tone?: string };

export interface SankeyData {
  nodes: NodeData[];
  links: { source: number; target: number; value: number }[];
}

type Node = SankeyNodeMinimal<NodeData, { value: number }> & NodeData;
type Link = SankeyLinkMinimal<NodeData, { value: number }>;

export function SankeyDiagram({
  data,
  width = 1100,
  height = 540,
  label = "Sankey diagram",
}: {
  data: SankeyData;
  width?: number;
  height?: number;
  label?: string;
}) {
  const { nodes, links } = useMemo(() => {
    const generator = sankey<NodeData, { value: number }>()
      .nodeWidth(14)
      .nodePadding(64)
      .nodeAlign(sankeyLeft)
      .nodeSort(null)
      .linkSort(null)
      .extent([
        [12, 64],
        [width - 260, height - 24],
      ]);
    return generator({
      nodes: data.nodes.map((n) => ({ ...n })),
      links: data.links.map((l) => ({ ...l })),
    });
  }, [data, width, height]);

  const linkPath = sankeyLinkHorizontal<Node, Link>();

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto min-w-[780px] font-body"
      role="img"
      aria-label={label}
    >
      <title>{label}</title>
      <desc>{nodes.map((node) => `${node.name}: ${node.value} customers`).join(". ")}</desc>
      <g fill="none">
        {links.map((link, i) => (
          <path
            key={i}
            d={linkPath(link) ?? undefined}
            className={`sankey-${typeof link.target === "object" ? link.target.tone ?? "total" : "total"}`}
            stroke="currentColor"
            strokeOpacity={0.24}
            strokeWidth={Math.max(1, link.width ?? 0)}
          >
            <title>{typeof link.source === "object" ? link.source.name : ""} → {typeof link.target === "object" ? link.target.name : ""}: {link.value} customers</title>
          </path>
        ))}
      </g>
      <g>
        {nodes.map((node, i) => (
          <g key={i} className={`sankey-${node.tone ?? "total"}`}>
            <rect
              x={node.x0}
              y={node.y0}
              width={(node.x1 ?? 0) - (node.x0 ?? 0)}
              height={Math.max(1, (node.y1 ?? 0) - (node.y0 ?? 0))}
              fill="currentColor"
            />
            <text
              x={node.depth === 2 ? (node.x1 ?? 0) + 12 : node.x0}
              y={node.depth === 2 ? ((node.y0 ?? 0) + (node.y1 ?? 0)) / 2 - (node.detail ? 18 : 8) : (node.y0 ?? 0) - 34}
              className="fill-foreground"
              fontSize={15}
            >
              <tspan>{node.name}</tspan>
              {node.detail && <tspan x={(node.x1 ?? 0) + 12} dy={20} className="fill-muted-foreground" fontSize={13.125}>{node.detail}</tspan>}
              <tspan x={node.depth === 2 ? (node.x1 ?? 0) + 12 : node.x0} dy={22} fontWeight={500} className="fill-muted-foreground">{node.value}</tspan>
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
