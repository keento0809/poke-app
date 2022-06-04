import React, { Fragment } from "react";

const Header = () => {
  const openMenu = () => {
    document.getElementById("mobile-menu").classList.remove("hidden");
  };
  const closeMenu = () => {
    document.getElementById("mobile-menu").classList.add("hidden");
  };

  return (
    <>
      <div className="dark:bg-gray-900">
        <div className="container mx-auto relative">
          <div className="py-4 mx-4 md:mx-6">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 py-4">
              <div>
                <div className="" role="img" aria-label="luxe. Logo.">
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg1.svg"
                    alt="logo"
                  />
                  <img
                    className="dark:block hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg1dark.svg"
                    alt="logo"
                  />
                </div>
              </div>
              <div className="hidden md:block">
                <ul className="flex items-center space-x-6">
                  <li>
                    <a
                      href="#"
                      className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      {" "}
                      New{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      {" "}
                      Men{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      {" "}
                      Women{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      {" "}
                      Kids{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      {" "}
                      Magazine{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <a
                  aria-label="my account"
                  href="#"
                  className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100 p-0.5 rounded"
                >
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg2.svg"
                    alt="account"
                  />
                  <img
                    className="dark:block hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg2dark.svg"
                    alt="account"
                  />
                </a>
                <a
                  aria-label="Favourites"
                  href="#"
                  className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100 p-0.5 rounded"
                >
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg3.svg"
                    alt="Favourites"
                  />
                  <img
                    className="dark:block hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg3dark.svg"
                    alt="Favourites"
                  />
                </a>
                <a
                  aria-label="Bag"
                  href="#"
                  className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100 p-0.5 rounded"
                >
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg4.svg"
                    alt="bag"
                  />
                  <img
                    className="dark:block hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg4dark.svg"
                    alt="bag"
                  />
                </a>
              </div>

              <div className="md:hidden">
                <button
                  aria-label="open menu"
                  onClick={openMenu}
                  className="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
                >
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg5.svg"
                    alt="toggler"
                  />
                  <img
                    className="dark:block hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg5dark.svg"
                    alt="toggler"
                  />
                </button>
              </div>
            </div>
            <div className="mt-4 pb-4 flex space-x-3 border-b border-gray-200 dark:border-gray-700">
              <div>
                <img
                  className="dark:hidden"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg6.svg"
                  alt="Search"
                />
                <img
                  className="dark:block hidden"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg6dark.svg"
                  alt="Search"
                />
              </div>
              <input
                type="text"
                placeholder="Search for products"
                className="focus:outline-none bg-transparent text-sm text-gray-600"
              />
            </div>
          </div>

          <div
            id="mobile-menu"
            className="hidden dark:bg-gray-900 md:hidden absolute inset-0 z-10 flex flex-col w-full h-screen bg-white pt-6"
          >
            <div className="w-full">
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 mx-4">
                <div role="img" aria-label="Luxe. Logo">
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg1.svg"
                    alt="logo"
                  />
                  <img
                    className="dark:block hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg1dark.svg"
                    alt="logo"
                  />
                </div>
                <button
                  aria-label="close menu"
                  onClick={closeMenu}
                  className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                >
                  <img
                    className="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg7.svg"
                    alt="logo"
                  />
                  <img
                    className="dark:block hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg7dark.svg"
                    alt="logo"
                  />
                </button>
              </div>
            </div>
            <div className="mt-4 mx-4">
              <ul className="flex flex-col space-y-4">
                <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                  <a
                    href="#"
                    className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
                  >
                    {" "}
                    New{" "}
                  </a>
                  <button
                    aria-label="Add"
                    className="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <img
                      className="dark:hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg"
                      alt="add"
                    />
                    <img
                      className="dark:block hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg"
                      alt="add"
                    />
                  </button>
                </li>
                <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                  <a
                    href="#"
                    className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
                  >
                    {" "}
                    Men{" "}
                  </a>
                  <button
                    aria-label="Add"
                    className="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <img
                      className="dark:hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg"
                      alt="add"
                    />
                    <img
                      className="dark:block hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg"
                      alt="add"
                    />
                  </button>
                </li>
                <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                  <a
                    href="#"
                    className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
                  >
                    {" "}
                    Women{" "}
                  </a>
                  <button
                    aria-label="Add"
                    className="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <img
                      className="dark:hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg"
                      alt="add"
                    />
                    <img
                      className="dark:block hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg"
                      alt="add"
                    />
                  </button>
                </li>
                <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                  <a
                    href="#"
                    className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
                  >
                    {" "}
                    Kids{" "}
                  </a>
                  <button
                    aria-label="Add"
                    className="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <img
                      className="dark:hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg"
                      alt="add"
                    />
                    <img
                      className="dark:block hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg"
                      alt="add"
                    />
                  </button>
                </li>
                <li className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                  <a
                    href="#"
                    className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
                  >
                    {" "}
                    Magazine{" "}
                  </a>
                  <button
                    aria-label="Add"
                    className="dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <img
                      className="dark:hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg"
                      alt="add"
                    />
                    <img
                      className="dark:block hidden"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg8.svg"
                      alt="add"
                    />
                  </button>
                </li>
              </ul>
            </div>
            <div className="w-full h-full flex items-end">
              <ul className="bg-gray-50 dark:bg-gray-800 py-10 px-4 flex flex-col space-y-8 w-full">
                <li>
                  <a
                    className="flex items-center space-x-2 focus:outline-none text-gray-800 dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline"
                    href="#"
                  >
                    <div>
                      <img
                        className="dark:hidden"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg2.svg"
                        alt="account"
                      />
                      <img
                        className="dark:block hidden"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg2dark.svg"
                        alt="account"
                      />
                    </div>
                    <p className="text-base">My account</p>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center space-x-2 focus:outline-none text-gray-800 dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline"
                    href="#"
                  >
                    <div>
                      <img
                        className="dark:hidden"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg4.svg"
                        alt="bag"
                      />
                      <img
                        className="dark:block hidden"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg4dark.svg"
                        alt="bag"
                      />
                    </div>
                    <p className="text-base">Bag</p>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center space-x-2 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    href="#"
                  >
                    <div>
                      <img
                        className="dark:hidden"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg3.svg"
                        alt="Favourites"
                      />
                      <img
                        className="dark:block hidden"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-III-svg3dark.svg"
                        alt="Favourites"
                      />
                    </div>
                    <p className="text-base">Favourites</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
