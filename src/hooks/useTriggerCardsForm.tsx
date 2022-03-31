import { useParams } from 'react-router';

import { ErrorModals } from '@components/errors/ErrorModals';
import { AddDeckContainer, DeleteCardContainer } from '@containers/forms';

import { ModalCardsProps } from '@components/modal/interface';

export const useTriggerCardsForm = (callbacks: ModalCardsProps) => {
  const { addDeck, deleteCard } = callbacks;

  const params = useParams();

  const action = params.action as string;

  switch (action) {
    case 'add-deck':
      return <AddDeckContainer addDeck={addDeck} />;
    case 'delete-card':
      return <DeleteCardContainer deleteCard={deleteCard} />;
    default:
      return <ErrorModals />;
  }
};
