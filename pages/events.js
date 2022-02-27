import React from "react";
import Head from "next/head";
import Image from "next/image";
import buildUrl from "cloudinary-build-url";
import workShop from "../public/assets/workshop2.JPG";
import location from "../public/assets/location.svg";
import date from "../public/assets/date.svg";
import time from "../public/assets/time.svg";
import Events from "../comps/Events";

export default function events() {
  const housebuild = buildUrl("partner_jiz34y", {
    cloud: {
      cloudName: "dbwk2jksa",
    },
  });

  const logo = buildUrl("vijona-black_q6q0wc", {
    cloud: {
      cloudName: "dbwk2jksa",
    },
  });

  return (
    <>
      <div>
        <Head>
          <title>Vijona | Events</title>
          <meta
            name="description"
            content="Upcoming IGNITE Workshops and Contest."
          />
          <meta httpEquiv="content-language" content="en" />
          <meta name="robots" content="noindex nofollow" />
          <meta charSet="UTF-8"></meta>
          <meta httpEquiv="content-language" content="en" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </Head>
      </div>

      <section className=" bg-black   pt-20 w-full py-12  sm:py-32">
        <div className="w-11/12 lg:w-10/12 mx-auto"></div>
        <div className="bg-hero-pattern h-96 w-10/12 flex justify-start items-start  mx-auto shadow-2xl my-20 ">
          <div className="w-full lg:w-9/12 mt-20 ml-20">
            <h2 className="text-v-yellow uppercase font-bold text-sm">
              Upcoming Events
            </h2>
            <h3 className="text-4xl lg:text-7xl my-5 font-bold text-white">
              {" "}
              The IGNITE Experience
            </h3>
            <p className="text-xl my-2 lg:w-6/12 text-white">
              Unleasing the full potential in young Africans
            </p>
            <div className="my-5 flex items-center">
              <div className="flex items-center mr-10">
                <Image
                  className="z-1"
                  src={location}
                  alt="Taking the pldege to serve"
                  width="15"
                  height="15"
                  priority
                />
                <p className="ml-3 text-white">Lagos</p>
              </div>
              <div className="flex items-center mr-10">
                <Image
                  className="z-1"
                  src={date}
                  alt="Taking the pldege to serve"
                  width="15"
                  height="15"
                  priority
                />
                <p className="ml-3 text-white">26 July 2022</p>
              </div>
              <div className="flex items-center mr-10">
                <Image
                  className="z-1"
                  src={time}
                  alt="Taking the pldege to serve"
                  width="15"
                  height="15"
                  priority
                />
                <p className="ml-3 text-white ">10am Prompt</p>
              </div>
            </div>
          </div>
          <button className="text-white bg-v-yellow py-5 px-5 rounded-sm mt-40">
            Support Event
          </button>
        </div>
      </section>

      <div className="bg-white h-96  w-11/12 mx-auto border">
        
      </div>
    </>
  );
}

{
  /* <div className="flex flex-col lg:flex-row  w-10/12 lg:w-9/12 mx-auto justify-between my-10 lg:my-20">
          <div className="w-full lg:w-9/12 my-5">
            <h2 className="text-vidblue uppercase font-bold text-sm">Upcoming Events</h2>
            <h3 className="text-4xl lg:text-7xl my-1 font-bold"> The IGNITE Experience</h3>
            <p className="text-lg my-2 lg:w-6/12">Unleasing the full potential in young Africans</p>

            <div className="bg-white rounded w-full py-10 px-5 z-10"></div>
          </div>
          <div>
            <Image
            className="z-1"
              src={workShop}
              alt="Taking the pldege to serve"
              width="600"
              height="400"
              priority
            />
          </div>
        </div> */
}
