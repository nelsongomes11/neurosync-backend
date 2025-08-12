import express from "express";
import { getCurrentUser } from "../controllers/userController.js";
import { authenticateToken } from "../auth/authMiddleware.js";

const userRoutes = express.Router();

userRoutes.get("/me", authenticateToken, getCurrentUser);

export default userRoutes;
