import { useCallback } from 'react';
import { createCollection, db } from '../firebase';
import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore';

import { useAuth, useCheckData } from '@hooks';

import { updateRepetitionConditions } from '@helper';

import { AddCardProps, DataDeck, DataCard, Status } from '@hooks/interface';
import { RepetiCardsData } from '@helper/interface';

export function useDataManagement() {
  const auth = useAuth();

  const { hasSuccessUserActions, hasSuccessfulRating } = useCheckData();

  const addCard = useCallback(
    async ({ newCard, deckId }: AddCardProps): Promise<Status> => {
      const path = `cardsDecks/${auth.currentUser}/decks/${deckId}/cards/${newCard.id}`;
      await setDoc(doc(db, path), {
        ...newCard,
      });

      return hasSuccessUserActions(path, 'add');
    },
    [auth.currentUser, hasSuccessUserActions]
  );

  const addDeck = useCallback(
    async (newDeck: DataDeck): Promise<Status> => {
      const path = `cardsDecks/${auth.currentUser}/decks/${newDeck.id}`;
      await setDoc(doc(db, path), { ...newDeck });

      return hasSuccessUserActions(path, 'add');
    },
    [auth.currentUser, hasSuccessUserActions]
  );

  const deleteNestedCollections = useCallback(
    async (deckId: string): Promise<void> => {
      const cardsDeck = await getDocs(
        collection(db, `cardsDecks/${auth.currentUser}/decks/${deckId}/cards`)
      );

      if (!cardsDeck.empty) {
        cardsDeck.forEach((docs) => {
          deleteDoc(
            doc(
              db,
              `cardsDecks/${auth.currentUser}/decks/${deckId}/cards/${docs.id}`
            )
          );
        });
      }
    },
    [auth.currentUser]
  );

  const deleteDeck = useCallback(
    async (deckId: string): Promise<Status> => {
      const path = `cardsDecks/${auth.currentUser}/decks/${deckId}`;
      await deleteNestedCollections(deckId);
      await deleteDoc(
        doc(db, `cardsDecks/${auth.currentUser}/decks/${deckId}`)
      );

      return hasSuccessUserActions(path, 'delete');
    },
    [auth.currentUser, deleteNestedCollections, hasSuccessUserActions]
  );

  const deleteCard = useCallback(
    async (deckId: string, cardId: string): Promise<Status> => {
      const path = `cardsDecks/${auth.currentUser}/decks/${deckId}/cards/${cardId}`;
      await deleteDoc(doc(db, path));

      return hasSuccessUserActions(path, 'delete');
    },
    [auth.currentUser, hasSuccessUserActions]
  );

  const getDecks = useCallback(async (): Promise<DataDeck[]> => {
    const cardsDecksCollection = createCollection<DataDeck>(
      `cardsDecks/${auth.currentUser}/decks`
    );

    const docDecks = await getDocs(cardsDecksCollection);
    return docDecks.empty ? [] : docDecks.docs.map((card) => card.data());
  }, [auth.currentUser]);

  const getCards = useCallback(
    async (deckId: string): Promise<DataCard[]> => {
      const cardsCollection = createCollection<DataCard>(
        `cardsDecks/${auth.currentUser}/decks/${deckId}/cards`
      );

      const selectedCards = query(
        cardsCollection,
        where('repetitionConditions.msToNextReview', '<=', Date.now())
      );
      const docCards = await getDocs(selectedCards);
      return docCards.empty ? [] : docCards.docs.map((card) => card.data());
    },
    [auth.currentUser]
  );

  const updateRepetitionsData = useCallback(
    async (
      { id, repetitionConditions }: RepetiCardsData,
      deckId: string,
      rating: string
    ): Promise<Status> => {
      const nextReviewDueDate = updateRepetitionConditions(
        repetitionConditions,
        +rating
      );
      const path = `cardsDecks/${auth.currentUser}/decks/${deckId}/cards/${id}`;

      await setDoc(
        doc(db, path),
        { repetitionConditions: nextReviewDueDate },
        { merge: true }
      );

      return hasSuccessfulRating(path);
    },

    [auth.currentUser, hasSuccessfulRating]
  );

  const addUserDoc = useCallback(async (userId: string) => {
    const path = `cardsDecks/${userId}`;
    await setDoc(doc(db, path), {});
  }, []);

  return {
    addCard,
    addDeck,
    deleteDeck,
    deleteCard,
    getDecks,
    getCards,
    updateRepetitionsData,
    addUserDoc,
  };
}
