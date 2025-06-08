export const nodeStyles = {
  // Node type colors - keeping only essential colors
  colors: {
    input: '#2E7D32',      // Deep Green
    output: '#1565C0',     // Deep Blue
    llm: '#6A1B9A',        // Deep Purple
    text: '#E65100',       // Deep Orange
    transform: '#00838F',  // Deep Teal
    condition: '#BF360C',  // Deep Red-Orange
    database: '#37474F'    // Blue Grey
  },
  
  // Node base styles - adjusted for better sizing
  baseNode: {
    padding: '12px',
    borderRadius: '6px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    border: '2px solid',
    width: '200px', // Fixed width
    background: '#ffffff',
    // transition: 'all 0.1s ease-in-out',
    // '&:hover': {
    //   boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
    // }
  },
  
  // Handle styles - smaller handles
  handle: {
    width: '8px',
    height: '8px',
    border: '2px solid #fff',
    boxShadow: '0 0 2px rgba(0,0,0,0.2)'
  },
  
  // Input styles - more compact
  input: {
    width: 'calc(100% - 16px)', // Account for padding
    padding: '6px',
    borderRadius: '4px',
    border: '1px solid #e0e0e0',
    marginBottom: '6px',
    fontSize: '12px',
    backgroundColor: '#fafafa',
    boxSizing: 'border-box'
  },
  
  // Select styles - more compact
  select: {
    width: 'calc(100% - 16px)', // Account for padding
    padding: '6px',
    borderRadius: '4px',
    border: '1px solid #e0e0e0',
    marginBottom: '6px',
    fontSize: '12px',
    backgroundColor: '#fafafa',
    boxSizing: 'border-box'
  },

  // Label styles
  label: {
    fontSize: '11px',
    color: '#666',
    marginBottom: '2px',
    display: 'block',
    paddingLeft: '2px'
  },

  // Textarea styles - more compact
  textarea: {
    width: 'calc(100% - 16px)', // Account for padding
    padding: '6px',
    borderRadius: '4px',
    border: '1px solid #e0e0e0',
    marginBottom: '6px',
    fontSize: '12px',
    backgroundColor: '#fafafa',
    boxSizing: 'border-box',
    resize: 'vertical',
    minHeight: '60px',
    maxHeight: '100px'
  }
}; 