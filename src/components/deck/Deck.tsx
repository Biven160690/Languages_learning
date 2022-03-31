import { Card, CardActions, CardActionArea, Grid } from '@mui/material';

import { DecksContent } from './DecksContent';
import { DecksButtons } from './DecksButtons';

import { useStyles } from '@theme/style';

import { DataDeck } from '@hooks/interface';

export function Deck(deck: DataDeck) {
  const { id, title } = deck;

  const { flashCardsDeck, flashCardsDeckActions } = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} role='gridcell'>
      <Card className={flashCardsDeck}>
        <CardActionArea>
          <DecksContent {...deck} />
        </CardActionArea>
        <CardActions className={flashCardsDeckActions}>
          <DecksButtons id={id} title={title} />
        </CardActions>
      </Card>
    </Grid>
  );
}
