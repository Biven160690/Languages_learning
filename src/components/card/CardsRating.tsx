import { Box, Button } from '@mui/material';

import { useStyles } from '@theme/style';
import { GetRating } from './types';

interface CardsRatingProps {
  handleClickGetRating: GetRating;
}

export function CardsRating({ handleClickGetRating }: CardsRatingProps) {
  const { flashCardRating } = useStyles();

  return (
    <Box className={flashCardRating} onClick={handleClickGetRating}>
      <Button data-rating='2' color='success' variant='outlined' size='small'>
        learnt
      </Button>
      <Button data-rating='1' color='warning' variant='outlined' size='small'>
        to repeat
      </Button>
      <Button data-rating='0' color='error' variant='outlined' size='small'>
        to learn
      </Button>
    </Box>
  );
}
