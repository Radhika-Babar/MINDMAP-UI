import React, { useMemo, useState } from "react";
import ReactFlow, { Background, Controls, useReactFlow } from "reactflow";
import "reactflow/dist/style.css";

import data from "../data/mindmap.json";
import { buildGraph, collectAllIds } from "../utils/treeUtils";
import { applyLayout } from "../utils/dagreLayout";
import Toolbar from "./Toolbar";
import SidePanel from "./SidePanel";
import { nodeTypes } from "../nodeTypes";

export default function MindMap() {
  const [expanded, setExpanded] = useState(new Set([data.id]));
  const [selected, setSelected] = useState(null);
  const { fitView } = useReactFlow();

  const graph = useMemo(() => {
    const g = buildGraph(data, expanded);
    return {
      nodes: applyLayout(g.nodes, g.edges),
      edges: g.edges
    };
  }, [expanded]);

  const toggleNode = (node) => {
    const newSet = new Set(expanded);
    newSet.has(node.data.rawId)
      ? newSet.delete(node.data.rawId)
      : newSet.add(node.data.rawId);
    setExpanded(newSet);
  };

  return (
    <div className="app">
      <div className="canvas">
        <Toolbar
          onExpand={() => setExpanded(new Set(collectAllIds(data)))}
          onCollapse={() => setExpanded(new Set([data.id]))}
          onFit={fitView}
        />

        <ReactFlow
          nodes={graph.nodes}
          edges={graph.edges}
          nodeTypes={nodeTypes}
          onNodeClick={(_, n) => {
            setSelected(n);
            toggleNode(n);
          }}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>

      <SidePanel node={selected} />
    </div>
  );
}


