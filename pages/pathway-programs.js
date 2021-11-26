import Image from "next/image";
import Head from "next/head";
import PurplePattern from "../public/assets/purplepattern.svg";
import Cta from "../comps/Cta";
import IgniteOne from "../public/assets/igniteone.png";
import Link from "next/link";
import ReactPlayer from "react-player";
import buildUrl from "cloudinary-build-url";
import purpleppp from '../public/assets/purplepattern.png'

const pathwayScholarships = () =>
{
  const pathway = buildUrl("IMG_8489_vklr74", {
    cloud:{
      cloudName: "dbwk2jksa"
    }
  })
  const pathway2 = buildUrl("e844b6e3-222d-4434-9daa-e84e4782b7cd_r5rcgj", {
    cloud:{
      cloudName: "dbwk2jksa"
    }
  })
  const pathway3 = buildUrl("dd8cf7a7-a3aa-426e-9b56-eb5da1bef15b_pj9bop", {
    cloud:{
      cloudName: "dbwk2jksa"
    }
  })
  return (
    <>
      <Head>
        <title>Vijona | Pathway-Programs</title>
      </Head>

      <div className="relative text-center">
        <div className="mix-blend-overlay pt-24">
          <Image src={pathway} layout="fill" objectFit="cover" alt="Kids are running"></Image>
        </div>

        <div className=" bg-black py-32  opacity-60 mx-auto w-full">
          <h1 className=" text-3xl lg:text-6xl font-semibold text-white">
            Pathway Program
          </h1>
          {/* <p className="w-10/12 text-sm md:mb-5 md:text-base lg:text-2xl text-v-green font-extrabold">
            Discover, Develop, Deploy
          </p> */}
         
        </div>
      </div>

      <section className="w-full bg-white">
        <div className="px-10 ml-auto mr-auto max-w-7xl md:px-24 lg:px-12 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <div className="max-w-xl mb-6">
                <div className="mb-6">
                  <p className="inline font-sans font-bold tracking-tight text-gray-900 text-6xl sm:leading-none">Our Pathwhay </p>
                  <p className="block font-sans font-bold tracking-tight text-purple-700 text-6xl sm:leading-none">Scholarships.</p>
                </div>
                <p className="text-primary text-gray-700 text-justify pb-3">
                  Our Pathway Scholarship Program is unique in that it is &lsquo;DEMAND&rsquo;
                  based (driven by innate talents and abilities of each individual).
                </p>
                <p className="text-primary text-gray-700 text-justify pb-3">
                  Our IGNITE Experience alumni create unique, relevant and SMART
                  Occupational Life Plans for themselves.
                </p>
                <p className="ext-primary text-gray-700 text-justify pb-3">
                  We focus on the path the alumni CHOOSE for themselves; be it to
                  learn a trade, entrepreneurship or formal education, and create
                  catalyst for them to achieve the dreams outlined in their
                  Occupational Life Plans.
                </p>

                <p className="text-primary text-gray-700 text-justify pb-3">
                  This way we give each scholarship recipient a chance to make a
                  living in a relevant occupation they are passionate about; a pathway
                  to innovation and lifelong fulfillment.
                </p>
              </div>
              {/* <div className="max-w-xl mb-6">
                <p className="relative">
                  <a href="#_" className="inline-flex flex-col items-center font-semibold text-purple-700 transition-colors duration-200 cursor-pointer group">
                    <span className="flex items-center w-full">
                      <span>Learn more</span>
                      <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12"><path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path></svg>
                    </span>
                    <span className="w-full h-0.5 translate-y-2 group-hover:translate-y-1 duration-200 ease-out transition opacity-0 group-hover:opacity-100 block bg-purple-600"></span>
                  </a>
                </p>
              </div> */}
            </div>
            <div className="flex justify-center w-full lg:items-center">
              <div className="flex flex-row items-end pr-3">
                <div className="object-cover w-full h-full mb-6 rounded shadow-lg lg:h-48 xl:h-56 lg:w-48 xl:w-56 relative">
                  <Image src={pathway2} layout="fill" objectFit="cover" />
                </div>

                <div className="object-cover w-full h-full rounded shadow-lg lg:h-44 xl:h-44 lg:w-32 xl:w-40 relative">
                  <Image src={pathway3} layout="fill" objectFit="cover" />
                </div>
              </div>

              <div className="object-cover w-full h-full rounded shadow-lg lg:h-64 xl:h-80 lg:w-64 xl:w-80 relative">
                <Image src={pathway} layout="fill" objectFit="cover" />
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
            <h2 className="box-border mx-0 mt-6 mb-0 font-sans text-3xl font-bold leading-tight text-indigo-900">
              No dream is too big, and every talent is valuable and needed in our communities.
            </h2>
          </div>
        </div>

      </section>
      <Cta
        ImageUrl={purpleppp}
        heading="Young girls and boys across Africa need sponsorship"
        buttonText="Coming Soon"
        href="/donate"
        text="You will soon be able to sponsor the occupational life plans of brilliant young Africans. - #Ubuntu"
      />
    </>
  );
};

export default pathwayScholarships;
