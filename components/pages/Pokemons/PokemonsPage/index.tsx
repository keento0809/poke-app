import { useTranslation } from "next-i18next";
import { PokemonData } from "../../../../types/pokemons";
// import Link from "next/link";
import { usePokemonsPage } from "../../../../services/pages/Pokemons/PokemonsPage";
import styles from "../../../../styles/Home.module.css";
import BasicButton from "../../../common/Button/BasicButton";
import SearchInput from "../../../common/Input/SearchInput";
import PokemonsList from "../../../common/List/PokemonsList";

interface Props {
  pokemonData: PokemonData[];
}

const PokemonsPage: React.FC<Props> = ({ pokemonData }) => {
  const {
    displayData,
    handleLoadMore,
    handleSearch,
    isShowcasedAll,
    isSearching,
    searchInputRef,
  } = usePokemonsPage({ pokemonData });
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
      <div className="text-center w-full">
        <PokemonsList pokemonsData={displayData} />
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
