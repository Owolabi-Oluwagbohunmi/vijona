import React from 'react'
import Head from "next/head";
import Events from '../comps/Events'

export default function events() {
  return (
    <div>
      <Head>
        <title>Vijona | Events</title>
        <meta name="description" content="Upcoming IGNITE Workshops and Contest." />
        <meta httpEquiv='content-language' content='en' />
      </Head>

      <Events />
    </div>
  )
}
