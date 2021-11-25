import Bullet from "../comps/Bullet";
import Form from "../comps/Form";
import Counter from "../comps/Counter";
import Head from "next/head";
import Image from "next/image";
import Donate from "../public/assets/donate.jpeg";
import donateIcon from "../public/assets/heart.png";
import volunteerIcon from "../public/assets/help.png";
import Link from "next/link";

const joinUs = () => {
  return (
    <>
      <Head>
        <title>Vijona | Join Us</title>
      </Head>
      <section>
        {/* <div className="w-11/12 mx-auto xl:pt-48 pt-36 ">
          <h1 className=" text-4xl md:text-6xl my-4 font-semibold ">
            You can partner with us by :
          </h1>
          <div className="my-20">
            <Bullet textVal="Volunteering" />
            <Bullet textVal="By integrating one of our programs into your existing youth impact initiative" />
          </div>
        </div>
        <Form /> */}

        <div className="relative text-center">
          <div className="mix-blend-overlay pt-24">
            <Image
              src={Donate}
              layout="fill"
              objectFit="cover"
              alt="Kids are running"
            ></Image>
          </div>

          <div className=" bg-black py-32  opacity-60 mx-auto w-full text-white">
            <h1 className=" text-6xl font-semibold text-white capitalize my-5">
             Join us in actualizing this great feat
            </h1>
            <p className="text-xl block">
              We appreciate your generous heart
            </p>
          </div>
        </div>
        <Counter />
      </section>

      <section className="bg-donate-col py-20  ">
        <div className="w-9/12 grid grid-cols-2 mx-auto">
          <div className="mx-auto flex items-center  w-5/10 ">
            <div className="w-10">
              <Image src={donateIcon} alt="donate-logo" />
            </div>
            <div className=" ml-8 w-9/12">
              <h3 className="capitalize text-2xl my-3  ">Make a donation</h3>
              <p className="w-8/12 ">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
          <Link href="/donate">
              <button onClick className="px-4 py-2 w-max my-4 bg-v-green text-white text-primary rounded-md">
                Donate
              </button>
              </Link>
            </div>
          </div>
          <div className="mx-auto flex items-center  w-5/10 ">
            <div className="w-10">
              <Image src={volunteerIcon} alt="donate-logo" />
            </div>
            <div className=" ml-8 w-9/12">
              <h3 className="capitalize text-2xl my-3  ">Become a volunteer</h3>
              <p className="w-8/12 ">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
              <Link href="/volunteer"> 
              <button className="px-4 py-2 w-max my-4 bg-v-green text-white text-primary rounded-md">
                Join Us
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default joinUs;
