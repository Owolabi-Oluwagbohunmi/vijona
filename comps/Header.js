import React from "react";

const Header = ({ mainText }) => {
  return (
    <div className="bg-l-header flex justify-center h-80 pt-28 items-center">
      <p className="text-header-col text-4xl font-bold">{mainText}</p>
    </div>
  );
};

export default Header;
