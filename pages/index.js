import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Poke-App</title>
        <meta name="description" content="Poke-App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className="text-xl text-purple-400 font-bold">
          Welcome to <a href="https://nextjs.org">PokeApp!</a>
        </h2>
        {/* <!-- Code block for button with black outline starts --> */}
        <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-purple-500 hover:text-purple-500 rounded border border-purple-400 text-purple-400 px-8 py-3 text-sm hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-purple-500">
          <Link href="/home">Get started</Link>
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
