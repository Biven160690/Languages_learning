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
    const rating = 1;

    expect(
      updateRepetitionConditions(repetitionConditions, rating)
    ).toHaveProperty('easiness', 1.96);
    expect(
      updateRepetitionConditions(repetitionConditions, rating)
    ).toHaveProperty('consecutiveCorrectAnswers', 1);
  });

  it('user could not learnt', () => {
    const rating = 0;

    expect(
      updateRepetitionConditions(repetitionConditions, rating)
    ).toHaveProperty('easiness', 1.7);
    expect(
      updateRepetitionConditions(repetitionConditions, rating)
    ).toHaveProperty('consecutiveCorrectAnswers', 0);
  });
});
