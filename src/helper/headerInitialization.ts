export function headerInitialization(action: string, title: string) {
  switch (action) {
    case 'add-deck':
      return 'You are creating new deck.';
    case 'add-card':
      return 'You are creating new card.';
    case 'delete-card':
      return `Are you sure you want to delete this Card: '${title}'?`;
    case 'delete-deck':
      return `Are you sure you want to delete this Deck: '${title}'?`;
    default:
      return 'Error';
  }
}
