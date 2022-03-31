import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Grid } from '@mui/material';

import { FrontSideCard, BackSideCard } from '@components/card';

import { DataCard } from '@hooks/interface';
import { RepetiCardsData } from '@helper/interface';
import { GetRating } from '@components/card/types';

interface CardContainerProps {
  card: DataCard;
  handleClickGetRating: (
    repetiCardsData: RepetiCardsData,
    rating: string
  ) => void;
}

export function CardContainer({
  card,
  handleClickGetRating,
}: CardContainerProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const changeCardSide = () => setIsFlipped((prevState) => !prevState);

  const repetiCardsData = {
    id: card.id,
    repetitionConditions: card.repetitionConditions,
  };

  const getRatingSelectedCard: GetRating = (event) => {
    const { rating } = (event.target as HTMLButtonElement).dataset;
    rating && handleClickGetRating(repetiCardsData, rating);
  };

  const frontSideData = { id: card.id, title: card['new word'] };

  const backSideData = { id: card.id, title: card.translation };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} role='gridcell'>
      <ReactCardFlip isFlipped={isFlipped}>
        <FrontSideCard
          changeCardSide={changeCardSide}
          initialWord={card['new word']}
          getRatingSelectedCard={getRatingSelectedCard}
          cardSide='front side'
          selectedSideCard={frontSideData}
        />

        <BackSideCard
          changeCardSide={changeCardSide}
          initialWord={card.translation}
          getRatingSelectedCard={getRatingSelectedCard}
          cardSide='back side'
          selectedSideCard={backSideData}
        />
      </ReactCardFlip>
    </Grid>
  );
}
