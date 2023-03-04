import StopWatch from "./Stop-Watch/StopWatch";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import Card from "./card/card";
import { createBoard } from "../setup";
import { shuffleArray } from "../utils";
import { CardType } from "../setup";
import { Box, Grid, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";
import image from "../assets/images/gaming_intro.jpg";

const Board = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [flag, setFlag] = useState(false);
  const [cards, setCards] = React.useState<CardType[]>(
    shuffleArray(createBoard())
  );
  const [gameWon, setGameWon] = React.useState(false);
  const [matchedPairs, setMatchedPairs] = React.useState(0);
  const [clickedCard, setClickedCard] = React.useState<undefined | CardType>(
    undefined
  );
  const token: string = localStorage.getItem("TechToken") as string;

  const navigate = useNavigate();

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
  };
  const updateWinsHandle = async () => {
    const token: string = localStorage.getItem("TechToken") as string;
    const GameTime: string = localStorage.getItem("GameTime") as string;
    const data = {
      prevTime: GameTime,
    };
    try {
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/leaderboard/update`,
        {
          method: "PATCH",
          headers: {
            authorization: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      let result = await res.json();
      console.log(result);
    } catch (error: any) {
      console.log({ message: error.message });
    }
  };
  React.useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      //? console.log('Game Won!');
      setGameWon(true);
      setIsRunning(false);

      localStorage.setItem("GameTime", JSON.stringify(formatTime(elapsedTime)));
      updateWinsHandle();
      setTimeout(() => navigate("/gamewon"), 500);
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

  const handleCreateLeaderBoard = async (token: string) => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/leaderboard/add`,
        {
          method: "POST",
          headers: {
            authorization: token,
          },
        }
      );
      let result = await res.json();
      // console.log(result);
    } catch (error) {
      // console.log(error);
    }
  };
  useEffect(() => {
    handleCreateLeaderBoard(token);
  }, [token]);

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
            <Box marginY={5}>
              <StopWatch
                isRunning={isRunning}
                setIsRunning={setIsRunning}
                elapsedTime={elapsedTime}
                setElapsedTime={setElapsedTime}
              />
            </Box>
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
          </div>
        </Grid>
      </Box>
    </>
  );
};

export default Board;
