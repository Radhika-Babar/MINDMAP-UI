import dagre from "dagre";

const width = 200;
const height = 70;

export function applyLayout(nodes, edges) {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: "TB", ranksep: 120, nodesep: 80 });

  nodes.forEach(n => g.setNode(n.id, { width, height }));
  edges.forEach(e => g.setEdge(e.source, e.target));

  dagre.layout(g);

  return nodes.map(n => {
    const pos = g.node(n.id);
    return {
      ...n,
      position: {
        x: pos.x - width / 2,
        y: pos.y - height / 2
      }
    };
  });
}