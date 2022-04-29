import { useCallback } from 'react';

import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

import { formatDate, userActionsStatus } from '@helper';

import { Status } from './interface';

export function useCheckData() {
  const { success, error, info } = userActionsStatus;

  const hasSuccessUserActions = useCallback(
    (path: string, action: string): Promise<Status> => {
      return new Promise<Status>((resolve, reject) => {
        onSnapshot(
          doc(db, path),
          (querySnapshot) => {
            (
              action === 'delete'
                ? !querySnapshot.exists()
                : querySnapshot.exists()
            )
              ? resolve(success)
              : reject(new Error(error.message));
          },
          (error) => reject(error)
        );
      });
    },
    [error.message, success]
  );

  const hasSuccessfulRating = useCallback(
    (path: string) => {
      return new Promise<Status>((resolve, reject) => {
        onSnapshot(
          doc(db, path),
          (querySnapshot) => {
            const date =
              querySnapshot.data()?.repetitionConditions.msToNextReview;
            date
              ? resolve(info(formatDate(date)))
              : reject(new Error(error.message));
          },
          (error) => reject(error)
        );
      });
    },
    [error.message, info]
  );

  return {
    hasSuccessUserActions,
    hasSuccessfulRating,
  };
}
