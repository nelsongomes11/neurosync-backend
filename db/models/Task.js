import { DataTypes } from "sequelize";
import sequelize from "../index.js";

const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.STRING,
    tag: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    due_date: DataTypes.DATE,
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    reminder_sent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "tasks",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Task;
