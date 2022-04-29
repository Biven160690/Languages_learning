import { Alert, Snackbar } from '@mui/material';

import { AlertProps } from '@hooks/interface';

export const ErrorAlert = ({ status, isOpen, setIsOpen }: AlertProps) => {
  const handleCloseAlert = () => setIsOpen(false);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isOpen}
      autoHideDuration={10000}
      onClose={handleCloseAlert}>
      <Alert
        aria-label='error'
        severity='error'
        variant='filled'
        onClose={handleCloseAlert}>
        {status?.name + ':  ' + status?.message}
      </Alert>
    </Snackbar>
  );
};
