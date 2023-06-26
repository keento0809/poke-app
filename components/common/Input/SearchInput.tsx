import { useTranslation } from "next-i18next";
import { MutableRefObject } from "react";
import SearchIcon from "../Icons/SearchIcon";

interface Props {
  searchInputRef: MutableRefObject<HTMLInputElement>;
  handleSearch: () => void;
}

const SearchInput: React.FC<Props> = ({ searchInputRef, handleSearch }) => {
  const { t } = useTranslation();

  return (
    <div className="relative ml-auto mr-auto">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 cursor-pointer">
        <SearchIcon />
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
