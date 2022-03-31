import { FieldError } from 'react-hook-form/dist/types/errors';

export const email = {
  required: true,
  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
};

export const password = { required: true, minLength: 6 };

export const text = { required: true, minLength: 1, maxLength: 10 };

export function isValid(
  obj: { [x: string]: FieldError | undefined },
  label: string
) {
  return !!obj[label];
}

export const messageInform: { [key: string]: string } = {
  password: 'This is required minimum 6 symbols',
  email: 'This is required',
  title: 'This is required',
  description: 'This is required',
  'new word': 'This is required',
  translation: 'This is required',
  name: 'This is required',
};
