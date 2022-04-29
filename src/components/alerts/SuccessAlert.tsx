import { Alert, Snackbar } from '@mui/material';
import { AlertProps } from '@hooks/interface';

export const SuccessAlert = ({ status, isOpen, setIsOpen }: AlertProps) => {
  const handleCloseAlert = () => setIsOpen(false);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isOpen}
      autoHideDuration={5000}
      onClose={handleCloseAlert}>
      <Alert
        aria-label='success'
        severity='success'
        variant='filled'
        onClose={handleCloseAlert}>
        {status?.name + ':  ' + status?.message}
      </Alert>
    </Snackbar>
  );
};
