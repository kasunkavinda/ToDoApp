import React from "react";

const Footer = ({ length }) => {
  return (
    <div>
      <p className="bg-blue-600 text-white font-medium text-1xl p-2 text-center">
        {length} List Items Available
      </p>
    </div>
  );
};

export default Footer;
