// authMiddleware.js
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;

export const authenticateToken = (req, res, next) => {
  // Get JWT from cookies
  const token = req.cookies?.token;
  if (!token) return res.status(401).json({ error: "Missing token" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId; // Attach userId for later use
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
};
