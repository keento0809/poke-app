import React, { useEffect, useState } from "react";
import Meta from "../../components/Meta/Meta";
import Link from "next/link";
import FavoritesList from "../../components/favorites/FavoritesList";
import SuccessAlert from "../../components/UI/Alert/SuccessAlert";
import DeleteAlert from "../../components/UI/Alert/DeleteAlert";
import { useAppContext } from "../../context/state";
import Button from "../../components/UI/Button/Button";

const Favorites = () => {
  const [favoriteLength, setFavoriteLength] = useState(0);
  const favoriteCtx = useAppContext();

  useEffect(() => {
    console.log(favoriteCtx.isNotify, favoriteCtx.deleteNotify);
    setFavoriteLength(favoriteCtx.favorites.length);
  }, [favoriteCtx.favorites.length]);

  useEffect(() => {
    setTimeout(() => {
      favoriteCtx.turnoffNotification("Success");
      favoriteCtx.turnoffNotification("Delete");
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
          <Button link={`/pokemon`} text="BACK" />
        </div>
        {favoriteCtx.isNotify && <SuccessAlert />}
        {favoriteCtx.deleteNotify && <DeleteAlert />}
      </div>
    </>
  );
};

// export const getStaticProps = () => {};

export default Favorites;
