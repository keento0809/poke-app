import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../../context/state";
import FavoriteIconButton from "../Button/FavoriteIconButton";
import LanguageToggleButton from "../Button/LanguageToggleButton";

const Header: React.FC = () => {
  const router = useRouter();
  const { handleLoading } = useContext(AppContext);
  const { t } = useTranslation();

  const handleClick = (link) => {
    handleLoading(true);
    router.replace(link);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-40 border-gray-200 px-6 md:px-8 py-2.5 rounded">
        <div
          className="container flex flex-wrap justify-between items-center mx-auto"
          style={{ minHeight: "40px" }}
        >
          <span
            className="flex items-center"
            onClick={() => handleClick("/pokemons")}
          >
            <span className="cursor-pointer self-center text-xl font-semibold whitespace-nowrap dark:text-slate-100">
              PokeApp
            </span>
          </span>
          {router.asPath !== "/" && (
            <>
              <div
                data-collapse-toggle="mobile-menu"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <FavoriteIconButton onClick={() => router.push("/favorites")} />
              </div>
              <div
                className="hidden w-full md:block md:w-auto"
                id="mobile-menu"
              >
                <ul className="flex flex-col mt-4 md:flex-row items-center md:space-x-8 md:mt-0 md:font-medium">
                  <li onClick={() => router.push("/favorites")}>
                    <span
                      className="block py-2 pr-4 pl-3 text-md rounded text-purple-400 md:p-0 dark:text-white cursor-pointer"
                      aria-current="page"
                    >
                      {t("header.favorites")}
                    </span>
                  </li>
                  <li>
                    <LanguageToggleButton />
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
