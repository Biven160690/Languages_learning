import React from 'react';
import { Control, FieldError } from 'react-hook-form';

import { InputField } from './InputField';

import { text } from '@helper';

import { NewCard } from '../type';

interface FormsInputsProps {
  errors: {
    'new word'?: FieldError | undefined;
    translation?: FieldError | undefined;
  };
  control: Control<NewCard, object>;
}

export function AddCardFormInputs({ errors, control }: FormsInputsProps) {
  return (
    <React.Fragment>
      <InputField
        type='text'
        label='new word'
        rules={text}
        control={control}
        errors={errors}
        variant='outlined'
      />
      <InputField
        type='text'
        label='translation'
        rules={text}
        control={control}
        errors={errors}
        variant='outlined'
      />
    </React.Fragment>
  );
}
