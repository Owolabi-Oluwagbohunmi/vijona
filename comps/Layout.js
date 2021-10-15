import React from "react";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import Howitworks from "./Howitworks";
import Navbar from "./Navbar";
import Partner from "./Partner";
import Pledge from "./Pledge";
import { useRouter } from "next/router";
import Wwwdonav from "./Wwwnav";

const Layout = ({ children }) => {
  const router = useRouter();
  const WwwdoPage = router.pathname === "/what-we-do" ? false : true;

  return (
    <>
      {/* {WwwdoPage === false ? <Wwwdonav /> : <Navbar />} */}
      <Navbar />
      {children}
      <Footer />
      {/* {WwwdoPage && <Footer />} */}
    </>
  );
};

export default Layout;
