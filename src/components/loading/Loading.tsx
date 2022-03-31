import { CircularProgress, Box } from '@mui/material';

import { useStyles } from '@theme/style';

export const Loading = () => {
  const { loading } = useStyles();

  return (
    <Box className={loading}>
      <CircularProgress />
    </Box>
  );
};
