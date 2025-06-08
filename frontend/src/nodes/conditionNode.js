import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';
import { nodeStyles } from '../styles/nodeStyles';

export const ConditionNode = ({ id, data }) => {
  const [conditionType, setConditionType] = useState(data?.conditionType || 'if');
  const [field, setField] = useState(data?.field || '');
  const [operator, setOperator] = useState(data?.operator || 'equals');
  const [value, setValue] = useState(data?.value || '');

  return (
    <BaseNode 
      id={id} 
      data={data} 
      type="Condition"
      style={{
        ...nodeStyles.baseNode,
        borderColor: nodeStyles.colors.condition
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.condition }}
      />
      
      <div style={{ marginBottom: '12px' }}>
        <label style={nodeStyles.label}>Condition Type</label>
        <select 
          value={conditionType} 
          onChange={(e) => setConditionType(e.target.value)}
          style={nodeStyles.select}
        >
          <option value="if">If</option>
          <option value="switch">Switch</option>
          <option value="filter">Filter</option>
        </select>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={nodeStyles.label}>Field</label>
        <input
          type="text"
          value={field}
          onChange={(e) => setField(e.target.value)}
          placeholder="Field to check"
          style={nodeStyles.input}
        />
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={nodeStyles.label}>Operator</label>
        <select 
          value={operator} 
          onChange={(e) => setOperator(e.target.value)}
          style={nodeStyles.select}
        >
          <option value="equals">Equals</option>
          <option value="notEquals">Not Equals</option>
          <option value="contains">Contains</option>
          <option value="greaterThan">Greater Than</option>
          <option value="lessThan">Less Than</option>
          <option value="between">Between</option>
          <option value="in">In List</option>
        </select>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={nodeStyles.label}>Value</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value to compare"
          style={nodeStyles.input}
        />
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id="true"
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.condition, top: '30%' }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="false"
        style={{ ...nodeStyles.handle, background: nodeStyles.colors.condition, top: '70%' }}
      />
    </BaseNode>
  );
}; 