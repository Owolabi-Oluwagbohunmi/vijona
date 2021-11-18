import Bullet from "../comps/Bullet";
import Form from "../comps/Form";
import Head from "next/head";

const joinUs = () =>
{
  return (
    <>
      <Head>
        <title>Vijona | Join Us</title>
      </Head>
      <section>
        <div className="w-11/12 mx-auto xl:mt-48 mt-36 ">
          <h1 className=" text-4xl md:text-6xl my-4 font-semibold ">
            You can partner with us by :
          </h1>
          <div className="my-20">
            <Bullet textVal="Volunteering" />
            <Bullet textVal="By integrating one of our programs into your existing youth impact initiative" />
          </div>
        </div>
        <Form />
      </section>
    </>
  );
};

export default joinUs;
