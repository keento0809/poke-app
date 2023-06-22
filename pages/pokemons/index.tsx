import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Meta from "../../Meta/Meta";
import PokemonsPage from "../../components/pages/Pokemons/PokemonsPage";

interface Props {
  results: any;
  resultsData: any;
}

const Pokemons: React.FC<Props> = ({ results, resultsData }) => {
  return (
    <>
      <Meta title="TOP" />
      <PokemonsPage results={results} resultsData={resultsData} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const res = await fetch(
    `${process.env.BASE_POKE_API_ENDPOINT}/?offset=0&limit=251`
  );
  const allData = await res.json();
  const results = allData.results;
  const resultsData = [];
  for (let i = 1; i < 21; i++) {
    const res = await fetch(`${process.env.BASE_POKE_API_ENDPOINT}/${i}`);

    const data = await res.json();
    resultsData.push(data);
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "pokemons"])),
      results,
      resultsData,
    },
  };
};

export default Pokemons;
