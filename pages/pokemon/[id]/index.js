import React, { useState } from "react";
import Link from "next/link";
import { server } from "../../../config/index";

const PokemonDetail = ({
  fetchedPokemon,
  fixedEvolution,
  fixedEvolvesTo,
  fixedEvolvesPokemon,
}) => {
  console.log(fixedEvolution);
  console.log(
    fixedEvolution.chain.evolves_to[0]?.species.url.substring(
      42,
      fixedEvolution.chain.evolves_to[0].species.url.length - 1
    ),
    fixedEvolution.chain.evolves_to[0]?.evolves_to[0]?.species.url.substring(
      42,
      fixedEvolution.chain.evolves_to[0].species.url.length - 1
    ),
    fetchedPokemon.id
  );

  const [isFavorite, setIsFavorite] = useState(false);

  function handleAddToFavorite() {
    setIsFavorite(true);
  }

  function handleRemoveFavorite() {
    setIsFavorite(false);
  }

  return (
    <div className="pt-12">
      <div className="px-6 pt-6 flex flex-row justify-center">
        {fetchedPokemon.id > 1 && (
          <Link
            href={`/pokemon/${fetchedPokemon.id - 1}`}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {/* <span>Prev</span> */}
          </Link>
        )}
        <Link
          href={`/pokemon/${fetchedPokemon.id + 1}`}
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
      <div className="text-center">
        <div className="w-full pt-6 pb-10">
          <div className="container mx-auto px-6 flex items-start justify-center">
            <div aria-label="group of cards" className="w-full relative">
              <div
                className={`absolute top-0 left-0 px-2 py-2 rounded-lg border border-purple-300 ${
                  isFavorite ? "bg-purple-200" : "bg-white"
                }`}
              >
                {!isFavorite && (
                  <svg
                    onClick={handleAddToFavorite}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="purple"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                )}
                {isFavorite && (
                  <svg
                    onClick={handleRemoveFavorite}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="purple"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )}
              </div>
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
                          className="cursor-pointer hover:opacity-75 border border-purple-400 dark:border-purple-500 mx-4  bg-white text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3"
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
                <div className="w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
                  <div className="pb-3">
                    <h3 className="text-xl">Evolution</h3>
                  </div>
                  <div className="mx-auto pb-4">
                    {fixedEvolvesPokemon && (
                      <img
                        className="inline-block"
                        width="100px"
                        height="100px"
                        src={`${
                          fixedEvolvesPokemon
                            ? fixedEvolvesPokemon.sprites.other.home
                                .front_default
                            : ""
                        }`}
                      />
                    )}
                    {!fixedEvolvesPokemon && (
                      <div className="min-h-100 flex justify-center items-center">
                        <p>This Pokemon has No evolution</p>
                      </div>
                    )}
                  </div>
                  <div className="py-4">
                    <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-purple-500 hover:text-purple-500 rounded border border-purple-400 text-purple-400 rounded-lg px-12 py-3 text-sm hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-purple-500">
                      <Link
                        href={`/pokemon/${
                          fixedEvolvesPokemon ? fixedEvolvesPokemon.id : ""
                        }`}
                      >
                        {fixedEvolvesPokemon ? "Detail" : "BACK"}
                      </Link>
                    </button>
                  </div>
                  {/* <div className="flex flex-row items-start justify-center w-full">
                  <div className="">
                    <p>{fixedEvolution.chain.evolves_to[0].species.name}</p>
                    <span className="text-xs">Name</span>
                  </div>
                  <div className="mx-5 lg:mx-3 xl:mx-6 px-8 lg:px-4 xl:px-8 border-l border-r">
                    <p className="text-md">
                      Lv.
                      {
                        fixedEvolution.chain.evolves_to[0].evolution_details[0]
                          .min_level
                      }
                    </p>
                    <span className="text-xs">Min_Level</span>
                  </div>
                  <div className="">
                    <p className="text-md">
                      {
                        fixedEvolution.chain.evolves_to[0].evolution_details[0]
                          .trigger.name
                      }
                    </p>
                    <span className="text-xs">Method</span>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  // original
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const resSpecies = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${params.id}`
  );

  const fetchedSpecies = await resSpecies.json();
  const fetchedPokemon = await response.json();

  const fixedEvolutionRes = await fetch(
    `${fetchedSpecies.evolution_chain.url}`
  );
  const fixedEvolution = await fixedEvolutionRes.json();

  // declare variables
  let fixedEvolvesTo = "";
  let fixedEvolvesPokemon = "";

  // check if 0 or 2 or 3
  // if 2
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
    fixedEvolution !== "" &&
    fixedEvolution.chain.evolves_to[0]?.evolves_to[0]?.species.url &&
    fixedEvolution.chain.evolves_to[0]?.evolves_to[0]?.species.url.substring(
      42,
      fixedEvolution.chain.evolves_to[0].species.url.length - 1
    ) ==
      fetchedPokemon.id + 1
  ) {
    evolvesToRes = await fetch(
      `${fixedEvolution.chain.evolves_to[0].evolves_to[0].species.url}`
    );
    fixedEvolvesTo = await evolvesToRes.json();
  } else if (
    fixedEvolution !== "" &&
    fixedEvolution.chain.evolves_to[0]?.species.url
  ) {
    // let evolvesToRes;
    // if 3
    // if (
    //   fixedEvolution.chain.evolves_to[0].evolves_to[0].species.url ||
    //   fixedEvolution.chain.evolves_to[0]?.evolves_to[0]?.species.url.substring(
    //     42,
    //     fixedEvolution.chain.evolves_to[0].species.url.length - 1
    //   ) == fetchedPokemon.id
    // ) {
    //   evolvesToRes = await fetch(
    //     `${fixedEvolution.chain.evolves_to[0].evolves_to[0].species.url}`
    //   );
    // }

    // original
    // const evolvesToRes = await fetch(
    //   `${fixedEvolution.chain.evolves_to[0].species.url}`
    // );
    // test
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
      fetchedPokemon,
      fixedEvolution,
      fixedEvolvesTo,
      fixedEvolvesPokemon,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=251`
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
    paths,
    fallback: false,
  };
};

export default PokemonDetail;
