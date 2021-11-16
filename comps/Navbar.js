import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/vijona-black.png";
import Instagram from "../public/assets/instagram.svg";
import Twitter from "../public/assets/twitter.svg";
import Youtube from "../public/assets/youtube.svg";
import DropDown from "./DropDown";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [dropdown, setDropDown] = useState(false)

  const MouseOver = () => {
    setShowLinks(true);
  };
  const MouseOut = () => {
    setShowLinks(false);
  };

  return (
    <div>
      <div className=" fixed z-10  top-0 left-0 right-0 font-openSans  px-16 bg-v-bg">
        <nav className="flex justify-between py-4 items-center font-medium">
          <div className="hidden xl:flex font-medium">
            <Link href="/">
              <a className="navbar-link uppercase">Who we are</a>
            </Link>
            <div className="flex flex-col">
              <Link href="/ignite-experience">
                <a className="navbar-link uppercase ">What we Do <FontAwesomeIcon icon={faCaretDown} /></a>
              </Link>
             
             {dropdown && <DropDown /> }
            </div>
            <Link href="/events">
              <a className="navbar-link uppercase ">Events</a>
            </Link>
          </div>
          <Link href="/">
            <div className=" w-28 md:w-36 lg:mr-28 cursor-pointer p-0 ">
              <Image src={Logo} alt="vijona-logo" />
            </div>
          </Link>
          <div>
            <div className="hidden xl:flex items-center mx-auto mb-2 justify-center">
              <div className="w-5 mr-5">
                <Image src={Instagram} />
              </div>
              <div className="w-7 mr-5">
                <Image src={Twitter} />
              </div>
              <div className="w-7">
                <Image src={Youtube} />
              </div>
            </div>
            <div className="hidden xl:flex">
              <Link href="/donate">
                <a className="navbar-btn bg-v-yellow mr-5">Donate</a>
              </Link>
              <Link href="/join-us">
                <a className="navbar-btn bg-v-black ">Join Us</a>
              </Link>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 xl:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </nav>
        {showLinks && <DropDown />}
      </div>
    </div>
  );
};

export default Navbar;
