import { DialogTitle } from '@mui/material';

import { useStyles } from '@theme/style';

interface ModalsTitleProps {
  header: string;
}

export const ModalsTitle = ({ header }: ModalsTitleProps) => {
  const { formTitle } = useStyles();

  return <DialogTitle className={formTitle}>{header}</DialogTitle>;
};
