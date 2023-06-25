import { ResultsData } from "../../../pages/pokemons";
import PokemonImageCard from "../../pages/Pokemons/PokemonDetailPage/PokemonImageCard";

interface Props {
  pokemonsData: ResultsData[];
}

const PokemonsList: React.FC<Props> = ({ pokemonsData }) => {
  return (
    <div className="my-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {pokemonsData.map((pokemon, index) => {
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
  );
};

export default PokemonsList;
