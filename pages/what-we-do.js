import Image from "next/image";
import Link from "next/link";
import BgImage from "../public/assets/what-we-do.png";

const whatwedo = () => {
  return (
    <section className="h-screen z-0   absolute top-0 right-0 left-0 bottom-0">
      <Image src={BgImage} alt="what-we-do" />

      <Link href="/">
        <div className=" cursor-pointer flex items-end justify-center text-center  w-1/3 h-full absolute top-0 left-0 bottom-0">
          <p className="text-white text-3xl">Ignite Experience</p>
        </div>
      </Link>
      <Link href="/">
        <div className=" cursor-pointer flex items-end justify-center text-center  w-1/3 h-full absolute right-0 top-0 bottom-0">
          <p className="text-white text-3xl">Pathway Programs</p>
        </div>
      </Link>
    </section>
  );
};

export default whatwedo;
