import { Repetition } from '@helper/interface';
import { updateRepetitionConditions } from '../updateRepetitionConditions';

describe('updateRepetitionConditions', () => {
  let repetitionConditions: Repetition;

  beforeEach(() => {
    repetitionConditions = {
      easiness: 2.5,
      consecutiveCorrectAnswers: 0,
      msToNextReview: 0,
    };
  });

  it('user could learnt', () => {
    const rating = 5;

    expect(
      updateRepetitionConditions(repetitionConditions, rating)
    ).toHaveProperty('easiness', 2.6);
    expect(
      updateRepetitionConditions(repetitionConditions, rating)
    ).toHaveProperty('consecutiveCorrectAnswers', 1);
  });

  it('user could not learnt', () => {
    const rating = 3;

    expect(
      updateRepetitionConditions(repetitionConditions, rating)
    ).toHaveProperty('easiness', 2.36);
    expect(
      updateRepetitionConditions(repetitionConditions, rating)
    ).toHaveProperty('consecutiveCorrectAnswers', 0);
  });
});
