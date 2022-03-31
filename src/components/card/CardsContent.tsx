import { CardContent, Typography } from '@mui/material';

import { useStyles } from '@theme/style';

interface CardsContentProps {
  initialWord: string;
}

export function CardsContent({ initialWord }: CardsContentProps) {
  const { flashCardContent } = useStyles();

  return (
    <CardContent className={flashCardContent}>
      <Typography gutterBottom variant='h5'>
        {initialWord}
      </Typography>
    </CardContent>
  );
}
