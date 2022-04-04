import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

import { RootRouter } from '../RootRouter';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@theme/theme';

describe('RootRouter component', () => {
  it('Home page', () => {
    const history = createMemoryHistory();

    render(
      <ThemeProvider theme={theme}>
        <Router location={history.location} navigator={history}>
          <RootRouter />
        </Router>
      </ThemeProvider>
    );

    expect(
      screen.getByRole('heading', { level: 1, name: /brainstorm/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('toolbar')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /SignIn/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /SignUp/i })).toBeInTheDocument();
  });

  it("landing on 'Not Found' page", () => {
    const history = createMemoryHistory();

    history.push('/error');
    render(
      <ThemeProvider theme={theme}>
        <Router location={history.location} navigator={history}>
          <RootRouter />
        </Router>
      </ThemeProvider>
    );

    expect(
      screen.getByRole('heading', { level: 2, name: /404 - Not Found/i })
    ).toBeInTheDocument();
  });

  it('changing path of url', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });

    render(
      <ThemeProvider theme={theme}>
        <Router location={history.location} navigator={history}>
          <RootRouter />
        </Router>
      </ThemeProvider>
    );

    userEvent.click(screen.getByRole('link', { name: /SignIn/i }));
    expect(history.location.pathname).toEqual('/signIn');
  });
});
