import express from "express";
import { signup, login } from "../auth/authController.js";

const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);

export default authRoutes;
