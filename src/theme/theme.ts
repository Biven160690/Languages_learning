import { createTheme, Theme } from '@material-ui/core';

declare module '@material-ui/core/styles/createTheme' {
  interface ThemeOptions {
    itemsPosition: {
      display?: string;
      justifyContent?: string;
    };
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            height?: string;
            margin?: number;
            padding?: number;
          };
          html: {
            height?: string;
          };
        };
      };
    };
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  }
}

export let theme: Theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: '100%',
          margin: 0,
          padding: 0,
        },
        html: {
          height: '100%',
        },
      },
    },
  },
  itemsPosition: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 815,
      md: 1115,
      lg: 1415,
      xl: 1536,
    },
  },
});
