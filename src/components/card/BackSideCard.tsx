import { CardActionArea, CardActions, Card as FlashCard } from '@mui/material';

import { CardsContent } from './CardsContent';
import { CardsRating } from './CardsRating';
import { CardsButtons } from './CardsButtons';

import { useStyles } from '@theme/style';

import { GetRating, SelectedSideCard } from './types';

interface BackSideCardProps {
  initialWord: string;
  getRatingSelectedCard: GetRating;
  cardSide: string;
  selectedSideCard: SelectedSideCard;
  changeCardSide: () => void;
}

export function BackSideCard(props: BackSideCardProps) {
  const {
    initialWord,
    getRatingSelectedCard,
    cardSide,
    selectedSideCard,
    changeCardSide,
  } = props;

  const { flashCard, flashCardAction } = useStyles();

  return (
    <FlashCard className={flashCard}>
      <CardActionArea onClick={changeCardSide}>
        <CardsContent initialWord={initialWord} />
        <CardActions className={flashCardAction} />
      </CardActionArea>
      <CardsRating handleClickGetRating={getRatingSelectedCard} />
      <CardsButtons cardSide={cardSide} selectedSideCard={selectedSideCard} />
    </FlashCard>
  );
}
