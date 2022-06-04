import React from "react";
import Header from "../layout/Header";
import styles from "../styles/Home.module.css";

const home = () => {
  return (
    <div className={styles.main}>
      <h2>Home</h2>

      <div className="w-full py-10">
        <div className="container mx-auto px-6 flex items-start justify-center">
          <div aria-label="group of cards" className="w-full">
            <div className="flex flex-col lg:flex-row mx-auto bg-white dark:bg-gray-800 shadow rounded">
              <div className="w-full lg:w-1/3 px-12 flex flex-col items-center py-10">
                <div className="w-24 h-24 mb-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <img
                    role="img"
                    className="w-full h-full overflow-hidden object-cover rounded-full"
                    src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_2.png"
                    alt="avatar"
                  />
                </div>
                <a
                  tab-index="0"
                  className="focus:outline-none focus:opacity-75 hover:opacity-75 text-gray-800 dark:text-gray-100 cursor-pointer focus:underline"
                >
                  <h2 className=" text-xl tracking-normal font-medium mb-1">
                    Timothy Jon Oliphant
                  </h2>
                </a>
                <a
                  tabーindex="0"
                  className="cursor-pointer hover:text-indigo-700 focus:underline focus:outline-none focus:text-indigo-700 flex text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center"
                >
                  <span className="cursor-pointer mr-1 text-gray-600 dark:text-gray-100">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_3_section_card-svg1.svg"
                      alt="icon"
                    />
                  </span>
                  Las Vegas, Nevada
                </a>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                  The more I deal with the work as something that is my own, as
                  something that is personal, the more successful it is.
                </p>
                <div className="flex items-start">
                  <div className="">
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      82
                    </h2>
                    <a
                      tab-index="0"
                      className="focus:outline-none focus:underline focus:text-gray-400 text-gray-800 hover:text-gray-400 cursor-pointer"
                    >
                      <p className=" dark:text-gray-100 text-sm leading-5">
                        Reviews
                      </p>
                    </a>
                  </div>
                  <div className="mx-6 lg:mx-3 xl:mx-6 px-8 lg:px-4 xl:px-8 border-l border-r">
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      28
                    </h2>
                    <a
                      tab-index="0"
                      className="focus:outline-none focus:underline focus:text-gray-400 text-gray-800 hover:text-gray-400 cursor-pointer"
                    >
                      <p className=" dark:text-gray-100 text-sm leading-5">
                        Projects
                      </p>
                    </a>
                  </div>
                  <div className="">
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      42
                    </h2>
                    <a
                      tab-index="0"
                      className="focus:outline-none focus:underline focus:text-gray-400 text-gray-800 hover:text-gray-400 cursor-pointer"
                    >
                      <p className=" dark:text-gray-100 text-sm leading-5">
                        Approved
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
                <div className="mb-3 w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer text-indigo-700">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_3_section_card-svg2.svg"
                    alt="icon"
                  />
                </div>
                <a
                  tab-index="0"
                  className="cursor-pointer  focus:opacity-75 focus:underline hover:opacity-75  focus:outline-none text-gray-800 dark:text-gray-100 text-xl tracking-normal text-center font-medium mb-1"
                >
                  Senior Product Designer
                </a>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                  Freelance
                </p>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                  John is a true asset to us, providing advanced designing
                  skills from years of experience as UX designer.
                </p>
                <div className="flex items-start">
                  <a
                    tab-index="0"
                    className="cursor-pointer hover:opacity-75  bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3"
                  >
                    Interface
                  </a>
                  <a
                    tab-index="0"
                    className="cursor-pointer hover:opacity-75  bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded mx-2 text-xs leading-3 py-2 px-3"
                  >
                    Interface
                  </a>
                  <a
                    tab-index="0"
                    className="cursor-pointer hover:opacity-75  bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3"
                  >
                    Interface
                  </a>
                </div>
                <div className="mt-2 flex items-start">
                  <a
                    tab-index="0"
                    className="cursor-pointer hover:opacity-75  bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3"
                  >
                    Interface
                  </a>
                  <a
                    tab-index="0"
                    className="cursor-pointer hover:opacity-75  bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded mx-2 text-xs leading-3 py-2 px-3"
                  >
                    Interface
                  </a>
                  <a
                    tab-index="0"
                    className="cursor-pointer hover:opacity-75  bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3"
                  >
                    Interface
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-1/3 flex-col flex justify-center items-center px-12 py-8">
                <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                  $90
                </h2>
                <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  Hourly Rate
                </h2>
                <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                  $32,000
                </h2>
                <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  Total Earned
                </h2>
                <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                  2000
                </h2>
                <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  Hours Worked
                </h2>
                <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                  95%
                </h2>
                <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  Success Rate
                </h2>
                <div className="flex items-center">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_3_section_card-svg3.svg"
                    alt="yellow star"
                  />
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_3_section_card-svg3.svg"
                    alt="yellow star"
                  />
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_3_section_card-svg3.svg"
                    alt="yellow star"
                  />
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_3_section_card-svg3.svg"
                    alt="yellow star"
                  />
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_3_section_card-svg4.svg"
                    alt="grey star"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
