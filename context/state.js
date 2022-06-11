import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [isNotify, setIsNotify] = useState(false);

  const handleAddFavorite = (pokemon) => {
    console.log(pokemon);
    setFavorites([...favorites, pokemon]);
  };
  const handleRemoveFavorite = (pokemon) => {
    const updatedFavorites = favorites.filter(
      (poke) => poke.name !== pokemon.name
    );
    setFavorites(updatedFavorites);
  };

  const handleSetNotification = () => {
    setIsNotify(true);
    // setTimeout =
    //   (() => {
    //     setIsNotify(false);
    //   },
    //   1000);
  };

  const handleTurnoffNotification = () => {
    setIsNotify(false);
  };

  let sharedState = {
    favorites: favorites,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    isNotify: isNotify,
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
