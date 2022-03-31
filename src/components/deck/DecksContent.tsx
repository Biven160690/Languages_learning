import { Link } from 'react-router-dom';
import { CardContent, Typography } from '@mui/material';

import { useStyles } from '@theme/style';

import { DataDeck } from '@hooks/interface';

export function DecksContent({ id, title, description }: DataDeck) {
  const { flashCardsDeckContent } = useStyles();

  return (
    <Link to={`/deck/${id}`}>
      <CardContent className={flashCardsDeckContent}>
        <Typography gutterBottom variant='h5'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
        <Typography component='p' color='text.secondary'></Typography>
      </CardContent>
    </Link>
  );
}
