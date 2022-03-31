import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useDataManagement } from './useDataManagement';

import { RepetiCardsData } from '@helper/interface';
import { DataDeck, Status } from './interface';

type Params = {
  deckId?: string;
};

interface DataToUpdateDB {
  addDeck?: DataDeck;
  deleteCard?: DeleteCardProps;
}

interface DeleteCardProps {
  deckId: string;
  cardId: string;
}

interface UpdateCardsDB {
  getRepetitionCondition: (
    repetiCardsData: RepetiCardsData,
    rating: string
  ) => void;
  setDataToUpdateDB: React.Dispatch<React.SetStateAction<DataToUpdateDB>>;
  status: Status | undefined;
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}

type GetRepetitionCondition = (
  repetiCardsData: RepetiCardsData,
  rating: string
) => void;

export function useUpdateCardsDB(): UpdateCardsDB {
  const [status, setStatus] = useState<Status>();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [dataToUpdateDB, setDataToUpdateDB] = useState<DataToUpdateDB>({});

  const { deleteCard, addDeck, updateRepetitionsData } = useDataManagement();

  const { deckId } = useParams<Params>();

  const getRepetitionCondition: GetRepetitionCondition = (
    repetiCardsData,
    rating
  ) => {
    deckId && updateRepetitionsData(repetiCardsData, deckId, rating);
  };

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
    if (dataToUpdateDB.deleteCard) {
      const { deckId, cardId } = dataToUpdateDB.deleteCard;
      deleteCard(deckId, cardId)
        .then((status) => {
          setStatus(status);
          setIsOpen(true);
        })
        .catch((status) => {
          setStatus(status);
          setIsOpen(true);
        });
    }
  }, [dataToUpdateDB.deleteCard, deleteCard]);

  return {
    getRepetitionCondition,
    setDataToUpdateDB,
    status,
    isOpen,
    setIsOpen,
  };
}
// import { useCallback, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// import { useDataManagement } from './useDataManagement';

// import { RepetiCardsData } from '../helper/interface';
// import { DataDeck, Status } from './interface';

// type Params = {
//   deckId?: string;
// };

// interface DataToUpdateDB {
//   addDeck?: DataDeck;
//   deleteCard?: DeleteCardProps;
// }

// interface DeleteCardProps {
//   deckId: string;
//   cardId: string;
// }

// interface UpdateCardsDB {
//   updateRepetitionsData: (
//     repetiCardsData: RepetiCardsData,
//     rating: string
//   ) => void;
//   setDataToUpdateDB: React.Dispatch<React.SetStateAction<DataToUpdateDB>>;
//   status: Status | undefined;
//   isOpen: boolean;
//   setIsOpen: React.Dispatch<boolean>;
// }

// type UpdateRepetitionsData = (
//   repetiCardsData: RepetiCardsData,
//   rating: string
// ) => void;

// export function useUpdateCardsDB(): UpdateCardsDB {
//   const [status, setStatus] = useState<Status>();

//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   const [dataToUpdateDB, setDataToUpdateDB] = useState<DataToUpdateDB>({});

//   const dataManagement = useDataManagement();

//   const { deckId } = useParams<Params>();

//   const updateRepetitionsData: UpdateRepetitionsData = (
//     repetiCardsData,
//     rating
//   ) => {
//     deckId &&
//       dataManagement.updateRepetitionsData(repetiCardsData, deckId, rating);
//   };

//   const addDeck = useCallback(async (newDeck: DataDeck) => {
//     try {
//       const status = await dataManagement.addDeck(newDeck);
//       setStatus(status);
//       setIsOpen(true);
//     } catch (error) {
//       if (error instanceof Error) {
//         setStatus(error);
//         setIsOpen(true);
//       }
//     }
//   }, []);

//   const deleteCard = useCallback(async (urlParams: DeleteCardProps) => {
//     const { deckId, cardId } = urlParams;
//     try {
//       const status = await dataManagement.deleteCard(deckId, cardId);
//       setStatus(status);
//       setIsOpen(true);
//     } catch (error) {
//       if (error instanceof Error) {
//         setStatus(error);
//         setIsOpen(true);
//       }
//     }
//   }, []);

//   useEffect(() => {
//     dataToUpdateDB.addDeck && addDeck(dataToUpdateDB.addDeck);
//   }, [dataToUpdateDB.addDeck]);

//   useEffect(() => {
//     dataToUpdateDB.deleteCard && deleteCard(dataToUpdateDB.deleteCard);
//   }, [dataToUpdateDB.deleteCard]);

//   return {
//     updateRepetitionsData,
//     setDataToUpdateDB,
//     status,
//     isOpen,
//     setIsOpen,
//   };
// }
