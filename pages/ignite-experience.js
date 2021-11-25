import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import Occupational from "../public/assets/occupational.svg";
import uniqueAttributes from "../public/assets/unique-attributes.svg";
import curlyArrow from "../public/assets/curly-arr.svg";
import Build from "../public/assets/build.svg";

import Critical from "../public/assets/critical.svg";
import Showcase from "../public/assets/showcase.svg";
import World from "../public/assets/world.svg";

import ReactPlayer from "react-player/lazy";

const igniteExperience = () =>
{
  const myStyle = {
    borderRadius: "10px",
  };
  return (
    <>
      <Head>
        <title>Vijona | IGNITE Experience</title>
      </Head>

      <section className="relative flex flex-col items-center justify-center w-full px-6 py-24 bg-white bg-cover lg:py-32 min-w-screen">
        <div className="flex flex-col items-center justify-center mx-auto sm:p-6 xl:p-8 lg:flex-row lg:max-w-7xl lg:p-0 space-x-20 ">
          <div className="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0">
            <h1 className="relative z-20 text-4xl font-extrabold leading-none text-purple-500 xl:text-5xl sm:text-center lg:text-left">
              Welcome To The<br />
              <span className="mt-1 text-gray-800 lg:mt-0">IGNITE Experience</span>
            </h1>
            <p className="relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left">A self-discovery and occupation envisioning journey!</p>
            {/* <div className="relative flex mt-4">
              <a href="#_" className="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-full shadow lg:py-4 hover:bg-purple-600 focus:outline-none focus:border-purple-600 focus:shadow-outline-purple md:text-lg xl:text-xl md:px-5 xl:px-10">Get Started</a>
              <a href="#_" className="relative flex items-center self-start justify-center py-2 pl-10 pr-5 mt-5 ml-5 text-base font-medium leading-tight text-gray-400 transition duration-150 ease-in-out bg-gray-100 border-transparent rounded-full shadow-sm lg:py-4 md:pl-16 md:pr-5 xl:pr-10 hover:text-purple-500 focus:outline-none md:text-lg xl:text-xl">
                <svg className="absolute left-0 w-6 h-6 ml-3 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                <span className="text-purple-500">How It Works</span>
              </a>
            </div> */}
          </div>
          <div className="relative w-full px-5 rounded-lg cursor-pointer lg:w-2/2 group xl:px-0">
            <div className="z-10 object-cover w-full h-full">
              <ReactPlayer
                className="rounded-sm mx-auto"
                style={myStyle}
                width="100%"
                height="400px"
                url="https://www.youtube.com/watch?v=s3I7q0CsHlo"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="pt-20 pb-32 bg-v-brown">
        <div className="px-20 mx-auto max-w-7xl">
          <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Our Solution</h2>
          <p className="mb-16 text-lg text-gray-500">Imagine if young africans are equipped early on in life.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 lg:gap-20">
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-red-600 bg-red-100 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold leading-tight text-gray-900 lg:text-lg">Gifted with self discovery <span className="block">Who am I</span></h3>
              <div className="text-sm text-gray-500 lg:text-base">

                <p>1. Innate VALUE; talents, and abilities from birth.Think criically and creatively </p>
    
                <p className="block my-3">2. Lifelong paradigm shift</p>

              </div>
            </div>

            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-green-600 bg-green-100 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold leading-tight text-gray-900 lg:text-lg">Exposed to contexual Occupations What can i do</h3>
              <div className="text-sm text-gray-500 lg:text-base">

                <p>3. Relevant occupations that align with who they are</p>
                
                <p className="block my-3">4. Operate from a place of passion; the birthplace of innovation</p>

              </div>
            </div>

            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-blue-600 bg-blue-100 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold leading-tight text-gray-900 lg:text-lg">Enabled to draft life plans</h3>
              <div className="text-sm text-gray-500 lg:text-base">

                <p>5. Actionable and SMART goals</p>
                
                <p className="block my-3">6. Becoming self-advocates of their success</p>

              </div>
            </div>

            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-purple-600 bg-purple-100 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold leading-tight text-gray-900 lg:text-lg">Empowered to achieve their plans</h3>
              <div className="text-sm text-gray-500 lg:text-base">

                <p>7. Effective programs, relevant trainings, mentorahip network, and exposure</p>
               

              </div>
            </div>
{/* 
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-indigo-600 bg-indigo-100 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Integrations</h3>
              <p className="text-sm text-gray-500 lg:text-base">Simple and configuration intregrations with your favorite applications and services.</p>
            </div> */}

            <div className="">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-pink-600 bg-pink-100 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold leading-tight text-gray-900 lg:text-lg">SKiiled Africans for Africa.</h3>
              <p className="text-sm text-gray-500 lg:text-base">Outcome</p>
            </div>

          </div>
        </div>
      </section>


      <section className="w-full py-20 bg-white">
        <div className="flex flex-col items-center px-12 mx-auto max-w-7xl lg:flex-row space-x-16">
          <div className="relative z-20 flex flex-col items-start justify-center w-full h-full lg:w-5/12">
            <h1 className="text-5xl font-bold xl:text-6xl pb-7 ">Get Freedom <br />From Occupational wilderness</h1>
            <p className="text-lg text-gray-500 pb-7">
              Whether you choose to learn a trade or choose to pursue formal education... what is important is choosing to run your best race, and leave your footprint on the world.</p>

              <p className="text-lg text-gray-500 pb-7">Our IGNITE Experience frees you from occupational wilderness. We take you on a journey to discovering a list of occupations suitable for your unique inner talents and abilities, and position you for a successful and fulfilled life.</p>
              <p className="text-v-green  text-primary my-4 font-semi-bold  ">
            “Tomorrow belongs to the people who prepare for it today“ - African
            Proverb
          </p>
            {/* <div className="flex flex-col items-center w-full sm:w-auto sm:flex-row sm:space-x-10">
              <a href="#_" className="px-7 sm:w-auto justify-center w-full flex items-center overflow-hidden group relative py-3.5 text-xl font-medium text-white bg-gray-900 rounded-full">
                <span className="absolute inset-0 w-full h-0 transition-all duration-300 ease-out bg-pink-500 group-hover:h-full"></span>
                <span className="relative">Get Started</span>
              </a>

            </div> */}
          </div>

          <div className="relative z-10 w-full h-full my-16 lg:my-0 lg:w-7/12">
            <div className="relative z-40 w-full h-full">
              <Image src={Occupational} />
            </div>

            <div className="box-content absolute inset-0 z-30 hidden scale-150 translate-x-40 translate-y-10 rounded-full w-80 lg:block h-80 xl:w-96 xl:h-96 bg-pink-50"></div>
            <div className="absolute bottom-0 left-0 z-20 hidden -translate-x-3 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-yellow-50"></div>
            <div className="absolute top-0 left-0 z-20 hidden -translate-x-12 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-blue-50"></div>
          </div>
        </div>
      </section>


      <section className="py-16 xl:px-16 bg-v-pink">
        <div className="max-w-7xl mx-auto">
           <h3 className="text-3xl font-extrabold leading-tight text-gray-900 py-14 text-left ">
          At the end of this experience, you will;
        </h3>
          </div>
       
        <div className="grid max-w-7xl w-11/12 xl:w-full mx-auto grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-20">
          <div>
            <div>
              <Image src={uniqueAttributes} alt="" />
            </div>
            <div className="rounded-full bg-yellow-200 w-10 h-10 flex items-center justify-center">
              <p className="text-white text-primary">1</p>
            </div>
            <p className="text-gray text-normal my-6">
              Know unique attributes about yourself
            </p>
          </div>
          <div>
            <div>
              <Image src={Critical} alt="" />
            </div>
            <div className="rounded-full bg-yellow-200 w-10 h-10 flex items-center justify-center">
              <p className="text-white text-primary">2</p>
            </div>
            <p className="text-gray text-normal my-6">Think critically</p>
          </div>
          <div>
            <div>
              <Image src={Showcase} alt="" />
            </div>
            <div className="rounded-full bg-yellow-200 w-10 h-10 flex items-center justify-center">
              <p className="text-white text-primary">3</p>
            </div>
            <p className="text-gray text-normal my-6">
              Showcase innate talents, inventions, or innovative ideas you have
            </p>
          </div>

          <div>
            <div>
              <Image src={uniqueAttributes} alt="" />
            </div>
            <div className="rounded-full bg-yellow-200 w-10 h-10 flex items-center justify-center">
              <p className="text-white text-primary">4</p>
            </div>
            <p className="text-gray text-normal my-6">
              Build your unique occupational life plan
            </p>
          </div>
          <div>
            <div>
              <Image src={World} alt="" />
            </div>
            <div className="rounded-full bg-yellow-200 w-10 h-10 flex items-center justify-center">
              <p className="text-white text-primary">5</p>
            </div>
            <p className="text-gray text-normal my-6">
              Be ready to take on the world confidently
            </p>
          </div>
        </div>
      </section>

    </>
  );
};

export default igniteExperience;
