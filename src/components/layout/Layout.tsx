import React from 'react';
import { Outlet } from 'react-router';

import { Footer, Header } from '../blocks';

import { useStyles } from '@theme/style';

export const Layout = () => {
  const { main } = useStyles();

  return (
    <React.Fragment>
      <Header />
      <main role='main' className={main}>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};
