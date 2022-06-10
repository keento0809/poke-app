import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [favorites, setFavorites] = useState([]);

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

  let sharedState = {
    favorites: favorites,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
