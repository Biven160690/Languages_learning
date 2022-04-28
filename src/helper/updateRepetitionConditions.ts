// ___why not use original method?
// (http://www.blueraja.com/blog/477/a-better-spaced-repetition-learning-algorithm-sm2)
// original method resolves into intervals too harsh:
//
// { days: 6 },
// { days: 10 },
// { days: 30 },
// { days: 99 },
// { days: 339 },
// { days: 1231 },
// { days: 4724 },
// { days: 19128 },
// { days: 24428 }

// memrise
//
// 4 hours, 12 hours, 1 day, 6 days, 12 days, 24 days, 48 days, 96 days, 180 days

// mine

// your learn

// [ PostgresInterval { days: 2, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 6, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 10, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 12, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 16, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 21, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 26, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 30, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 35, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 40, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 45, hours: 7, minutes: 0, seconds: 0  }, ]

// your to repeat

// [ PostgresInterval { days: 1, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 3, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 4, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 6, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 8, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 10, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 13, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 15, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 18, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 20, hours: 7, minutes: 0, seconds: 0  },
//   PostgresInterval { days: 23, hours: 7, minutes: 0, seconds: 0  }, ]

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
      ? rating +
          rating *
            (nextEasiness ** 1.2 * (nextConsecutiveCorrectAnswers - 1) ** 1.2)
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
  new Date().setHours(7, 0, 0, 0) + Math.round(daysToNextReview) * 86400000;

const isAnswerCorrect = (rating: number): boolean => !!rating;

const clipEasiness = (easiness: number): number => Math.max(easiness, 1.3);

const clipDaysToNextReview = (days: number): number => Math.min(days, 300);
