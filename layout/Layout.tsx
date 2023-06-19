import Meta from "../Meta/Meta";
import Header from "./Header";
import { useContext } from "react";
import { AppContext } from "../components/context/state";
import Backdrop from "../components/common/Backdrop/Backdrop";

const Layout = (props) => {
  const { loading } = useContext(AppContext);
  return (
    <>
      <Meta />
      <Header />
      {loading && <Backdrop />}
      <div className="container mx-auto dark:bg-gray-800">
        <main className="main">{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
