import { MouseEvent } from 'react';

export type SelectedSideCard = { id: number; title: string };

export type GetRating = (
  event: MouseEvent<HTMLButtonElement | HTMLDivElement>
) => void;
