import React from 'react';
// Types
import { CardType } from '../../';
// Styles
import { Wrapper, FrontImg, BackImg } from './card.styles';

type Props = {
  card: CardType;
  callback: (card: CardType) => void;
};

const Card: React.FC<Props> = ({ card, callback }) => {
  const handleClick = () => {
    if (card.clickable) callback(card);
  };

  return (
    <Wrapper onClick={handleClick}>
      <FrontImg flipped={card.flipped} src={card.frontImage} alt='card-front' />
      <BackImg flipped={card.flipped} src={card.backImage} alt='card-back' />
    </Wrapper>
  );
};

export default Card;
