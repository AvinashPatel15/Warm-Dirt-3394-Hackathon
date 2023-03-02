import card1 from './img/typescript-for-beginners.png';
import card2 from './img/Javascript.png';
import card3 from './img/vscode.png';
import card4 from './img/postman.png';
import card5 from './img/jest.png';
import card6 from './img/html.png';
import card7 from './img/github.png';
import card8 from './img/css.png';
// Cardback
import cardBack from './img/card_back.jpg';

export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

// Put the images in an array
const cards: string[] = [card1, card2, card3, card4, card5, card6, card7, card8];

export const createBoard = (): CardType[] =>
  [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: cardBack,
    frontImage: card,
    clickable: true,
    matchingCardId: i < cards.length ? `card${i + cards.length}` : `card${i - cards.length}`
  }));
