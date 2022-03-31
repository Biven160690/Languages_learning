import React, { useState, MouseEvent } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

import { ProfileAvatar } from './ProfileAvatar';
import { ProfileActions } from './ProfileActions';

import { useAuth } from '@hooks';

import { Status } from '@hooks/interface';
import { triggerAlert, deleteCurrentUser } from '@helper';

export function UserProfile() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [status, setStatus] = useState<Status>();

  const auth = useAuth();

  const navigate: NavigateFunction = useNavigate();

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleRedirectSingIn = () => {
    navigate('/singIn');
    handleCloseUserMenu();
  };

  const handleRedirectSingUp = () => {
    navigate('/singUp');
    handleCloseUserMenu();
  };

  function handleClickLogout() {
    auth
      .logout()
      .then(() => {
        navigate('/');
        deleteCurrentUser('userId');
        handleCloseUserMenu();
      })
      .catch((error) => {
        setStatus(new Error(error));
        setIsOpen(true);
      });
  }

  const alertProps = {
    status,
    isOpen,
    setIsOpen,
  };

  return (
    <React.Fragment>
      {isOpen && triggerAlert(alertProps)}
      <Box sx={{ flexGrow: 0 }}>
        <ProfileAvatar handleOpenUserMenu={handleOpenUserMenu} />
        <ProfileActions
          anchorElUser={anchorElUser}
          handleCloseUserMenu={handleCloseUserMenu}
          handleRedirectSingIn={handleRedirectSingIn}
          handleRedirectSingUp={handleRedirectSingUp}
          handleClickLogout={handleClickLogout}
        />
      </Box>
    </React.Fragment>
  );
}
