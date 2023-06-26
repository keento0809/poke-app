import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Meta from "../../../Meta/Meta";
import PokemonDetailPage from "../../../components/pages/Pokemons/PokemonDetailPage";

const PokemonDetail = ({ fetchedPokemon, fixedEvolvesPokemon }) => {
  return (
    <>
      <Meta title={`${fetchedPokemon.name} - Detail`} />
      <PokemonDetailPage
        fetchedPokemon={fetchedPokemon}
        fixedEvolvesPokemon={fixedEvolvesPokemon}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const response = await fetch(
    `${process.env.BASE_POKE_API_ENDPOINT}/${params.id}`
  );
  const resSpecies = await fetch(
    `${process.env.BASE_POKE_API_ENDPOINT}-species/${params.id}`
  );

  const fetchedSpecies = await resSpecies.json();
  const fetchedPokemon = await response.json();

  const fixedEvolutionRes = await fetch(
    `${fetchedSpecies.evolution_chain.url}`
  );
  const fixedEvolution = await fixedEvolutionRes.json();

  // TODO: fix this any type here
  let fixedEvolvesTo: any = "";
  let fixedEvolvesPokemon = "";

  let evolvesToRes;
  if (
    (fixedEvolution !== "" &&
      fixedEvolution.chain.evolves_to[0]?.evolves_to[0]?.species.url &&
      fixedEvolution.chain.evolves_to[0]?.evolves_to[0]?.species.url.substring(
        42,
        fixedEvolution.chain.evolves_to[0].species.url.length - 1
      ) == fetchedPokemon.id) ||
    (fixedEvolution.chain.evolves_to[0]?.species.url.substring(
      42,
      fixedEvolution.chain.evolves_to[0].species.url.length - 1
    ) == fetchedPokemon.id &&
      fixedEvolution.chain.evolves_to[0]?.evolves_to[0]?.species.url.substring(
        42,
        fixedEvolution.chain.evolves_to[0].species.url.length - 1
      ) == undefined)
  ) {
    fixedEvolvesTo = "";
  } else if (
    (fixedEvolution !== "" &&
      fixedEvolution.chain.evolves_to[0]?.species.url.substring(
        42,
        fixedEvolution.chain.evolves_to[0].species.url.length - 1
      ) == fetchedPokemon.id) ||
    (fixedEvolution !== "" &&
      fixedEvolution.chain.evolves_to[0]?.evolves_to[0]?.species.url &&
      fixedEvolution.chain.evolves_to[0]?.evolves_to[0]?.species.url.substring(
        42,
        fixedEvolution.chain.evolves_to[0].species.url.length - 1
      ) ==
        fetchedPokemon.id + 1)
  ) {
    evolvesToRes = await fetch(
      `${fixedEvolution.chain.evolves_to[0].evolves_to[0].species.url}`
    );
    fixedEvolvesTo = await evolvesToRes.json();
  } else if (
    fixedEvolution !== "" &&
    fixedEvolution.chain.evolves_to[0]?.species.url
  ) {
    evolvesToRes = await fetch(
      `${fixedEvolution.chain.evolves_to[0].species.url}`
    );
    fixedEvolvesTo = await evolvesToRes.json();
  }

  if (fixedEvolvesTo !== "" && fixedEvolvesTo.varieties[0].pokemon.url) {
    const fixedEvolvesPokemonRes = await fetch(
      `${fixedEvolvesTo.varieties[0].pokemon.url}`
    );
    fixedEvolvesPokemon = await fixedEvolvesPokemonRes.json();
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "pokemons"])),
      fetchedPokemon,
      fixedEvolvesPokemon,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const response = await fetch(
    `${process.env.BASE_POKE_API_ENDPOINT}/?offset=0&limit=251`
  );

  const allData = await response.json();
  const ids = allData.results.map((data) =>
    data.url.substring(34, data.url.length - 1)
  );
  const paths = ids
    .map((id) => {
      return locales.map((locale) => {
        return {
          params: {
            id,
            type: id,
          },
          locale,
        };
      });
    })
    .flat();

  return {
    paths,
    fallback: false,
  };
};

export default PokemonDetail;
