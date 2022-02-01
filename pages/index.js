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
        <title>Vijona Africa | Home to “Tomorrows future leaders"</title>
        <meta name="description" content="Vijona Africa is an African-American Non-Profit Organisation(NGO) that grooms young African leaders" />
        <meta name="robots" content="index follow" />
        <meta charset="UTF-8"></meta>
        <meta httpEquiv='content-language' content='en' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
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
