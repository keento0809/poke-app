import React, { useEffect, useState } from "react";
import FavoritesList from "../../components/favorites/FavoritesList";
import { useAppContext } from "../../context/state";

const Favorites = () => {
  const [favoriteLength, setFavoriteLength] = useState(0);
  const favoriteCtx = useAppContext();

  useEffect(() => {
    console.log(favoriteCtx.favorites);
    setFavoriteLength(favoriteCtx.favorites.length);
  }, [favoriteCtx.favorites.length]);

  return (
    <div className="pt-14">
      <div className="pt-6 px-6">
        {favoriteLength === 0 && (
          <p className="py-4 font-bold text-purple-400">No Pokemon found.</p>
        )}
        {favoriteLength > 0 && <FavoritesList />}
      </div>
    </div>
  );
};

// export const getStaticProps = () => {};

export default Favorites;
