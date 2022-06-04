import React, { Fragment, useEffect } from "react";
import Header from "../layout/Header";
import Meta from "../components/Meta/Meta";
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
        <h2>Home</h2>
      </div>
    </Fragment>
  );
};

export default home;
