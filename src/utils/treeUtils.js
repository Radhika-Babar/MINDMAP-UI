export function buildGraph(node, expanded, parentId = null, level = 0, nodes = [], edges = []) {
  const nodeId = parentId ? `${parentId}-${node.id}` : node.id;

  nodes.push({
    id: nodeId,
    type: "custom",
    position: { x: 0, y: 0 },
    data: {
      ...node,
      level,
      rawId: node.id,
      hasChildren: node.children?.length > 0
    }
  });

  if (parentId) {
    edges.push({
      id: `e-${parentId}-${nodeId}`,
      source: parentId,
      target: nodeId
    });
  }

  if (expanded.has(node.id)) {
    node.children?.forEach(child =>
      buildGraph(child, expanded, nodeId, level + 1, nodes, edges)
    );
  }

  return { nodes, edges };
}

export function collectAllIds(node, ids = []) {
  ids.push(node.id);
  node.children?.forEach(c => collectAllIds(c, ids));
  return ids;
}