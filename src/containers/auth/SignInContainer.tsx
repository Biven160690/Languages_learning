import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavigateFunction, useNavigate } from 'react-router';
import { LoadingButton } from '@mui/lab';

import { AuthenticationInputs } from '@components/forms/inputs/AuthenticationInputs';
import { useAuth } from '@hooks';
import { useStyles } from '@theme/style';

import {
  triggerAlert,
  setCurrentUser,
  userAuthStatus,
  redirectInDecks,
} from '@helper';

import { Status } from '@hooks/interface';
import { LoginData } from '@components/forms/type';

export function SignInContainer() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [status, setStatus] = useState<Status>();

  const navigate: NavigateFunction = useNavigate();

  const auth = useAuth();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginData>();

  const { loggingSuccess, loggingError } = userAuthStatus;

  useEffect(() => {
    redirectInDecks(isOpen, status) && navigate('/decks');
  }, [isOpen, navigate, status]);

  const { singInForm, singInFormInput, singInFormButton, singInFormActions } =
    useStyles();

  function login(data: LoginData) {
    setIsLoading(true);
    auth
      .signIn(data)
      .then(({ user }) => {
        setIsOpen(true);
        setStatus(loggingSuccess);
        setCurrentUser('userId', user.uid);
      })
      .catch((error) => {
        setIsLoading(false);
        setStatus(loggingError(error.code));
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
      <form onSubmit={handleSubmit(login)}>
        <div className={singInForm}>
          <h2>SignIn</h2>
          <div className={singInFormActions}>
            <div className={singInFormInput}>
              <AuthenticationInputs
                control={control}
                errors={errors}
                disabled={isLoading}
              />
            </div>
            <div className={singInFormButton}>
              <LoadingButton
                type='submit'
                variant='contained'
                loading={isLoading}>
                login
              </LoadingButton>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
