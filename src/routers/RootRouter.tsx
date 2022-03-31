import { Routes, Route } from 'react-router-dom';

import { Cards, Decks, NotFound, SingIn, SingUp, Home } from '@pages';
import { Layout } from '@components/layout/Layout';

export function RootRouter() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/singin' element={<SingIn />} />
        <Route path='/singup' element={<SingUp />} />
        <Route path='/decks/*' element={<Decks />} />
        <Route path='/deck/:deckId/*' element={<Cards />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
