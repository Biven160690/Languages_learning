import { Box, Button } from '@mui/material';

import { useStyles } from '@theme/style';

interface AddDeck {
  goBack: () => void;
}

export function AddDeckFormButtons({ goBack }: AddDeck) {
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
