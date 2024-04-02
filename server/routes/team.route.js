import { Router } from "express";
import { createTeam, getTeamById, getTeams } from "../controllers/team.controller.js";

const router = Router();

// Route to retrieve all teams
router.get("/", getTeams);

// Route to retrieve a specific team by ID
router.get("/:id", getTeamById);

// Route to create a new team
router.post("/", createTeam);

export default router;
