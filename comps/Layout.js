import React from "react";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import Howitworks from "./Howitworks";
import Navbar from "./Navbar";
import Partner from "./Partner";
import Pledge from "./pledge";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
