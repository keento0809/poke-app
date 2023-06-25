import LoaderIcon from "../Icons/LoaderIcon";

const Backdrop = () => {
  return (
    <>
      <div
        id="popup-modal"
        tabIndex={-1}
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-40 min-h-screen md:inset-0 h-modal md:h-full bg-slate-50 dark:bg-slate-900 opacity-50"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <LoaderIcon />
        </div>
      </div>
    </>
  );
};

export default Backdrop;
