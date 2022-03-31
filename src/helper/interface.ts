export interface InputProps {
  label: string;
  error: boolean;
  variant: any;
  helperText: string;
}

export interface Repetition {
  easiness: number;
  consecutiveCorrectAnswers: number;
  msToNextReview: number;
}

export interface RepetiCardsData {
  id: number;
  repetitionConditions: Repetition;
}
