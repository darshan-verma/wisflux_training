import fs from "fs";
import path from "path";
import { user } from "../models/user";

const filePath = path.join(__dirname, "..", "data", "users.json");

export const readUsers = (): user[] => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

export const writeUsers = (users: user[]) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};
