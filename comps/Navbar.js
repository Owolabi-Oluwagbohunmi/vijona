import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/vijona-black.png";
import { FaAlignJustify, FaTimesCircle, FaCaretDown } from "react-icons/fa";
import Instagram from "../public/assets/instagram.svg";
import Twitter from "../public/assets/twitter.svg";
import Youtube from "../public/assets/youtube.svg";
import DropDown from "./DropDown";


const Navbar = () =>
{
  const [click, setClick] = useState(false)
  const [dropdown, setDropDown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () =>
  {
    if (window.innerWidth < 1270) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };

  const onMouseLeave = () =>
  {
    if (window.innerWidth < 1270) {
      setDropDown(false);
    } else {
      setDropDown(false);
    }
  };

  return (
    <>
      <nav className='  h-28 flex justify-center align-middle text-xl bg-v-bg pt-3 p-5 w-full fixed z-50 top-0'>
        <div className="cursor-pointer w-full order-1 pt-3 navscreenmax:order-2">
          <Link href="/">
            <div className=" w-28 md:w-36 lg:mr-28 cursor-pointer ">
              <Image src={Logo} alt="vijona-logo" />
            </div>
          </Link>
        </div>

        <div className="block order-3 pt-3 navscreenmax:hidden " onClick={handleClick}>
          <div className=" text-gray-700  text-5xl">
            {click ? <FaTimesCircle /> : <FaAlignJustify />}
          </div>
        </div>

        <ul className={click ? "flex flex-col w-full min-h-screen absolute top-28 opacity-90 transition-all bg-black justify-center align-middle z-50 text-white" : "hidden navscreenmax:grid navscreenmax:grid-cols-3 navscreenmax:gap-2 navscreenmax:list-none navscreenmax:text-center navscreenmax:w-full navscreenmax:justify-center navscreenmax:mr-4 navscreenmax:order-1 "}>
          <li onClick={closeMobileMenu} className="flex items-center h-20">
            <Link href="/who-we-are" className=" text-center p-8 w-full table hover:bg-gray-400 hover:rounded-none navscreenmax:py-2 navscreenmax:px-6 navscreenmax:hover:bg-black navscreenmax:rounded navscreenmax:transition-all">
              Who we are
            </Link>
          </li>

          <li onClick={closeMobileMenu} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} className="flex items-center h-20">
            <Link href="/ignite-experience" className="  text-center p-8 w-full table hover:bg-gray-400 hover:rounded-none navscreenmax:py-2 navscreenmax:px-6 navscreenmax:hover:bg-black navscreenmax:rounded navscreenmax:transition-all uppercase">
              <span>What we Do {<FaCaretDown className=' inline-block text-2xl' />}</span>
            </Link>


            {dropdown && <DropDown />}
          </li>

          <li onClick={closeMobileMenu} className="flex items-center h-20">
            <Link href="/events" className=" text-center p-8 w-full table hover:bg-gray-400 hover:rounded-none navscreenmax:py-2 navscreenmax:px-6 navscreenmax:hover:bg-black navscreenmax:rounded navscreenmax:transition-all uppercase">
              Events
            </Link>
          </li>
        </ul>

        <div className="hidden navscreenmax:block navscreenmax:order-3">
          <div className="flex items-center mx-auto mb-2 justify-center">
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
          <div className="flex items-center justify-center mx-auto">
            <Link href="/donate">
              <a className="navbar-btn bg-v-yellow mr-5 w-max text-sm  ">Donate</a>
            </Link>
            <Link href="/join-us">
              <a className="navbar-btn bg-v-black mr-5 w-max text-sm">Partner With Us</a>
            </Link>
          </div>
        </div>
      </nav>

    </>
  )
};

export default Navbar;
