import StopWatch from "./Stop-Watch/StopWatch";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import Card from "./card/card";
import { createBoard } from "../setup";
import { shuffleArray } from "../utils";
import { CardType } from "../setup";
import { Box, Grid, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";
import image from "../assets/images/gaming_intro.jpg"

const Board = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [cards, setCards] = React.useState<CardType[]>(
    shuffleArray(createBoard())
  );
  const [gameWon, setGameWon] = React.useState(false);
  const [matchedPairs, setMatchedPairs] = React.useState(0);
  const [clickedCard, setClickedCard] = React.useState<undefined | CardType>(
    undefined
  );

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
    <>
      <Navbar />
      <Box
      bgImage={image}
      bgPosition="center"
      bgSize="cover"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          opacity: 0.9,
        }}
        
      >
        <Grid backgroundColor="rgba(0, 0, 255, 0.1)" color={"white"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {gameWon ? (
              ""
            ) : (
              <Box marginY={5}>
                <StopWatch
                  isRunning={isRunning}
                  setIsRunning={setIsRunning}
                  elapsedTime={elapsedTime}
                  setElapsedTime={setElapsedTime}
                />
              </Box>
            )}
            {gameWon ? (
              ""
            ) : (
              <Grid
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
              </Grid>
            )}
          </div>
        </Grid>
      </Box>
    </>
  );
};

export default Board;