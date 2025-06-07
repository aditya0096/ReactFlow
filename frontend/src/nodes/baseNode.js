import React from 'react';
import { Handle, Position } from 'reactflow';
import { applyNodeStyles, nodeStyles } from '../styles/nodeStyles';

const BaseNode = ({
  id,
  data,
  type,
  children,
  style = {},
  dynamicHandles = [],
}) => {
  const [currName, setCurrName] = React.useState(
    data?.name || (id ? id.replace(`${type}-`, '') : 'Node')
  );

  const nodeStyle = applyNodeStyles(type, style);

  return (
    <div style={nodeStyle}>
      {/* Dynamic input handles */}
      {dynamicHandles.map((handle) => (
        <Handle
          key={handle.id}
          type="target"
          id={handle.variableName}
          position={Position.Left}
          style={{
            ...nodeStyles.handle,
            top: `${handle.top}px`,
            left: '-6px',
            background: handle.style?.background || nodeStyles.handle.background,
            ...handle.style
          }}
        />
      ))}

      <div style={nodeStyles.header}>{type}</div>
      <input
        value={currName}
        onChange={(e) => setCurrName(e.target.value)}
        style={nodeStyles.input}
        placeholder="Node name"
      />
      
      <div style={{ marginTop: '12px' }}>
        {children}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          ...nodeStyles.handle,
          top: '50%',
          right: '-6px'
        }}
      />
    </div>
  );
};

export default BaseNode;
