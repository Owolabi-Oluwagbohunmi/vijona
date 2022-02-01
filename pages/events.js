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
        <meta name="robots" content="noindex nofollow" />
        <meta charset="UTF-8"></meta>
        <meta httpEquiv='content-language' content='en' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <Events />
    </div>
  )
}
