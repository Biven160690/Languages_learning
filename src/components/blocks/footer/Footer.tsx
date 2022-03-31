import { Typography, Box } from '@mui/material';

import { useStyles } from '@theme/style';

export const Footer = () => {
  const { footer, footerContent } = useStyles();

  return (
    <footer className={footer}>
      <Box className={footerContent}>
        <Typography component='p' color='text.secondary' role='paragraph'>
          © {new Date().getFullYear()}
        </Typography>
      </Box>
    </footer>
  );
};
