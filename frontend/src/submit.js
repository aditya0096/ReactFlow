// submit.js
import React from 'react';
import axios from 'axios';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [result, setResult] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post('http://localhost:8000/pipelines/parse', {
        nodes,
        edges
      });

      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to validate pipeline');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button
        id="submit-button"
        type="submit"
        disabled={isLoading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          opacity: isLoading ? 0.7 : 1,
          transition: 'all 0.2s ease-in-out'
        }}
        onClick={handleSubmit}
      >
        {isLoading ? 'Validating...' : 'Validate Pipeline'}
      </button>

      {error && (
        <div style={{
          marginTop: '20px',
          padding: '12px',
          backgroundColor: '#fee2e2',
          border: '1px solid #ef4444',
          borderRadius: '6px',
          color: '#991b1b'
        }}>
          {error}
        </div>
      )}

      {result && (
        <div style={{
          marginTop: '20px',
          padding: '16px',
          backgroundColor: '#f0fdf4',
          border: '1px solid #22c55e',
          borderRadius: '6px',
          color: '#166534'
        }}>
          <h3 style={{ margin: '0 0 12px 0' }}>Pipeline Validation Results</h3>
          <div style={{ display: 'grid', gap: '8px', textAlign: 'left' }}>
            <div>
              <strong>Number of Nodes:</strong> {result.num_nodes}
            </div>
            <div>
              <strong>Number of Edges:</strong> {result.num_edges}
            </div>
            <div>
              <strong>Is DAG:</strong> {result.is_dag ? '✅ Yes' : '❌ No'}
            </div>
          </div>
          {!result.is_dag && (
            <div style={{ marginTop: '12px', color: '#991b1b' }}>
              ⚠️ Warning: This pipeline contains cycles and is not a valid DAG.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
