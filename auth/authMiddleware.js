// authMiddleware.js
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Missing token" }); // Check if token is present

  const token = authHeader.split(" ")[1]; // Bearer <token>
  try {
    const decoded = jwt.verify(token, JWT_SECRET); // Check if token is valid
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
};
