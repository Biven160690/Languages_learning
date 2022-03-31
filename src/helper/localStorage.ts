export const setCurrentUser = (item: string, userId: string) => {
  localStorage.setItem(item, JSON.stringify(userId));
};

export const getCurrentUser = (item: string) => {
  const saved = localStorage.getItem(item);
  return saved ? JSON.parse(saved) : '';
};

export const deleteCurrentUser = (item: string) => {
  localStorage.removeItem(item);
};
