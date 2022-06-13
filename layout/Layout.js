import React from "react";
import Meta from "../components/Meta/Meta";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="container mx-auto dark:bg-gray-800">
        <main className="main">{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
