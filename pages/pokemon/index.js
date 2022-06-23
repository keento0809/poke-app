import React, { useRef, useEffect, useState } from "react";
import { useAppContext } from "../../context/state";
import Meta from "../../components/Meta/Meta";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import PokemonDetail from "../../components/Pokemon/PokemonDetail";
import Button from "../../components/UI/Button/Button";
import Backdrop from "../../components/Backdrop/Backdrop";

const Pokemon = ({ results, resultsData }) => {
  // declare useState
  const [displayData, setDisplayData] = useState(resultsData);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isFilterShown, setIsFilterShown] = useState(false);
  const [loadCount, setLoadCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowcasedAll, setIsShowcasedAll] = useState(false);
  // declare useRef
  const searchInputRef = useRef();

  // declare useContext
  const favoriteCtx = useAppContext();
  // console.log(favoriteCtx.favorites);

  const defaultResults = results;

  const handleSearch = () => {
    const inputValue = searchInputRef.current.value;
    setIsSearching(inputValue.length > 0 ? true : false);
    const searching = results.filter((pokemon) => {
      return pokemon.name.includes(inputValue.toLowerCase());
    });
    console.log(searching);
    setSearchResults(searching);
  };

  const handleLoadMore = async () => {
    setIsLoading(true);
    const additionalData = [];
    for (
      let i = Number(loadCount) * 20 + 1;
      i <= Number(loadCount) * 20 + 20;
      i++
    ) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await res.json();
      additionalData.push(data);
    }
    console.log(additionalData);
    setDisplayData([...displayData, ...additionalData]);
    setLoadCount((loadCount += 1));
    setIsLoading(false);
  };

  useEffect(() => {
    console.log(loadCount);
    loadCount > 12 && setIsShowcasedAll(true);
  }, [loadCount]);

  return (
    <>
      <Meta title="TOP" />
      {isLoading && <Backdrop />}
      <div className={styles.main}>
        <h2 className="text-xl pb-3 text-purple-400 font-bold">
          Search Pokemon
        </h2>

        <form
          className="w-10/12 max-w-345 md:max-w-500 xl:max-w-650 mx-auto"
          // styles={{ maxWidth: "345px" }} dark:text-gray-300 text-gray-900
        >
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium sr-only dark:text-gray-300 text-gray-900"
          >
            Search
          </label>
          <div className="relative ml-auto mr-auto">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 cursor-pointer">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              ref={searchInputRef}
              onKeyUp={handleSearch}
              id="default-search"
              className="block p-4 pl-10 w-full mx-auto text-sm text-gray-900 rounded-lg border border-purple-400 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              placeholder="Search"
              required=""
            />
          </div>
        </form>
        <div className="text-center">
          <div
            className="overflow-scroll max-h-500 md:max-h-450 lg:max-h-420 my-6 flex flex-row flex-wrap"
            // styles={{ maxHeight: "380px" }}
          >
            {isSearching &&
              searchResults.map((pokemon, index) => {
                const pokemonIndex = pokemon.url.substring(
                  34,
                  pokemon.url.length - 1
                );
                return (
                  <div className="py-3 text-center min-w-122" key={index}>
                    <Link href={`/pokemon/${pokemonIndex}`}>
                      <span className="text-xl text-purple-400 cursor-pointer">
                        {" "}
                        {pokemon.name}
                      </span>
                    </Link>
                  </div>
                );
              })}
            {!isSearching &&
              displayData.map((pokemon, index) => {
                // const pokemonIndex = pokemon.url.substring(
                //   34,
                //   pokemon.url.length - 1
                // );
                const pokemonIndex = pokemon.id;
                return (
                  <div
                    className="py-3 basis-4/12 md:basis-3/12 xl:basis-1/5"
                    key={index}
                  >
                    <PokemonDetail
                      pokemonId={pokemonIndex}
                      name={pokemon.name}
                      type={pokemon.types[0].type.name}
                      image={pokemon.sprites.other.home.front_default}
                    />
                  </div>
                );
              })}
          </div>
          {!isSearching && (
            <button
              disabled={isShowcasedAll}
              onClick={handleLoadMore}
              className={`mx-2 my-5 transition duration-150 ease-in-out hover:border-purple-500 hover:text-purple-500 rounded border border-purple-400 text-purple-400 px-8 py-3 text-sm  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-purple-500 ${
                isShowcasedAll && "opacity-40"
              }`}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=251`
  );
  const allData = await res.json();
  const results = allData.results;

  const resultsData = [];

  for (let i = 1; i < 21; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await res.json();
    resultsData.push(data);
  }

  return {
    props: {
      results,
      resultsData,
    },
  };
};

export default Pokemon;
