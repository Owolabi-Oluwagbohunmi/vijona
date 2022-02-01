import Bullet from "../comps/Bullet";
import Form from "../comps/Form";
import Counter from "../comps/Counter";
import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import Modalbtn from "../comps/Modalbtn";

import Join from "../comps/Join";


const joinUs = () => {
 
  return (
    <>
      <Head>
        <title>Vijona | Join Us</title>
        <meta name="robots" content="index nofollow" />
        <meta charset="UTF-8"></meta>
        <meta httpEquiv='content-language' content='en' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      

      <Join/>
    </>
  );
};

export default joinUs;
