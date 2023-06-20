import { useContext } from "react";
import Meta from "../Meta/Meta";
import Backdrop from "../components/common/Backdrop/Backdrop";
import Header from "../components/common/Header/Header";
import { AppContext } from "../components/context/state";

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
