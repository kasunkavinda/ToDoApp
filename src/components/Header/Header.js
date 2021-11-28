import React from "react";

const Header = ({ title }) => {
  return (
    <h1 className="bg-blue-600 text-white font-medium text-5xl p-2">{title}</h1>
  );
};

Header.defaultProps = {
  title: "Grocery List",
};

export default Header;
