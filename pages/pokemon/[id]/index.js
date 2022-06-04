import React from "react";
import { server } from "../../../config/index";

const PokemonDetail = ({ fetchedPokemon }) => {
  //   console.log(fetchedPokemon);
  const str = "https://pokeapi.co/api/v2/pokemon/";
  console.log(str.length);

  return (
    <div className="text-center">
      {/* <h3 className="text-xl font-bold py-4">{pokemon.name}</h3>
      <div className="mx-auto">
        <img
          src={pokemon.frontImg}
          width="400px"
          height="400px"
          className="inline-block"
        />
      </div> */}
      <p>{fetchedPokemon.name}</p>
      <img src={fetchedPokemon.sprites.other.home.front_default} alt="" />
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );

  const fetchedPokemon = await response.json();

  return {
    props: {
      fetchedPokemon,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`
  );

  const allData = await response.json();
  console.log(
    allData.results[0].url.substring(10, allData.results[0].url.length - 1)
  );
  const ids = allData.results.map((data) =>
    data.url.substring(34, data.url.length - 1)
  );

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  console.log(paths);

  return {
    // paths: [{ params: { id: "1" } }],
    paths,
    fallback: false,
  };
};

export default PokemonDetail;
