import React from 'react';

import { DeleteCardFormButtons } from '../buttons/DeleteCardFormButtons';

interface DeleteCardFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  goBack: () => void;
}

export const DeleteCardForm = ({
  handleSubmit,
  goBack,
}: DeleteCardFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <DeleteCardFormButtons goBack={goBack} />
    </form>
  );
};
