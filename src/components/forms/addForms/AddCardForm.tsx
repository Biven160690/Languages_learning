import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';

import { AddCardFormButtons } from '../buttons/AddCardFormButtons';
import { AddCardFormInputs } from '../inputs/AddCardFormInputs';

import { useStyles } from '../../../theme/style';

import { NewCard } from '../type';

interface AddCardFormProps {
  onSubmit: (data: NewCard) => void;
  goBack: () => void;
}

export function AddCardForm({ onSubmit, goBack }: AddCardFormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewCard>();

  const { formInputs } = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className={formInputs}>
        <AddCardFormInputs control={control} errors={errors} />
      </Box>
      <AddCardFormButtons goBack={goBack} />
    </form>
  );
}
