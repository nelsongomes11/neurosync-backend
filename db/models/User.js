import { DataTypes } from "sequelize";
import sequelize from "../index.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    allow_emails: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    tableName: "users",
    timestamps: true,
    createdAt: "created_at", // map to MySql Column
    updatedAt: "updated_at", // map to MySql Column
  }
);

export default User;
