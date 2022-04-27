import { Alert, AlertTitle, Snackbar } from '@mui/material';

import { AlertProps } from '@hooks/interface';

export const InFoAlert = ({ status, isOpen, setIsOpen }: AlertProps) => {
  const handleCloseAlert = () => setIsOpen(false);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isOpen}
      autoHideDuration={2000}
      onClose={handleCloseAlert}>
      <Alert
        aria-label='info'
        severity='info'
        sx={{ width: '100%' }}
        variant='filled'>
        <AlertTitle>{status?.name + ':  ' + status?.message}</AlertTitle>
      </Alert>
    </Snackbar>
  );
};
