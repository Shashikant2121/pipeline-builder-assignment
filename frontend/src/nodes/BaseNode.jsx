import { Handle, Position } from "reactflow";
import "../styles/node.css";

export default function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children,
}) {
  return (
    <div className="node">
      <strong>{title}</strong>
      {inputs.map((i, idx) => (
        <Handle
          key={i}
          type="target"
          position={Position.Left}
          id={i}
          style={{ top: 40 + idx * 20 }}
        />
      ))}
      {children}
      {outputs.map((o, idx) => (
        <Handle
          key={o}
          type="source"
          position={Position.Right}
          id={o}
          style={{ top: 40 + idx * 20 }}
        />
      ))}
    </div>
  );
}
