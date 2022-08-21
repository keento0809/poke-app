import React from "react";
import Meta from "../components/Meta/Meta";
import Header from "./Header";
import { useAppContext } from "../context/state";
import Backdrop from "../components/Backdrop/Backdrop";

const Layout = (props) => {
  const { loading } = useAppContext();
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
