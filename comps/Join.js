import Image from "next/image";
import Link from "next/link";
import React from "react";
import Counter from "./Counter";
import Form from "./Form";
import { useState } from "react";
import Donate from "../public/assets/donate.jpeg";
import donateIcon from "../public/assets/heart.png";
import volunteerIcon from "../public/assets/help.png";
import buildUrl from "cloudinary-build-url";

const Join = () => {
  const [showForm, setShowForm] = useState(false);

  const partners = buildUrl("vijonapple_wfoptm",{
    cloud:{
      cloudName: "dbwk2jksa"
    }
  })
  return (
    <>
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
              src={partners}
              layout="fill"
              objectFit="cover"
              alt="Kids are running"
            ></Image>
          </div>

          <div className=" bg-black py-32  opacity-60 mx-auto w-full text-white">
            <h1 className=" text-6xl font-semibold text-white capitalize my-5">
              Join us in actualizing this great feat
            </h1>
            <p className="text-xl block">We appreciate your generous heart</p>
          </div>
        </div>
      </section>
      <section className="bg-donate-col py-20  ">
        <Form />
      </section>
    </>
  );
};

export default Join;
