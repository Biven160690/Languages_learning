import { NavigateFunction, useNavigate } from 'react-router';

import { AddDeckForm } from '@components/forms/addForms';

import { NewDeck } from '@components/forms/type';

interface AddDeckProps {
  addDeck: (data: NewDeck) => void;
}

export function AddDeckContainer({ addDeck }: AddDeckProps) {
  const navigate: NavigateFunction = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const getInterData = (data: NewDeck) => {
    goBack();
    addDeck(data);
  };

  return <AddDeckForm onSubmit={getInterData} goBack={goBack} />;
}
