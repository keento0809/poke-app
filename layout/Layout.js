import React from "react";
import Meta from "../components/Meta/Meta";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="container mx-auto">
        <main className="main" style={{ paddingTop: "60px" }}>
          {props.children}
        </main>
      </div>
    </>
  );
};

export default Layout;
