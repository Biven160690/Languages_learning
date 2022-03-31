import { Link, Menu, MenuItem, Typography } from '@mui/material';

import { useAuth } from '@hooks';

interface ProfileActionsProps {
  anchorElUser: HTMLElement | null;
  handleCloseUserMenu: () => void;
  handleRedirectSingIn: () => void;
  handleRedirectSingUp: () => void;
  handleClickLogout: () => void;
}

export function ProfileActions(props: ProfileActionsProps) {
  const {
    anchorElUser,
    handleCloseUserMenu,
    handleRedirectSingIn,
    handleRedirectSingUp,
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
          <MenuItem onClick={handleRedirectSingIn}>
            <Link underline='none'>
              <Typography>SingIn</Typography>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleRedirectSingUp}>
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
