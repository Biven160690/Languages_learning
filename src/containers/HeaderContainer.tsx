import {
  NavigateFunction,
  PathMatch,
  useLocation,
  useMatch,
  useNavigate,
} from 'react-router';

import { AppBar, Toolbar } from '@mui/material';

import { HeaderButtons } from '@components/blocks/header';
import { HeaderLinks } from '@components/blocks/header';
import { UserProfile } from '@components/blocks/header/user/UserProfile';

import { useAuth } from '@hooks';
import { useStyles } from '@theme/style';

export function HeaderContainer() {
  const { header, headerActions } = useStyles();

  const { pathname } = useLocation();

  const navigate: NavigateFunction = useNavigate();

  const match: PathMatch<string> | null = useMatch('/');

  const auth = useAuth();

  const addDeckPath: string = match
    ? `${pathname + 'add-deck'}`
    : `${pathname}/${'add-deck'}`;

  const openAddDeckForm = () => {
    navigate(addDeckPath, { state: { open: true } });
  };

  const hasDisplayDeckButton =
    !!auth.currentUser && !['/singIn', '/singUp'].includes(pathname);

  const hasDisplayAddButton =
    !!auth.currentUser && !['/', '/singIn', '/singUp'].includes(pathname);

  return (
    <AppBar color='inherit' role='toolbar'>
      <Toolbar className={header}>
        <HeaderLinks />
        <div className={headerActions}>
          <HeaderButtons
            handleClickOpenForm={openAddDeckForm}
            hasDisplayAddButton={hasDisplayAddButton}
            hasDisplayDeckButton={hasDisplayDeckButton}
          />
          <UserProfile />
        </div>
      </Toolbar>
    </AppBar>
  );
}
