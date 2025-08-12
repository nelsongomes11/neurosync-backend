import Task from "../db/models/task.js";

export const getUserTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { user_id: req.userId },

      attributes: [
        "id",
        "title",
        "description",
        "due_date",
        "tag",
        "completed",
        "reminder_sent",
      ],
    });
    if (!tasks.length) return res.status(404).json({ error: "No tasks yet" });

    res.json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch tasks", details: error.message });
  }
};

export const addUserTask = async (req, res) => {
  try {
    const { title, description, due_date, tag } = req.body;

    if (!title || !due_date)
      return res.status(400).json({ error: "There's parameters missing" });

    const newTask = await Task.create({
      title,
      description,
      due_date,
      tag,
      completed: false,
      reminder_sent: false,
      user_id: req.userId,
    });

    res.status(201).json({ message: "Task created", newTask });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create task", details: error.message });
  }
};
