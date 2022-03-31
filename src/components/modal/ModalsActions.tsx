import React from 'react';

import { DialogActions } from '@mui/material';

interface ModalsActionsProps {
  form: React.ReactNode;
}

export const ModalsActions = ({ form }: ModalsActionsProps) => {
  return <DialogActions>{form}</DialogActions>;
};
