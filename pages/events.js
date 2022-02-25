import React from 'react'
import Head from "next/head";
import Image from 'next/image'
import buildUrl from "cloudinary-build-url";
import Events from '../comps/Events'

export default function events() {
  const housebuild = buildUrl("partner_jiz34y", {
    cloud: {
      cloudName: "dbwk2jksa"
    }
  })
  return (
    <div>
      <Head>
        <title>Vijona | Events</title>
        <meta name="description" content="Upcoming IGNITE Workshops and Contest." />
        <meta httpEquiv='content-language' content='en' />
        <meta name="robots" content="noindex nofollow" />
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
    </div>
  )
}
