import React from "react";

const Header = ({ mainText }) => {
  return (
    <div className="bg-l-header flex justify-center h-80 pt-28 items-center">
      <h1 className="text-header-col text-3xl lg:text-5xl font-bold">{mainText}</h1>
    </div>
  );
};

export default Header;
