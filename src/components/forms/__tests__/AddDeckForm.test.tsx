import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../theme/theme';

import { AddDeckForm } from '../addForms';

describe('AddDeckForm component', () => {
  const onSubmit = jest.fn();
  const goBack = jest.fn();

  it('render AddDeckForm component', () => {
    render(
      <ThemeProvider theme={theme}>
        <AddDeckForm onSubmit={onSubmit} goBack={goBack} />
      </ThemeProvider>
    );

    expect(screen.getByRole('textbox', { name: /title/i })).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /description/i })
    ).toBeInTheDocument();
  });

  it('form submit should be successful when each input has data', async () => {
    render(
      <ThemeProvider theme={theme}>
        <AddDeckForm onSubmit={onSubmit} goBack={goBack} />
      </ThemeProvider>
    );

    userEvent.type(screen.getByRole('textbox', { name: /title/i }), 'cat');
    userEvent.type(
      screen.getByRole('textbox', { name: /description/i }),
      'dog'
    );
    userEvent.click(screen.getByRole('button', { name: /save/i }));

    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });

  it("should display error when input 'title' empty", () => {
    render(
      <ThemeProvider theme={theme}>
        <AddDeckForm onSubmit={onSubmit} goBack={goBack} />
      </ThemeProvider>
    );

    userEvent.type(
      screen.getByRole('textbox', { name: /description/i }),
      'dog'
    );
    userEvent.click(screen.getByRole('button', { name: /save/i }));

    expect(onSubmit).not.toBeCalled();
  });

  it("should display error when input 'description' empty", () => {
    render(
      <ThemeProvider theme={theme}>
        <AddDeckForm onSubmit={onSubmit} goBack={goBack} />
      </ThemeProvider>
    );

    userEvent.type(screen.getByRole('textbox', { name: /title/i }), 'dog');
    userEvent.click(screen.getByRole('button', { name: /save/i }));

    expect(onSubmit).not.toBeCalled();
  });

  it('should display error when each input is empty', () => {
    render(
      <ThemeProvider theme={theme}>
        <AddDeckForm onSubmit={onSubmit} goBack={goBack} />
      </ThemeProvider>
    );

    userEvent.click(screen.getByRole('button', { name: /save/i }));

    expect(onSubmit).not.toBeCalled();
  });
});
