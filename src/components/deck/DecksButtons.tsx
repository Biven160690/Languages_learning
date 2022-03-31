import { Link } from 'react-router-dom';
import { Add, Delete } from '@mui/icons-material';
import { CardActions, IconButton } from '@mui/material';

import { useStyles } from '@theme/style';

interface DecksButtonsProps {
  id: number;
  title: string;
}

export function DecksButtons({ id, title }: DecksButtonsProps) {
  const { flashCardsDeckActions } = useStyles();

  const addDeckPath = `${'add-card'}/deck/${id}`;

  const deleteDeckPath = `${'delete-deck'}/deck/${id}`;

  return (
    <CardActions className={flashCardsDeckActions}>
      <IconButton
        color='success'
        aria-label='add card'
        component={Link}
        to={addDeckPath}
        state={{ open: true, title }}>
        <Add />
      </IconButton>
      <IconButton
        color='error'
        aria-label='delete deck'
        component={Link}
        to={deleteDeckPath}
        state={{ open: true, title }}>
        <Delete />
      </IconButton>
    </CardActions>
  );
}
