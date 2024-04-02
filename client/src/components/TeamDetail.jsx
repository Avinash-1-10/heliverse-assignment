import React, { useEffect, useState } from 'react';
import Members from './Members';
import { useLocation } from "react-router-dom";
import axios from 'axios';

const TeamDetail = () => {
  const location = useLocation();
  const teamID = location?.state?.teamId || location.pathname.split("/")[2];
  const [team, setTeam] = useState(null);

  const getTeam = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/api/team/${teamID}`);
      setTeam(data.data);
    } catch (error) {
      console.error("Error fetching team:", error);
    }
  };

  useEffect(() => {
    getTeam();
  }, [teamID]); // Adding teamID as a dependency to re-fetch team data when it changes

  return (
    <div className='p-5'>
      <p className='text-3xl text-center my-5'>{team?.teamName}</p>
      <div className='flex justify-center items-center gap-5 flex-wrap'>
      {
        (team?.members || []).map(member => (
          <Members key={member} member={member} /> // Added parentheses to properly return JSX elements
        ))
      }
      </div>
    </div>
  );
};

export default TeamDetail;
