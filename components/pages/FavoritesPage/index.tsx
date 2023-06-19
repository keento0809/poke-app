import FavoritesList from "../../../features/favorites/FavoritesList";
import { useFavoritesPage } from "../../../services/pages/FavoritesPage";
import TransitionButton from "../../common/Button/TransitionButton";

const FavoritesPage: React.FC = () => {
  const { favoriteLength, handleClick } = useFavoritesPage();
  return (
    <div className="pt-14 px-6 min-h-screen">
      <div className="pt-6 text-center">
        <h2 className="text-xl font-bold text-purple-400">Favorites</h2>
      </div>
      <div className="pt-6 text-center max-h-550 overflow-scroll">
        {favoriteLength === 0 && (
          <p className="pt-6 pb-4 font-bold text-purple-400">
            No Pokemon found.
          </p>
        )}
        {favoriteLength > 0 && <FavoritesList />}
      </div>
      <div className="py-4 text-center">
        <TransitionButton onClick={() => handleClick("/pokemon")} text="BACK" />
      </div>

      {/* // TODO: refactor this? */}
      {/* {isNotify && <SuccessAlert />}
      {deleteNotify && <DeleteAlert />} */}
    </div>
  );
};

export default FavoritesPage;
