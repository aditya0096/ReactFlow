import React, { useEffect, useState } from "react";
import { Handle, Position, useUpdateNodeInternals } from "reactflow";

const BaseNode = ({
  id,
  data,
  type,
  children,
  style = {},
  dynamicHandles = [],
}) => {
  const [currName, setCurrName] = useState(
    data?.name || (id ? id.replace(`${type}-`, "") : "Node")
  );

  const updateNode = useUpdateNodeInternals();

  useEffect(() => {
    updateNode(id);
  }, [dynamicHandles, id, updateNode]);

  return (
    <div
      style={{
        position: "relative",
        padding: 10,
        border: "1px solid black",
        borderRadius: 6,
        background: "#fff",
        ...style,
      }}
    >
      {dynamicHandles.map((handle, index) => (
        <Handle
          key={handle.id}
          type="target"
          id={handle.variableName}
          position={Position.Left}
          style={{
            top: `${handle.top}px`,
            left: "-6px",
            background: "blue",
            width: "10px",
            height: "10px",
            zIndex: 10,
            pointerEvents: "all",
          }}
        />
      ))}

      <div style={{ fontWeight: "bold", marginBottom: 8 }}>{type}</div>
      <input
        value={currName}
        onChange={(e) => setCurrName(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      {children}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          top: "50%",
          right: "-6px",
          background: "green",
          width: "10px",
          height: "10px",
        }}
      />
    </div>
  );
};

export default BaseNode;
