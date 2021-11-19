import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ReactPlayer from "react-player";
import Herocomp from "../comps/Herocomp";
import AboutImg from "../public/assets/about-img.JPG";
import Discover from "../public/assets/discover-box.jpeg";
import Develop from "../public/assets/develop.jpeg";
import Deploy from "../public/assets/deploy.jpeg";
import Vijonaproject from "../public/assets/vijonaproject.jpg";

import Mouki from "../public/assets/mouki.jpeg";

import Isaac from "../public/assets/isaac.jpeg";

import esther from "../public/assets/esther.jpeg";
import Counter from "../comps/Counter";
import Team from "../comps/Team";
const whoweare = () =>
{
  return (
    <>
      <Head>
        <title>Vijona | Who we are</title>
      </Head>
     
        <section className="mt-28 mt relative">
          <Image src={Vijonaproject} alt="kids running"/>
          {/* <Image className="rounded-md absolute" src={AboutImg} alt="vijona-staff" /> */}
          <div className="top-0 mt-1 px-5 sm:mt-5 md:mt-12 lg:mt-20 xl:mt-40 text-center absolute mx-auto bg-black opacity-70 w-full">
            <h1 className=" text-3xl lg:text-6xl my-4 font-semibold text-white">
              The Vijona Africa Project
            </h1>
            <p className="text-sm md:text-base lg:text-2xl mt-3  mb-10 text-v-green font-extrabold">
              (Motto: Discover, Develop, Deploy)
            </p>
            <p className="text-sm lg:3x1 md:w-3/4 xl:w-2/4 mx-auto text-justify mt-5 mb-16 text-white">
              Vijona Africa was founded in 2018 to play a role in transforming the mindset and reengineering the believe system of young Africans.
            </p>
          </div>

          {/* <div className="relative">
            <Image className="rounded-md absolute" src={AboutImg} alt="vijona-staff" />
            <div className="absolute bg-black w-screen h-full bg-blend-multiply top-0"></div>
          </div> */}




        </section>
        <section className=" px-5 sm:px-16 md:px-16 lg:px-32 pt-32 pb-20">
          <div className="grid grid-cols-1 xl:grid-cols-whoweareTemplate gap-10">
            <div className="flex flex-col align-middle justify-center">
              <h3 className=" text-4xl md:text-sectionhead font-semibold pb-4">
                Our Founding Premise
              </h3>

              <p className="text-primary mb-5 text-justify">
                EVERYONE... rich/poor, girl/boy, in school/not in school is born
                with unique innate VALUE; talents and abilities, which can be
                unleashed, and developed into marketable services, products, and
                solutions.
              </p>
              <p className="text-primary">
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

        <section className="px-5 sm:px-16 md:px-16 lg:px-32 bg-v-darkgray py-12 mb-16">
          <h3 className=" text-4xl md:text-sectionhead font-semibold mb-5 text-left ">
            Our Solution is Wholistic
          </h3>
          <p className="text-primary my-10 lg:w-5/12 text-left -ml-0">
            “We help you discover your unique innate God given talents and
            abilities, expose you to contextual relevant occupations that align
            with who you are, empower you to believe in your VALUE enough to
            develop and realize your unique occupational life plan.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:my-10 gap-1">
            <div className="">
              <Image className="rounded-md" src={Discover} alt="" />
              <div className="text-center flex flex-col">
                <p className=" font-bold text-lg pt-8 pb-3">Discover</p>
                <p className="pb-10">Who am I, What can I do?</p>
              </div>
            </div>
            <div><Image className="rounded-md" src={Develop} alt="" />
              <div className="text-center flex flex-col">
                <p className=" font-bold text-lg pt-8 pb-3">Develop</p>
                <p className="pb-10">Contextual and relevant incubators</p>
              </div></div>
            <div><Image className="rounded-md" src={Deploy} alt="" />
              <div className="text-center flex flex-col">
                <p className=" font-bold text-lg pt-8 pb-3">Deploy</p>
                <p className="pb-10">Bridge towards unique Occupational Life Plans</p>
              </div></div>



          </div>
        </section>

        <section className=" px-5 sm:px-16 md:px-16 lg:px-32 pb-10">
          <h3 className=" text-4xl md:text-sectionhead font-semibold text-center pb-8">
            Our Results Tell a Story
          </h3>
          <Counter />
        </section>
        <Team />
    </>
  );
};

export default whoweare;
