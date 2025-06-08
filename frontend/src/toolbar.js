// toolbar.js

import { DraggableNode } from './draggableNode';
import { nodeStyles } from './styles/nodeStyles';

const nodeCategories = {
    'Data Sources': [
        { type: 'customInput', label: 'Input' },
        { type: 'database', label: 'Database' }
    ],
    'Processing': [
        { type: 'transform', label: 'Transform' },
        { type: 'condition', label: 'Condition' },
        { type: 'llm', label: 'LLM' },
        { type: 'filterNode', label: 'Filter' },
        { type: 'merge', label: 'Merge' }
    ],
    'Output': [
        { type: 'customOutput', label: 'Output' },
        { type: 'visualization', label: 'Visualization' },
        { type: 'text', label: 'Text' },
        { type: 'api', label: 'API' }
    ]
};

export const PipelineToolbar = () => {
    return (
        <div style={{
            padding: '16px',
            background: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
            {Object.entries(nodeCategories).map(([category, nodes]) => (
                <div key={category} style={{ marginBottom: '16px' }}>
                    <h3 style={{
                        margin: '0 0 8px 0',
                        color: '#1e293b',
                        fontSize: '12px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                    }}>
                        {category}
                    </h3>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px'
                    }}>
                        {nodes.map(({ type, label }) => (
                            <DraggableNode
                                key={type}
                                type={type}
                                label={label}
                                color={nodeStyles.colors[type] || '#64748b'}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
