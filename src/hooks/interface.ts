import { NewCard, NewDeck } from '../components/forms/type';
import { Repetition } from '../helper/interface';

export interface DataCard extends NewCard {
  id: number;
  repetitionConditions: Repetition;
}

export interface DataDeck extends NewDeck {
  id: number;
}

export interface Status {
  name: string;
  message: string;
}

export interface AlertProps {
  status: Status | undefined;
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}

export interface AddCardProps {
  newCard: DataCard;
  deckId: string;
}
