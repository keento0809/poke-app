import Link from "next/link";
import PokemonDetail from "../../../features/detail/PokemonDetail";
import { usePokemonsPage } from "../../../services/pages/Pokemons/PokemonsPage";
import styles from "../../../styles/Home.module.css";

// TODO: Need to fix type definition here
interface Props {
  results: any;
  resultsData: any;
}

const PokemonsPage: React.FC<Props> = ({ results, resultsData }) => {
  const {
    displayData,
    handleLoadMore,
    handleSearch,
    isShowcasedAll,
    isSearching,
    searchInputRef,
    searchResults,
  } = usePokemonsPage({ results, resultsData });
  return (
    <div className={styles.main}>
      <h2 className="text-xl pb-3 text-purple-400 font-bold">Search Pokemon</h2>
      <form className="w-10/12 max-w-345 md:max-w-500 xl:max-w-650 mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium sr-only dark:text-gray-300 text-gray-900"
        >
          Search
        </label>
        <div className="relative ml-auto mr-auto">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 cursor-pointer">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            ref={searchInputRef}
            onKeyUp={handleSearch}
            id="default-search"
            className="block p-4 pl-10 w-full mx-auto text-sm text-gray-900 rounded-lg border border-purple-400 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            placeholder="Search"
          />
        </div>
      </form>
      <div className="text-center">
        <div className="overflow-scroll max-h-500 md:max-h-450 lg:max-h-420 my-6 flex flex-row flex-wrap">
          {isSearching &&
            searchResults.map((pokemon, index) => {
              const pokemonIndex = pokemon.url.substring(
                34,
                pokemon.url.length - 1
              );
              return (
                <div className="py-3 text-center min-w-122" key={index}>
                  <Link href={`/pokemons/${pokemonIndex}`}>
                    <span className="text-xl text-purple-400 cursor-pointer">
                      {" "}
                      {pokemon.name}
                    </span>
                  </Link>
                </div>
              );
            })}
          {!isSearching &&
            displayData.map((pokemon, index) => {
              const pokemonIndex = pokemon.id;
              return (
                <div
                  className="py-3 basis-4/12 md:basis-3/12 xl:basis-1/5"
                  key={index}
                >
                  <PokemonDetail
                    pokemonId={pokemonIndex}
                    type={pokemon.types[0].type.name}
                    image={pokemon.sprites.other.home.front_default}
                  />
                </div>
              );
            })}
        </div>
        {!isSearching && (
          <button
            disabled={isShowcasedAll}
            onClick={handleLoadMore}
            className={`mx-2 my-5 transition duration-150 ease-in-out hover:border-purple-500 hover:text-purple-500 rounded border border-purple-400 text-purple-400 px-8 py-3 text-sm  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-purple-500 ${
              isShowcasedAll && "opacity-40"
            }`}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default PokemonsPage;
