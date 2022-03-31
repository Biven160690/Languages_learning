import { useEffect, useState } from 'react';

import { useDataManagement } from './useDataManagement';

import { AddCardProps, DataDeck } from './interface';

interface DataToUpdateDB {
  addDeck?: DataDeck;
  deleteDeck?: string;
  addCard?: AddCardProps;
}

interface Status {
  name: string;
  message: string;
}

interface UpdateDecksDB {
  setDataToUpdateDB: React.Dispatch<React.SetStateAction<DataToUpdateDB>>;
  status: Status | undefined;
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}

export function useUpdateDecksDB(): UpdateDecksDB {
  const [status, setStatus] = useState<Status>();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [dataToUpdateDB, setDataToUpdateDB] = useState<DataToUpdateDB>({});

  const { addCard, deleteDeck, addDeck } = useDataManagement();

  useEffect(() => {
    if (dataToUpdateDB.addDeck) {
      addDeck(dataToUpdateDB.addDeck)
        .then((status) => {
          setStatus(status);
          setIsOpen(true);
        })
        .catch((status) => {
          setStatus(status);
          setIsOpen(true);
        });
    }
  }, [addDeck, dataToUpdateDB.addDeck]);

  useEffect(() => {
    if (dataToUpdateDB.addCard) {
      addCard(dataToUpdateDB.addCard)
        .then((status) => {
          setStatus(status);
          setIsOpen(true);
        })
        .catch((status) => {
          setStatus(status);
          setIsOpen(true);
        });
    }
  }, [addCard, dataToUpdateDB.addCard]);

  useEffect(() => {
    if (dataToUpdateDB.deleteDeck) {
      deleteDeck(dataToUpdateDB.deleteDeck)
        .then((status) => {
          setStatus(status);
          setIsOpen(true);
        })
        .catch((status) => {
          setStatus(status);
          setIsOpen(true);
        });
    }
  }, [deleteDeck, dataToUpdateDB.deleteDeck]);

  return {
    setDataToUpdateDB,
    status,
    isOpen,
    setIsOpen,
  };
}
