import { FieldError } from 'react-hook-form/dist/types/errors';

interface MessageInform {
  password: {
    required: string;
    minLength: string;
  };
  email: {
    required: string;
    pattern: string;
  };
  title: {
    required: string;
    minLength: string;
    maxLength: string;
  };
  description: {
    required: string;
    minLength: string;
    maxLength: string;
  };
  'new word': {
    required: string;
    minLength: string;
    maxLength: string;
  };
  translation: {
    required: string;
    minLength: string;
    maxLength: string;
  };
  name: {
    required: string;
    minLength: string;
    maxLength: string;
  };
  [key: string]: { [key: string]: string };
}
export const email = {
  required: true,
  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
};

export const password = { required: true, minLength: 6 };

export const text = { required: true, minLength: 1, maxLength: 20 };

export function isValid(
  obj: { [x: string]: FieldError | undefined },
  label: string
) {
  return !!obj[label];
}

export const messageInform: MessageInform = {
  password: {
    required: 'The field is required',
    minLength: 'The field is min 6 symbols',
  },
  email: {
    required: 'The field is required',
    pattern: 'The field have to email characters only',
  },
  title: {
    required: 'The field is required',
    minLength: 'The field is min 1 symbols',
    maxLength: 'The field cannot exceed 15 characters',
  },
  description: {
    required: 'The field is required',
    minLength: 'The field is min 1 symbols',
    maxLength: 'The field cannot exceed 15 characters',
  },
  'new word': {
    required: 'The field is required',
    minLength: 'The field is min 1 symbols',
    maxLength: 'The field cannot exceed 15 characters',
  },
  translation: {
    required: 'The field is required',
    minLength: 'The field is min 1 symbols',
    maxLength: 'The field cannot exceed 15 characters',
  },
  name: {
    required: 'The field is required',
    minLength: 'The field is min 1 symbols',
    maxLength: 'The field cannot exceed 15 characters',
  },
};
