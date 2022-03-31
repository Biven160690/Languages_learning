import React from 'react';

import { Grid } from '@mui/material';

interface GridsWrapperProps {
  children: React.ReactNode;
}

export const GridsWrapper = ({ children }: GridsWrapperProps) => {
  return (
    <Grid container spacing={2} rowSpacing={2} role='grid'>
      {children}
    </Grid>
  );
};
