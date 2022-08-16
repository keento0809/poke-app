import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [isNotify, setIsNotify] = useState(false);
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

  let sharedState = {
    favorites: favorites,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    isNotify: isNotify,
    deleteNotify: deleteNotify,
    setNotification: handleSetNotification,
    turnoffNotification: handleTurnoffNotification,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
