import React from "react";
import Head from "next/head";
import Image from "next/image";
import buildUrl from "cloudinary-build-url";

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

      <Events/>
     
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
