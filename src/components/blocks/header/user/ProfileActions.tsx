import { Link, Menu, MenuItem, Typography } from '@mui/material';

import { useAuth } from '@hooks';

interface ProfileActionsProps {
  anchorElUser: HTMLElement | null;
  handleCloseUserMenu: () => void;
  handleRedirectSignIn: () => void;
  handleRedirectSignUp: () => void;
  handleClickLogout: () => void;
}

export function ProfileActions(props: ProfileActionsProps) {
  const {
    anchorElUser,
    handleCloseUserMenu,
    handleRedirectSignIn,
    handleRedirectSignUp,
    handleClickLogout,
  } = props;

  const auth = useAuth();

  return (
    <Menu
      sx={{ mt: '45px' }}
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}>
      {!auth.currentUser && (
        <div>
          <MenuItem onClick={handleRedirectSignIn}>
            <Link underline='none'>
              <Typography>SingIn</Typography>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleRedirectSignUp}>
            <Link underline='none'>
              <Typography>SingUp</Typography>
            </Link>
          </MenuItem>
        </div>
      )}
      {auth.currentUser && (
        <MenuItem onClick={handleClickLogout}>
          <Link underline='none'>
            <Typography>Log out</Typography>
          </Link>
        </MenuItem>
      )}
    </Menu>
  );
}
