import React from 'react';
import BaseNode from './baseNode';
import { Handle, Position } from 'reactflow';

// Node configuration types
const HANDLE_TYPES = {
  SOURCE: 'source',
  TARGET: 'target'
};

const HANDLE_POSITIONS = {
  LEFT: Position.Left,
  RIGHT: Position.Right,
  TOP: Position.Top,
  BOTTOM: Position.Bottom
};

// Create a node with the given configuration
export const createNode = ({
  type,
  defaultData = {},
  defaultStyle = {},
  staticHandles = [],
  dynamicHandleConfig = null,
  content = null,
  customControls = null,
  resizeConfig = null
}) => {
  const NodeComponent = ({ id, data }) => {
    const [nodeData, setNodeData] = React.useState({
      ...defaultData,
      ...data
    });
    
    const [dynamicHandles, setDynamicHandles] = React.useState([]);
    const [dimensions, setDimensions] = React.useState({
      width: defaultStyle.width || 200,
      height: defaultStyle.height || 150
    });

    // Handle dynamic handle generation if configured
    React.useEffect(() => {
      if (dynamicHandleConfig) {
        const { extractVariables, handleStyle = {} } = dynamicHandleConfig;
        const variables = extractVariables(nodeData);
        
        const handles = variables.map((variable, index) => ({
          id: variable.id,
          variableName: variable.name,
          top: variable.position || (50 + index * 20),
          style: handleStyle
        }));
        
        setDynamicHandles(handles);
      }
    }, [nodeData, dynamicHandleConfig]);

    // Handle resizing if configured
    React.useEffect(() => {
      if (resizeConfig) {
        const { calculateDimensions } = resizeConfig;
        const newDimensions = calculateDimensions(nodeData);
        setDimensions(newDimensions);
      }
    }, [nodeData, resizeConfig]);

    const handleDataChange = (key, value) => {
      setNodeData(prev => ({
        ...prev,
        [key]: value
      }));
    };

    const renderContent = () => {
      if (content) {
        return content({
          data: nodeData,
          onDataChange: handleDataChange
        });
      }
      return null;
    };

    const renderCustomControls = () => {
      if (customControls) {
        return customControls({
          data: nodeData,
          onDataChange: handleDataChange
        });
      }
      return null;
    };

    return (
      <BaseNode
        id={id}
        data={nodeData}
        type={type}
        style={{
          ...defaultStyle,
          ...dimensions
        }}
        dynamicHandles={dynamicHandles}
      >
        {renderContent()}
        {renderCustomControls()}
        
        {/* Render static handles */}
        {staticHandles.map((handle, index) => (
          <Handle
            key={`${handle.type}-${handle.position}-${index}`}
            type={handle.type}
            position={handle.position}
            id={handle.id}
            style={handle.style}
          />
        ))}
      </BaseNode>
    );
  };

  return NodeComponent;
};

// Helper functions for common node configurations
export const createTextNode = () => {
  return createNode({
    type: 'Text',
    defaultData: { text: '{{input}}' },
    dynamicHandleConfig: {
      extractVariables: (data) => {
        const matches = data.text.match(/{{(.*?)}}/g) || [];
        return matches.map(match => ({
          id: match.slice(2, -2).trim(),
          name: match.slice(2, -2).trim()
        }));
      }
    },
    resizeConfig: {
      calculateDimensions: (data) => {
        const length = data.text.length;
        const lines = data.text.split('\n').length;
        return {
          width: Math.max(200, length * 7),
          height: Math.max(150, 120 + lines * 10)
        };
      }
    },
    content: ({ data, onDataChange }) => (
      <label>
        Text:
        <textarea
          value={data.text}
          onChange={(e) => onDataChange('text', e.target.value)}
          style={{ width: '100%', marginTop: 4 }}
        />
      </label>
    )
  });
};

export const createLLMNode = () => {
  return createNode({
    type: 'LLM',
    staticHandles: [
      {
        type: HANDLE_TYPES.TARGET,
        position: HANDLE_POSITIONS.LEFT,
        id: 'system',
        style: { top: '33%' }
      },
      {
        type: HANDLE_TYPES.TARGET,
        position: HANDLE_POSITIONS.LEFT,
        id: 'prompt',
        style: { top: '66%' }
      },
      {
        type: HANDLE_TYPES.SOURCE,
        position: HANDLE_POSITIONS.RIGHT,
        id: 'response'
      }
    ],
    content: () => (
      <div>
        <div>LLM</div>
        <div>This is a LLM node.</div>
      </div>
    )
  });
};

export const createInputNode = () => {
  return createNode({
    type: 'Input',
    defaultData: { inputType: 'Text' },
    staticHandles: [
      {
        type: HANDLE_TYPES.SOURCE,
        position: HANDLE_POSITIONS.RIGHT,
        id: 'value'
      }
    ],
    customControls: ({ data, onDataChange }) => (
      <label>
        Type:
        <select
          value={data.inputType}
          onChange={(e) => onDataChange('inputType', e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    )
  });
};

export const createOutputNode = () => {
  return createNode({
    type: 'Output',
    defaultData: { outputType: 'Text' },
    staticHandles: [
      {
        type: HANDLE_TYPES.TARGET,
        position: HANDLE_POSITIONS.LEFT,
        id: 'input'
      }
    ],
    customControls: ({ data, onDataChange }) => (
      <label>
        Type:
        <select
          value={data.outputType}
          onChange={(e) => onDataChange('outputType', e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    )
  });
}; 