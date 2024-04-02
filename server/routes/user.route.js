import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";

const router = Router();

// GET /api/users: Retrieve all users with pagination support.
router.get("/", getUsers);

// GET /api/users/:id: Retrieve a specific user by ID.
router.get("/:id", getUserById);

// POST /api/users: Create a new user.
router.post("/", createUser);

// PUT /api/users/:id: Update an existing user.
router.put("/:id", updateUser);

// DELETE /api/users/:id: Delete user by ID
router.delete("/:id", deleteUser);

export default router;
