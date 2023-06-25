import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Meta from "../../Meta/Meta";
import PokemonsPage from "../../components/pages/Pokemons/PokemonsPage";
import { INITIAL_LOAD_COUNT } from "../../constants";
import { OriginalPokemonData, PokemonData } from "../../types/pokemons";

interface Props {
  pokemonData: PokemonData[];
}

const Pokemons: React.FC<Props> = ({ pokemonData }) => {
  return (
    <>
      <Meta title="TOP" />
      <PokemonsPage pokemonData={pokemonData} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const pokemonData: PokemonData[] = [];

  for (let i = 1; i < INITIAL_LOAD_COUNT + 1; i++) {
    const res = await fetch(`${process.env.BASE_POKE_API_ENDPOINT}/${i}`);
    const data: OriginalPokemonData = await res.json();

    pokemonData.push({
      pokemonId: data.id,
      name: data.name,
      image: data.sprites.other.home.front_default,
    });
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "pokemons"])),
      pokemonData,
    },
  };
};

export default Pokemons;
