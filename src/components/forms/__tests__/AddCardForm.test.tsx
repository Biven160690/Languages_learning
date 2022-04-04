import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../theme/theme';

import { AddCardForm } from '../addForms';

describe('AddCardForm component', () => {
  const onSubmit = jest.fn();
  const goBack = jest.fn();

  it('render AddCardForm component', () => {
    render(
      <ThemeProvider theme={theme}>
        <AddCardForm onSubmit={onSubmit} goBack={goBack} />
      </ThemeProvider>
    );

    expect(
      screen.getByRole('textbox', { name: /new word/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /translation/i })
    ).toBeInTheDocument();
  });

  it('form submit should be successful when each input has data', async () => {
    render(
      <ThemeProvider theme={theme}>
        <AddCardForm onSubmit={onSubmit} goBack={goBack} />
      </ThemeProvider>
    );

    userEvent.type(screen.getByRole('textbox', { name: /new word/i }), 'cat');
    userEvent.type(
      screen.getByRole('textbox', { name: /translation/i }),
      'dog'
    );
    userEvent.click(screen.getByRole('button', { name: /save/i }));

    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });

  it("should display error when input 'new word' empty", () => {
    render(
      <ThemeProvider theme={theme}>
        <AddCardForm onSubmit={onSubmit} goBack={goBack} />
      </ThemeProvider>
    );

    userEvent.type(
      screen.getByRole('textbox', { name: /translation/i }),
      'dog'
    );
    userEvent.click(screen.getByRole('button', { name: /save/i }));

    expect(onSubmit).not.toBeCalled();
  });

  it("should display error when input 'translation' empty", () => {
    render(
      <ThemeProvider theme={theme}>
        <AddCardForm onSubmit={onSubmit} goBack={goBack} />
      </ThemeProvider>
    );

    userEvent.type(screen.getByRole('textbox', { name: /new word/i }), 'dog');
    userEvent.click(screen.getByRole('button', { name: /save/i }));

    expect(onSubmit).not.toBeCalled();
  });

  it('should display error when each input is empty', () => {
    render(
      <ThemeProvider theme={theme}>
        <AddCardForm onSubmit={onSubmit} goBack={goBack} />
      </ThemeProvider>
    );

    userEvent.click(screen.getByRole('button', { name: /save/i }));

    expect(onSubmit).not.toBeCalled();
  });

  it('form  should be closed', () => {
    render(
      <ThemeProvider theme={theme}>
        <AddCardForm onSubmit={onSubmit} goBack={goBack} />
      </ThemeProvider>
    );

    userEvent.click(screen.getByRole('button', { name: /cancel/i }));

    expect(goBack).toBeCalled();
  });
});
