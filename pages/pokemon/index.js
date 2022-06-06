import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Pokemon = ({ results }) => {
  // declare useState
  const [displayData, setDisplayData] = useState(results);
  // declare useRef
  const searchInputRef = useRef();
  const defaultResults = results;

  const handleSearch = () => {
    const inputValue = searchInputRef.current.value;
    const searchResults = defaultResults.filter((pokemon) => {
      return pokemon.name.includes(inputValue.toLowerCase());
    });
    setDisplayData(searchResults);
  };

  return (
    <div className={styles.main}>
      <h2 className="text-xl text-purple-400 font-bold">Pokemon</h2>

      <form className="w-10/12 mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
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
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-purple-400 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            placeholder="Search"
            required=""
          />
        </div>
      </form>
      <div className="min-h-360">
        <div className="max-h-350 overflow-scroll my-6">
          {displayData.map((pokemon, index) => {
            const pokemonIndex = pokemon.url.substring(
              34,
              pokemon.url.length - 1
            );
            return (
              <div className="py-3" key={index}>
                <p className="text-purple-400 text-lg">
                  <Link href={`/pokemon/${pokemonIndex}`}>{pokemon.name}</Link>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`
  );
  const allData = await res.json();
  const results = allData.results;

  return {
    props: {
      results,
    },
  };
};

export default Pokemon;
