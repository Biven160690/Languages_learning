import { NavigateFunction, Params, useNavigate, useParams } from 'react-router';

import { AddCardForm } from '@components/forms/addForms';

import { NewCard } from '@components/forms/type';

interface AddCardProps {
  addCard: (data: NewCard, deckId: string) => void;
}

export function AddCardContainer({ addCard }: AddCardProps) {
  const navigate: NavigateFunction = useNavigate();

  const { deckId } = useParams<Params>();

  const goBack = () => {
    navigate(-1);
  };

  const getInterData = (data: NewCard) => {
    goBack();
    deckId && addCard(data, deckId);
  };

  return <AddCardForm onSubmit={getInterData} goBack={goBack} />;
}
