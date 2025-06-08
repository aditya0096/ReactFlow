import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';
import { nodeStyles } from '../styles/nodeStyles';

export const VisualizationNode = ({ id, data }) => {
  const [chartType, setChartType] = useState(data?.chartType || 'bar');
  const [config, setConfig] = useState(data?.config || '');

  return (
    <BaseNode 
      id={id} 
      data={data} 
      type="Visualization"
      style={{
        ...nodeStyles.baseNode,
        borderColor: nodeStyles.colors.visualization
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.visualization }}
      />
      <div style={{ marginBottom: '8px' }}>
        <select 
          value={chartType} 
          onChange={(e) => setChartType(e.target.value)}
          style={nodeStyles.select}
        >
          <option value="bar">Bar Chart</option>
          <option value="line">Line Chart</option>
          <option value="pie">Pie Chart</option>
          <option value="scatter">Scatter Plot</option>
          <option value="table">Table</option>
        </select>
      </div>
      <textarea
        value={config}
        onChange={(e) => setConfig(e.target.value)}
        placeholder="Chart configuration"
        style={{ ...nodeStyles.input, height: '60px' }}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.visualization }}
      />
    </BaseNode>
  );
}; 