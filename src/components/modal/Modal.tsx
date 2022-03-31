import React from 'react';

import { Box, Dialog } from '@mui/material';

interface ModalProps {
  isOpenModal: boolean;
  children: React.ReactNode;
  handleClickGoBack: () => void;
}

export const Modal = ({
  isOpenModal,
  handleClickGoBack,
  children,
}: ModalProps) => {
  return (
    <Box>
      <Dialog open={isOpenModal} onClose={handleClickGoBack}>
        {children}
      </Dialog>
    </Box>
  );
};
