import React from "react";
import Image from "next/Image";
import VijonaPeople from "../public/assets/vijonapple.jpg";
import Relindis from "../public/assets/relindis.jpg";

const Aboutus = () => {
  return (
    <section className="pt-20 xl:px-16">
      <h3 className="text-sectionhead font-semibold py-14 text-center">
        About Us
      </h3>
      <p className="text-primary md:w-3/4 xl:w-2/4 mx-auto text-center mb-20">
        Vijona Africa was founded in 2018 to play a role in transforming the
        mindset and reengineering the believe system of young Africans.
      </p>
      <div className="">
        <Image className="rounded-md" src={VijonaPeople} alt="vijona-staff" />
      </div>

      <section className=" my-52   vision grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h4 className=" text-center lg:text-left text-insectionHeading font-semibold mb-10">
            Our Vision
          </h4>
          <p className="text-center xl:text-left text-primary md:3/4 xl:w-10/12">
            We see a future with empowered and relevantly upskilled young
            Africans championing every facet of the African narrative…
          </p>
        </div>
        <div className="xl:mr-16">
          <Image className="rounded-md mr-10" src={Relindis} />
        </div>
      </section>
      <section className=" my-52   vision grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="xl:mr-16 order-last xl:order-first">
          <Image className="rounded-md mr-10" src={Relindis} />
        </div>
        <div>
          <h4 className="text-insectionHeading text-center lg:text-left font-semibold mb-10">
            Our Mission
          </h4>
          <p className="text-center xl:text-left  text-primary md:3/4 xl:w-11/12">
            To show young Africans the innate value they already possess, expose
            them to contextual/relevant occupations that align with who they are
            and create incubator channels that will enable them become
            innovators and pioneers for their continent and world.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Aboutus;
