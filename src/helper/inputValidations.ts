import { FieldError } from 'react-hook-form/dist/types/errors';

export const email = {
  required: true,
  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
};

export const password = { required: true, minLength: 6 };

export const text = { required: true, minLength: 1, maxLength: 15 };

export function isValid(
  obj: { [x: string]: FieldError | undefined },
  label: string
) {
  return !!obj[label];
}

export const messageInform: { [key: string]: string } = {
  password: 'The field is required: min 6 symbols',
  email: 'The field is required',
  title: 'The field is required',
  description: 'The field is required',
  'new word': 'The field is required',
  translation: 'The field is required',
  name: 'The field is required',
};
