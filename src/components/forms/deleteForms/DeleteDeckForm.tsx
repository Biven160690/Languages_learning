import React from 'react';

import { DeleteDeckFormButtons } from '../buttons/DeleteDeckFormButtons';

interface DeleteDeckFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  goBack: () => void;
}

export const DeleteDeckForm = ({
  handleSubmit,
  goBack,
}: DeleteDeckFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <DeleteDeckFormButtons goBack={goBack} />
    </form>
  );
};
