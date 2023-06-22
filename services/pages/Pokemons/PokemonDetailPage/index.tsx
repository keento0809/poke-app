import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../components/context/state";

interface Props {
  fetchedPokemon: any;
  fixedEvolvesPokemon: any;
}

interface PokemonDetailPageStates {}

const usePokemonDetailPage = ({
  fetchedPokemon,
  fixedEvolvesPokemon,
}: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const {
    addFavorite,
    setNotification,
    removeFavorite,
    handleLoading,
    favorites,
  } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    handleLoading(false);
  }, [router.asPath, handleLoading]);

  useEffect(() => {
    const favList = favorites;

    const checkInFavorite = (favList) => {
      for (const index in favList) {
        if (favList[index].name === fetchedPokemon.name) {
          setIsFavorite(true);
          break;
        }
      }
    };

    setIsFavorite(false);
    checkInFavorite(favList);
  }, [fetchedPokemon.id, favorites, fetchedPokemon.name]);

  const handleAddToFavorite = () => {
    setIsFavorite(true);
    addFavorite(fetchedPokemon);
    router.push("/favorites");
    setNotification("Success");
  };

  const handleRemoveFavorite = () => {
    setIsFavorite(false);
    removeFavorite(fetchedPokemon);
    router.push("/favorites");
    setNotification("Delete");
  };

  const handleMovePreviousPokemon = () => {
    handleLoading(true);
    router.push(`/pokemons/${fetchedPokemon.id - 1}`);
  };

  const handleMoveNextPokemon = () => {
    handleLoading(true);
    router.push(`/pokemons/${fetchedPokemon.id + 1}`);
  };

  const handleJumpToPage = () => {
    handleLoading(true);
    router.push(
      `/pokemons/${fixedEvolvesPokemon ? fixedEvolvesPokemon.id : ""}`
    );
  };

  return {
    handleMovePreviousPokemon,
    handleMoveNextPokemon,
    isFavorite,
    handleAddToFavorite,
    handleRemoveFavorite,
    handleJumpToPage,
  };
};

export { usePokemonDetailPage };
