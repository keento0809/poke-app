import { useEffect, useState } from "react";
import Meta from "../../Meta/Meta";
import FavoritesList from "../../features/favorites/FavoritesList";
import SuccessAlert from "../../components/Alert/SuccessAlert";
import DeleteAlert from "../../components/Alert/DeleteAlert";
import { useAppContext } from "../../context/state";
import TransitionButton from "../../components/Button/TransitionButton";
import { useRouter } from "next/router";

const Favorites = () => {
  const [favoriteLength, setFavoriteLength] = useState(0);
  const {
    favorites,
    turnoffNotification,
    isNotify,
    deleteNotify,
    handleLoading,
  } = useAppContext();
  const router = useRouter();

  const handleClick = (link) => {
    handleLoading(true);
    router.replace(link);
  };

  useEffect(() => {
    setFavoriteLength(favorites.length);
  }, [favorites.length]);

  useEffect(() => {
    setTimeout(() => {
      turnoffNotification("Success");
      turnoffNotification("Delete");
    }, 1000);
  }, []);

  return (
    <>
      <Meta title="Favorites" />
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
          <TransitionButton
            onClick={() => handleClick("/pokemon")}
            text="BACK"
          />
        </div>

        {isNotify && <SuccessAlert />}
        {deleteNotify && <DeleteAlert />}
      </div>
    </>
  );
};

export default Favorites;
