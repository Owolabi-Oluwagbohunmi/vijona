import Head from "next/head";
import Image from "next/image";
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
        <title>Vijona | Home</title>
      </Head>
      <div className=" font-openSans px-5 md:px-16 lg:px-26 bg-v-darkgray">
        <Hero />
      </div>
      <div className=" font-openSans px-5 md:px-16 lg:px-32 bg-v-white my-16">
        <Pledge />
      </div>
      <div className="font-openSans px-5 md:px-16 bg-v-darkgray lg:px-26">
        <Aboutus />
      </div>

      <div className="font-openSans px-5 md:px-16 bg-v-white lg:px-32">
        <Howitworks />
      </div>

      <div className="font-openSans px-5 md:px-16 bg-v-white lg:px-18">
        <Partner />
      </div>
      <div className="font-openSans px-5 md:px-16 bg-v-white lg:px-18 mt-16 mb-16">
        <Counter />
      </div>
    </>
  );
}
