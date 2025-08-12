import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../db/models/User.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const signup = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10); // Encrypt password

    const newUser = await User.create({
      username,
      password_hash: hashed,
      email,
    }); // Create a new user on BD

    res.status(201).json({ message: "User created", id: newUser.id });
  } catch (error) {
    res.status(400).json({ error: "Signup failed", details: error.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } }); // Find the user on BD
    if (!user) return res.status(401).json({ error: "Invlid Credentials" });

    const checkPassword = await bcrypt.compare(password, user.password_hash); // Check if password matches

    if (!checkPassword)
      return res.status(401).json({ error: "Invalid Password" });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      // Return a new token that lasts 3 days for the user
      expiresIn: "3d",
    });

    res.json({ message: "Login Sucessful", token });
  } catch (error) {
    res.status(500).json({ error: "Login Failed", details: error.message });
  }
};
