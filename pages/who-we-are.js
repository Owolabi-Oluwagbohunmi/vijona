import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ReactPlayer from "react-player";
import Counter from "../comps/Counter";
import Team from "../comps/Team";
import buildUrl from "cloudinary-build-url";


const whoweare = () =>
{
  const housebuild = buildUrl("partner_jiz34y", {
    cloud: {
      cloudName: "dbwk2jksa"
    }
  })
  return (
    <div className="pt-24">

      <Head>      
        <title>Who We Are | Unlocking and Maximizing Innate Talents</title>
        <meta name="description" content="Vijona Africa was founded to help change the narrative for young Africans, to show in/out-of-school children the innate VALUE (talents and abilities) they already possess and create pathways for them to use that value to become self-sufficient via formal or non-formal learning paths" />
        <meta name="robots" content="index follow" />
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv='content-language' content='en' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <div className="relative text-center">
        <div className="mix-blend-overlay">
          <Image src={housebuild} layout="fill" objectFit="cover" alt="Kids are running"></Image>
        </div>

        <div className=" bg-black py-32  opacity-60 mx-auto">
          <h1 className="text-3xl lg:text-6xl font-semibold text-white">
            The Vijona Africa Project
          </h1>
          <p className="text-sm md:mb-5 md:text-base lg:text-2xl text-v-green font-extrabold">
            Discover, Develop, Deploy
          </p>
         
        </div>
      </div>

      <div className="">
        <section className="w-10/12 mx-auto pt-24 grid grid-cols-1 lg:grid lg:grid-cols-2 lg:space-x-10 py-20">
          <div className="flex flex-col item-center justify-center pb-4">
            <h3 className=" text-4xl md:text-sectionhead font-semibold pb-5">
              Our Founding Premise
            </h3>

            <p className="text-primary mb-5 text-justify">
              EVERYONE... rich or poor, girl or boy, in school or not in school is born
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
        </section>
      </div>

      <div className=" bg-v-brown">
        <section className="w-10/12 mx-auto pt-24 grid py-20 gap-1">
          <h3 className=" text-4xl md:text-sectionhead font-semibold mb-5 text-left ">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-40 w-40 rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            Our Solution is Wholistic
          </h3>
          <p className="text-primary my-10 lg:w-5/12 text-left -ml-0">
            We help you discover your unique innate God given talents and
            abilities, expose you to contextual relevant occupations that align
            with who you are, empower you to believe in your VALUE enough to
            develop and realize your unique occupational life plan.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:my-10 gap-1 justify-items-center items-center">
            <div className="p-5 bg-white rounded-xl shadow-xl">
              <div className="w-5/10 h-40 bg-gradient-to-r from-green-400 to-blue-500 text-center font-bold text-white text-8x1 justify-self-center pt- pt-16">DISCOVER</div>
              <div className="text-center flex flex-col">
                <p className=" font-bold text-lg pt-8 pb-3">Discover</p>
                <p className="pb-10">Who am I, What can I do?</p>
              </div>
            </div>
            <div className="p-5 bg-white rounded-xl shadow-xl">
              <div className="w-5/10 h-40 bg-gradient-to-r from-green-400 to-blue-500 text-center font-bold text-white text-8x1 justify-self-center text-6x1 pt-16">DEVELOP</div>
              <div className="text-center flex flex-col">
                <p className=" font-bold text-lg pt-8 pb-3">Develop</p>
                <p className="pb-10">Contextual and relevant incubators</p>
              </div>
            </div>
            <div className="p-5 bg-white rounded-xl shadow-xl">
              <div className="w-5/10 h-40 bg-gradient-to-r from-green-400 to-blue-500 text-center font-bold text-white text-8x1 justify-self-center pt-16">
                DEPLOY
              </div>
              <div className="text-center flex flex-col">
                <p className=" font-bold text-lg pt-8 pb-3">Deploy</p>
                <p className="pb-10">Bridge towards unique Occupational Life Plans</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className=" px-5 sm:px-16 md:px-16 lg:px-32  pt-10">
          <h3 className=" text-4xl md:text-sectionhead font-semibold text-center ">
            Our Results Tell a Story
          </h3>
          
        </section>
        <Counter />
      </div>
      <div>
        <section><Team /></section>
      </div>
    </div>
  );
};

export default whoweare;
