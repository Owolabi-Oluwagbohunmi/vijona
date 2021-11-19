import { useState } from "react";
import Image from "next/image";
import Okeowo from "../public/assets/okeowo.jpeg";
import Isaac from "../public/assets/isaac.jpeg";
import Mouki from "../public/assets/mouki.jpeg";
import D1 from "../public/assets/director1.jpg";
import D2 from "../public/assets/director2.jpg";
import D3 from "../public/assets/director3.jpg";
import D4 from "../public/assets/director4.jpg";
import D5 from "../public/assets/director5.jpg";
import D6 from "../public/assets/director6.jpg";

import Relindis from "../public/assets/relindis-about.jpeg";

const Team = () => {
  const [showTeam, setShowTeam] = useState(false);

  const handleShowTeam = () => {
    setShowTeam(!showTeam);
  };
  return (
    <>
      <section className="bg-v-darkgray px-5 sm:px-16 md:px-16 lg:px-32 py-20">
        <h3 className=" text-4xl md:text-sectionhead font-semibold text-center md:text-left ">
          Our Team
        </h3>
        <div className="grid grid-cols-1 xl:grid-cols-2 my-10 gap-20 text-justify">
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
            {/* <p className="text-primary xl:w-2/4">
              Our Team is made up of passionate Country Coordinators within
              respective countries and an international Board of Directors
            </p> */}
            <h3 className="text-2xl font-semibold mt-8">Country Coordinators</h3>
            <div className="grid grid-cols-1 mt-10 md:grid-cols-3 py-6 gap-2 w-9/12">
              <div>
                <Image src={Okeowo} width='500' height='500' />
                <p className="font-semibold underline">Oluwatomi Okeowo</p>
                <p className="font-bold">Country Coordinator Nigeria.</p>
              </div>
              <div>
                <Image src={Mouki} height='720'/>
                <p className="font-semibold underline">Jab Mouki Christelle Alexander</p>
                <p className="font-bold">Country Coordinator Cameroon.</p>
              </div>
              <div>
                <Image src={Isaac} height="1600"/>
                <p className="font-semibold underline">Isaac Boateng</p>
                <p className="font-bold">Country Coordinator Ghana.</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mt-8">
                Board of Directors
              </h3>
              <div className="grid grid-cols-1 mt-5 md:grid-cols-3 gap-5 mx-auto py-6">
                <div classname="">
                  <Image src={D1} height="1200" />
                  <p>Mrs. Esther David Sabo</p>
                  <p>Director</p>
                </div>
                <div>
                  <Image src={D2} />
                  <p>Bishop Tony Dunn</p>
                  <p>Director</p>
                </div>
                <div>
                  <Image src={D3} />
                  <p>Ranu Gupta</p>
                  <p>Director</p>
                </div>
                <div>
                  <Image src={D4} />
                  <p>Ose Oyamendan</p>
                  <p>Director</p>
                </div>
                <div>
                  <Image src={D5} />
                  <p>Kjel Kiilsgaard</p>
                  <p>Director</p>
                </div>
                <div>
                  <Image src={D6} />
                  <p>Joseph Quansah</p>
                  <p>Director</p>
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
