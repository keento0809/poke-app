const LeftArrowIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 cursor-pointer transition duration-150 ease-in-out rounded-lg basis-1/3 min-w-[120px] border border-purple-400 hover:border-purple-500 dark:border-purple-500 dark:hover:border-purple-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
};

export default LeftArrowIcon;
