import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../../context/state";

type Props = {
  pokemonId: number;
  type: string;
  image: string;
};

function PokemonDetail({ pokemonId, type, image }: Props) {
  const { handleLoading } = useContext(AppContext);
  const router = useRouter();
  const handleJumpToPokemonDetailPage = () => {
    handleLoading(true);
    router.push(`/pokemon/${pokemonId}`);
  };
  return (
    <div
      onClick={handleJumpToPokemonDetailPage}
      className={`cursor-pointer flex justify-center items-center rounded-lg pt-2 pb-4 hover:scale-110 transition-transform ${type}}`}
    >
      <img
        src={`${image}`}
        alt=""
        width="100px"
        height="100px"
        className="mx-auto"
      />
    </div>
  );
}

export default PokemonDetail;
