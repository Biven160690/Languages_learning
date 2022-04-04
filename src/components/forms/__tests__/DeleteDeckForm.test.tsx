import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DeleteDeckForm } from '../deleteForms';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../theme/theme';

describe('DeleteDeckForm component', () => {
  const goBack = jest.fn();
  const onSubmit = jest.fn();

  it('render DeleteDeckForm component', () => {
    render(
      <ThemeProvider theme={theme}>
        <DeleteDeckForm handleSubmit={onSubmit} goBack={goBack} />
      </ThemeProvider>
    );

    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
  });

  it('form submit should be successful', () => {
    render(
      <ThemeProvider theme={theme}>
        <DeleteDeckForm handleSubmit={onSubmit} goBack={goBack} />
      </ThemeProvider>
    );

    userEvent.click(screen.getByRole('button', { name: /delete/i }));

    expect(onSubmit).toBeCalled();
  });

  it('form  should be closed', () => {
    render(
      <ThemeProvider theme={theme}>
        <DeleteDeckForm handleSubmit={onSubmit} goBack={goBack} />
      </ThemeProvider>
    );

    userEvent.click(screen.getByRole('button', { name: /cancel/i }));

    expect(goBack).toBeCalled();
  });
});
