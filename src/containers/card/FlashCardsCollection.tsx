import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CardContainer } from './CardContainer';
import { GridsWrapper } from '@components/wrapper/GridsWrapper';
import { Loading } from '@components/loading/Loading';
import { ErrorCardsDeck } from '@components/errors/ErrorCardsDeck';

import { useUpdateCardsDB, useDataManagement } from '@hooks';

import { CardsRouter } from '@routers';

import { triggerAlert, createNewDeck, removeSelectedCard } from '@helper';

import { DataCard, DataDeck } from '@hooks/interface';
import { NewDeck } from '@components/forms/type';

type Params = {
  deckId?: string;
};

export function FlashCardsCollection() {
  const { deckId } = useParams<Params>();

  const [cards, setCards] = useState<DataCard[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [hasError, setHasError] = useState<Error | undefined>();

  const { getCards } = useDataManagement();

  useEffect(() => {
    setIsLoading(true);
    if (deckId) {
      getCards(deckId)
        .then((cards) => {
          setCards(cards);
          setIsLoading(false);
        })
        .catch((error) => {
          setHasError(error);
          setIsLoading(false);
        });
    }
  }, [deckId, getCards]);

  const { getRepetitionCondition, setDataToUpdateDB, ...alertProps } =
    useUpdateCardsDB();

  function addDeck(data: NewDeck) {
    const newDeck: DataDeck = createNewDeck(data);
    setDataToUpdateDB({ addDeck: newDeck });
  }

  function deleteCard(deckId: string, cardId: string) {
    const updatedCards: DataCard[] = removeSelectedCard(cardId, cards);
    setCards(updatedCards);
    setDataToUpdateDB({
      deleteCard: {
        deckId,
        cardId,
      },
    });
  }

  if (hasError) {
    return <ErrorCardsDeck {...hasError} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  const callbacks = {
    addDeck,
    deleteCard,
  };

  return (
    <React.Fragment>
      {alertProps.isOpen && triggerAlert(alertProps)}
      <GridsWrapper>
        {cards.map((card) => {
          return (
            <CardContainer
              key={card.id}
              card={card}
              handleClickGetRating={getRepetitionCondition}
            />
          );
        })}
      </GridsWrapper>
      <CardsRouter {...callbacks} />
    </React.Fragment>
  );
}
