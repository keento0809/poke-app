import { Tooltip } from "flowbite-react";
import { useTranslation } from "next-i18next";
import { usePokemonDetailPage } from "../../../../services/pages/Pokemons/PokemonDetailPage";
import { OriginalPokemonData } from "../../../../types/pokemons";
import AbilityBar from "../../../common/Bar/AbilityBar";
import BasicButton from "../../../common/Button/BasicButton";
import FavoriteContainedStarIcon from "../../../common/Icons/FavoriteContainedStarIcon";
import FavoriteOutlinedStarIcon from "../../../common/Icons/FavoriteOutlinedStarIcon";
import LeftArrowIcon from "../../../common/Icons/LeftArrowIcon";
import RightArrowIcon from "../../../common/Icons/RightArrowIcon";

interface Props {
  fetchedPokemon: OriginalPokemonData;
  fixedEvolvesPokemon: OriginalPokemonData;
}

const PokemonDetailPage: React.FC<Props> = ({
  fetchedPokemon,
  fixedEvolvesPokemon,
}) => {
  const {
    handleMovePreviousPokemon,
    handleMoveNextPokemon,
    isFavorite,
    handleAddToFavorite,
    handleRemoveFavorite,
    handleJumpToPage,
  } = usePokemonDetailPage({ fetchedPokemon, fixedEvolvesPokemon });
  const { t } = useTranslation();

  return (
    <div className="pt-12">
      <div className="px-6 pt-6 flex flex-row justify-around">
        {fetchedPokemon.id > 1 && (
          <Tooltip
            content={t("pokemonDetailPage.previousTooltip")}
            placement="left"
          >
            <div onClick={handleMovePreviousPokemon} className="cursor-pointer">
              <LeftArrowIcon />
            </div>
          </Tooltip>
        )}
        {fetchedPokemon.id < 251 && (
          <Tooltip
            content={t("pokemonDetailPage.nextTooltip")}
            placement="right"
          >
            <div onClick={handleMoveNextPokemon} className="cursor-pointer">
              <RightArrowIcon />
            </div>
          </Tooltip>
        )}
      </div>
      <div className="text-center">
        <div className="w-full rounded-lg pt-6 pb-10">
          <div className="container mx-auto px-6 flex items-start justify-center">
            <div aria-label="group of cards" className="w-full relative">
              <div
                className={`absolute top-0 left-0 px-2 py-2 rounded-lg border border-purple-300 dark:border-purple-500 ${
                  isFavorite ? "bg-purple-200" : "bg-white dark:bg-gray-800"
                }`}
              >
                {!isFavorite && (
                  <FavoriteOutlinedStarIcon onClick={handleAddToFavorite} />
                )}
                {isFavorite && (
                  <FavoriteContainedStarIcon onClick={handleRemoveFavorite} />
                )}
              </div>
              <div className="flex flex-col lg:flex-row mx-auto dark:bg-gray-800 shadow-xl dark:shadow-gray-900 rounded">
                <div className="w-full lg:w-1/3 px-12 flex flex-col items-center pt-5 pb-10">
                  <div className="">
                    <img
                      width="300px"
                      height="300px"
                      src={fetchedPokemon.sprites.other.home.front_default}
                      alt="pokemon-img"
                    />
                  </div>
                  <span
                    tab-index="0"
                    className="focus:outline-none text-gray-800 dark:text-gray-100 focus:underline"
                  >
                    <h2 className="py-6 text-2xl tracking-normal font-bold mb-1">
                      {fetchedPokemon.name}
                    </h2>
                  </span>
                  <div className="flex items-start">
                    <div className="min-w-[45px]">
                      <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                        {fetchedPokemon.weight}
                      </h2>
                      <a
                        tab-index="0"
                        className="focus:outline-none focus:underline focus:text-gray-400 text-gray-800 hover:text-gray-400 cursor-pointer"
                      >
                        <p className=" dark:text-gray-100 text-sm leading-5">
                          {t("pokemonDetailPage.weight")}
                        </p>
                      </a>
                    </div>
                    <div className="mx-6 lg:mx-3 xl:mx-6 px-8 lg:px-4 xl:px-8 border-l border-r">
                      <h2 className="dark:text-gray-100 text-gray-600 text-2xl leading-6 mb-2 text-center">
                        {fetchedPokemon.id}
                      </h2>
                      <a
                        tab-index="0"
                        className="focus:outline-none focus:underline focus:text-gray-400 hover:text-gray-400 cursor-pointer"
                      >
                        <p className=" dark:text-gray-100 text-sm leading-5">
                          No.
                        </p>
                      </a>
                    </div>
                    <div className="min-w-[45px]">
                      <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                        {fetchedPokemon.height}
                      </h2>
                      <a
                        tab-index="0"
                        className="focus:outline-none focus:underline focus:text-gray-400 text-gray-800 hover:text-gray-400 cursor-pointer"
                      >
                        <p className=" dark:text-gray-100 text-sm leading-5">
                          {t("pokemonDetailPage.height")}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
                  <div className="flex items-start justify-between">
                    {fetchedPokemon.types.map((pokemonType, index) => {
                      return (
                        <span
                          key={index}
                          tab-index="0"
                          className="border border-purple-400 dark:border-purple-500 mx-4  bg-white text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3"
                        >
                          {pokemonType.type.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="w-full lg:w-1/3 flex-col flex justify-center items-center px-12 py-8">
                  {fetchedPokemon.stats.map((stats, index) => {
                    return (
                      <div
                        className="w-full flex flex-col items-center"
                        key={index}
                      >
                        <div className="w-full flex flex-row justify-between items-center">
                          <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                            {t(`pokemonDetailPage.${stats.stat.name}`)}
                          </h2>
                          <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                            {stats.base_stat}
                          </h2>
                        </div>
                        <AbilityBar />
                      </div>
                    );
                  })}
                </div>
                <div className="w-full lg:w-1/3 px-12 border-t lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
                  <div className="pb-3">
                    <h3 className="text-xl dark:text-white">
                      {t("pokemonDetailPage.evolution")}
                    </h3>
                  </div>
                  <div className="mx-auto pb-4">
                    {fixedEvolvesPokemon && (
                      <img
                        className="inline-block"
                        width="100px"
                        height="100px"
                        src={`${
                          fixedEvolvesPokemon
                            ? fixedEvolvesPokemon.sprites.other.home
                                .front_default
                            : ""
                        }`}
                        alt="pokemon-img"
                      />
                    )}
                    {!fixedEvolvesPokemon && (
                      <div className="min-h-100 flex justify-center items-center">
                        <p>{t("pokemonDetailPage.noEvolutionText")}</p>
                      </div>
                    )}
                  </div>
                  <div className="py-4">
                    <BasicButton
                      onClick={handleJumpToPage}
                      text={
                        fixedEvolvesPokemon
                          ? t("pokemonDetailPage.detailButton")
                          : t("pokemonDetailPage.backButton")
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
