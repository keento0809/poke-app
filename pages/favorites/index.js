import React from "react";
import FavoritesList from "../../components/favorites/FavoritesList";

const Favorites = () => {
  return (
    <div className="pt-14">
      <div className="pt-6 px-6">
        <h2>Favorites</h2>
        <FavoritesList />
      </div>
    </div>
  );
};

// export const getStaticProps = () => {};

export default Favorites;
