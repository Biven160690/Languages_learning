import {
  useLocation,
  useParams,
  NavigateFunction,
  useNavigate,
} from 'react-router-dom';

import { Modal } from '@components/modal/Modal';
import { ModalsTitle } from '@components/modal/ModalsTitle';
import { ModalsActions } from '@components/modal/ModalsActions';

import { useTriggerDecksForm } from '@hooks';

import { ModalDecksProps } from '@components/modal/interface';
import { headerInitialization } from '@helper/headerInitialization';

interface LocationState {
  open: boolean;
  title: string;
}

export const ModalDecksControl = (callbacks: ModalDecksProps) => {
  const location = useLocation();

  const params = useParams();

  const navigate: NavigateFunction = useNavigate();

  const form: JSX.Element = useTriggerDecksForm(callbacks);

  const action = params.action as string;

  const { open, title } = location.state as LocationState;

  const modalHeader: string = headerInitialization(action, title);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Modal isOpenModal={open} handleClickGoBack={goBack}>
      <ModalsTitle header={modalHeader} />
      <ModalsActions form={form} />
    </Modal>
  );
};
