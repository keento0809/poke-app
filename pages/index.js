import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../components/UI/Button/Button";
import { useAppContext } from "../context/state";

export default function Home() {
  const { handleToggleIsMain } = useAppContext();
  useEffect(() => {
    handleToggleIsMain(false);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Poke-App</title>
        <meta name="description" content="Poke-App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainHero}>
        <div className="pb-10 flex flex-col justify-center items-center">
          <h2 className="text-xl pb-2 text-purple-400 font-bold">
            Welcome to <a href="https://nextjs.org">PokeApp!</a>
          </h2>
          <Button link={`/pokemon`} text="Get started" />
        </div>
      </main>
    </div>
  );
}
