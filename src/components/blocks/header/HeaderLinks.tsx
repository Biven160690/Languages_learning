import { Link } from 'react-router-dom';
import { Typography, Link as Links } from '@mui/material';

export function HeaderLinks() {
  return (
    <Links component={Link} to='/' underline='none'>
      <Typography variant='h5'>BrainStorm</Typography>
    </Links>
  );
}
