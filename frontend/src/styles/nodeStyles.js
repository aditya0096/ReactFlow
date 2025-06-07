// Node styles
export const nodeStyles = {
  base: {
    padding: '12px',
    borderRadius: '8px',
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    fontFamily: 'Inter, system-ui, sans-serif',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderColor: '#cbd5e1'
    }
  },
  
  header: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '8px',
    paddingBottom: '8px',
    borderBottom: '1px solid #e2e8f0'
  },
  
  input: {
    width: '100%',
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    color: '#1e293b',
    background: '#f8fafc',
    transition: 'all 0.2s ease-in-out',
    '&:focus': {
      outline: 'none',
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.1)'
    }
  },
  
  select: {
    width: '100%',
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    color: '#1e293b',
    background: '#f8fafc',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    '&:focus': {
      outline: 'none',
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.1)'
    }
  },
  
  textarea: {
    width: '100%',
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    color: '#1e293b',
    background: '#f8fafc',
    resize: 'vertical',
    minHeight: '100px',
    fontFamily: 'monospace',
    transition: 'all 0.2s ease-in-out',
    '&:focus': {
      outline: 'none',
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.1)'
    }
  },
  
  label: {
    display: 'block',
    fontSize: '12px',
    fontWeight: '500',
    color: '#64748b',
    marginBottom: '4px'
  },
  
  handle: {
    width: '12px',
    height: '12px',
    background: '#3b82f6',
    border: '2px solid #ffffff',
    borderRadius: '50%',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      background: '#2563eb',
      transform: 'scale(1.1)'
    }
  },
  
  // Node type specific colors
  nodeTypeColors: {
    Text: '#3b82f6',
    Code: '#8b5cf6',
    Transform: '#10b981',
    Conditional: '#f59e0b',
    Template: '#ef4444',
    Batch: '#6366f1',
    Input: '#14b8a6',
    Output: '#f43f5e',
    LLM: '#ec4899'
  }
};

// Helper function to get node type color
export const getNodeTypeColor = (type) => {
  return nodeStyles.nodeTypeColors[type] || '#64748b';
};

// Helper function to apply styles to a node
export const applyNodeStyles = (type, customStyles = {}) => {
  const typeColor = getNodeTypeColor(type);
  return {
    ...nodeStyles.base,
    borderColor: typeColor,
    ...customStyles
  };
}; 