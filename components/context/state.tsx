import { createContext, useState } from "react";
import { AppContextType } from "../../types/appContext";

export const AppContext = createContext<AppContextType | null>(null);

export function AppWrapper({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [isMain, setIsMain] = useState(false);
  const [isNotify, setIsNotify] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteNotify, setDeleteNotify] = useState(false);
  const [booleans, setBooleans] = useState({
    isMain: false,
    loading: false,
  });

  const handleSetBooleans = (name, bool) => {
    setBooleans({
      ...booleans,
      [name]: bool,
    });
  };

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

  const handleToggleIsMain = (boolean) => {
    setIsMain(boolean);
  };

  const handleLoading = (boolean) => {
    setLoading(boolean);
  };

  const sharedState = {
    favorites,
    booleans,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    isNotify,
    deleteNotify,
    setNotification: handleSetNotification,
    turnoffNotification: handleTurnoffNotification,
    isMain,
    handleToggleIsMain,
    loading,
    handleLoading,
    setBooleans: handleSetBooleans,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}
