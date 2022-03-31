import { NewCard, NewDeck } from '../forms/type';

export interface ModalDecksProps {
  addDeck: (data: NewDeck) => void;
  deleteDeck: (deckId: string) => void;
  addCard: (data: NewCard, deckId: string) => void;
}

export interface ModalCardsProps {
  addDeck: (data: NewDeck) => void;
  deleteCard: (dekId: string, cardId: string) => void;
}
