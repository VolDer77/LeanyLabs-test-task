import React from "react";
import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <header className="section-header">
      <img src={logo} alt="logo" className="section-header__logo" />
      <h1 className="section-header__text">Find My IP</h1>
    </header>
  );
};
