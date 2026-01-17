import React, { useCallback } from "react";
import ReactFlow, { addEdge, useNodesState, useEdgesState } from "reactflow";
import "reactflow/dist/style.css";

import InputNode from "./nodes/InputNode";
import OutputNode from "./nodes/OutputNode";
import TextNode from "./nodes/TextNode";
import LLMNode from "./nodes/LLMNode";
import MathNode from "./nodes/MathNode";
import ApiNode from "./nodes/ApiNode";
import DelayNode from "./nodes/DelayNode";
import ConditionalNode from "./nodes/ConditionalNode";
import LoggerNode from "./nodes/LoggerNode";

import { submitPipeline } from "./submit";

const nodeTypes = {
  input: InputNode,
  output: OutputNode,
  text: TextNode,
  llm: LLMNode,
  math: MathNode,
  api: ApiNode,
  delay: DelayNode,
  conditional: ConditionalNode,
  logger: LoggerNode,
};

export default function App() {
  const [nodes, , onNodesChange] = useNodesState([
    { id: "1", type: "input", position: { x: 50, y: 150 }, data: {} },
    { id: "2", type: "text", position: { x: 250, y: 150 }, data: {} },
    { id: "3", type: "output", position: { x: 450, y: 150 }, data: {} },
  ]);

  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  return (
    <div style={{ height: "100vh" }}>
      <button onClick={() => submitPipeline(nodes, edges)}>
        Submit Pipeline
      </button>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />
    </div>
  );
}
