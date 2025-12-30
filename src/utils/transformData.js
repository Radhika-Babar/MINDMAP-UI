let edgeId = 0;

export function transformData(
  node,
  parentId = null,
  level = 0,
  nodes = [],
  edges = []
) {
  const nodeId = parentId ? `${parentId}-${node.id}` : node.id;
  const hasChildren = node.children?.length > 0;

  nodes.push({
    id: nodeId,
    type: "custom",
    position: { x: 0, y: 0 },
    data: {
      label: node.label,
      summary: node.summary,
      details: node.details,
      level,
      hasChildren,
    },
  });

  if (parentId) {
    edges.push({
      id: `e-${edgeId++}`,
      source: parentId,
      target: nodeId,
      animated: false,
      style: { stroke: "#94a3b8" },
    });
  }

  if (node.expanded && hasChildren) {
    node.children.forEach((child) =>
      transformData(child, nodeId, level + 1, nodes, edges)
    );
  }

  return { nodes, edges };
}