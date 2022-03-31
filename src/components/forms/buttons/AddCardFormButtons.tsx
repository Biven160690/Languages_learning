import { Box, Button } from '@mui/material';

import { useStyles } from '@theme/style';

interface AddCard {
  goBack: () => void;
}

export function AddCardFormButtons({ goBack }: AddCard) {
  const { formButtons } = useStyles();

  return (
    <Box className={formButtons}>
      <Button type='button' color='primary' onClick={goBack}>
        Cancel
      </Button>
      <Button type='submit' color='success'>
        Save
      </Button>
    </Box>
  );
}
