import { Link } from 'react-router-dom';

import { Box, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

import { useStyles } from '@theme/style';

import { SelectedSideCard } from './types';

interface CardsButtonsProps {
  cardSide: string;
  selectedSideCard: SelectedSideCard;
}

export function CardsButtons({
  cardSide,
  selectedSideCard,
}: CardsButtonsProps) {
  const { id, title } = selectedSideCard;

  const { flashCardDeleteButton } = useStyles();

  return (
    <Box className={flashCardDeleteButton}>
      <IconButton
        color='error'
        aria-label={`delete card ${cardSide}`}
        component={Link}
        to={`${'delete-card'}/${id}`}
        state={{ open: true, title }}>
        <Delete />
      </IconButton>
    </Box>
  );
}
