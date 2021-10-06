import Head from "next/head";
import Image from "next/image";
import Aboutus from "../comps/Aboutus";
import Counter from "../comps/Counter";
import Hero from "../comps/Hero";
import Howitworks from "../comps/Howitworks";
import Partner from "../comps/Partner";
import Pledge from "../comps/Pledge";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vijona | Home</title>
      </Head>
      <div className=" font-openSans px-5 md:px-16 lg:px-18 bg-v-bg">
        <Hero />
      </div>
      <div className=" font-openSans px-5 md:px-16 lg:px-18 bg-white">
        <Pledge />
        <Aboutus />
        
      </div>
      <div className="font-openSans px-5 md:px-16 bg-v-bg lg:px-18">
        <Howitworks/>
        <Partner/>
      </div>
      <div className="font-openSans px-5 md:px-16 bg-white lg:px-18">

      <Counter/>
      </div>
    </>
  );
}
