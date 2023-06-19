import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../../components/context/state";
import { useRouter } from "next/router";

const useFavoritesPage = () => {
  const [favoriteLength, setFavoriteLength] = useState(0);
  const { favorites, handleLoading } = useContext(AppContext);

  const router = useRouter();

  const handleClick = (link) => {
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
