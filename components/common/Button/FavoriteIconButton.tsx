import FavoriteIcon from "../Icons/FavoriteIcon";

interface Props {
  onClick: () => void;
}

const FavoriteIconButton = ({ onClick }: Props) => {
  return (
    <button
      type="button"
      className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      onClick={onClick}
    >
      <FavoriteIcon />
    </button>
  );
};

export default FavoriteIconButton;
