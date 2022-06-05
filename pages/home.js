import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const home = () => {
  async function fet() {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"
    );
    const allData = await response.json();
    const ids = allData.results.map((data) =>
      data.url.substring(data.url.length - 2, data.url.length - 1)
    );

    const paths = ids.map((id) => ({ params: { id: id.toString() } }));
    console.log(paths);
  }

  useEffect(() => {
    fet();
  }, []);

  return (
    <Fragment>
      <div className={styles.main}>
        <h2 className="text-xl text-purple-400 font-bold">Home</h2>
        <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-purple-500 hover:text-purple-500 rounded border border-purple-400 text-purple-400 px-8 py-3 text-sm hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-purple-500">
          <Link href="/pokemon">Explore Pokemon</Link>
        </button>
      </div>
    </Fragment>
  );
};

export default home;
