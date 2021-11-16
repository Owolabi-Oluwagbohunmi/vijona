import Image from "next/image";
import VijonaPeople from "../public/assets/vijonapple.jpg";
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
            We focus on the path the alumni choose for themselves either to
            learn a trade or entrepreneurship or formal education, and create
            catalyst for them to achieve the dreams outlined in their
            occupational life plans.
          </p>
          <p className="text-primary md:w-3/4 lg:w-11/12  mb-3">
            This way we give each scholarship receipient a chance to make a
            living doing what they are passionate about; the birthplace of
            innovation and the pathway to lifelong fulfillment.
          </p>

          <div className="w-20">
            <Image src={Purple} alt="" />
          </div>
        </div>
        <div>
          <div className="">
            <div className="">
              <Image src={yellowOnline} alt=""/>
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
            <Image src={Barbing} alt=""/>
          </div>
          <div>
            <Image src={Welding} alt=""/>
          </div>
          <div>
            <Image src={Sewing} alt="" />
          </div>
        </div>
      </section>
      <Cta
        ImageUrl={PurplePattern}
        heading="Over 200 children across Africa need sponsorship"
        buttonText="Coming Soon"
        href="/"
        text="You will soon be able to sponsor children from all over Africa, be it their education, medical support, learning materials, ..."
      />
      <section className="my-28 py-16 xl:px-16">
        <h3 className="text-sectionhead text-center xl:text-left font-semibold py-14">
          IGNITE workshops and contests
        </h3>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="w-11/12 xl:w-full mx-auto relative">
            <Image src={IgniteOne} alt="" />
            <div className="absolute bottom-20 left-12">
              <div className="flex my-5 bg-v-black w-max py-3 px-4 rounded items-center">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0.125C3.52517 0.125 0.699707 2.94798 0.699707 6.4209C0.699707 8.50717 1.66046 9.99856 2.86914 11.3574C4.07783 12.7163 5.53679 13.9824 6.68798 15.708C6.72223 15.7594 6.76863 15.8015 6.82306 15.8306C6.87749 15.8597 6.93827 15.875 7 15.875C7.06173 15.875 7.12251 15.8597 7.17694 15.8306C7.23137 15.8015 7.27776 15.7594 7.31201 15.708C8.46321 13.9824 9.92217 12.7163 11.1309 11.3574C12.3395 9.99856 13.3003 8.50717 13.3003 6.4209C13.3003 2.94798 10.4748 0.125 7 0.125ZM7 0.875C10.0698 0.875 12.5503 3.35358 12.5503 6.4209C12.5503 8.28202 11.7326 9.55376 10.5713 10.8594C9.50231 12.0612 8.15984 13.3005 7 14.9082C5.84016 13.3005 4.49768 12.0612 3.42871 10.8594C2.26739 9.55376 1.44971 8.28202 1.44971 6.4209C1.44971 3.35358 3.93023 0.875 7 0.875ZM7 3.125C5.34758 3.125 4 4.47258 4 6.125C4 7.77742 5.34758 9.125 7 9.125C8.65241 9.125 10 7.77742 10 6.125C10 4.47258 8.65241 3.125 7 3.125ZM7 3.875C8.24708 3.875 9.25 4.87791 9.25 6.125C9.25 7.37209 8.24708 8.375 7 8.375C5.75291 8.375 4.75 7.37209 4.75 6.125C4.75 4.87791 5.75291 3.875 7 3.875Z"
                    fill="#ED1C24"
                  />
                </svg>

                <p className="ml-2 uppercase text-white ">Cameroun</p>
              </div>
              <p className="text-white text-2xl font-bold my-8">
                Find IGNITE Workshops near your location
              </p>
              <Link href="/">
                <a className=" w-max py-3 px-5 text-white rounded bg-v-yellow my-4">
                  See locations
                </a>
              </Link>
            </div>
          </div>
          <div className="w-11/12 xl:w-full mx-auto relative">
            <Image src={IgniteTwo} alt="" />
            <div className="absolute bottom-20 left-12">
              <div className="flex my-5 bg-v-black w-max py-3 px-4 rounded items-center">
                <p className="ml-2 uppercase text-white ">Contest</p>
              </div>
              <p className="text-white text-2xl font-bold my-8">
                Get Involved in our upcoming IGNITE Contests
              </p>
              <Link href="/">
                <a className=" w-max py-3 px-5 text-white rounded bg-v-yellow my-4">
                  See locations
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default pathwayScholarships;
