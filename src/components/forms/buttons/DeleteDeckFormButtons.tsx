import React from 'react';
import { Button } from '@mui/material';

interface DeleteDeck {
  goBack: () => void;
}

export const DeleteDeckFormButtons = ({ goBack }: DeleteDeck) => {
  return (
    <React.Fragment>
      <Button type='button' color='primary' onClick={goBack}>
        Cancel
      </Button>
      <Button type='submit' color='error'>
        Delete
      </Button>
    </React.Fragment>
  );
};
