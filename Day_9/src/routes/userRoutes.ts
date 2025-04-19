import express from "express";
import {
  getAllUsers,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:email", getUserByEmail);
router.post("/", createUser);
router.put("/:email", updateUser);
router.delete("/:email", deleteUser);

export default router;
