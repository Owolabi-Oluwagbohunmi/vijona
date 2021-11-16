import Image from "next/image";
import Link from "next/link";

import Occupational from "../public/assets/occupational.svg";
import uniqueAttributes from "../public/assets/unique-attributes.svg";
import curlyArrow from "../public/assets/curly-arr.svg";
import Build from "../public/assets/build.svg";

import Critical from "../public/assets/critical.svg";
import Showcase from "../public/assets/showcase.svg";
import World from "../public/assets/world.svg";
import IgniteOne from "../public/assets/igniteone.png";
import IgniteTwo from "../public/assets/ignitetwo.png";
import plus from "../public/assets/plus.svg";

import ReactPlayer from "react-player/lazy";
import Bullet from "../comps/Bullet";

const igniteExperience = () => {
  const myStyle = {
    borderRadius: "10px",
  };
  return (
    <>
      <section className="mt-24 mx-auto ">
        <div className="w-11/12 mx-auto xl:mt-48 mt-36 text-center ">
          <h1 className=" text-4xl md:text-6xl my-4 font-semibold ">
            Welcome to the IGNITE Experience
          </h1>
          <p className="text-2xl my-10">
            A self-discovery and occupation envisioning journey!
          </p>
          <p className="text-v-green  text-primary my-4 font-semi-bold  ">
            “Knowing yourself is the beginning of all wisdom” - Aristotle
          </p>
          <svg
            width="109"
            height="109"
            viewBox="0 0 109 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.9"
              d="M54.2115 108.711C84.0221 108.711 108.188 84.5451 108.188 54.7345C108.188 24.9239 84.0221 0.757629 54.2115 0.757629C24.4009 0.757629 0.234619 24.9239 0.234619 54.7345C0.234619 84.5451 24.4009 108.711 54.2115 108.711Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="w-11/12 xl:w-full mx-auto xl:px-24 ">
          <ReactPlayer
            className="rounded-sm mx-auto"
            style={myStyle}
            width="100%"
            height="600px"
            url="https://www.youtube.com/watch?v=s3I7q0CsHlo"
          />
        </div>
      </section>

      <section className="bg-v-gray my-10 xl:px-16 py-20">
        <h2 className="text-sectionhead font-semibold py-14">Our Solution</h2>
        <p className="text-primary">
          Imagine if young Africans are properly{" "}
          <span className="font-bold">equipped early in life...</span>
        </p>
        <div className="w-2/4 my-5 ">
          <div className="flex">
            <div className="bg-white w-card p-4 h-card">
              <div className="flex ">
                <div className="mr-3">
                  <Image src={curlyArrow} />
                </div>
                <h3 className="text-2xl w-10/12 font-medium">
                  Gifted with self- discovery
                </h3>
              </div>
              <p className="uppercase my-4">Who am I?</p>

              <Bullet textVal="Innate values, talents, and abilities at birth ignite critical thinking" />
              <Bullet textVal="Lifelong mental paradigm shift" />
            </div>
            <div className="">
              <Image src={plus} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-white w-card p-4 h-card ">
              <div className="flex items-center">
                <div>
                  <Image src={curlyArrow} />
                </div>
                <h3 className="text-2xl w-3/4 font-medium">
                  Exposed to contextual occupations
                </h3>
              </div>
              <p className="uppercase">What can I do?</p>
              <Bullet textVal="Relevant occupations that align with who they are" />
              <Bullet textVal="Operate from a place of passion, the birthplace of innovation" />
            </div>
            <div className="">
              <Image src={plus} />
            </div>
          </div>
          <div className="flex flex-col-reverse">
            <div className="">
              <Image src={plus} />
            </div>
            <div className="bg-white w-card p-4 h-card ">
              <div className="flex items-center">
                <div>
                  <Image src={curlyArrow} />
                </div>
                <h3 className="text-2xl w-3/4 font-medium">
                  Enabled to draft life plans
                </h3>
              </div>
              <p className="uppercase">
                Individualized Occupational life plans
              </p>
              <Bullet textVal="Actionable and SMART goals" />
              <Bullet textVal="Becoming self- advocates of their success" />
            </div>
          </div>

          <div className="">
            <div className="">
              <Image src={plus} />
            </div>
            <div className="bg-white w-card p-4 h-card ">
              <div className="flex items-center">
                <div>
                  <Image src={curlyArrow} />
                </div>
                <h3 className="text-2xl w-3/4 font-medium">
                  Empowered to achieve their plans
                </h3>
              </div>

              <Bullet textVal="Effective programs, relevant trainings, networking, and exposure" />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 w-11/12 xl:w-full mx-auto items-center xl:px-16 grid lg:grid-cols-2 gap-7 ">
        <div>
          <h3 className="text-sectionhead text-center lg:text-left font-semibold py-8">
            Get freedom from occupational wilderness
          </h3>
          <p className=" text-primary xl:w-11/12 mb-5">
            Whether you choose to learn a trade or choose to pursue formal
            education... what is important is choosing to run your best, and
            leave your footprint on the world.
          </p>
          <p className=" text-primary xl:w-11/12 mb-5">
            Our Ignite Experience frees you from occupational wilderness. We
            take you on a journey to discovering a list of occupations suitable
            for your unique inner talents and abilities, and position you for a
            successful and fulfilled life.
          </p>
          <p className="text-v-green  text-primary my-4 font-semi-bold  ">
            “Tomorrow belongs to the people who prepare for it today“ - African
            Proverb
          </p>
        </div>
        <div className=" mx-auto ">
          <Image src={Occupational} alt="liberation-Illustration" />
        </div>
      </section>
      <section className="my-28 py-16 xl:px-16 bg-v-pink">
        <h3 className="text-sectionhead text-center font-semibold py-14">
          At the end of this experience, you will;
        </h3>
        <div className="grid w-11/12 xl:w-full mx-auto grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-20">
          <div>
            <div>
              <Image src={uniqueAttributes} />
            </div>
            <div className="rounded-full bg-yellow-200 w-10 h-10 flex items-center justify-center">
              <p className="text-white text-primary">1</p>
            </div>
            <p className="text-gray text-normal my-6">
              Know unique attributes about yourself
            </p>
          </div>
          <div>
            <div>
              <Image src={Critical} />
            </div>
            <div className="rounded-full bg-yellow-200 w-10 h-10 flex items-center justify-center">
              <p className="text-white text-primary">2</p>
            </div>
            <p className="text-gray text-normal my-6">Think critically</p>
          </div>
          <div>
            <div>
              <Image src={Showcase} />
            </div>
            <div className="rounded-full bg-yellow-200 w-10 h-10 flex items-center justify-center">
              <p className="text-white text-primary">3</p>
            </div>
            <p className="text-gray text-normal my-6">
              Showcase innate talents, inventions, or innovative ideas you have
            </p>
          </div>

          <div>
            <div>
              <Image src={uniqueAttributes} />
            </div>
            <div className="rounded-full bg-yellow-200 w-10 h-10 flex items-center justify-center">
              <p className="text-white text-primary">4</p>
            </div>
            <p className="text-gray text-normal my-6">
              Build your unique occupational life plan
            </p>
          </div>
          <div>
            <div>
              <Image src={World} />
            </div>
            <div className="rounded-full bg-yellow-200 w-10 h-10 flex items-center justify-center">
              <p className="text-white text-primary">5</p>
            </div>
            <p className="text-gray text-normal my-6">
              Be ready to take on the world confidently
            </p>
          </div>
        </div>
      </section>

      <section className="my-28 py-16 xl:px-16">
        <h3 className="text-sectionhead text-center xl:text-left font-semibold py-14">
          Ignite workshops and contests
        </h3>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="w-11/12 xl:w-full mx-auto relative">
            <Image src={IgniteOne} />
            <div className="absolute bottom-20 left-12">
              <div className="flex my-5 bg-v-black w-max py-3 px-4 rounded items-center">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0.125C3.52517 0.125 0.699707 2.94798 0.699707 6.4209C0.699707 8.50717 1.66046 9.99856 2.86914 11.3574C4.07783 12.7163 5.53679 13.9824 6.68798 15.708C6.72223 15.7594 6.76863 15.8015 6.82306 15.8306C6.87749 15.8597 6.93827 15.875 7 15.875C7.06173 15.875 7.12251 15.8597 7.17694 15.8306C7.23137 15.8015 7.27776 15.7594 7.31201 15.708C8.46321 13.9824 9.92217 12.7163 11.1309 11.3574C12.3395 9.99856 13.3003 8.50717 13.3003 6.4209C13.3003 2.94798 10.4748 0.125 7 0.125ZM7 0.875C10.0698 0.875 12.5503 3.35358 12.5503 6.4209C12.5503 8.28202 11.7326 9.55376 10.5713 10.8594C9.50231 12.0612 8.15984 13.3005 7 14.9082C5.84016 13.3005 4.49768 12.0612 3.42871 10.8594C2.26739 9.55376 1.44971 8.28202 1.44971 6.4209C1.44971 3.35358 3.93023 0.875 7 0.875ZM7 3.125C5.34758 3.125 4 4.47258 4 6.125C4 7.77742 5.34758 9.125 7 9.125C8.65241 9.125 10 7.77742 10 6.125C10 4.47258 8.65241 3.125 7 3.125ZM7 3.875C8.24708 3.875 9.25 4.87791 9.25 6.125C9.25 7.37209 8.24708 8.375 7 8.375C5.75291 8.375 4.75 7.37209 4.75 6.125C4.75 4.87791 5.75291 3.875 7 3.875Z"
                    fill="#ED1C24"
                  />
                </svg>

                <p className="ml-2 uppercase text-white ">Cameroun</p>
              </div>
              <p className="text-white text-2xl font-bold my-8">
                Find Ignite Workshops near your location
              </p>
              <Link href="/">
                <a className=" w-max py-3 px-5 text-white rounded bg-v-yellow my-4">
                  See locations
                </a>
              </Link>
            </div>
          </div>
          <div className="w-11/12 xl:w-full mx-auto relative">
            <Image src={IgniteTwo} />
            <div className="absolute bottom-20 left-12">
              <div className="flex my-5 bg-v-black w-max py-3 px-4 rounded items-center">
                <p className="ml-2 uppercase text-white ">Contest</p>
              </div>
              <p className="text-white text-2xl font-bold my-8">
                Get Involved in our upcoming Ignite Contests
              </p>
              <Link href="/">
                <a className=" w-max py-3 px-5 text-white rounded bg-v-yellow my-4">
                  See locations
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default igniteExperience;
