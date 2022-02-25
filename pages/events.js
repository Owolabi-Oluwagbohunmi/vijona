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

      <div className='bg-hero-pattern h-96'>
 
      </div>

        
    </div>
  )
}
