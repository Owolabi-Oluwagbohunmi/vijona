import { useState } from "react";
import Image from "next/image";
import Okeowo from "../public/assets/okeowo.jpeg";
import Isaac from "../public/assets/isaac.jpeg";
import Mouki from "../public/assets/mouki.jpeg";
import D1 from "../public/assets/director1.jpg";
import D2 from "../public/assets/director2.jpg";
import D3 from "../public/assets/director3.jpg";
import D4 from "../public/assets/director4.jpg";
import D5 from "../public/assets/director5.jpg";
import D6 from "../public/assets/director6.jpg";

import Relindis from "../public/assets/relindis-about.jpeg";
import buildUrl from "cloudinary-build-url";

const Team = () =>
{
  const [showTeam, setShowTeam] = useState(true);

  const handleShowTeam = () =>
  {
    setShowTeam(!showTeam);
  };

  const okeowo = buildUrl("okeowo_qei7wh", {
    cloud:{
      cloudName: "dbwk2jksa"
    }
  })
  const mouki = buildUrl("mouki_s4dlq7", {
    cloud:{
      cloudName: "dbwk2jksa"
    }
  })
  const isaac = buildUrl("isaac_n8k8ha", {
    cloud:{
      cloudName: "dbwk2jksa"
    }
  })
  const esther = buildUrl("esther_mrh5ug", {
    cloud:{
      cloudName: "dbwk2jksa"
    }
  })
  const bishop = buildUrl("director2_wzllwq", {
    cloud:{
      cloudName: "dbwk2jksa"
    }
  })
  const ranugupta = buildUrl("director3_c7jpwj", {
    cloud:{
      cloudName: "dbwk2jksa"
    }
  })
  const oyamedendan = buildUrl("director4_uc9paa", {
    cloud:{
      cloudName: "dbwk2jksa"
    }
  })
  const joshep = buildUrl("director5_zexidg", {
    cloud:{
      cloudName: "dbwk2jksa"
    }
  })
  const kiilsgaard = buildUrl("director6_lkrtmx", {
    cloud:{
      cloudName: "dbwk2jksa"
    }
  })

  return (
    <>
      <section className="bg-v-brown px-5 sm:px-16 md:px-16 lg:px-32 py-20">
        <h3 className=" text-4xl md:text-sectionhead font-semibold text-center md:text-left ">
          Our Team
        </h3>
        <div className="grid grid-cols-1 xl:grid-cols-2 my-10 gap-20 text-justify">
          <div>
            <p className="text-primary mb-5">
              After spending equal number of years in two starkly different
              continents; 21 years in Africa where I was born and raised and 21
              years in North America; it became painfully evident to me how
              disadvantaged children and youth in my continent of origin are.
            </p>
            <p className="text-primary mb-5">
              I know firsthand just how brilliant, and resilient kids in my part
              of the world are, yet in much of Africa, low exposure to critical
              thinking exercises, limited outlets for practical application, low
              focus on non-formal learning, other cultural and socioeconomic
              challenges prevent children from igniting and exploring their
              brilliant minds early in life… from unlocking and maximizing their
              innate talents and abilities.
            </p>
            <p className="text-primary mb-5">
              Vijona Africa was founded to help change the narrative for young
              Africans, to show in/out-of-school children the innate VALUE
              (talents and abilities) they already possess and create pathways
              for them to use that value to become self-sufficient via formal or
              non-formal learning paths
            </p>
            {/*  */}
            <button
              onClick={handleShowTeam}
              className="text-white bg-v-green my-3 py-3 px-2 rounded-sm"
            >
              {showTeam && "Meet Our Team"}
              {!showTeam && "Show Less"}
            </button>
          </div>
          <div>
            <Image src={Relindis} className="h-12" />

            <div className="text-primary text-center my-2 ">
              <p className="text-2xl">Relindis Mbu</p>
              <p className="text-primary"> Founder and Executive Director</p>
            </div>
          </div>
        </div>

        {!showTeam && (
          <section className="relative py-20 overflow-hidden bg-v-brown">
            <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
              <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50"></span>
            </span>

            <span className="absolute bottom-0 left-0"> </span>

            <div className="relative px-16 mx-auto max-w-7xl">
              <p className="font-medium tracking-wide text-blue-500 uppercase">OUR TEAM</p>
              <h2 className="relative max-w-lg mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl">Our Team is made up of passionate Country Coordinators within <br />respective countries and International Advisors
              </h2>
              <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col items-center justify-center col-span-1">
                  <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <div className="relative z-20 w-full rounded-full">
                      <Image src={okeowo} width="300" height="300" alt="country director nigeria" />
                    </div>
                  </div>
                  <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>Oluwatomi Okeowo</h3>
                      <p className="text-blue-600">Country Coordinator-Nigeria</p>
                    </div>
                    {/* <div className="relative flex items-center justify-center space-x-3">
                      <a href="#_" className="text-gray-300 hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                      </a>
                      <a href="#_" className="text-gray-300 hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                      </a>
                    </div> */}
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center col-span-1">
                  <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50"></div>
                    <div className="relative z-20 w-full rounded-full">
                      <Image src={mouki} width="300" height="300" alt="Country Coordinator - Ghana" />
                    </div>
                  </div>
                  <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>Jab Mouki Alexander</h3>
                      <p className="text-blue-600">Country Coordinator- Cameroon</p>
                    </div>
                    {/* <div className="relative flex items-center justify-center space-x-3">
                      <a href="#_" className="text-gray-300 hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                      </a>
                      <a href="#_" className="text-gray-300 hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                      </a>
                    </div> */}
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center col-span-1">
                  <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50"></div>
                    <div className="relative z-20 w-full rounded-full">
                      <Image src={isaac} width="300" height="300" alt="Country Coordinator - Ghana" />
                    </div>
                  </div>
                  <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>Isaac Boateng</h3>
                      <p className="text-blue-600">Country Coordinator- Ghana</p>
                    </div>
                    {/* <div className="relative flex items-center justify-center space-x-3">
                      <a href="#_" className="text-gray-300 hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                      </a>
                      <a href="#_" className="text-gray-300 hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                      </a>
                    </div> */}
                  </div>
                </div>

                <br />

                <div className="flex flex-col items-center justify-center col-span-1">
                  <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50"></div>
                    <div className="relative z-20 w-full rounded-full">
                      <Image src={esther} width="300" height="300" alt="Director" />
                    </div>
                  </div>
                  <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>Mrs. Esther David Sabo</h3>
                      <p className="text-blue-600">Advisor</p>
                    </div>
                    {/* <div className="relative flex items-center justify-center space-x-3">
                      <a href="#_" className="text-gray-300 hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                      </a>
                      <a href="#_" className="text-gray-300 hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                      </a>
                    </div> */}
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center col-span-1">
                  <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50"></div>
                    <div className="relative z-20 w-full rounded-full">
                      <Image src={bishop} width="300" height="300" alt="Director" />
                    </div>
                  </div>
                  <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>Bishop Tony Dunn</h3>
                      <p className="text-blue-600">Advisor</p>
                    </div>
                    {/* <div className="relative flex items-center justify-center space-x-3">
                      <a href="#_" className="text-gray-300 hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                      </a>
                      <a href="#_" className="text-gray-300 hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                      </a>
                    </div> */}
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center col-span-1">
                  <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50"></div>
                    <div className="relative z-20 w-full rounded-full">
                      <Image src={ranugupta} width="300" height="300" alt="Director" />
                    </div>
                  </div>
                  <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>Ranu Gupta</h3>
                      <p className="text-blue-600">Advisor</p>
                    </div>
                    {/* <div className="relative flex items-center justify-center space-x-3">
                      <a href="#_" className="text-gray-300 hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                      </a>
                      <a href="#_" className="text-gray-300 hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                      </a>
                    </div> */}
                  </div>
                </div>

                

               

                <div className="flex flex-col items-center justify-center col-span-1">
                  <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50"></div>
                    <div className="relative z-20 w-full rounded-full">
                      <Image src={kiilsgaard} width="300" height="300" alt="director" />
                    </div>
                  </div>
                  <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>Kjel kiilsgaard</h3>
                      <p className="text-blue-600">Advisor</p>
                    </div>
                    {/* <div className="relative flex items-center justify-center space-x-3">
                      <a href="#_" className="text-gray-300 hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                      </a>
                      <a href="#_" className="text-gray-300 hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                      </a>
                    </div> */}
                  </div>
                </div>


                  
                </div>
              </div>
            </section>

        )}
      </section>
    </>
  );
};

export default Team;
