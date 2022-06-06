import React, { Fragment } from "react";

const Header = () => {
  const openMenu = () => {
    document.getElementById("mobile-menu").classNameList.remove("hidden");
  };
  const closeMenu = () => {
    document.getElementById("mobile-menu").classList.add("hidden");
  };

  return <></>;
};

export default Header;
