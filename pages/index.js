import Head from "next/head";
import Aboutus from "../comps/Aboutus";
import Counter from "../comps/Counter";
import Hero from "../comps/Hero";
import Howitworks from "../comps/Howitworks";
import Partner from "../comps/Partner";
import Pledge from "../comps/Pledge";
import styles from "../styles/Home.module.css";
 
export default function Home()
{
  return (
    <>
      <Head>
        <title>Vijona Africa | Home</title>
        <meta name="description" content="Convert your UNIQUE innate talents and abilities into marketable solutions and services for your..." />
        <meta http-equiv='content-language' content='en' />
      </Head>

      <div className="font-openSans h-max">
        <Hero />
      </div>
      <div className=" font-openSans bg-v-brown">
        <Pledge />
      </div>
      <div className="font-openSans">
        <Howitworks />
      </div>
      <div className="font-openSans relative">
        <Aboutus />
      </div>
      <div className="font-openSans">
        <Partner />
      </div>
      <div className="font-openSans ">
        <Counter />
      </div>

    </>
  );
}
