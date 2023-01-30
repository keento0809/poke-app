type BooleansObj = {
  isMain: boolean;
  loading: boolean;
};

export type AppContextType = {
  favorites: any[];
  addFavorite: (pokemon: any) => void;
  removeFavorite: (pokemon: any) => void;
  isNotify: boolean;
  deleteNotify: boolean;
  setNotification: (type: string) => void;
  turnoffNotification: (type: string) => void;
  isMain: boolean;
  handleToggleIsMain: (boolean: boolean) => void;
  loading: boolean;
  handleLoading: (boolean: boolean) => void;
  booleans: BooleansObj;
  setBooleans: (name: string, bool: boolean) => void;
};
