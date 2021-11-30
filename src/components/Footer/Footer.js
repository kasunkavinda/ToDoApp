import React from "react";

const Footer = ({ length }) => {
  return (
    <div>
      <p className="bg-blue-600 text-white font-medium text-1xl p-2 text-center">
        {length} List {length > 0 ? "Items" : "Item"} Available
      </p>
    </div>
  );
};

export default Footer;
