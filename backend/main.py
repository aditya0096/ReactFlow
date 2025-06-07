from fastapi import FastAPI, Form
from typing import Dict, List, Any
import networkx as nx
from pydantic import BaseModel

app = FastAPI()

class PipelineData(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: PipelineData):
    # Create a directed graph
    G = nx.DiGraph()
    
    # Add nodes
    for node in pipeline.nodes:
        G.add_node(node['id'])
    
    # Add edges
    for edge in pipeline.edges:
        G.add_edge(edge['source'], edge['target'])
    
    # Calculate metrics
    num_nodes = len(G.nodes)
    num_edges = len(G.edges)
    
    # Check if the graph is a DAG
    try:
        # If topological sort succeeds, it's a DAG
        list(nx.topological_sort(G))
        is_dag = True
    except nx.NetworkXUnfeasible:
        is_dag = False
    
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }
