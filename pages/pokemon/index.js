import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import PokemonDetail from "../../components/Pokemon/PokemonDetail";

const Pokemon = ({ results, resultsData }) => {
  // declare useState
  const [displayData, setDisplayData] = useState(resultsData);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isFilterShown, setIsFilterShown] = useState(false);
  const [loadCount, setLoadCount] = useState(1);
  // declare useRef
  const searchInputRef = useRef();
  const defaultResults = results;
  console.log(defaultResults);

  // console.log(resultsData);

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
  };

  function handleToggleFilter() {
    setIsFilterShown(!isFilterShown);
  }

  return (
    <div className={styles.main}>
      <h2 className="text-xl text-purple-400 font-bold">Pokemon</h2>

      <form
        className="w-10/12 max-w-345 md:max-w-500 xl:max-w-650 mx-auto"
        // styles={{ maxWidth: "345px" }}
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative ml-auto mr-auto">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
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
            className="block p-4 pl-10 w-full mx-auto text-sm text-gray-900 bg-white rounded-lg border border-purple-400 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            placeholder="Search"
            required=""
          />
        </div>
      </form>
      <div className="min-h-600 text-center">
        <div
          className="overflow-scroll max-h-500 my-6 flex flex-row flex-wrap"
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
                <div className="py-3 basis-4/12" key={index}>
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
            onClick={handleLoadMore}
            className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-purple-500 hover:text-purple-500 rounded border border-purple-400 text-purple-400 px-8 py-3 text-sm hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-purple-500"
          >
            Load More
          </button>
        )}
      </div>
      {/* test */}

      {/* <div className="2xl:container 2xl:mx-auto w-full lg:px-20 px-6 min-h-533">
        <div className="md:py-12 py-9">
          <div className="flex justify-between items-center mb-4">
            <button
              // onClick="showFilters()"
              className="cursor-pointer dark:bg-white dark:text-purple-500 text-white dark:hover:bg-gray-100 sm:flex hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 flex text-base leading-4 font-normal text-white justify-center items-center"
            >
              <img
                className="dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg1.svg"
              />
              <img
                className="hidden dark:block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg1dark.svg"
              />
              Filters
            </button>
          </div>
          <p className="text-xl dark:text-gray-400 leading-5 text-gray-600 font-medium">
            09 Products
          </p>

          <button
            onClick={handleToggleFilter}
            className="cursor-pointer rounded-lg mt-6 block sm:hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2 w-full bg-gray-800 flex text-base leading-4 font-normal text-white dark:text-gray-800 dark:bg-white dark:hover:bg-gray-100 justify-center items-center"
          >
            <img
              className="dark:hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg1.svg"
              alt="filter"
            />
            <img
              className="hidden dark:block"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg1dark.svg"
              alt="filter"
            />
            Filters
          </button>
        </div>

        {isFilterShown && (
          <div
            id="filterSection"
            className="block relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 dark:bg-gray-800 w-full"
          >
            <div
              // onClick="closeFilterSection()"
              className="cursor-pointer absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4"
            >
              <img
                className="dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg2.svg"
                alt="cross"
              />
              <img
                className="hidden dark:block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg2dark.svg"
                alt="cross"
              />
            </div>

            <div>
              <div className="flex space-x-2 text-gray-800 dark:text-white">
                <img
                  className="dark:hidden"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg3.svg"
                  alt="colors"
                />
                <img
                  className="hidden dark:block"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg3dark.svg"
                  alt="colors"
                />
                <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium">
                  Types
                </p>
              </div>
              <div className="md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                  <div className="w-4 h-4 rounded-full bg-white shadow"></div>
                  <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">
                    White
                  </p>
                </div>
                <div className="flex space-x-2 justify-center items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-600 shadow"></div>
                  <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">
                    Blue
                  </p>
                </div>
                <div className="flex space-x-2 md:justify-center md:items-center items-center justify-end">
                  <div className="w-4 h-4 rounded-full bg-red-600 shadow"></div>
                  <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">
                    Red
                  </p>
                </div>
                <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                  <div className="w-4 h-4 rounded-full bg-indigo-600 shadow"></div>
                  <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">
                    Indigo
                  </p>
                </div>
                <div className="flex space-x-2 justify-center items-center">
                  <div className="w-4 h-4 rounded-full bg-black shadow"></div>
                  <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">
                    Black
                  </p>
                </div>
                <div className="flex space-x-2 md:justify-center md:items-center items-center justify-end">
                  <div className="w-4 h-4 rounded-full bg-purple-600 shadow"></div>
                  <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">
                    Purple
                  </p>
                </div>
                <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                  <div className="w-4 h-4 rounded-full bg-gray-600 shadow"></div>
                  <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">
                    Grey
                  </p>
                </div>
              </div>
            </div>

            <hr className="bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

            <div className="hidden md:block absolute right-0 bottom-0 md:py-10 lg:px-20 md:px-6 py-9 px-4">
              <button
                // onClick="applyFilters()"
                className="hover:bg-gray-700 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800"
              >
                Apply Filter
              </button>
            </div>

            <div className="block md:hidden w-full mt-10">
              <button
                // onClick="applyFilters()"
                className="w-full rounded-lg hover:bg-purple-500 dark:bg-white dark:text-purple-500 dark:hover:bg-purple-600 focus:ring focus:ring-offset-2 focus:ring-purple-500 text-base leading-4 font-medium py-4 px-10 text-white bg-purple-400"
              >
                Apply Filter
              </button>
            </div>
          </div>
        )}
      </div> */}

      {/* <style>
            .checkbox:checked + .check-icon {
                display: flex;
            }
        </style> */}
    </div>
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

  // for (let i = 1; i < results.length; i++) {
  //   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
  //   const data = await response.json();
  //   resultsData.push(data);
  // }

  return {
    props: {
      results,
      resultsData,
    },
  };
};

export default Pokemon;
