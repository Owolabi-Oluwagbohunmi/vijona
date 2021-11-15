import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/vijona-black.png";

const Wwwdonav = () => {
  return (
    <div className=" fixed z-10  top-0 left-0 right-0 font-openSans px-5 md:px-16 lg:px-18  bg-transparent">
      <nav className="flex justify-between py-8 items-center font-medium">
        <div className=" w-28 md:w-36 cursor-pointer p-0 ">
          <Image className="w-full" src={Logo} alt="vijona-logo" />
        </div>

        <div className="hidden xl:flex font-medium">
          <Link href="/">
            <a className="navbar-link text-white">About Us</a>
          </Link>
          <Link href="/what-we-do">
            <a className="navbar-link text-white ">What we Do</a>
          </Link>
          <Link href="/events">
            <a className="navbar-link text-white ">Events &amp; Stories</a>
          </Link>
          <Link href="/alumni">
            <a className="navbar-link text-white">Alumni Community</a>
          </Link>
        </div>
<div>
  <div>
    
  </div>

        <div className="hidden xl:flex">
          <a className="navbar-btn bg-v-yellow mr-14  ">Donate</a>
          <a className="navbar-btn bg-v-black ">Join Us</a>
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
    </div>
  );
};

export default Wwwdonav;
