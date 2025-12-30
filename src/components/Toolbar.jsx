export default function Toolbar({ onExpand, onCollapse, onFit, onExport }) {
  return (
    <div className="toolbar">
      <button onClick={onExpand}>Expand All</button>
      <button onClick={onCollapse}>Collapse All</button>
      <button onClick={onFit}>Fit View</button>
      <button onClick={onExport}>Export PNG</button>
    </div>
  );
}