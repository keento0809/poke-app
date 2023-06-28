import DeleteAlertIcon from "../Icons/DeleteAlertIcon";

const DeleteAlert = () => {
  return (
    <>
      <div
        className="flex w-full md:max-w-[500px] mr-auto p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
        role="alert"
      >
        <DeleteAlertIcon />
        <div>Pokemon successfully deleted from favorites!</div>
      </div>
    </>
  );
};

export default DeleteAlert;
