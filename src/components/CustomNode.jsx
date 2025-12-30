import { Handle, Position } from "reactflow";

export default function CustomNode({ data }) {
  return (
    <div className={`node level-${data.level}`}>
      <Handle type="target" position={Position.Top} />
      <div className="label">{data.label}</div>
      <div className="summary">{data.summary}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}