import { useContext } from "react";
import { AppContext } from "../../context/state";
import CrossIcon from "../Icons/CrossIcon";
import SuccessAlertIcon from "../Icons/SuccessAlertIcon";

const SuccessAlert = () => {
  const { turnoffNotification } = useContext(AppContext);
  const handleCloseAlert = () => {
    turnoffNotification("Delete");
  };
  return (
    <>
      <div
        id="alert-3"
        className="flex w-full md:max-w-500 p-4 mr-auto my-4 bg-green-100 rounded-lg dark:bg-green-200"
        role="alert"
      >
        <SuccessAlertIcon />
        <div className="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
          Pokemon successfully added to favorites!
        </div>
        <button
          onClick={handleCloseAlert}
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300"
          data-dismiss-target="#alert-3"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <CrossIcon />
        </button>
      </div>
    </>
  );
};

export default SuccessAlert;
