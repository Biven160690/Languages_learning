import React from 'react';
import { Control, FieldError } from 'react-hook-form';

import { InputField } from './InputField';

import { email, password } from '@helper';
import { LoginData, RegistrationData } from '../type';

interface InputsProps {
  control: Control<LoginData, object> | Control<RegistrationData, object>;
  errors: {
    email?: FieldError | undefined;
    password?: FieldError | undefined;
    name?: FieldError | undefined;
  };
  disabled: boolean;
}

export function AuthenticationInputs(props: InputsProps) {
  const { control, errors, disabled } = props;
  return (
    <React.Fragment>
      <InputField
        type='email'
        label='email'
        rules={email}
        control={control}
        errors={errors}
        variant='outlined'
        disabled={disabled}
      />
      <InputField
        type='password'
        label='password'
        rules={password}
        control={control}
        errors={errors}
        variant='outlined'
        disabled={disabled}
      />
    </React.Fragment>
  );
}
