import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../components/context/state";

interface FavoritesPageStates {
  favoriteLength: number;
  handleClick: (link: string) => void;
}

type States = FavoritesPageStates;

const useFavoritesPage = (): States => {
  const [favoriteLength, setFavoriteLength] = useState(0);
  const { favorites, handleLoading } = useContext(AppContext);

  const router = useRouter();

  const handleClick = (link: string) => {
    handleLoading(true);
    router.replace(link);
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
