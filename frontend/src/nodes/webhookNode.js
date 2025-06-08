import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';
import { nodeStyles } from '../styles/nodeStyles';

export const WebhookNode = ({ id, data }) => {
  const [method, setMethod] = useState(data?.method || 'POST');
  const [url, setUrl] = useState(data?.url || '');
  const [auth, setAuth] = useState(data?.auth || 'none');
  const [headers, setHeaders] = useState(data?.headers || '{}');

  return (
    <BaseNode 
      id={id} 
      data={data} 
      type="Webhook"
      style={{
        ...nodeStyles.baseNode,
        borderColor: nodeStyles.colors.webhook
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.webhook }}
      />
      
      <div style={{ marginBottom: '12px' }}>
        <label style={nodeStyles.label}>Method</label>
        <select 
          value={method} 
          onChange={(e) => setMethod(e.target.value)}
          style={nodeStyles.select}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={nodeStyles.label}>URL</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Webhook URL"
          style={nodeStyles.input}
        />
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={nodeStyles.label}>Authentication</label>
        <select 
          value={auth} 
          onChange={(e) => setAuth(e.target.value)}
          style={nodeStyles.select}
        >
          <option value="none">None</option>
          <option value="basic">Basic Auth</option>
          <option value="bearer">Bearer Token</option>
          <option value="apiKey">API Key</option>
          <option value="oauth2">OAuth 2.0</option>
        </select>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={nodeStyles.label}>Headers</label>
        <textarea
          value={headers}
          onChange={(e) => setHeaders(e.target.value)}
          placeholder="Additional headers (JSON)"
          style={{ ...nodeStyles.input, height: '60px', fontFamily: 'monospace' }}
        />
      </div>

      <Handle
        type="source"
        position={Position.Right}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.webhook }}
      />
    </BaseNode>
  );
}; 