import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';
import { nodeStyles } from '../styles/nodeStyles';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || '');
  const [operator, setOperator] = useState(data?.operator || 'equals');

  return (
    <BaseNode 
      id={id} 
      data={data} 
      type="Filter"
      style={{
        ...nodeStyles.baseNode,
        borderColor: nodeStyles.colors.filter
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.filter }}
      />
      <div style={{ marginBottom: '8px' }}>
        <select 
          value={operator} 
          onChange={(e) => setOperator(e.target.value)}
          style={nodeStyles.select}
        >
          <option value="equals">Equals</option>
          <option value="contains">Contains</option>
          <option value="greater">Greater Than</option>
          <option value="less">Less Than</option>
          <option value="regex">Regex Match</option>
        </select>
      </div>
      <input
        type="text"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        placeholder="Filter condition"
        style={nodeStyles.input}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.filter }}
      />
    </BaseNode>
  );
}; 