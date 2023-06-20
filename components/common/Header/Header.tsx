import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../../context/state";

const Header = () => {
  const router = useRouter();
  const { isMain, handleLoading } = useContext(AppContext);
  const { t, i18n } = useTranslation();
  console.log("i18n: ", i18n.language);

  const handleJumpToFavorites = () => {
    router.push("/favorites");
  };

  const handleClick = (link) => {
    handleLoading(true);
    router.replace(link);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-10 border-gray-200 px-6 md:px-8 py-2.5 rounded">
        <div
          className="container flex flex-wrap justify-between items-center mx-auto"
          style={{ minHeight: "40px" }}
        >
          <span
            className="flex items-center"
            onClick={() => handleClick("/pokemons")}
          >
            <span className="cursor-pointer self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              PokeApp
            </span>
          </span>
          <div className="">
            {isMain && (
              <button
                data-collapse-toggle="mobile-menu"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleJumpToFavorites}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium">
              {router.asPath !== "/" && (
                <li onClick={handleJumpToFavorites}>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-lg rounded text-purple-400 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    {t("header.favorites")}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
