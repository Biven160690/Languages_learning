import { useCallback } from 'react';

import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

import { formatDate } from '@helper';

import { Status } from './interface';

export function useCheckData() {
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
              ? resolve({
                  name: 'Success',
                  message: 'Successfully! Data was modified',
                })
              : reject(new Error('Error! Data was not modifed'));
          },
          (error) => reject(error)
        );
      });
    },
    []
  );

  const hasSuccessfulRating = useCallback((path: string) => {
    return new Promise<Status>((resolve, reject) => {
      onSnapshot(
        doc(db, path),
        (querySnapshot) => {
          const date =
            querySnapshot.data()?.repetitionConditions.msToNextReview;
          date
            ? resolve({
                name: 'Info',
                message: `Next review:  ${formatDate(date)}`,
              })
            : reject(new Error('Error! Oopps'));
        },
        (error) => reject(error)
      );
    });
  }, []);

  return {
    hasSuccessUserActions,
    hasSuccessfulRating,
  };
}
