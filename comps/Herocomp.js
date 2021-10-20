import React from 'react';
import Image from 'next/image';

const Herocomp = ({imgUrl, headingText}) => {
  return (
    <>
    <section className="mt-24 mx-auto ">
        <div className="w-11/12 mx-auto xl:mt-48 mt-36 text-center ">
          <h1 className=" text-4xl md:text-6xl my-4 font-semibold ">
           {headingText}
          </h1>
          <div className="my-28">
            <Image
              className="rounded-md"
              src={imgUrl}
              alt="vijona-staff"
            />
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Herocomp
