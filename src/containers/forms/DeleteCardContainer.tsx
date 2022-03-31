import React from 'react';
import { NavigateFunction, Params, useNavigate, useParams } from 'react-router';

import { DeleteCardForm } from '@components/forms/deleteForms';

interface DeleteCardProps {
  deleteCard: (deckId: string, cardId: string) => void;
}

type TriggerRemoveProcess = (e: React.FormEvent<HTMLFormElement>) => void;

export function DeleteCardContainer({ deleteCard }: DeleteCardProps) {
  const navigate: NavigateFunction = useNavigate();

  const { deckId, cardId } = useParams<Params>();

  const goBack = () => {
    navigate(-1);
  };

  const triggerRemoveProcess: TriggerRemoveProcess = (e) => {
    e.preventDefault();
    goBack();
    deckId && cardId && deleteCard(deckId, cardId);
  };

  return <DeleteCardForm handleSubmit={triggerRemoveProcess} goBack={goBack} />;
}
