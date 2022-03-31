import { Route, Routes } from 'react-router';

import { ModalCardsControl } from '@containers/modal';

import { ModalCardsProps } from '@components/modal/interface';

export function CardsRouter(callbacks: ModalCardsProps) {
  return (
    <Routes>
      <Route
        path=':action/:cardId'
        element={<ModalCardsControl {...callbacks} />}
      />
      <Route path=':action' element={<ModalCardsControl {...callbacks} />} />
    </Routes>
  );
}
