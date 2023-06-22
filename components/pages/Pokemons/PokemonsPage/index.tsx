import { useTranslation } from "next-i18next";
// import Link from "next/link";
import PokemonImageCard from "../../../../features/detail/PokemonImageCard";
import { ResultsData } from "../../../../pages/pokemons";
import { usePokemonsPage } from "../../../../services/pages/Pokemons/PokemonsPage";
import styles from "../../../../styles/Home.module.css";
import BasicButton from "../../../common/Button/BasicButton";
import SearchInput from "../../../common/Input/SearchInput";

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
        <SearchInput
          searchInputRef={searchInputRef}
          handleSearch={handleSearch}
        />
      </form>
      <div className="text-center">
        <div className="my-6 flex flex-row flex-wrap">
          {/* TODO: Neet to re-create the logic for search function */}
          {/* {isSearching &&
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
            })} */}
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
