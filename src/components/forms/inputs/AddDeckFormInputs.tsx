import React from 'react';
import { Control, FieldError } from 'react-hook-form';

import { InputField } from './InputField';

import { NewDeck } from '../type';
import { text } from '@helper';

interface FormsInputsProps {
  errors: {
    title?: FieldError | undefined;
    description?: FieldError | undefined;
  };
  control: Control<NewDeck, object>;
}

export function AddDeckFormInputs({ errors, control }: FormsInputsProps) {
  return (
    <React.Fragment>
      <InputField
        type='text'
        label='title'
        rules={text}
        control={control}
        errors={errors}
        variant='outlined'
      />
      <InputField
        type='text'
        label='description'
        rules={text}
        control={control}
        errors={errors}
        variant='outlined'
      />
    </React.Fragment>
  );
}
