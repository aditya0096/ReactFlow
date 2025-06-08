import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';
import { nodeStyles } from '../styles/nodeStyles';

export const APINode = ({ id, data }) => {
  const [method, setMethod] = useState(data?.method || 'GET');
  const [url, setUrl] = useState(data?.url || '');
  const [headers, setHeaders] = useState(data?.headers || '');

  return (
    <BaseNode 
      id={id} 
      data={data} 
      type="API"
      style={{
        ...nodeStyles.baseNode,
        borderColor: nodeStyles.colors.api
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.api }}
      />
      <div style={{ marginBottom: '8px' }}>
        <select 
          value={method} 
          onChange={(e) => setMethod(e.target.value)}
          style={nodeStyles.select}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="API URL"
        style={nodeStyles.input}
      />
      <textarea
        value={headers}
        onChange={(e) => setHeaders(e.target.value)}
        placeholder="Headers (JSON)"
        style={{ ...nodeStyles.input, height: '60px' }}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.api }}
      />
    </BaseNode>
  );
}; 