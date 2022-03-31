import { useParams } from 'react-router';

import { ErrorModals } from '@components/errors/ErrorModals';
import {
  AddCardContainer,
  AddDeckContainer,
  DeleteDeckContainer,
} from '../containers/forms';

import { ModalDecksProps } from '@components/modal/interface';

export const useTriggerDecksForm = (callbacks: ModalDecksProps) => {
  const { addDeck, addCard, deleteDeck } = callbacks;

  const params = useParams();

  const action = params.action as string;

  switch (action) {
    case 'add-card':
      return <AddCardContainer addCard={addCard} />;
    case 'add-deck':
      return <AddDeckContainer addDeck={addDeck} />;
    case 'delete-deck':
      return <DeleteDeckContainer deleteDeck={deleteDeck} />;
    default:
      return <ErrorModals />;
  }
};
