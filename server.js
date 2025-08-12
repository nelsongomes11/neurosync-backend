import express from "express";
import sequelize from "./db/index.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import taskRoutes from "./routes/task.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to NeuroSync!");
});

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
