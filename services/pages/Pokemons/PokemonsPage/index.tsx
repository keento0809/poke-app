import {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AppContext } from "../../../../components/context/state";
import { INITIAL_LOAD_COUNT } from "../../../../constants";
import { PokemonData } from "../../../../types/pokemons";

interface PokemonsPageProps {
  pokemonData: PokemonData[];
}

interface PokemonsPageStates {
  searchInputRef: MutableRefObject<HTMLInputElement>;
  handleLoadMore: () => void;
  handleSearch: () => void;
  isSearching: boolean;
  isShowcasedAll: boolean;
  displayData: PokemonData[];
}

type Props = PokemonsPageProps;

type States = PokemonsPageStates;

const usePokemonsPage = ({ pokemonData }: Props): States => {
  const [initialPokemonData, setInitialPokemonData] =
    useState<PokemonData[]>(pokemonData);
  const [displayData, setDisplayData] = useState<PokemonData[]>(pokemonData);
  const [isSearching, setIsSearching] = useState(false);
  const [loadCount, setLoadCount] = useState(1);
  const [isShowcasedAll, setIsShowcasedAll] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { handleLoading } = useContext(AppContext);

  const handleLoadMore = async () => {
    handleLoading(true);
    const additionalData: PokemonData[] = [];
    for (
      let i = loadCount * INITIAL_LOAD_COUNT + 1;
      i <= loadCount * INITIAL_LOAD_COUNT + (INITIAL_LOAD_COUNT - 5);
      i++
    ) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_POKE_API_ENDPOINT}/${i}`
      );
      const data = await res.json();
      additionalData.push({
        pokemonId: data.id,
        name: data.name,
        image: data.sprites.other.home.front_default,
      });
    }
    setInitialPokemonData([...displayData, ...additionalData]);
    setDisplayData([...displayData, ...additionalData]);
    setLoadCount((prevState) => prevState + 1);
    handleLoading(false);
  };

  const handleSearch = () => {
    setIsSearching(true);
    const inputValue = searchInputRef.current.value;
    if (!(inputValue.length > 0)) {
      setDisplayData(initialPokemonData);
      setIsSearching(false);
      return;
    }
    const searching = displayData.filter((pokemon) => {
      return pokemon.name.includes(inputValue.toLowerCase());
    });
    setDisplayData(searching);
  };

  useEffect(() => {
    loadCount > 12 && setIsShowcasedAll(true);
  }, [loadCount]);

  return {
    searchInputRef,
    handleLoadMore,
    handleSearch,
    isSearching,
    isShowcasedAll,
    displayData,
  };
};

export { usePokemonsPage };
