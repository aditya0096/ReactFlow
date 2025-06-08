import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';
import { nodeStyles } from '../styles/nodeStyles';

export const TransformNode = ({ id, data }) => {
  const [transformType, setTransformType] = useState(data?.transformType || 'map');
  const [operation, setOperation] = useState(data?.operation || '');

  const transformOptions = {
    map: ['Uppercase', 'Lowercase', 'Trim', 'Replace'],
    aggregate: ['Sum', 'Average', 'Count', 'Min', 'Max'],
    format: ['Date Format', 'Number Format', 'Currency Format']
  };

  return (
    <BaseNode 
      id={id} 
      data={data} 
      type="Transform"
      style={{
        ...nodeStyles.baseNode,
        borderColor: nodeStyles.colors.transform
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.transform }}
      />
      
      <div style={{ marginBottom: '8px' }}>
        <label style={nodeStyles.label}>Transform Type</label>
        <select 
          value={transformType} 
          onChange={(e) => setTransformType(e.target.value)}
          style={nodeStyles.select}
        >
          <option value="map">Map</option>
          <option value="aggregate">Aggregate</option>
          <option value="format">Format</option>
        </select>
      </div>

      <div style={{ marginBottom: '8px' }}>
        <label style={nodeStyles.label}>Operation</label>
        <select 
          value={operation} 
          onChange={(e) => setOperation(e.target.value)}
          style={nodeStyles.select}
        >
          {transformOptions[transformType].map(opt => (
            <option key={opt} value={opt.toLowerCase()}>{opt}</option>
          ))}
        </select>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.transform }}
      />
    </BaseNode>
  );
}; 