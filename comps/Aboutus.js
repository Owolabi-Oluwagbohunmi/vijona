import React from "react";
import Image from "next/image";
import {buildUrl} from 'cloudinary-build-url'

const Aboutus = () =>
{
  const whoweare = buildUrl("relindis_gfpmaw", {
    cloud: {
      cloudName: "dbwk2jksa"
    }
  })
  return (
    <section className="relative">

      <div className=" mix-blend-overlay">
        <Image src={whoweare} layout="fill" objectFit="cover" alt="a boy building an airplane"></Image>
      </div>

      <section className="bg-v-brown opacity-90">
        <section className="w-10/12 mx-auto pt-24 grid grid-cols-1 lg:grid lg:grid-cols-2 lg:space-x-10 py-20">
          <div>
            <h3 className="text-sectionhead font-semibold pt-14 pb-3">
              Who We Are
            </h3>
            <p className=" text-justify xl:text-left text-primary md:3/4 xl:w-10/12 pb-3">
              Vijona Africa was founded in 2018 to play a role in transforming the
              mindset and reengineering the believe system of young Africans.
            </p>
          </div>

          <div>
            <h4 className=" text-left lg:text-left text-insectionHeading font-semibold pb-3">
              Our Vision
            </h4>
            <p className=" text-justify xl:text-left text-primary md:3/4 xl:w-10/12">
              We see a future with empowered and relevantly upskilled young
              Africans championing every facet of the African narrative…
            </p>

            <div className="my-10">
              <h4 className="text-left lg:text-left text-insectionHeading font-semibold pb-3">
                Our Mission
              </h4>
              <p className=" text-justify xl:text-left text-primary md:3/4 xl:w-10/12">
                Show young Africans the innate value they already possess, expose
                them to contextual/relevant occupations that align with who they are
                and create incubator channels that will enable them become
                innovators and pioneers for their continent and world.
              </p>
            </div>
          </div>
        </section>
      </section>

    </section>


  );
};

export default Aboutus;

{/* <section className="grid grid-cols-1 xl:grid-cols-aboutusTemplate grid-rows-aboutusTemplate pb-10 text-justify">
      <div>
        <h3 className="text-sectionhead font-semibold pt-14 pb-8">
          Who We Are
        </h3>
        <p className="text-primary md:w-3/4 xl:mb-20">
          Vijona Africa was founded in 2018 to play a role in transforming the
          mindset and reengineering the believe system of young Africans.
        </p>
      </div>


      <section className="my-10 xl:my-32 row-span-2 flex flex-col align-middle justify-center">
        <div>
          <h4 className=" text-left lg:text-left text-insectionHeading font-semibold mb-3">
            Our Vision
          </h4>
          <p className=" text-justify xl:text-left text-primary md:3/4 xl:w-10/12">
            We see a future with empowered and relevantly upskilled young
            Africans championing every facet of the African narrative…
          </p>

          <div className="my-10">
            <h4 className="text-insectionHeading text-justify lg:text-left font-semibold my-3">
              Our Mission
            </h4>
            <p className="text-justify xl:text-left  text-primary md:3/4 xl:w-11/12">
              Show young Africans the innate value they already possess, expose
              them to contextual/relevant occupations that align with who they are
              and create incubator channels that will enable them become
              innovators and pioneers for their continent and world.
            </p>
          </div>
        </div>
      </section>

      <div className="xl:mr-16">
        <Image className="rounded-md mr-5" src={Relindis} />
      </div>
    </section> */}