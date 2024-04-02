import React, { useEffect, useState } from "react";
import TeamForm from "../components/TeamForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Team = () => {
  const [showTeamForm, setShowTeamForm] = useState(false);
  const [teams, setTeams] = useState([]);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  const getTeams = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/api/team`);
      setTeams(data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getTeams();
  }, [reload]);
  return (
    <>
      <div className="flex flex-col gap-5 px-2 md:px-10 my-5">
        <div className=" flex justify-between items-center ">
          <p className="text-2xl">All Teams</p>
          <button
            className="bg-blue-500 px-2 py-1 text-md rounded-md text-white"
            onClick={() => setShowTeamForm(true)}
          >
            Create Team
          </button>
        </div>
        <div className="flex justify-center gap-5 flex-wrap items-center">
          {teams.map((team) => (
            <div
              key={team._id}
              className="min-w-[200px] min-h-[200px] w-fit flex justify-center items-center flex-col gap-2 shadow-md rounded-md"
            >
              <p className="text-3xl font-bold">{team.teamName}</p>
              <p className="text-gray-500">{team.members.length} Members</p>
              <button
                className="px-2 pyx-1 bg-teal-500 text-white font-semibold rounded-sm"
                onClick={() =>
                  navigate(`/team/${team._id}`, { state: team._id })
                }
              >
                Details
              </button>
            </div>
          ))}
        </div>
      </div>
      {showTeamForm && (
        <TeamForm
          closeForm={() => setShowTeamForm(false)}
          setReload={setReload}
        />
      )}
    </>
  );
};

export default Team;
