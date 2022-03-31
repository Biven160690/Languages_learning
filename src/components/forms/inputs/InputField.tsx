import { Control, Controller, FieldError } from 'react-hook-form';
import { TextField } from '@mui/material';

import { isValid, messageInform } from '@helper';

interface InputFieldProps {
  type: string;
  label: string;
  rules: { [x: string]: string | number | boolean | RegExp };
  control: Control<any, object>;
  errors: { [x: string]: FieldError | undefined };
  variant: 'standard' | 'filled' | 'outlined';
  disabled?: boolean;
}

export function InputField(props: InputFieldProps) {
  const { type, label, rules, control, errors, variant, disabled } = props;

  const helperText = errors[label] && messageInform[label];

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            type={type}
            label={label}
            variant={variant}
            error={isValid(errors, label)}
            disabled={disabled}
            helperText={helperText}
          />
        )}
        control={control}
        rules={rules}
        name={label}
        defaultValue=''
      />
    </>
  );
}
