import { ErrorAlert, SuccessAlert } from '@components/alerts';
import { InFoAlert } from '@components/alerts/InfoAlert';

import { AlertProps } from '@hooks/interface';

export const triggerAlert = (alertProps: AlertProps) => {
  if (alertProps.status) {
    switch (alertProps.status.name) {
      case 'Error':
        return <ErrorAlert {...alertProps} />;
      case 'Success':
        return <SuccessAlert {...alertProps} />;
      case 'Info':
        return <InFoAlert {...alertProps} />;
    }
  }
};
