import Team from "../models/team.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

// Retrieve all teams
const getTeams = async (req, res, next) => {
  try {
    const teams = await Team.find();
    return res
      .status(200)
      .json(new ApiResponse(200, teams, "Teams Fetched Successfully"));
  } catch (error) {
    next(error);
  }
};

// Retrieve a specific team by ID
const getTeamById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id);
    if (!team) {
      return next(new ApiError(404, "Team Not Found"));
    }
    return res
      .status(200)
      .json(new ApiResponse(200, team, "Team Fetched Successfully"));
  } catch (error) {
    next(error);
  }
};

// Create a new team
const createTeam = async (req, res, next) => {
  try {
    const { teamName, members } = req.body;
    const newTeam = new Team({ teamName, members });
    await newTeam.save();
    return res
      .status(201)
      .json(new ApiResponse(201, newTeam, "Team Created Successfully"));
  } catch (error) {
    next(error);
  }
};

export { getTeams, getTeamById, createTeam };
