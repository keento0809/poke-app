import { useTranslation } from "next-i18next";

// TODO: Add props type later
interface Props {
  searchInputRef: any;
  handleSearch: () => void;
}

const SearchInput: React.FC<Props> = ({ searchInputRef, handleSearch }) => {
  const { t } = useTranslation();

  return (
    <div className="relative ml-auto mr-auto">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 cursor-pointer">
        <svg
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        ref={searchInputRef}
        onKeyUp={handleSearch}
        id="default-search"
        className="block p-2 pl-10 w-full mx-auto text-sm text-gray-900 rounded-lg border border-purple-400 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
        placeholder={t("searchBar.placeHolder")}
      />
    </div>
  );
};

export default SearchInput;
