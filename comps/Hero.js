import Image from "next/image";
import Link from "next/link";
import {buildUrl} from 'cloudinary-build-url'
// import HeroImage from "../public/assets/hero.png";

const Hero = () =>
{
  const africaImage = buildUrl("hero_gkpnap", {
    cloud:{
      cloudName: 'dbwk2jksa'
    }
  })
  return (
    < section className="w-10/12 mx-auto pt-32 grid grid-cols-1 lg:grid lg:grid-cols-2 md:space-x-28 space py-20">
      <div className="grid grid-cols-1 justify-items-start items-center">
        <div className="grid grid-cols-1 justify-self-center">
          <h1 className="text-4xl lg:text-6xl font-bold">Who am I?</h1>
          <h2 className="text-4xl lg:text-6xl font-bold pb-5">
            What can I do?
          </h2>
          <p className="text-justify text-primary pb-3">
            Convert your UNIQUE innate talents and abilities into marketable
            solutions and services for your community.
          </p>
          <p className="text-justify text-primary"> 
            We are igniting critical thinking, encouraging imagination and creativity in learning, awakening sleeping
            giants, unleashing the full potential in young Africans, and
            giving them the audacity to dream outside the box. The future
            of a continent relies on who they are and what they can do.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-3 md:grid md:grid-cols-3 w-12/12 pb-6 text-white">
          <Link href="/ignite-experience">
            <a className="text-2x1 text-center shadow-md bg-v-yellow py-3 px-2 rounded w-max mr-4 hover:bg-white hover:text-black hover:border-4">
              IGNITE Experience
            </a>
          </Link>
          <Link href="/pathway-programs">
            <a className="text-2x1 text-center shadow-md bg-v-yellow py-3 px-2 rounded w-max mr-4 hover:bg-white hover:text-black hover:border-4">
              Pathway Program
            </a>
          </Link>
          <Link href="/incubator-hubs">
            <a className="text-2x1 text-center shadow-md bg-v-yellow py-3 px-2 rounded w-max mr-4 hover:bg-white hover:text-black hover:border-4">
              Incubator Hubs
            </a>
          </Link>
        </div>
      </div>

      <div>
        <Image src={africaImage} alt="An image of africa embeded with a hand made plane" width='600' height='500' layout="responsive" priority />
      </div>

    </section >
  );
};

export default Hero;


{/* <section className="flex flex-col xl:flex-row pt-40">
      <div className="xl:px-16 xl:w-2/4">
        <h1 className=" text-4xl md:text-6xl lg:text-7x1 my-4 font-semibold ">Who am I?</h1>
        <h2 className=" text-4xl md:text-6xl lg:text-7x1 my-4 font-semibold ">
          What can I do?
        </h2>
        <p className="text-primary text-justify">
          Convert your UNIQUE innate talents and abilities into marketable
          solutions and services for your community.
        </p>
        <p className="text-primary text-justify my-3">
          We are igniting critical thinking, encouraging imagination and creativity in learning, awakening sleeping
          giants, unleashing the full potential in young Africans, and
          giving them the audacity to dream outside the box. The future
          of a continent relies on who they are and what they can do.
        </p>
        <div className="flex flex-col justify-center align-middle mt-8 my-3 w-max sm:flex-row ">
          <Link href="/ignite-experience">
            <a className="bg-black py-3 px-4 mr-4 mb-4 rounded shadow-md text-white">
              IGNITE Experience
            </a>
          </Link>
          <Link href="/pathway-programs">
            <a className="bg-v-green py-3 px-4 mr-4 mb-4 rounded shadow-md text-white">
              Pathway Program
            </a>
          </Link>
          <Link href="/incubator-hubs">
            <a className="bg-v-yellow py-3 px-4 mr-4 rounded shadow-md text-white">
              Incubator Hubs
            </a>
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-10 mr-10 w-3/4  xl:w-5/12 ml-12">
        <Image src={HeroImage} alt="hero-image" priority />
      </div>
    </section> */}