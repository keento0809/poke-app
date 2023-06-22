import { useTranslation } from "next-i18next";
import Link from "next/link";
import PokemonImageCard from "../../../../features/detail/PokemonImageCard";
import { ResultsData } from "../../../../pages/pokemons";
import { usePokemonsPage } from "../../../../services/pages/Pokemons/PokemonsPage";
import styles from "../../../../styles/Home.module.css";
import BasicButton from "../../../common/Button/BasicButton";

interface Props {
  resultsData: ResultsData[];
}

const PokemonsPage: React.FC<Props> = ({ resultsData }) => {
  const {
    displayData,
    handleLoadMore,
    handleSearch,
    isShowcasedAll,
    isSearching,
    searchInputRef,
    searchResults,
  } = usePokemonsPage({ resultsData });
  const { t } = useTranslation();

  return (
    <div className={styles.main}>
      <h2 className="text-2xl pb-6 text-purple-400 font-bold">
        {t("searchBar.title")}
      </h2>
      <form className="w-10/12 max-w-[300px] mx-auto">
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
            className="block p-2 pl-10 w-full mx-auto text-sm text-gray-900 rounded-lg border border-purple-400 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            placeholder={t("searchBar.placeHolder")}
          />
        </div>
      </form>
      <div className="text-center">
        <div className="my-6 flex flex-row flex-wrap">
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
              return (
                <div
                  className="py-3 basis-4/12 md:basis-3/12 xl:basis-1/5"
                  key={index}
                >
                  <PokemonImageCard
                    pokemonId={pokemon.pokemonId}
                    image={pokemon.image}
                  />
                </div>
              );
            })}
        </div>
        {!isSearching && (
          <BasicButton
            disabled={isShowcasedAll}
            onClick={handleLoadMore}
            text={t("button.loadMoreButtonText")}
            styleProps={`${isShowcasedAll ? "opacity-40" : ""}`}
          />
        )}
      </div>
    </div>
  );
};

export default PokemonsPage;
