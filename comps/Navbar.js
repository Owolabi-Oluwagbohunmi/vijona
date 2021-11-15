import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/vijona-black.png";

const Navbar = () => {
  return (
    <div className=" fixed z-10  top-0 left-0 right-0 font-openSans  px-16 bg-v-bg">
      <nav className="flex justify-between py-8 items-center font-medium">
        
        <div className="hidden xl:flex font-medium">
          <Link href="/">
            <a className="navbar-link">Who we are</a>
          </Link>
          <Link href="/what-we-do">
            <a className="navbar-link ">What we Do</a>
          </Link>
          <Link href="/events">
            <a className="navbar-link ">Events & stories</a>
          </Link>
          {/* <Link href="/community">
            <a className="navbar-link">Alumni Community</a>
          </Link> */}
        </div>
        <Link href="/">
        <div className=" w-28 md:w-36 cursor-pointer p-0 ">
          <Image  src={Logo} alt="vijona-logo" />
        </div>
        </Link>

        <div className="hidden xl:flex">
          <a className="navbar-btn bg-v-yellow mr-10">Donate</a>
          <a className="navbar-btn bg-v-black ">Join Us</a>
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

export default Navbar;
