<<<<<<< HEAD
import React, { useState } from "react";
import Card from "./card/card";
import { createBoard } from "../setup";
import { shuffleArray } from "../utils";
import { CardType } from "../setup";
import { Box, Grid } from "@chakra-ui/react";
import StopWatch from "./Stop-Watch/StopWatch";
import { useNavigate } from "react-router";
=======
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Card from './card/card';
import { createBoard } from '../setup';
import { shuffleArray } from '../utils';
import { CardType } from '../setup';
import { Box, Button, Grid, Text, useToast, WrapItem } from "@chakra-ui/react"

>>>>>>> b197f87909c5e053683ced104b65ba71c975377c

const Board = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [cards, setCards] = React.useState<CardType[]>(
    shuffleArray(createBoard())
  );
  const [gameWon, setGameWon] = React.useState(false);
  const [matchedPairs, setMatchedPairs] = React.useState(0);
<<<<<<< HEAD
  const [clickedCard, setClickedCard] = React.useState<undefined | CardType>(
    undefined
  );
=======
  const [clickedCard, setClickedCard] = React.useState<undefined | CardType>(undefined);
  const toast = useToast()
  let [timer, settimer] = useState(0)
  let startTime,endTime;
  // console.log(startTime)
  // setInterval(()=>{
  //   settimer(prev=>prev+1)
  // },1000)
>>>>>>> b197f87909c5e053683ced104b65ba71c975377c

  const navigate = useNavigate();

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
  };

  React.useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      //? console.log('Game Won!');
      setGameWon(true);
      setIsRunning(false);

      localStorage.setItem("GameTime", JSON.stringify(formatTime(elapsedTime)));
      navigate("/leaderboard");
    }
  }, [matchedPairs]);

  const handleCardClick = (currentClickedCard: CardType) => {
    //! Flip the card
    setCards((prev) =>
      prev.map((card) =>
        card.id === currentClickedCard.id
          ? { ...card, flipped: true, clickable: false }
          : card
      )
    );
    //! If this is the first card that is flipped
    //! just keep it flipped
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    //! If it's a match
    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs((prev) => prev + 1);
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, clickable: false }
            : card
        )
      );
      setClickedCard(undefined);
      return;
    }

    //! If it's not a matched pair, wait one second and flip them back
    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, 400);

    setClickedCard(undefined);
  };

  return (
<<<<<<< HEAD
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        paddingTop: "10px",
      }}
    >
      <Grid
=======
    <div style={{ display: "flex",flexDirection:"column", justifyContent: "center",alignItems:"center", marginTop: "85px" }}>
      {gameWon?"":<Text fontSize={{lg:'30px',md:'30px',sm:'30px',base:'20px'}} color='tomato' as="b" paddingBottom="5px"><i> Stay Focused</i></Text>}
      {gameWon?"":<Grid
>>>>>>> b197f87909c5e053683ced104b65ba71c975377c
        templateRows={{
          base: `repeat(4,70px)`,
          sm: `repeat(4,140px)`,
          md: `repeat(4,150px)`,
          lg: `repeat(4,150px)`,
        }}
        templateColumns={{
          base: `repeat(4,70px)`,
          sm: `repeat(4,120px)`,
          md: `repeat(4,150px)`,
          lg: `repeat(4,160px)`,
        }}
        gap={4}
      >
        {cards.map((card) => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
<<<<<<< HEAD
      </Grid>
      <Box marginTop={"20px"}>
        <StopWatch
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          elapsedTime={elapsedTime}
          setElapsedTime={setElapsedTime}
        />
      </Box>
=======
        
      </Grid>}
      {/* <Box marginTop={"20px"} >
        <Box display={"flex"} gap="20px">
          <WrapItem>
            <Button colorScheme='whatsapp' size='md' onClick={startGame}>START</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme='teal' size='md' onClick={restartGame}>Restart </Button>
          </WrapItem>
        </Box>
        <Box>
          {timer}
        </Box>
      </Box> */}
>>>>>>> b197f87909c5e053683ced104b65ba71c975377c
    </div>
  );
};

export default Board;
