import { createContext, useState } from "react";

type AppContextType = {
  favorites: any[];
  addFavorite: (_pokemon: any) => void;
  removeFavorite: (_pokemon: any) => void;
  isNotify: boolean;
  deleteNotify: boolean;
  setNotification: (_type: string) => void;
  turnoffNotification: (_type: string) => void;
  loading: boolean;
  handleLoading: (_boolean: boolean) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

export function AppWrapper({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [isNotify, setIsNotify] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteNotify, setDeleteNotify] = useState(false);

  const handleAddFavorite = (pokemon) => {
    setFavorites([...favorites, pokemon]);
  };
  const handleRemoveFavorite = (pokemon) => {
    const updatedFavorites = favorites.filter(
      (poke) => poke.name !== pokemon.name
    );
    setFavorites(updatedFavorites);
  };

  const handleSetNotification = (type) => {
    setIsNotify(false);
    setDeleteNotify(false);
    switch (type) {
      case "Success": {
        setIsNotify(true);
        break;
      }
      case "Delete": {
        setDeleteNotify(true);
        break;
      }
    }
  };

  const handleTurnoffNotification = (type) => {
    switch (type) {
      case "Success": {
        setIsNotify(false);
        break;
      }
      case "Delete": {
        setDeleteNotify(false);
        break;
      }
    }
  };

  const handleLoading = (boolean: boolean) => {
    setLoading(boolean);
  };

  const sharedState: AppContextType = {
    favorites,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    isNotify,
    deleteNotify,
    setNotification: handleSetNotification,
    turnoffNotification: handleTurnoffNotification,
    loading,
    handleLoading,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}
