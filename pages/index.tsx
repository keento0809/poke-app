import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import BasicButton from "../components/common/Button/BasicButton";
import { AppContext } from "../components/context/state";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const { isMain, handleToggleIsMain, handleLoading } = useContext(AppContext);

  const handleClick = (link) => {
    handleLoading(true);
    router.replace(link);
  };

  useEffect(() => {
    isMain && handleToggleIsMain(false);
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
          <BasicButton
            onClick={() => handleClick("/pokemons")}
            text="Get started"
          />
        </div>
      </main>
    </div>
  );
}
