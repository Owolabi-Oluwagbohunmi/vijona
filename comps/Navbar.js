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
      setDropDown(true);
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
      <nav className='  h-28 flex justify-center align-middle text-xl bg-v-bg pt-3 w-full fixed z-50 top-0'>
        <div className="pl-14 cursor-pointer w-full order-1 pt-3 navscreenmax:order-2">
          <Link href="/">
            <div className=" w-28 md:w-36 lg:mr-28 cursor-pointer ">
              <Image src={Logo} alt="vijona-logo" />
            </div>
          </Link>
        </div>

        <div className="block order-3 pt-3 pr-14 navscreenmax:hidden " onClick={handleClick}>
          <div className=" text-gray-700  text-5xl">
            {click ? <FaTimesCircle /> : <FaAlignJustify />}
          </div>
        </div>

        <div className="w-full navscreenmax:pl-32">
          <ul className={click ? "absolute top-28 flex flex-col text-center order-2 bg-black text-white min-h-screen pl-96" : "hidden navscreenmax:grid navscreenmax:grid-cols-3 navscreenmax:gap-6 navscreenmax:list-none navscreenmax:text-center navscreenmax:justify-center navscreenmax:mr-4 navscreenmax:order-1 navscreenmax:text-sm navscreenmax:w-max navscreenmax:font-medium"}>
            <li onClick={closeMobileMenu} className="flex items-center h-20">
              <Link href="/who-we-are" className="text-center w-full table">
                WHO WE ARE
              </Link>
            </li>

            <li onClick={closeMobileMenu} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} className="flex items-center h-20 pr-1">
              <Link href="/ignite-experience" className="text-center w-full table">
                <div className="flex flex-row">
                  <span>WHAT WE DO</span>
                  <FaCaretDown className='text-1xl pt-1' />
                </div>

              </Link>

M
              {dropdown && <DropDown />}
            </li>

            <li onClick={closeMobileMenu} className="flex items-center h-20">
              <Link href="/events" className="text-center w-full table">
                EVENTS
              </Link>
            </li>
          </ul>

        </div>

        <div className={click ? "absolute order-2 top-60 z-50" : "hidden navscreenmax:block navscreenmax:order-3 navscreenmax:pr-32"}>
          <div className="flex items-center mx-auto mb-2 justify-center">
            <div className="w-5 mr-5 text-white">
              <Image src={Instagram} />
            </div>
            <div className="w-7 mr-5">
              <Image src={Twitter} />
            </div>
            <div className="w-7">
              <Image src={Youtube} />
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto text-xs navscreenmax:font-medium">
            <Link href="/donate">
              <a className="navbar-btn bg-v-yellow mr-5 w-max ">DONATE</a>
            </Link>
            <Link href="/join-us">
              <a className="navbar-btn bg-v-black mr-5 w-max">PARTNER WITH US</a>
            </Link>
          </div>
        </div>
      </nav>

    </>
  )
};

export default Navbar;
