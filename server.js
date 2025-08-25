import express from "express";
import sequelize from "./db/index.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import taskRoutes from "./routes/task.js";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // frontend origin
    credentials: true, // allow cookies to be sent
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to NeuroSync!");
});

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("Running in:", process.env.NODE_ENV);
});
