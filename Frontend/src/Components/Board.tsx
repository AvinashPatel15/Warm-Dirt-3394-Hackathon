import React from 'react';
import Card from './card/card';
// Setup
import { createBoard } from '../setup';
import { shuffleArray } from '../utils';
// Types
import { CardType } from '../setup';
// Styles
import { Grid } from "@chakra-ui/react"
const Board = () => {
    const [cards, setCards] = React.useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = React.useState(false);
  const [matchedPairs, setMatchedPairs] = React.useState(0);
  const [clickedCard, setClickedCard] = React.useState<undefined | CardType>(undefined);
  // const startTime = Date.now()
  // console.log(startTime)
  React.useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      console.log('Game Won!');
      setGameWon(true);
    }
  }, [matchedPairs]);
  // if (gameWon) {
  //   const endTime = Date.now()
  //   console.log("total time id ", endTime - startTime, "ms")
  // }
  const handleCardClick = (currentClickedCard: CardType) => {
    // Flip the card
    setCards(prev =>
      prev.map(card => (card.id === currentClickedCard.id ? { ...card, flipped: true, clickable: false } : card))
    );
    // If this is the first card that is flipped
    // just keep it flipped
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    // If it's a match
    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs(prev => prev + 1);
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentClickedCard.id ? { ...card, clickable: false } : card
        )
      );
      setClickedCard(undefined);
      return;
    }

    // If it's not a matched pair, wait one second and flip them back
    setTimeout(() => {
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, 1000);

    setClickedCard(undefined);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "10px",backgroundImage:"url('https://media.istockphoto.com/id/1189767039/vector/hackathon-concept-card-poster-paper-art-design-vector.jpg?s=612x612&w=0&k=20&c=WDdWorasVBtvfMziuL51DjRMQRz9wVd1yPtBp1y3Ey8=')",backgroundRepeat:"no-repeat",backgroundSize:"100vh" }}>
    <Grid
      templateRows={{
        base: `repeat(4,70px)`,
        sm: `repeat(4,140px)`,
        md: `repeat(4,160px)`,
        lg: `repeat(4,180px)`,
      }}
      templateColumns={{
        base: `repeat(4,70px)`,
        sm: `repeat(4,120px)`,
        md: `repeat(4,140px)`,
        lg: `repeat(4,180px)`,
      }}
      gap={4}
    >
      {cards.map(card => (
        <Card key={card.id} card={card} callback={handleCardClick} />
      ))}
    </Grid>
  </div>
  )
}

export default Board