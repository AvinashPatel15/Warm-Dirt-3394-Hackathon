import { Heading, Image } from "@chakra-ui/react";
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import image from "../../assets/images/bg_leaderboard.jpg"
import Navbar from "../../Components/Navbar";


const GameWon = () => {

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/leaderboard");
    }, 300000);

  }, [])
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",backgroundImage:`url(${image})`,backgroundSize:"cover" }}>
      <Navbar/>
      <Heading color={"white"}>You did it !</Heading>
      <Image h="600px" m="auto" src="https://gifdb.com/images/high/congratulations-friends-cast-5ty24i2kox4j5mrt.gif" alt="congratulation" />
    </div>
  );
};

export default GameWon;
