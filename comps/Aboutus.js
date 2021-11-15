import React from "react";
import Image from "next/image";
import VijonaPeople from "../public/assets/vijonapple.jpg";
import Relindis from "../public/assets/relindis.jpg";
import Occupational from "../public/assets/occupational.svg";

const Aboutus = () => {
  return (
    <section className="pt-10 xl:px-16 bg-v-bg">
      <h3 className="text-sectionhead font-semibold py-14 text-center">
        About Us
      </h3>
      <p className="text-primary md:w-3/4 xl:w-2/4 mx-auto text-center mb-20">
        Vijona Africa was founded in 2018 to play a role in transforming the
        mindset and reengineering the believe system of young Africans.
      </p>
      
      <section className=" my-32 vision grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h4 className=" text-center lg:text-left text-insectionHeading font-semibold mb-3">
            Our Vision
          </h4>
          <p className="text-center xl:text-left text-primary md:3/4 xl:w-10/12">
            We see a future with empowered and relevantly upskilled young
            Africans championing every facet of the African narrative…
          </p>

          <div className="my-10">
          <h4 className="text-insectionHeading text-center lg:text-left font-semibold my-3">
            Our Mission
          </h4>
          <p className="text-center xl:text-left  text-primary md:3/4 xl:w-11/12">
            Show young Africans the innate value they already possess, expose
            them to contextual/relevant occupations that align with who they are
            and create incubator channels that will enable them become
            innovators and pioneers for their continent and world.
          </p>
        </div>
        </div>

        
        <div className="xl:mr-16">
          <Image className="rounded-md mr-5" src={Relindis} />
        </div>
      </section>
      
    </section>
  );
};

export default Aboutus;
