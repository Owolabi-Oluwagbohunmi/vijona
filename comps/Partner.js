import React from "react";
import Image from "next/image";
import VijonaPeople from "../public/assets/vijonapple.jpg";


const Partner = () => {
  return (
    <section className="pt-16 xl:px-16">
      <h3 className="text-sectionhead font-semibold py-14 text-center">
        Partner With Us
      </h3>
      <p className="text-primary md:w-3/4 xl:w-2/4 mx-auto text-center mb-20">
        Join us to Co-host the IGNITE Experience within your community or
        organization or Champion the dreams of one innovative young African via
        our Incubator Hub or sponsor the Occupational Life Plan of one young
        African.
      </p>
      <a className="shadow-sm mx-auto px-10 py-4 my-5 block bg-v-green text-white rounded w-max">
         Join Us
        </a>
      <div className="my-28">
        <Image className="rounded-md" src={VijonaPeople} alt="vijona-staff" />
      </div>

      
    </section>
  );
};

export default Partner;
