import express from "express";
const router = express.Router();

function isDAG(nodes, edges) {
  const graph = {};
  nodes.forEach((n) => (graph[n.id] = []));
  edges.forEach((e) => graph[e.source]?.push(e.target));

  const visited = new Set();
  const stack = new Set();

  function dfs(node) {
    if (stack.has(node)) return false;
    if (visited.has(node)) return true;

    stack.add(node);
    for (const n of graph[node]) {
      if (!dfs(n)) return false;
    }
    stack.delete(node);
    visited.add(node);
    return true;
  }

  return Object.keys(graph).every(dfs);
}

router.post("/parse", (req, res) => {
  const { nodes = [], edges = [] } = req.body;
  res.json({
    num_nodes: nodes.length,
    num_edges: edges.length,
    is_dag: isDAG(nodes, edges),
  });
});

export default router;
