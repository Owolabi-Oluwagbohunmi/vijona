import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";
import Herocomp from "../comps/Herocomp";
import AboutImg from "../public/assets/about-img.JPG";
import Discover from "../public/assets/discover-box.jpeg";
import Develop from "../public/assets/develop.jpeg";
import Deploy from "../public/assets/deploy.jpeg";

import Mouki from "../public/assets/mouki.jpeg";

import Isaac from "../public/assets/isaac.jpeg";

import esther from "../public/assets/esther.jpeg";
import Counter from "../comps/Counter";
import Team from "../comps/Team";
const whoweare = () => {
  return (
    <>
      <section className="mt-24 mx-auto ">
        <div className="w-11/12 mx-auto  mt-40 text-center ">
          <h1 className=" text-4xl md:text-6xl my-4 font-semibold ">
            The Vijona Africa Project
          </h1>
          <p className="text-xl lg:text-2xl mt-3  mb-10 text-v-green">
            (Motto: Discover, Develop, Deploy)
          </p>
          <p className="text-primary md:w-3/4 xl:w-2/4 mx-auto text-center mt-5 mb-16">
            Vijona Africa was founded in 2018 to play a role in transforming the
            mindset and reengineering the believe system of young Africans.
          </p>
        </div>
        <Image className="rounded-md" src={AboutImg} alt="vijona-staff" />
      </section>
      <section className="xl:px-16 my-28 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 my-8 md:my-14">
          <div className="">
            <h3 className=" text-4xl md:text-sectionhead font-semibold mb-5 text-center md:text-left ">
              Our founding premise
            </h3>

            <p className="text-primary mb-5">
              EVERYONE... rich/poor, girl/boy, in school/not in school is born
              with unique innate VALUE; talents and abilities, which can be
              unleashed, and developed into marketable services, products, and
              solutions.
            </p>
            <p className="text-primary mb-5">
              The youth bubble in Africa can become an asset for the continent
              with the right believe system, training and exposure.
            </p>
          </div>
          <div>
            <ReactPlayer
              className="rounded-sm mx-auto"
              width="100%"
              height="400px"
              url="https://youtu.be/-x1hNUlcw8s"
            />
          </div>
        </div>
      </section>

      <section className="bg-v-bg xl:px-16 my-28 py-12 px-10 ">
        <h3 className=" text-4xl md:text-sectionhead font-semibold mb-5 text-center md:text-left ">
          Our solution is wholistic
        </h3>
        <p className="text-primary my-10 lg:w-10/12">
          “We help you discover your unique innate God given talents and
          abilities, expose you to contextual relevant occupations that align
          with who you are, empower you to believe in your VALUE enough to
          develop and realize your unique occupational life plan.
        </p>
        <div className="grid grid-cols-3 my-10 gap-5">
          <Image className="rounded-md" src={Discover} alt="" />
          <Image className="rounded-md" src={Develop} alt="" />
          <Image className="rounded-md" src={Deploy} alt="" />
        </div>
      </section>

      <section className="xl:px-16 px-10">
        <h3 className=" text-4xl md:text-sectionhead font-semibold text-center md:text-left ">
          Our results tell a story
        </h3>
        <Counter />
      </section>
      <Team />
    </>
  );
};

export default whoweare;
