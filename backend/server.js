import express from "express";
import cors from "cors";
import pipelineRoutes from "./routes/pipeline.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/pipelines", pipelineRoutes);

app.listen(8000, () => {
  console.log("Backend running on http://localhost:8000");
});
