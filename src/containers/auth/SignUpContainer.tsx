import React, { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { AuthenticationInputs } from '@components/forms/inputs/AuthenticationInputs';
import { InputField } from '@components/forms/inputs/InputField';

import { useDataManagement, useAuth } from '@hooks';
import { useStyles } from '@theme/style';

import {
  triggerAlert,
  text,
  setCurrentUser,
  userAuthStatus,
  redirectInDecks,
} from '@helper';

import { RegistrationData } from '@components/forms/type';
import { Status } from '@hooks/interface';

export function SignUpContainer() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [status, setStatus] = useState<Status>();

  const navigate: NavigateFunction = useNavigate();

  const auth = useAuth();

  const { singUpForm, singUpFormInput, singUpFormButton, singUpFormActions } =
    useStyles();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegistrationData>();

  const { registeringSuccess, registeringError } = userAuthStatus;

  useEffect(() => {
    redirectInDecks(isOpen, status) && navigate('/decks');
  }, [isOpen, navigate, status]);

  const dataManagement = useDataManagement();

  function registration(data: RegistrationData) {
    setIsLoading(true);
    auth
      .signUp(data)
      .then(({ user }) => {
        dataManagement.addUserDoc(user.uid);
        setIsOpen(true);
        setStatus(registeringSuccess);
        setCurrentUser('userId', user.uid);
      })
      .catch((error) => {
        setIsLoading(false);
        setStatus(registeringError(error.code));
        setIsOpen(true);
      });
  }

  const alertProps = {
    status,
    isOpen,
    setIsOpen,
  };

  return (
    <React.Fragment>
      {isOpen && triggerAlert(alertProps)}
      <form onSubmit={handleSubmit(registration)}>
        <div className={singUpForm}>
          <h2>SignUp</h2>
          <div className={singUpFormActions}>
            <div className={singUpFormInput}>
              <InputField
                type='text'
                label='name'
                rules={text}
                control={control}
                errors={errors}
                variant='outlined'
                disabled={isLoading}
              />
              <AuthenticationInputs
                control={control}
                errors={errors}
                disabled={isLoading}
              />
            </div>
            <div className={singUpFormButton}>
              <LoadingButton
                type='submit'
                variant='contained'
                loading={isLoading}>
                create account
              </LoadingButton>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
