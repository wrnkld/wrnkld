import { useMemo } from "react";
import { sankey, sankeyLinkHorizontal, type SankeyNodeMinimal, type SankeyLinkMinimal } from "d3-sankey";

export interface SankeyData {
  nodes: { name: string }[];
  links: { source: number; target: number; value: number }[];
}

type Node = SankeyNodeMinimal<{ name: string }, { value: number }> & { name: string };
type Link = SankeyLinkMinimal<{ name: string }, { value: number }>;

export function SankeyDiagram({
  data,
  width = 720,
  height = 360,
}: {
  data: SankeyData;
  width?: number;
  height?: number;
}) {
  const { nodes, links } = useMemo(() => {
    const generator = sankey<{ name: string }, { value: number }>()
      .nodeWidth(12)
      .nodePadding(24)
      .extent([
        [0, 0],
        [width, height],
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
      className="w-full h-auto"
      role="img"
      aria-label="Sankey diagram"
    >
      <g fill="none">
        {links.map((link, i) => (
          <path
            key={i}
            d={linkPath(link) ?? undefined}
            stroke="hsl(var(--muted-foreground))"
            strokeOpacity={0.4}
            strokeWidth={Math.max(1, link.width ?? 0)}
          />
        ))}
      </g>
      <g>
        {nodes.map((node, i) => (
          <g key={i}>
            <rect
              x={node.x0}
              y={node.y0}
              width={(node.x1 ?? 0) - (node.x0 ?? 0)}
              height={Math.max(1, (node.y1 ?? 0) - (node.y0 ?? 0))}
              fill="hsl(var(--foreground))"
            />
            <text
              x={(node.x0 ?? 0) < width / 2 ? (node.x1 ?? 0) + 8 : (node.x0 ?? 0) - 8}
              y={((node.y0 ?? 0) + (node.y1 ?? 0)) / 2}
              dy="0.35em"
              textAnchor={(node.x0 ?? 0) < width / 2 ? "start" : "end"}
              className="fill-muted-foreground"
              fontSize={12}
              fontFamily="var(--font-body)"
            >
              {node.name}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
