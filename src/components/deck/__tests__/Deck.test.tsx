import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../theme/theme';

import { Deck } from '../Deck';

describe('Deck component', () => {
  const deck = { id: 1, title: 'Animal', description: 'Big animal' };

  it('render Deck component', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Deck {...deck} />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(screen.getByRole('gridcell')).toBeInTheDocument();
    expect(screen.getByText(/Animal/)).toBeInTheDocument();
    expect(screen.getByLabelText('delete deck')).toBeInTheDocument();
    expect(screen.getByLabelText('add card')).toBeInTheDocument();
  });
});
