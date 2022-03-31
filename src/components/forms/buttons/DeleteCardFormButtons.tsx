import React from 'react';
import { Button } from '@mui/material';

interface DeleteCard {
  goBack: () => void;
}

export const DeleteCardFormButtons = ({ goBack }: DeleteCard) => {
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
