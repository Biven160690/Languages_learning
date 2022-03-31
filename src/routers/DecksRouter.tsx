import { Route, Routes } from 'react-router';

import { ModalDecksControl } from '@containers/modal';

import { ModalDecksProps } from '@components/modal/interface';

export function DecksRouter(callbacks: ModalDecksProps) {
  return (
    <Routes>
      <Route
        path=':action/:item/:deckId'
        element={<ModalDecksControl {...callbacks} />}
      />
      <Route path=':action' element={<ModalDecksControl {...callbacks} />} />
    </Routes>
  );
}
