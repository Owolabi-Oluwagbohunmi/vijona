import Link from "next/link";
import React from "react";
import Image from "next/image";
import VijonaPeople from "../public/assets/vijonapple.jpg";


const CardText = () => {
  return (
    <div className="card shadow-lg">
      <div className="">
        <Image src={VijonaPeople} />
      </div>
      <div className="pt-4 pl-4 pr-4 pb-10 ">
        <h4 className="text-2xl my-2">Barbing</h4>
        <h5 className="text-gray-400 my-2">Cameroon</h5>
        <p className="mt-2 mb-10 w-10/12">
          Provide a rainwater catchment to help at least 460 people gain access
          to safe and reliable water.
        </p>
        <Link href="/donate">
          <a className="rounded bg-v-green text-white py-3 p-2 mt-10">
            Help this cause
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CardText;
