import {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AppContext } from "../../../../components/context/state";
import { INITIAL_LOAD_COUNT } from "../../../../constants";

// TODO: fix these type definitions later
interface PokemonsPageProps {
  results: any;
  resultsData: any;
}

interface PokemonsPageStates {
  searchInputRef: MutableRefObject<HTMLInputElement>;
  handleLoadMore: () => void;
  handleSearch: () => void;
  isSearching: boolean;
  isShowcasedAll: boolean;
  // TODO: fix these type definitions later
  displayData: any[];
  searchResults: any[];
}

type Props = PokemonsPageProps;

type States = PokemonsPageStates;

const usePokemonsPage = ({ results, resultsData }: Props): States => {
  const [displayData, setDisplayData] = useState(resultsData);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [loadCount, setLoadCount] = useState(1);
  const [isShowcasedAll, setIsShowcasedAll] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { handleLoading } = useContext(AppContext);

  const handleLoadMore = async () => {
    handleLoading(true);
    const additionalData = [];
    for (
      let i = loadCount * INITIAL_LOAD_COUNT + 1;
      i <= loadCount * INITIAL_LOAD_COUNT + (INITIAL_LOAD_COUNT - 5);
      i++
    ) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_POKE_API_ENDPOINT}/${i}`
      );
      const data = await res.json();
      additionalData.push(data);
    }
    setDisplayData([...displayData, ...additionalData]);
    setLoadCount((prevState) => prevState + 1);
    handleLoading(false);
  };

  const handleSearch = () => {
    const inputValue = searchInputRef.current.value;
    setIsSearching(inputValue.length > 0 ? true : false);
    const searching = results.filter((pokemon) => {
      return pokemon.name.includes(inputValue.toLowerCase());
    });
    setSearchResults(searching);
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
    searchResults,
  };
};

export { usePokemonsPage };
