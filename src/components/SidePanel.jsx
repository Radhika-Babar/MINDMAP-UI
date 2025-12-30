export default function SidePanel({ node, onEdit }) {
  if (!node) {
    return (
      <div className="side">
        <h3>Select a node</h3>
        <p>Click a node to view details</p>
      </div>
    );
  }

  return (
    <div className="side">
      <h2>{node.data.label}</h2>
      <p><b>Summary:</b> {node.data.summary}</p>
      <p><b>Details:</b> {node.data.details}</p>
    </div>
  );
}