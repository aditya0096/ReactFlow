import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';
import { nodeStyles } from '../styles/nodeStyles';

export const DataProcessingNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'transform');
  const [config, setConfig] = useState(data?.config || '');

  return (
    <BaseNode 
      id={id} 
      data={data} 
      type="Data Processing"
      style={{
        ...nodeStyles.baseNode,
        borderColor: nodeStyles.colors.dataProcessing
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.dataProcessing }}
      />
      <div style={{ marginBottom: '8px' }}>
        <select 
          value={operation} 
          onChange={(e) => setOperation(e.target.value)}
          style={nodeStyles.select}
        >
          <option value="transform">Transform</option>
          <option value="aggregate">Aggregate</option>
          <option value="sort">Sort</option>
          <option value="group">Group</option>
        </select>
      </div>
      <textarea
        value={config}
        onChange={(e) => setConfig(e.target.value)}
        placeholder="Configuration (JSON)"
        style={{ ...nodeStyles.input, height: '60px' }}
      />
      {/* <Handle
        type="source"
        position={Position.Right}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.dataProcessing }}
      /> */}
    </BaseNode>
  );
}; 