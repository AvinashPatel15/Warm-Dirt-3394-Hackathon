import { Heading, Image } from "@chakra-ui/react";
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const GameWon = () => {

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/leaderboard");
    }, 3000);

  }, [])
  return (
    <div style={{ marginTop: "100px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Heading>You did it !</Heading>
      <Image h="600px" m="auto" src="https://gifdb.com/images/high/congratulations-friends-cast-5ty24i2kox4j5mrt.gif" alt="congratulation" />
    </div>
  );
};

export default GameWon;
