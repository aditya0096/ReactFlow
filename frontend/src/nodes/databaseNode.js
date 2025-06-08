import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';
import { nodeStyles } from '../styles/nodeStyles';

export const DatabaseNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'query');
  const [dbType, setDbType] = useState(data?.dbType || 'postgres');
  const [query, setQuery] = useState(data?.query || '');

  return (
    <BaseNode 
      id={id} 
      data={data} 
      type="Database"
      style={{
        ...nodeStyles.baseNode,
        borderColor: nodeStyles.colors.database
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.database }}
      />
      
      <div style={{ marginBottom: '12px' }}>
        <label style={nodeStyles.label}>Database Type</label>
        <select 
          value={dbType} 
          onChange={(e) => setDbType(e.target.value)}
          style={nodeStyles.select}
        >
          <option value="postgres">PostgreSQL</option>
          <option value="mysql">MySQL</option>
          <option value="mongodb">MongoDB</option>
          <option value="redis">Redis</option>
          <option value="elasticsearch">Elasticsearch</option>
        </select>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={nodeStyles.label}>Operation</label>
        <select 
          value={operation} 
          onChange={(e) => setOperation(e.target.value)}
          style={nodeStyles.select}
        >
          <option value="query">Query</option>
          <option value="insert">Insert</option>
          <option value="update">Update</option>
          <option value="delete">Delete</option>
          <option value="upsert">Upsert</option>
        </select>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={nodeStyles.label}>Query/Operation</label>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your query or operation"
          style={{ ...nodeStyles.input, height: '80px', fontFamily: 'monospace' }}
        />
      </div>

      <Handle
        type="source"
        position={Position.Right}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.database }}
      />
    </BaseNode>
  );
}; 