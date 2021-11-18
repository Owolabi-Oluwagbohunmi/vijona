import React from "react";
import Image from "next/image";
import PartnerImg from "../public/assets/partner.PNG";

const Partner = () =>
{
  return (
    <section className="xl:px-16 relative">
      <div className="absolute left-96 mt-64">
        <h3 className="text-sectionhead font-semibold py-14 text-center">
          Partner With Us
        </h3>
        <p className="text-primary text-center   my-3">
          Co-host the IGNITE Experience within your community
        </p>
        <p className="text-primary text-center  my-3">
          Champion the dreams of one innovative young African via our Incubator
          Hub
        </p>
        <p className="text-primary text-center   my-3">
          Sponsor the Occupational Life Plan of one young African.
        </p>

        <a className="shadow-sm mx-auto px-10 py-4 my-5 block bg-v-green text-white rounded w-max">
          Ask How
        </a>
      </div>

      <div className="opacity-20">
        <Image className="rounded-md" src={PartnerImg} alt="vijona-staff"/>
      </div>
    </section>
  );
};

export default Partner;
