import Image from "next/image";

import Yellow from "../public/assets/yellow.png";
import Purple from "../public/assets/purple.png";
import Herocomp from "../comps/Herocomp";
import curly from "../public/assets/curly-black.png";
import pathwayCircles from "../public/assets/pathway.png";
import yellowOnline from "../public/assets/yellowonline.svg";
import fatQuotes from "../public/assets/fat-quotes.svg";
import Barbing from "../public/assets/barbing.png";
import Welding from "../public/assets/welding.svg";
import Sewing from "../public/assets/sewing.svg";
import PurplePattern from "../public/assets/purplepattern.svg";
import Cta from "../comps/Cta";
import IgniteOne from "../public/assets/igniteone.png";
import IgniteTwo from "../public/assets/ignitetwo.png";
import Link from "next/link";
import ReactPlayer from "react-player";
import CardText from "../comps/CardText";

const pathwayScholarships = () => {
  return (
    <>
      <div className="w-11/12 mt-40 mb-24 xl:w-full mx-auto xl:px-24 ">
        <ReactPlayer
          className="rounded-sm mx-auto"
          width="100%"
          height="600px"
          url="https://youtu.be/tUbUXpMipuk"
        />
      </div>
      <section className="py-8 xl:px-16 bg-v-gray grid gap-12 lg:grid-cols-2">
        <div className="">
          <div className="ml-20 w-10">
            <Image src={Yellow} alt="" />
          </div>

          <h2 className="text-sectionhead mb-5 text-center xl:text-left font-semibold">
            Our pathway scholarships
          </h2>

          <p className="text-primary md:w-3/4 lg:w-11/12 mb-4">
            Our Pathway Scholarship Program is unique in that it is “DEMAND”
            based (driven by innate talents and abilities of each individual).
          </p>
          <p className="text-primary md:w-3/4 lg:w-11/12 mb-4">
            Our IGNITE Experience alumni create unique, relevant and SMART
            Occupational Life Plans for themselves.
          </p>
          <p className="text-primary md:w-3/4 lg:w-11/12  mb-3">
            We focus on the path the alumni CHOOSE for themselves; be it to
            learn a trade, entrepreneurship or formal education, and create
            catalyst for them to achieve the dreams outlined in their
            Occupational Life Plans.
          </p>

          <p className="text-primary md:w-3/4 lg:w-11/12  mb-3">
            This way we give each scholarship recipient a chance to make a
            living in a relevant occupation they are passionate about; a pathway
            to innovation and lifelong fulfillment.
          </p>

          <div className="w-20">
            <Image src={Purple} alt="" />
          </div>
        </div>
        <div>
          <div className="">
            <div className="">
              <Image src={yellowOnline} alt="" />
            </div>
            <div>
              <Image src={pathwayCircles} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 xl:px-16 grid grid-cols-2 my-20">
        <div>
          <div className="w-10">
            <Image src={fatQuotes} alt="" />
          </div>
          <p className="text-headings my-10 w-3/4">
            No dream is too big, and every talent is valuable and needed in our
            communities
          </p>
          <div className="w-10">
            <Image src={Yellow} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <Image src={Barbing} alt="" />
          </div>
          <div>
            <Image src={Welding} alt="" />
          </div>
          <div>
            <Image src={Sewing} alt="" />
          </div>
        </div>
      </section>
      <Cta
        ImageUrl={PurplePattern}
        heading="Young girls and boys across Africa need sponsorship"
        buttonText="Coming Soon"
        href="/"
        text="You will soon be able to sponsor the occupational life plans of brilliant young Africans. - #Ubuntu"
      />
      
    </>
  );
};

export default pathwayScholarships;
