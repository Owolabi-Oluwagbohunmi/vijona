import React from "react";
import Image from "next/image";
import PartnerImg from "../public/assets/partner.PNG";
import Link from "next/link";
import buildUrl from "cloudinary-build-url";

const Partner = () =>
{
  const rocket = buildUrl("fe78e083a17664d9e116c4fa6ace4f6b_qzvmbm", {
    cloud: {
      cloudName: "dbwk2jksa"
    }
  })
  return (
    <section className="w-10/12 mx-auto pt-10 pb-10 relative">
      <div className=" mix-blend-overlay">
        <Image src={rocket} layout="fill" objectFit="cover" alt="a boy building an airplane"></Image>
      </div>

      <div className="">
        <h3 className="text-sectionhead font-semibold py-5 text-center">
          Partner With Us
        </h3>
        <p className="text-primary text-center my-1">
          Co-host the IGNITE Experience within your community
        </p>
        <p className="text-primary text-center  my-1">
          Champion the dreams of one innovative young African via our Incubator
          Hub
        </p>
        <p className="text-primary text-center   my-1">
          Sponsor the Occupational Life Plan of one young African.
        </p>


        <div className="shadow-sm mx-auto px-10 py-4 my-5 block bg-v-green text-white rounded w-max cursor-pointer">
          <Link href="join-us">
            Ask How
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Partner;
