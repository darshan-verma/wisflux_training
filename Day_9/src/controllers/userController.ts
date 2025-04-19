import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { user } from "../models/user";

// Path to the JSON file
const filePath = path.join(__dirname, "../data/users.json");

// Utility to read users from the file
const readUsersFromFile = (): user[] => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data) as user[];
  } catch (error) {
    return [];
  }
};

// Utility to write users to the file
const writeUsersToFile = (users: user[]) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf-8");
};

// GET – All Users
export const getAllUsers = (req: Request, res: Response) => {
  const users = readUsersFromFile();
  res.json(users);
};

// GET – User by Email
export const getUserByEmail = (req: Request, res: Response) => {
  const { email } = req.params;
  const users = readUsersFromFile();
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
};

// POST – Create a New User
export const createUser = (req: Request, res: Response) => {
  const { name, age, email, gender } = req.body;

  if (!name || !age || !email || !gender) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const users = readUsersFromFile();

  const emailExists = users.some((u) => u.email === email);
  if (emailExists) {
    return res
      .status(409)
      .json({ error: "User with this email already exists" });
  }

  const newUser: user = {
    name,
    age: Number(age),
    email,
    gender,
  };

  users.push(newUser);
  writeUsersToFile(users);

  res.status(201).json({ message: "User created", user: newUser });
};

// PUT – Update User by Email
export const updateUser = (req: Request, res: Response) => {
  const { email } = req.params;
  const { name, age, gender } = req.body;

  const users = readUsersFromFile();
  const userIndex = users.findIndex((u) => u.email === email);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    age: age ? Number(age) : users[userIndex].age,
    gender: gender || users[userIndex].gender,
  };

  writeUsersToFile(users);
  res.json({ message: "User updated", user: users[userIndex] });
};

// DELETE – User by Email
export const deleteUser = (req: Request, res: Response) => {
  const { email } = req.params;

  const users = readUsersFromFile();
  const newUsers = users.filter((u) => u.email !== email);

  if (users.length === newUsers.length) {
    return res.status(404).json({ error: "User not found" });
  }

  writeUsersToFile(newUsers);
  res.json({ message: "User deleted" });
};
