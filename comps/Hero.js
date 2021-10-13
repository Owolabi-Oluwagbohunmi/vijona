import Image from "next/image";
import HeroImage from '../public/assets/hero.png'

const Hero = () => {
  return (
    <section className="flex flex-col xl:flex-row pt-5 mt-24 ">
    <div className="xl:px-16 xl:w-2/4">
      <h1 className=" text-5xl md:text-6xl my-6 font-semibold ">Who am I?</h1>
      <h2 className=" text-5xl md:text-6xl my-6 font-semibold ">What can I do?</h2>
      <p className="text-primary">
        Convert your UNIQUE innate talents and abilities into marketable
        solutions and services for your community.
      </p>
      <p className="text-primary">
        We are igniting critical thinking, awakening sleeping giants,unleashing
        the full capacity/potential in young Africans, and giving them the
        audacity to dream outside the box…because the future of a continent
        relies on who they are and what they can do.
      </p>
      <div className="flex mt-8 flex-col w-max sm:flex-row ">
        <a className="bg-black py-4 px-6 mr-4 rounded shadow-md text-white">Ignite Experience</a>
        <a className="bg-v-yellow py-4 px-6 mr-4 rounded shadow-md text-white">Incubator Hubs</a>
        <a className="bg-v-green py-4 px-6 mr-4 px-4 rounded shadow-md text-white">Pathway Programs</a>
      </div>
    </div>
    <div className="mx-auto mt-10 mr-10 w-3/4  xl:w-5/12 ml-12">
      <Image src={HeroImage} alt="hero-image"/>
    </div>
    </section>
  );
};

export default Hero;
