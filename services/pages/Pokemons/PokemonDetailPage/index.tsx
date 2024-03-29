import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../components/context/state";
import { OriginalPokemonData, PokemonData } from "../../../../types/pokemons";

interface PokemonDetailPageProps {
  fetchedPokemon: OriginalPokemonData;
  fixedEvolvesPokemon: OriginalPokemonData;
}

interface PokemonDetailPageStates {
  handleMovePreviousPokemon: () => void;
  handleMoveNextPokemon: () => void;
  isFavorite: boolean;
  handleAddToFavorite: () => void;
  handleRemoveFavorite: () => void;
  handleJumpToPage: () => void;
}

type Props = PokemonDetailPageProps;

type States = PokemonDetailPageStates;

const usePokemonDetailPage = ({
  fetchedPokemon,
  fixedEvolvesPokemon,
}: Props): States => {
  const [isFavorite, setIsFavorite] = useState(false);
  const {
    addFavorite,
    // setNotification,
    removeFavorite,
    handleLoading,
    favorites,
  } = useContext(AppContext);
  const router = useRouter();

  const fixedFetchedPokemon: PokemonData = {
    pokemonId: fetchedPokemon.id,
    name: fetchedPokemon.name,
    image: fetchedPokemon.sprites.other.home.front_default,
  };

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
    addFavorite(fixedFetchedPokemon);
    router.push("/favorites");
    // setNotification("Success");
  };

  const handleRemoveFavorite = () => {
    setIsFavorite(false);
    removeFavorite(fixedFetchedPokemon);
    router.push("/favorites");
    // setNotification("Delete");
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
