import Link from "next/link";

interface Props {
  disabled?: boolean;
  link?: string;
  onClick?: () => void;
  styleProps?: string;
  text: string;
}

const BasicButton = ({ link, text, onClick, disabled, styleProps }: Props) => {
  return (
    <button
      className={`mx-2 my-2 dark:bg-gray-800 transition duration-150 ease-in-out hover:border-purple-500 hover:text-purple-500 dark:hover:border-purple-600 dark:hover:text-purple-600 rounded border border-purple-400 dark:border-purple-500 text-purple-400 dark:text-purple-500 px-8 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-purple-500 ${
        styleProps && styleProps
      }`}
      onClick={onClick && onClick}
      disabled={disabled}
    >
      {link ? <Link href={link}>{text}</Link> : <span>{text}</span>}
    </button>
  );
};

export default BasicButton;
