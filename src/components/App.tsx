import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { RootRouter } from '../routers/RootRouter';

import { AuthProvider } from '@hooks';

import { theme } from '@theme/theme';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RootRouter />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
