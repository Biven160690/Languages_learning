import { useForm } from 'react-hook-form';
import { Box } from '@mui/material';

import { AddDeckFormInputs } from '../inputs/AddDeckFormInputs';
import { AddDeckFormButtons } from '../buttons/AddDeckFormButtons';

import { useStyles } from '@theme/style';

import { NewDeck } from '../type';

interface AddDeckFormProps {
  onSubmit: (data: NewDeck) => void;
  goBack: () => void;
}

export function AddDeckForm({ onSubmit, goBack }: AddDeckFormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewDeck>();

  const { formInputs } = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className={formInputs}>
        <AddDeckFormInputs control={control} errors={errors} />
      </Box>
      <AddDeckFormButtons goBack={goBack} />
    </form>
  );
}
