import { useState } from "react";
import Image from "next/image";
import Okeowo from "../public/assets/okeowo.jpeg";
import joseph from "../public/assets/joseph.jpeg";

import Relindis from "../public/assets/relindis-about.jpeg";

const Team = () => {
  const [showTeam, setShowTeam] = useState(false);

  const handleShowTeam = () => {
    setShowTeam(!showTeam);
  };
  return (
    <>
      <section className="bg-v-bg xl:px-16 px-10 py-20">
        <h3 className=" text-4xl md:text-sectionhead font-semibold text-center md:text-left ">
          Our Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-20">
          <div>
            <p className="text-primary mb-5">
              After spending equal number of years in two starkly different
              continents; 21 years in Africa where I was born and raised and 21
              years in North America; it became painfully evident to me how
              disadvantaged children and youth in my continent of origin are.
            </p>
            <p className="text-primary mb-5">
              I know firsthand just how brilliant, and resilient kids in my part
              of the world are, yet in much of Africa, low exposure to critical
              thinking exercises, limited outlets for practical application, low
              focus on non-formal learning, other cultural and socioeconomic
              challenges prevent children from igniting and exploring their
              brilliant minds early in life… from unlocking and maximizing their
              innate talents and abilities.
            </p>
            <p className="text-primary mb-5">
              Vijona Africa was founded to help change the narrative for young
              Africans, to show in/out-of-school children the innate VALUE
              (talents and abilities) they already possess and create pathways
              for them to use that value to become self-sufficient via formal or
              non-formal learning paths”
            </p>
            {/*  */}
            <button
              onClick={handleShowTeam}
              className="text-white bg-v-green my-3 py-3 px-2 rounded-sm"
            >
              {showTeam && "Meet Our Team"}
              {!showTeam && "Show Less"}
            </button>
          </div>
          <div>
            <Image src={Relindis} className="h-12" />

            <div className="text-primary text-center my-2 ">
              <p className="text-2xl">Relindis Mbu</p>
              <p className="text-primary"> Founder & Executive Director</p>
            </div>
          </div>
        </div>

        {!showTeam && (
          <div>
            <p className="text-primary xl:w-2/4 text-center mx-auto">
              Our Team is made up of passionate Country Coordinators within
              respective countries and an international Board of Directors
            </p>
            <h3 className="text-2xl font-semibold mt-8">Country Directors</h3>
            <div className="grid grid-cols-1 mt-10 md:grid-cols-3 mx-auto py-6">
              <div>
                <Image src={Okeowo} />
                <p>Okeowo</p>
                <p>Country Director</p>
              </div>
              <div>
                <Image src={Okeowo} />
                <p>Okeowo</p>
                <p>Country Director</p>
              </div>
              <div>
                <Image src={Okeowo} />
                <p>Okeowo</p>
                <p>Country Director</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mt-8">
                Board of Directors
              </h3>
              <div className="grid grid-cols-1 mt-5 md:grid-cols-3 gap-5 mx-auto py-6">
                <div>
                  <Image src={joseph} />
                  <p>Okeowo</p>
                  <p>Country Director</p>
                </div>
                <div>
                  <Image src={joseph} />
                  <p>Okeowo</p>
                  <p>Country Director</p>
                </div>
                <div>
                  <Image src={joseph} />
                  <p>Okeowo</p>
                  <p>Country Director</p>
                </div>
                <div>
                  <Image src={joseph} />
                  <p>Okeowo</p>
                  <p>Country Director</p>
                </div>
                <div>
                  <Image src={joseph} />
                  <p>Okeowo</p>
                  <p>Country Director</p>
                </div>
                <div>
                  <Image src={joseph} />
                  <p>Okeowo</p>
                  <p>Country Director</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Team;
