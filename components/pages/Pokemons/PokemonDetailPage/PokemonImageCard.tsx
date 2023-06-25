import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../../../context/state";

type Props = {
  pokemonId: number;
  image: string;
};

function PokemonImageCard({ pokemonId, image }: Props) {
  const { handleLoading } = useContext(AppContext);
  const router = useRouter();

  const handleJumpToPokemonDetailPage = () => {
    handleLoading(true);
    router.push(`/pokemons/${pokemonId}`);
  };

  return (
    <div
      onClick={handleJumpToPokemonDetailPage}
      className="cursor-pointer min-w-[100px] border border-transparent hover:border-purple-500 flex justify-center items-center rounded-lg pt-2 pb-4 transition-all hover:scale-105"
    >
      <img src={`${image}`} alt="pokemon-img" width="100px" height="auto" />
    </div>
  );
}

export default PokemonImageCard;
