import { GetServerSideProps } from "next";
import Meta from "../Meta/Meta";

export default function Home() {
  return (
    <>
      <Meta title={"PokeApp"} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: "/pokemons",
    },

    props: {} as never,
  };
};
