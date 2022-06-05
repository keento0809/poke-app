import React from "react";
import { server } from "../../../config/index";

const PokemonDetail = ({ fetchedPokemon }) => {
  console.log(fetchedPokemon.stats);

  return (
    <div className="text-center">
      <div className="w-full py-10">
        <div className="container mx-auto px-6 flex items-start justify-center">
          <div aria-label="group of cards" className="w-full">
            <div className="flex flex-col lg:flex-row mx-auto bg-white dark:bg-gray-800 shadow rounded">
              <div className="w-full lg:w-1/3 px-12 flex flex-col items-center pt-5 pb-10">
                <div className="">
                  <img
                    width="300px"
                    height="300px"
                    src={fetchedPokemon.sprites.other.home.front_default}
                    alt=""
                  />
                </div>
                <a
                  tab-index="0"
                  className="focus:outline-none focus:opacity-75 hover:opacity-75 text-gray-800 dark:text-gray-100 cursor-pointer focus:underline"
                >
                  <h2 className="py-6 text-2xl tracking-normal font-bold mb-1">
                    {fetchedPokemon.name}
                  </h2>
                </a>
                <div className="flex items-start">
                  <div className="">
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      {fetchedPokemon.weight}
                    </h2>
                    <a
                      tab-index="0"
                      className="focus:outline-none focus:underline focus:text-gray-400 text-gray-800 hover:text-gray-400 cursor-pointer"
                    >
                      <p className=" dark:text-gray-100 text-sm leading-5">
                        Weight
                      </p>
                    </a>
                  </div>
                  <div className="mx-6 lg:mx-3 xl:mx-6 px-8 lg:px-4 xl:px-8 border-l border-r">
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      {fetchedPokemon.id}
                    </h2>
                    <a
                      tab-index="0"
                      className="focus:outline-none focus:underline focus:text-gray-400 text-gray-800 hover:text-gray-400 cursor-pointer"
                    >
                      <p className=" dark:text-gray-100 text-sm leading-5">
                        No.
                      </p>
                    </a>
                  </div>
                  <div className="">
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      {fetchedPokemon.height}
                    </h2>
                    <a
                      tab-index="0"
                      className="focus:outline-none focus:underline focus:text-gray-400 text-gray-800 hover:text-gray-400 cursor-pointer"
                    >
                      <p className=" dark:text-gray-100 text-sm leading-5">
                        Height
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
                <div className="flex items-start justify-between">
                  {fetchedPokemon.types.map((pokemonType, index) => {
                    return (
                      <a
                        key={index}
                        tab-index="0"
                        className="cursor-pointer hover:opacity-75  bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3"
                      >
                        {pokemonType.type.name}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="w-full lg:w-1/3 flex-col flex justify-center items-center px-12 py-8">
                {fetchedPokemon.stats.map((stats, index) => {
                  return (
                    <div key={index}>
                      <h2
                        // key={index}
                        className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal"
                      >
                        {stats.base_stat}
                      </h2>
                      <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                        {stats.stat.name}
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
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
