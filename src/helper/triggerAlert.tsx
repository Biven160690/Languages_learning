import { ErrorAlert, SuccessAlert } from '@components/alerts';

import { AlertProps } from '@hooks/interface';

export const triggerAlert = (alertProps: AlertProps) => {
  if (alertProps.status) {
    switch (alertProps.status.name) {
      case 'FirebaseError':
        return <ErrorAlert {...alertProps} />;
      case 'Error':
        return <ErrorAlert {...alertProps} />;
      case 'Success':
        return <SuccessAlert {...alertProps} />;
    }
  }
};
