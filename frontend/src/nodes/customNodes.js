import { createNode, HANDLE_TYPES, HANDLE_POSITIONS } from './nodeFactory';

// 1. Code Node - A node that can execute code with multiple inputs and outputs
export const CodeNode = createNode({
  type: 'Code',
  defaultData: {
    code: '// Write your code here\nconst result = input1 + input2;\nreturn result;',
    language: 'javascript'
  },
  staticHandles: [
    {
      type: HANDLE_TYPES.TARGET,
      position: HANDLE_POSITIONS.LEFT,
      id: 'input1',
      style: { top: '25%' }
    },
    {
      type: HANDLE_TYPES.TARGET,
      position: HANDLE_POSITIONS.LEFT,
      id: 'input2',
      style: { top: '75%' }
    },
    {
      type: HANDLE_TYPES.SOURCE,
      position: HANDLE_POSITIONS.RIGHT,
      id: 'output',
      style: { top: '50%' }
    }
  ],
  resizeConfig: {
    calculateDimensions: (data) => ({
      width: Math.max(300, data.code.length * 8),
      height: Math.max(200, data.code.split('\n').length * 20 + 100)
    })
  },
  content: ({ data, onDataChange }) => (
    <div>
      <label>
        Language:
        <select
          value={data.language}
          onChange={(e) => onDataChange('language', e.target.value)}
          style={{ marginBottom: 8 }}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
      </label>
      <textarea
        value={data.code}
        onChange={(e) => onDataChange('code', e.target.value)}
        style={{
          width: '100%',
          height: '150px',
          fontFamily: 'monospace',
          marginTop: 8
        }}
      />
    </div>
  )
});

// 2. Data Transform Node - A node that can transform data with a visual interface
export const TransformNode = createNode({
  type: 'Transform',
  defaultData: {
    transformType: 'map',
    operation: 'uppercase'
  },
  staticHandles: [
    {
      type: HANDLE_TYPES.TARGET,
      position: HANDLE_POSITIONS.LEFT,
      id: 'input'
    },
    {
      type: HANDLE_TYPES.SOURCE,
      position: HANDLE_POSITIONS.RIGHT,
      id: 'output'
    }
  ],
  customControls: ({ data, onDataChange }) => (
    <div>
      <label>
        Transform Type:
        <select
          value={data.transformType}
          onChange={(e) => onDataChange('transformType', e.target.value)}
          style={{ marginBottom: 8 }}
        >
          <option value="map">Map</option>
          <option value="filter">Filter</option>
          <option value="reduce">Reduce</option>
        </select>
      </label>
      <label>
        Operation:
        <select
          value={data.operation}
          onChange={(e) => onDataChange('operation', e.target.value)}
        >
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="reverse">Reverse</option>
        </select>
      </label>
    </div>
  )
});

// 3. Conditional Node - A node that routes data based on conditions
export const ConditionalNode = createNode({
  type: 'Conditional',
  defaultData: {
    condition: 'value > 0',
    trueLabel: 'Positive',
    falseLabel: 'Negative'
  },
  staticHandles: [
    {
      type: HANDLE_TYPES.TARGET,
      position: HANDLE_POSITIONS.LEFT,
      id: 'input'
    },
    {
      type: HANDLE_TYPES.SOURCE,
      position: HANDLE_POSITIONS.RIGHT,
      id: 'true',
      style: { top: '25%' }
    },
    {
      type: HANDLE_TYPES.SOURCE,
      position: HANDLE_POSITIONS.RIGHT,
      id: 'false',
      style: { top: '75%' }
    }
  ],
  content: ({ data, onDataChange }) => (
    <div>
      <label>
        Condition:
        <input
          type="text"
          value={data.condition}
          onChange={(e) => onDataChange('condition', e.target.value)}
          style={{ width: '100%', marginBottom: 8 }}
        />
      </label>
      <div style={{ display: 'flex', gap: 8 }}>
        <label>
          True Label:
          <input
            type="text"
            value={data.trueLabel}
            onChange={(e) => onDataChange('trueLabel', e.target.value)}
          />
        </label>
        <label>
          False Label:
          <input
            type="text"
            value={data.falseLabel}
            onChange={(e) => onDataChange('falseLabel', e.target.value)}
          />
        </label>
      </div>
    </div>
  )
});

// 4. Template Node - A node that uses dynamic handles based on template variables
export const TemplateNode = createNode({
  type: 'Template',
  defaultData: {
    template: 'Hello {{name}}! Your score is {{score}}.',
    variables: {}
  },
  dynamicHandleConfig: {
    extractVariables: (data) => {
      const matches = data.template.match(/{{(.*?)}}/g) || [];
      return matches.map(match => ({
        id: match.slice(2, -2).trim(),
        name: match.slice(2, -2).trim()
      }));
    },
    handleStyle: { background: '#ff6b6b' }
  },
  resizeConfig: {
    calculateDimensions: (data) => ({
      width: Math.max(250, data.template.length * 8),
      height: Math.max(150, data.template.split('\n').length * 20 + 80)
    })
  },
  content: ({ data, onDataChange }) => (
    <div>
      <label>
        Template:
        <textarea
          value={data.template}
          onChange={(e) => onDataChange('template', e.target.value)}
          style={{ width: '100%', height: '100px', marginTop: 4 }}
        />
      </label>
    </div>
  )
});

// 5. Batch Node - A node that can process multiple inputs in parallel
export const BatchNode = createNode({
  type: 'Batch',
  defaultData: {
    batchSize: 2,
    operation: 'concat'
  },
  staticHandles: [
    {
      type: HANDLE_TYPES.TARGET,
      position: HANDLE_POSITIONS.LEFT,
      id: 'input1',
      style: { top: '20%' }
    },
    {
      type: HANDLE_TYPES.TARGET,
      position: HANDLE_POSITIONS.LEFT,
      id: 'input2',
      style: { top: '40%' }
    },
    {
      type: HANDLE_TYPES.TARGET,
      position: HANDLE_POSITIONS.LEFT,
      id: 'input3',
      style: { top: '60%' }
    },
    {
      type: HANDLE_TYPES.TARGET,
      position: HANDLE_POSITIONS.LEFT,
      id: 'input4',
      style: { top: '80%' }
    },
    {
      type: HANDLE_TYPES.SOURCE,
      position: HANDLE_POSITIONS.RIGHT,
      id: 'output'
    }
  ],
  customControls: ({ data, onDataChange }) => (
    <div>
      <label>
        Batch Size:
        <input
          type="number"
          min="1"
          max="4"
          value={data.batchSize}
          onChange={(e) => onDataChange('batchSize', parseInt(e.target.value))}
          style={{ width: '60px', marginBottom: 8 }}
        />
      </label>
      <label>
        Operation:
        <select
          value={data.operation}
          onChange={(e) => onDataChange('operation', e.target.value)}
        >
          <option value="concat">Concatenate</option>
          <option value="sum">Sum</option>
          <option value="average">Average</option>
        </select>
      </label>
    </div>
  )
}); 