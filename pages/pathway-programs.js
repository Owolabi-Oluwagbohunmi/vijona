import Image from "next/image";
import Head from "next/head";
import Yellow from "../public/assets/yellow.png";
import Purple from "../public/assets/purple.png";
import Herocomp from "../comps/Herocomp";
import curly from "../public/assets/curly-black.png";
import pathwayCircles from "../public/assets/pathway.png";
import yellowOnline from "../public/assets/yellowonline.svg";
import fatQuotes from "../public/assets/fat-quotes.svg";
import Barbing from "../public/assets/barbing.png";
import Welding from "../public/assets/welding.svg";
import Sewing from "../public/assets/sewing.svg";
import PurplePattern from "../public/assets/purplepattern.svg";
import Cta from "../comps/Cta";
import IgniteOne from "../public/assets/igniteone.png";
import IgniteTwo from "../public/assets/ignitetwo.png";
import Link from "next/link";
import ReactPlayer from "react-player";
import CardText from "../comps/CardText";

const pathwayScholarships = () =>
{
  return (
    <>
      <Head>
        <title>Vijona | Pathway-Programs</title>
      </Head>

      <section className="w-full bg-white">
        <div className="px-10 pt-32 pb-16 ml-auto mr-auto max-w-7xl md:px-24 lg:px-12 lg:py-32">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <div className="max-w-xl mb-6">
                <div className="mb-6">
                  <p className="inline font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-none">Our Pathwhay </p>
                  <p className="block font-sans text-5xl font-bold tracking-tight text-purple-700 sm:text-6xl sm:leading-none">Scholarships.</p>
                </div>
                <p className="text-base text-gray-700 md:text-lg text-justify pb-3">We have hand-crafted beautiful designs that will help your product or service shine.Drag&#39;n drop templates that allow you to build amazing landing pages in seconds!</p>
                <p className="text-base text-gray-700 md:text-lg text-justify pb-3">
                  Our Pathway Scholarship Program is unique in that it is &lsquo;DEMAND&rsquo;
                  based (driven by innate talents and abilities of each individual).
                </p>
                <p className="text-base text-gray-700 md:text-lg text-justify pb-3">
                  Our IGNITE Experience alumni create unique, relevant and SMART
                  Occupational Life Plans for themselves.
                </p>
                <p className="text-base text-gray-700 md:text-lg text-justify pb-3">
                  We focus on the path the alumni CHOOSE for themselves; be it to
                  learn a trade, entrepreneurship or formal education, and create
                  catalyst for them to achieve the dreams outlined in their
                  Occupational Life Plans.
                </p>

                <p className="text-base text-gray-700 md:text-lg text-justify pb-3">
                  This way we give each scholarship recipient a chance to make a
                  living in a relevant occupation they are passionate about; a pathway
                  to innovation and lifelong fulfillment.
                </p>
              </div>
              <div className="max-w-xl mb-6">
                <p className="relative">
                  <a href="#_" className="inline-flex flex-col items-center font-semibold text-purple-700 transition-colors duration-200 cursor-pointer group">
                    <span className="flex items-center w-full">
                      <span>Learn more</span>
                      <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12"><path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path></svg>
                    </span>
                    <span className="w-full h-0.5 translate-y-2 group-hover:translate-y-1 duration-200 ease-out transition opacity-0 group-hover:opacity-100 block bg-purple-600"></span>
                  </a>
                </p>
              </div>
            </div>
            <div className="flex justify-center w-full lg:items-center">
              <div className="flex flex-row items-end pr-3">
                <div className="object-cover w-full h-full mb-6 rounded shadow-lg lg:h-48 xl:h-56 lg:w-48 xl:w-56 relative">
                  <Image src={IgniteOne} layout="responsive" objectFit="fill" />
                </div>

                <div className="object-cover w-full h-full rounded shadow-lg lg:h-32 xl:h-40 lg:w-32 xl:w-40 relative">
                  <Image src={IgniteOne} layout="responsive" objectFit="fill" />
                </div>
              </div>

              <div className="object-cover w-full h-full rounded shadow-lg lg:h-64 xl:h-80 lg:w-64 xl:w-80 relative">
                <Image src={IgniteOne} layout="responsive" objectFit="fill" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative block py-20 overflow-hidden leading-6 text-left text-indigo-900 bg-v-brown">
        <div className="w-full max-w-2xl px-16 mx-auto leading-6 text-left sm:px-12 md:px-8 xl:px-12">
          <div className="relative w-full px-4 leading-6 text-center xl:flex-grow-0 xl:flex-shrink-0 lg:flex-grow-0 lg:flex-shrink-0">
            <div className="box-border text-sm font-semibold text-gray-700 uppercase">
              ...
            </div>
            <h2 className="box-border mx-0 mt-6 mb-0 font-sans text-3xl font-bold leading-tight text-indigo-900 sm:text-3xl md:text-5xl">
              No dream is too big, and every talent is valuable and needed in our communities.
            </h2>
          </div>
        </div>

      </section>

      <section className="px-2 py-32 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block text-indigo-700 xl:inline">Tell Your Story!</span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">It&apos;s never been easier to take a step. Be the inspiration for tomorrow.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden shadow-xl rounded-2xl">
                <div className="w-11/12 mt-40 mb-24 xl:w-full mx-auto xl:px-24">
                  <ReactPlayer
                    className="rounded-sm mx-auto"
                    width="100%"
                    height="500px"
                    url="https://youtu.be/tUbUXpMipuk"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta
        ImageUrl={PurplePattern}
        heading="Young girls and boys across Africa need sponsorship"
        buttonText="Coming Soon"
        href="/"
        text="You will soon be able to sponsor the occupational life plans of brilliant young Africans. - #Ubuntu"
      />
    </>
  );
};

export default pathwayScholarships;
