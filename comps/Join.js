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

const Join = () =>
{
  const [showForm, setShowForm] = useState(false);

  const partners = buildUrl("vijonapple_wfoptm", {
    cloud: {
      cloudName: "dbwk2jksa"
    }
  })
  return (
    <>
      <section>
        <div className="relative text-center">
          <div className="mix-blend-overlay pt-24">
            <Image
              src={partners}
              layout="fill"
              objectFit="cover"
              alt="Kids are running"
            ></Image>
          </div>

          <div className=" bg-black py-72  opacity-60 mx-auto w-full text-white">
            <h1 className=" text-6xl font-semibold text-white capitalize my-5">
              Join Us In Actualizing This Great Vision
            </h1>
            <p className="text-xl block">#UBUNTU - I am because we are </p>
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
