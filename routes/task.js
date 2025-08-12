import express from "express";
import { getUserTasks, addUserTask } from "../controllers/taskController.js";
import { authenticateToken } from "../auth/authMiddleware.js";

const taskRoutes = express.Router();

taskRoutes.get("/", authenticateToken, getUserTasks);
taskRoutes.post("/addTask", authenticateToken, addUserTask);
export default taskRoutes;
