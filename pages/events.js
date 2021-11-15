import Image from "next/image";
import Link from "next/link";
import React from "react";
import Herocomp from "../comps/Herocomp";
import EventsImg from "../public/assets/events.png";
import IgniteOne from "../public/assets/igniteone.png";
import IgniteTwo from "../public/assets/ignitetwo.png";
import Blue from "../public/assets/blue-pattern.svg";

const events = () => {
  return (
    <>
      <Herocomp
        imgUrl={EventsImg}
        headingText="See the great work we are doing"
      />
      <section className="bg-v-gray my-28 py-16 xl:px-16">
        <h3 className="text-sectionhead text-center xl:text-left font-semibold py-14">
          Upcoming Ignite Experience workshop
        </h3>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="w-11/12 xl:w-full mx-auto relative">
            <Image src={IgniteOne} />
            <div className="absolute bottom-20 left-8">
              <div className="flex my-5 bg-v-black w-max py-3 px-4 rounded items-center">
                <p className=" uppercase text-white ">Workshop</p>
              </div>
              <p className="text-white text-2xl font-bold my-4">
                Ignite Experience Cameroon
              </p>

              <p className=" w-max  text-white rounded  my-2">
                December 23rd, 2021 Workshop
              </p>
            </div>
          </div>
          <div className="w-11/12 xl:w-full mx-auto relative">
            <Image src={IgniteTwo} />
            <div className="absolute bottom-20 left-8">
              <div className="flex my-5 bg-v-black w-max py-3 px-4 rounded items-center">
                <p className="uppercase text-white ">Workshop</p>
              </div>
              <p className="text-white text-2xl font-bold my-4">
                Ignite Experience Nigeria
              </p>

              <p className=" w-max  text-white rounded  my-2">
                December 23rd, 2021 Workshop
              </p>
            </div>
          </div>
        </div>
        <section>
        <h3 className="text-3xl text-center xl:text-left font-semibold py-14">
        Past Ignite Experience workshops
        </h3>
          <div className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="relative text-white ">
              <Image src={IgniteOne} />
            </div>
            <div className="relative text-white ">
              <Image src={IgniteOne} />
            </div>
            <div className="relative text-white ">
              <Image src={IgniteOne} />
            </div>
            <div className="relative text-white ">
              <Image src={IgniteOne} />
            </div>
          </div>
        </section>
        
      </section>
      <section className="py-6 xl:px-16">
      <h3 className="text-sectionhead text-center xl:text-left font-semibold py-14">
      Upcoming Ignite Contest
        </h3>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="w-11/12 xl:w-full mx-auto relative">
            <Image src={IgniteOne} />
            <div className="absolute bottom-20 left-8">
              <div className="flex my-5 bg-v-black w-max py-3 px-4 rounded items-center">
                <p className=" uppercase text-white ">Contest</p>
              </div>
              <p className="text-white text-2xl font-bold my-4">
              Ignite Contest Feb 2022
              </p>

            </div>
          </div>
          <div className="w-11/12 xl:w-full mx-auto relative">
            <Image src={IgniteTwo} />
            <div className="absolute bottom-20 left-8">
              <div className="flex my-5 bg-v-black w-max py-3 px-4 rounded items-center">
                <p className="uppercase text-white ">Contest</p>
              </div>
              <p className="text-white text-2xl font-bold my-4">
                IIgnite Contest Dec 2021
              </p>

              
            </div>
          </div>
        </div>
        </section>

        <section className="py-8 xl:px-16">
        <h3 className="text-3xl text-center xl:text-left font-semibold py-14">
        Past Ignite Experience workshops
        </h3>
          <div className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="relative text-white ">
              <Image src={IgniteOne} />
            </div>
            <div className="relative text-white ">
              <Image src={IgniteOne} />
            </div>
            <div className="relative text-white ">
              <Image src={IgniteOne} />
            </div>
            <div className="relative text-white ">
              <Image src={IgniteOne} />
            </div>
          </div>
        </section>

        <section className="relative my-20">
          <Image src={Blue}/>
          <div className="py-8 xl:px-16 absolute top-5  text-white">
        <h3 className="text-2xl px-8 py-12 xl:text-3xl text-center  font-semibold ">
        Past Ignite Experience workshops
        </h3>
          <div className=" w-full grid grid-cols-4 gap-6">
            <div className=" text-white ">
              <Image src={IgniteOne} />
            </div>
            <div className=" text-white ">
              <Image src={IgniteOne} />
            </div>
            <div className=" text-white ">
              <Image src={IgniteOne} />
            </div>
            <div className=" text-white ">
              <Image src={IgniteOne} />
            </div>
          </div>
        </div>

        </section>
        
      
    </>
  );
};

export default events;
