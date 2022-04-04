import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../theme/theme';

import { CardContainer } from '../CardContainer';

describe('CardContainer component', () => {
  const card = {
    id: 1,
    'new word': 'change',
    translation: 'изменить',
    repetitionConditions: {
      easiness: 2.5,
      consecutiveCorrectAnswers: 0,
      msToNextReview: 0,
    },
  };
  const getRepetitionCondition = jest.fn();

  it('render CardContainer component', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <CardContainer
            card={card}
            handleClickGetRating={getRepetitionCondition}
          />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(screen.getByRole('gridcell')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 5, name: /change/i })
    ).toBeInTheDocument();
  });

  it('Card flip test', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <CardContainer
            card={card}
            handleClickGetRating={getRepetitionCondition}
          />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { level: 5, name: /change/i })
    ).toBeInTheDocument();

    userEvent.click(screen.getByRole('gridcell'));
    expect(
      screen.getByRole('heading', { level: 5, name: /изменить/i })
    ).toBeInTheDocument();
  });
});
