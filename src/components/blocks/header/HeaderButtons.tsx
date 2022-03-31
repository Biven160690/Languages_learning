import { Link } from 'react-router-dom';

import { Add } from '@mui/icons-material';
import { Box, Button } from '@mui/material';

import { useStyles } from '@theme/style';

interface HeaderButtonsProps {
  handleClickOpenForm: () => void;
  hasDisplayDeckButton: boolean;
  hasDisplayAddButton: boolean;
}

export function HeaderButtons({
  handleClickOpenForm,
  hasDisplayDeckButton,
  hasDisplayAddButton,
}: HeaderButtonsProps) {
  const { headerButtons } = useStyles();

  return (
    <Box className={headerButtons}>
      {hasDisplayAddButton && (
        <Button
          variant='outlined'
          onClick={handleClickOpenForm}
          color='success'
          startIcon={<Add />}>
          Add
        </Button>
      )}
      {hasDisplayDeckButton && (
        <Button component={Link} to='/decks' color='inherit'>
          Decks
        </Button>
      )}
    </Box>
  );
}
