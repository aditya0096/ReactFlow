import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';
import { nodeStyles } from '../styles/nodeStyles';

export const TemplateNode = ({ id, data }) => {
  const [templateType, setTemplateType] = useState(data?.templateType || 'email');
  const [subject, setSubject] = useState(data?.subject || '');
  const [content, setContent] = useState(data?.content || '');

  return (
    <BaseNode 
      id={id} 
      data={data} 
      type="Template"
      style={{
        ...nodeStyles.baseNode,
        borderColor: nodeStyles.colors.template
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.template }}
      />
      
      <div style={{ marginBottom: '12px' }}>
        <label style={nodeStyles.label}>Template Type</label>
        <select 
          value={templateType} 
          onChange={(e) => setTemplateType(e.target.value)}
          style={nodeStyles.select}
        >
          <option value="email">Email</option>
          <option value="document">Document</option>
          <option value="message">Message</option>
          <option value="report">Report</option>
        </select>
      </div>

      {templateType === 'email' && (
        <div style={{ marginBottom: '12px' }}>
          <label style={nodeStyles.label}>Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Email subject"
            style={nodeStyles.input}
          />
        </div>
      )}

      <div style={{ marginBottom: '12px' }}>
        <label style={nodeStyles.label}>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={`Enter ${templateType} template`}
          style={{ ...nodeStyles.input, height: '100px' }}
        />
        <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>
          Use {{variable}} for dynamic content
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.template }}
      />
    </BaseNode>
  );
}; 