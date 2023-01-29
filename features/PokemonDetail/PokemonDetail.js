import Link from "next/link";

function PokemonDetail(props) {
  return (
    <Link href={`/pokemon/${props.pokemonId}`}>
      <div
        className={`cursor-pointer flex justify-center items-center rounded-lg pt-2 pb-4 hover:scale-110 transition-transform ${props.type}}`}
      >
        <img
          src={`${props.image}`}
          alt=""
          width="100px"
          height="100px"
          className="mx-auto"
        />
      </div>
    </Link>
  );
}

export default PokemonDetail;
