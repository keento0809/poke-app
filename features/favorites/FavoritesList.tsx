import { useContext } from "react";
import { AppContext } from "../../components/context/state";
import PokemonImageCard from "../detail/PokemonImageCard";

const FavoritesList = () => {
  const { favorites } = useContext(AppContext);
  return (
    <div className="text-center">
      <div className="overflow-scroll max-h-500 md:max-h-450 lg:max-h-420 my-6 flex flex-row flex-wrap">
        {favorites.map((pokemon, index) => {
          return (
            <div
              className="py-3 basis-4/12 md:basis-3/12 xl:basis-1/5"
              key={index}
            >
              <PokemonImageCard
                pokemonId={pokemon.id}
                type={pokemon.types[0].type.name}
                image={pokemon.sprites.other.home.front_default}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesList;
