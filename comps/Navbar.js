import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAlignJustify, FaTimesCircle, FaCaretDown, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { buildUrl } from 'cloudinary-build-url'
import DropDown from "./DropDown";


const Navbar = () =>
{
  const logo = buildUrl("vijona-black_q6q0wc", {
    cloud: {
      cloudName: 'dbwk2jksa'
    }
  })

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

  useEffect(() =>
  {
    window.addEventListener('resize', () =>
    {
      setClick(false)
      console.log('page refresh')
    })
  }, [])

  const logocdn = buildUrl("vijona_2_ua4dlr", {
    cloud: {
      cloudName: "dbwk2jksa"
    }
  })


  return (
    <div className="bg-white w-full h-24 fixed grid grid-cols-1 items-center min-w-max z-9999 ">
      <nav className={click ? "relative bg-black opacity-60 w-5/12 h-screen" : "w-10/12 mx-auto grid grid-cols-2 justify-items-start items-center xl:grid-cols-3"}>
        <ul className={click ? "border-white absolute top-24 text-white grid grid-cols-1 gap-10 z-9999" : "hidden xl:grid xl:grid-cols-3 xl:space-x-0 xl:gap-1 xl:w-full"}>
          <Link href="/who-we-are">
            <li className="cursor-pointer" onClick={closeMobileMenu}>Who we are</li>
          </Link>

          <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} clas>
            <Link href="/ignite-experience">
              <div className="flex flex-row" onClick={closeMobileMenu}>
                <li className="cursor-pointer">What we do</li>
                {<FaCaretDown className="text-xs mt-1 justify-self-center" />}
              </div>
            </Link>

            {dropdown && (<DropDown />)}
          </div>


          <Link href="/events">
            <li className="cursor-pointer" onClick={closeMobileMenu}>Events</li>
          </Link>
        </ul>

        <div className="xl:justify-self-center">
          <Link href="/" className="cursor-pointer">
            <Image src={logocdn} width="112" height="30" alt="vijona africa logo" />
          </Link>
        </div>

        <div className={click ? "absolute top-48 bg-black opacity-60 w-full h-open-menu text-white grid -grid-cols-1 justify-items-center items-center gap-0" : "hidden xl:flex xl:flex-col xl:justify-self-end xl:gap-2"}>
          <div className="grid grid-cols-3 space-x-3 mx-auto">
            <Link href="https://www.twitter.com/VijonaAfrica" className="cursor-pointer"><FaTwitter /></Link>
            <Link href="https://www.instagram.com/vijonaafrica/" className="cursor-pointer"><FaInstagram /></Link>
            <Link href="https://www.facebook.com/VijonaAfrica/" className="cursor-pointer"><FaFacebook /></Link>
          </div>

          <div className="grid grid-cols-2 gap-1 w-full">
            <button className='px-2 py-2 bg-v-yellow text-white text-2x1 rounded-md'>Donate</button>
            <button className='px-2 py-2 w-max bg-v-black text-white text-2x1 rounded-md'>Partner With Us</button>
          </div>
        </div>

        <div className="justify-self-end xl:hidden" onClick={handleClick}>
          <Link href="/">
            {click ? <FaTimesCircle className='text-2xl text-white mx-auo' /> : <FaAlignJustify className='text-2xl' />}
          </Link>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;