import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Meta from "../../Meta/Meta";
import FavoritesPage from "../../components/pages/FavoritesPage";

const Favorites: React.FC = () => {
  return (
    <>
      <Meta title="Favorites" />
      <FavoritesPage />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "pokemons"])),
    },
  };
};

export default Favorites;
