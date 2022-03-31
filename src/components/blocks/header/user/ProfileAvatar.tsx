import { MouseEvent } from 'react';
import { IconButton, Avatar, Tooltip } from '@mui/material';

interface ProfileAvatarProps {
  handleOpenUserMenu: (event: MouseEvent<HTMLElement>) => void;
}

export function ProfileAvatar({ handleOpenUserMenu }: ProfileAvatarProps) {
  return (
    <Tooltip title='User profile'>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar />
      </IconButton>
    </Tooltip>
  );
}
