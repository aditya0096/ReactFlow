import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';
import { nodeStyles } from '../styles/nodeStyles';

export const MergeNode = ({ id, data }) => {
  const [mergeType, setMergeType] = useState(data?.mergeType || 'concat');
  const [config, setConfig] = useState(data?.config || '');

  return (
    <BaseNode 
      id={id} 
      data={data} 
      type="Merge"
      style={{
        ...nodeStyles.baseNode,
        borderColor: nodeStyles.colors.merge
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        id="input1"
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.merge, top: '30%' }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="input2"
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.merge, top: '70%' }}
      />
      <div style={{ marginBottom: '8px' }}>
        <select 
          value={mergeType} 
          onChange={(e) => setMergeType(e.target.value)}
          style={nodeStyles.select}
        >
          <option value="concat">Concatenate</option>
          <option value="join">Join</option>
          <option value="union">Union</option>
          <option value="intersection">Intersection</option>
        </select>
      </div>
      <textarea
        value={config}
        onChange={(e) => setConfig(e.target.value)}
        placeholder="Merge configuration"
        style={{ ...nodeStyles.input, height: '60px' }}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.merge }}
      />
    </BaseNode>
  );
}; 