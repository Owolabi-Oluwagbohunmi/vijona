import Image from "next/image";
import Link from "next/link";
import Logo from '../public/assets/vijona-black.jpg';

const Navbar = () => {
  return (
    <nav className="flex justify-between py-8 items-center font-medium">
      <div className=" w-28 md:w-36 cursor-pointer border p-0 ">
            <Image className="w-full" src={Logo} alt="vijona-logo" />
          </div>

      <div className="hidden xl:flex font-medium">
        <a className="cursor-pointer mx-8 ">About Us</a>
        <a className="cursor-pointer mx-8 ">What we Do</a>
        <a className="cursor-pointer mx-8 ">Events&amp;Stories</a>
        <a className="cursor-pointer mx-8">Alumni Community</a>
      </div>

      <div className="hidden xl:flex">
        <a className="bg-v-yellow mr-14 px-6 py-3 rounded-sm shadow-md text-white">Donate</a>
        <a className="bg-v-black px-6 py-3 rounded-sm shadow-md  text-white">Join Us</a>
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
  );
};

export default Navbar;
