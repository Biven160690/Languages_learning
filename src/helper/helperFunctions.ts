import { FieldError } from 'react-hook-form';

import { NewCard, NewDeck } from '@components/forms/type';
import { DataCard, DataDeck } from '@hooks/interface';
import { InputProps } from './interface';

type CreateInputsProps = (
  errors: { [x: string]: FieldError },
  form: string
) => InputProps;

type CreateNewCard = (data: NewCard) => DataCard;

type CreateNewDeck = (data: NewDeck) => DataDeck;

type RemoveSelectedCard = (cardId: string, cards: DataCard[]) => DataCard[];

type RemoveSelectedDeck = (deckId: string, decks: DataDeck[]) => DataDeck[];

type ChangeFirstLetter = (form: string) => string;

type RormatDate = (nextReviewDueDate: number) => string;

const changeFirstLetter: ChangeFirstLetter = (form) =>
  form.replace(/(^\w{1})/, (letter) => letter.toUpperCase());

const createInputsProps: CreateInputsProps = (errors, form) => {
  const isValidForm: FieldError = errors[form || ''];
  const label: string = changeFirstLetter(form);

  return {
    label: label,
    error: !!isValidForm,
    variant: 'outlined',
    helperText: isValidForm && 'This field is required',
  };
};

const createNewCard: CreateNewCard = (data) => {
  return {
    id: Date.now(),
    ...data,
    repetitionConditions: {
      easiness: 2.5,
      consecutiveCorrectAnswers: 0,
      msToNextReview: 0,
    },
  };
};

const createNewDeck: CreateNewDeck = (data) => {
  return { id: Date.now(), ...data };
};

const removeSelectedCard: RemoveSelectedCard = (cardId, cards) => {
  return cards.filter((card) => card.id !== +cardId);
};

const removeSelectedDeck: RemoveSelectedDeck = (deckId, decks) => {
  return decks.filter((deck) => deck.id !== +deckId);
};

const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const formatDate: RormatDate = (nextReviewDueDate) => {
  const date = new Date(nextReviewDueDate);
  return `${
    months[date.getMonth()] +
    ' ' +
    date.getDate() +
    ' ' +
    date.toLocaleTimeString()
  }`;
};

export {
  createInputsProps,
  createNewCard,
  createNewDeck,
  removeSelectedCard,
  removeSelectedDeck,
  formatDate,
};
