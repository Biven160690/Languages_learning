import { Repetition } from './interface';

type NextReviewDueDate = (
  previousData: Repetition,
  rating: number
) => Repetition;

export const updateRepetitionConditions: NextReviewDueDate = (
  previousData,
  rating
) => {
  const nextEasiness = clipEasiness(
    previousData.easiness + -0.8 + 0.28 * rating + -0.02 * rating ** 2
  );

  const nextConsecutiveCorrectAnswers = isAnswerCorrect(rating)
    ? previousData.consecutiveCorrectAnswers + 1
    : 0;

  const daysToNextReview = clipDaysToNextReview(
    isAnswerCorrect(rating)
      ? 6 * nextEasiness ** (nextConsecutiveCorrectAnswers - 1)
      : 1
  );
  const msToNextReview = setTime(daysToNextReview);

  return {
    easiness: nextEasiness,
    consecutiveCorrectAnswers: nextConsecutiveCorrectAnswers,
    msToNextReview,
  };
};

const setTime = (daysToNextReview: number) =>
  new Date().setHours(7, 0, 0, 0) + daysToNextReview * 86400000;

const isAnswerCorrect = (rating: number): boolean => rating > 3;

const clipEasiness = (easiness: number): number => Math.max(easiness, 1.3);

const clipDaysToNextReview = (days: number): number => Math.min(days, 300);
