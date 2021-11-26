import React from "react";
import Script from "next/script";
import Donate from "../public/assets/donate.jpeg";
import Image from "next/image";


const donate = () => {
  return (
    <>
      <section className=" pt-20 ">
      <div className="relative text-center">
          <div className="mix-blend-overlay">
            <Image
              src={Donate}
              layout="fill"
              objectFit="cover"
              alt="Kids are running"
            ></Image>
          </div>

          <div className=" bg-black py-32  opacity-60 mx-auto w-full text-white">
            <h1 className=" text-6xl font-semibold text-white capitalize my-5">
            We appreciate your generosity
            </h1>
            <p className="text-xl block">
            Thanks for impacting the destinies of young African boys and girls
            </p>
          </div>
        </div>
      </section>
<div className="bg-l-header p-10  mx-auto flex items-center justify-center shadow-sm h-auto" >
  <div className=" w-3/4 xl:w-2/4 mx-auto">
      <Script
          src="https://donorbox.org/widget.js"
          paypalExpress="false"
        ></Script>
        <iframe
          src="https://donorbox.org/embed/vijona-ignite-workshops-1"
          name="donorbox"
          allowpaymentrequest="allowpaymentrequest"
          seamless="seamless"
          frameBorder="0"
          scrolling="no"
          height="900px"
          
          width="100%"
        ></iframe>
        </div>
</div>

    </>
  );
};

export default donate;
