import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../../components/context/state";

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
      className="cursor-pointer flex justify-center items-center rounded-lg pt-2 pb-4 transition-transform hover:scale-50"
    >
      <img src={`${image}`} alt="" width="100px" height="auto" />
    </div>
  );
}

export default PokemonImageCard;
