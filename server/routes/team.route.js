import { Router } from "express";
import { createTeam, getTeamById, getTeams } from "../controllers/team.controller.js";

const router = Router();

router.get("/", getTeams);
router.get("/:id", getTeamById);
router.post("/", createTeam);


export default router;