import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../components/context/state";

interface FavoritesPageStates {
  favoriteLength: number;
  handleClick: () => void;
}

type States = FavoritesPageStates;

const useFavoritesPage = (): States => {
  const [favoriteLength, setFavoriteLength] = useState(0);
  const { favorites } = useContext(AppContext);
  const router = useRouter();

  const handleClick = () => {
    router.replace("/pokemons");
  };

  useEffect(() => {
    setFavoriteLength(favorites.length);
  }, [favorites.length]);

  return {
    favoriteLength,
    handleClick,
  };
};

export { useFavoritesPage };
