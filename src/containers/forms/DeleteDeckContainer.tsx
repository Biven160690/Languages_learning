import React from 'react';
import { NavigateFunction, Params, useNavigate, useParams } from 'react-router';

import { DeleteDeckForm } from '@components/forms/deleteForms';

interface DeleteDeck {
  deleteDeck: (deckId: string) => void;
}

type TriggerRemoveProcces = (e: React.FormEvent<HTMLFormElement>) => void;

export function DeleteDeckContainer({ deleteDeck }: DeleteDeck) {
  const navigate: NavigateFunction = useNavigate();

  const { deckId } = useParams<Params>();

  const goBack = () => {
    navigate(-1);
  };

  const triggerRemoveProcess: TriggerRemoveProcces = (e) => {
    e.preventDefault();
    goBack();
    deckId && deleteDeck(deckId);
  };

  return <DeleteDeckForm handleSubmit={triggerRemoveProcess} goBack={goBack} />;
}
