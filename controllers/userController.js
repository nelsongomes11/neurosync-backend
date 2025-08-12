import User from "../db/models/User.js";

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId, {
      attributes: ["id", "username", "email", "allow_emails"],
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch current user", details: error.message });
  }
};
