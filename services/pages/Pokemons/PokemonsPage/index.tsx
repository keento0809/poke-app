import {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AppContext } from "../../../../components/context/state";

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
    console.log("おそらくここはok");
    for (
      let i = Number(loadCount) * 20 + 1;
      i <= Number(loadCount) * 20 + 20;
      i++
    ) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await res.json();
      console.log("怪しい、", data);
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
