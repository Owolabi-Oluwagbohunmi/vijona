import React from "react";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Pledge from "./pledge";

const Layout = ({ children }) => {
  return (
    <>
      <div className=" font-openSans px-5 md:px-16 lg:px-18 bg-v-bg">
        <Navbar />
        {children}
      </div>
      <div className="font-openSans px-5 md:px-16 lg:px-18">
        <Pledge />

        <Aboutus />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
