import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Meta from "../../Meta/Meta";
import PokemonsPage from "../../components/pages/Pokemons/PokemonsPage";
import { INITIAL_LOAD_COUNT } from "../../constants";

interface Props {
  resultsData: ResultsData[];
}

export interface ResultsData {
  pokemonId: number;
  name: string;
  image: string;
}

const Pokemons: React.FC<Props> = ({ resultsData }) => {
  return (
    <>
      <Meta title="TOP" />
      <PokemonsPage resultsData={resultsData} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const resultsData: ResultsData[] = [];

  for (let i = 1; i < INITIAL_LOAD_COUNT + 1; i++) {
    const res = await fetch(`${process.env.BASE_POKE_API_ENDPOINT}/${i}`);
    const data = await res.json();

    resultsData.push({
      pokemonId: data.id,
      name: data.name,
      image: data.sprites.other.home.front_default,
    });
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "pokemons"])),
      resultsData,
    },
  };
};

export default Pokemons;
