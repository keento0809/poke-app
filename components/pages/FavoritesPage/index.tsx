import { useTranslation } from "next-i18next";
import { useContext } from "react";
import { useFavoritesPage } from "../../../services/pages/Favorites/FavoritesPage";
import BasicButton from "../../common/Button/BasicButton";
import PokemonsList from "../../common/List/PokemonsList";
import { AppContext } from "../../context/state";

const FavoritesPage: React.FC = () => {
  const { favoriteLength, handleClick } = useFavoritesPage();
  const { t } = useTranslation();
  const { favorites } = useContext(AppContext);

  return (
    <div className="pt-14 px-6 min-h-screen">
      <div className="pt-6 text-center">
        <h2 className="text-xl font-bold text-purple-400">
          {t("favoritesPage.title")}
        </h2>
      </div>
      <div className="py-6 text-center">
        {favoriteLength === 0 && (
          <p className="pt-6 pb-4 font-bold text-purple-400">
            {t("favoritesPage.noPokemonText")}
          </p>
        )}
        {favoriteLength > 0 && <PokemonsList pokemonsData={favorites} />}
      </div>
      <div className="py-4 text-center">
        <BasicButton
          onClick={() => handleClick()}
          text={t("button.backButtonText")}
        />
      </div>

      {/* // TODO: refactor this? */}
      {/* {isNotify && <SuccessAlert />}
      {deleteNotify && <DeleteAlert />} */}
    </div>
  );
};

export default FavoritesPage;
