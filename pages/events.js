import Image from "next/image";
import Link from "next/link";
import React from "react";
import Herocomp from "../comps/Herocomp";
import EventsImg from "../public/assets/events.png";
import IgniteOne from "../public/assets/igniteone.png";
import IgniteTwo from "../public/assets/ignitetwo.png";
import galaOne from "../public/assets/image1.jpeg";
import galaTwo from "../public/assets/image2.jpeg";
import galaThree from "../public/assets/image3.jpeg";
import galaFour from "../public/assets/image4.jpeg";
import Blue from "../public/assets/blue-pattern.svg";
import ReactPlayer from "react-player";

import Slider from "react-slick";

const events = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section className="bg-v-gray my-10 py-16 xl:px-16">
        <h3 className="text-sectionhead text-center lg:text-left  font-semibold py-14">
          Upcoming IGNITE Experience workshop
        </h3>
        <div className="grid grid-cols-2">
          <div className=" block  w-2/4 xl:w-full mx-auto relative">
            <Image src={IgniteOne} alt="" />
            <div className="absolute bottom-20 left-8">
              <p className="text-white text-2xl font-bold my-4">
                IGNITE Experience Nigeria
              </p>

              <p className=" w-max  text-white rounded  my-2">July 2022</p>
              <div className="flex my-5 bg-vijyellow w-max py-3 px-4 rounded items-center">
                <p className=" uppercase text-white ">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-3xl text-left font-semibold py-14">
          Past Ignite Experience Workshops
        </h3>
        <div className="">
        <Slider {...settings}>
            <div className="relative text-white ">
              <Image src={galaOne} alt="" />
            </div>
            <div className="relative text-white ">
              <Image src={galaTwo} alt="" />
            </div>
            <div className="relative text-white ">
              <Image src={galaThree} alt="" />
            </div>
            <div className="relative text-white ">
              <Image src={galaFour} alt="" />
            </div>
            <div className="relative text-white ">
              <Image src={galaOne} alt="" />
            </div>
            <div className="relative text-white ">
              <Image src={galaTwo} alt="" />
            </div>
            <div className="relative text-white ">
              <Image src={galaThree} alt="" />
            </div>
            <div className="relative text-white ">
              <Image src={galaFour} alt="" />
            </div>
          </Slider>
        </div>
      </section>

      <section className="py-6 xl:px-16">
        <h3 className="text-sectionhead text-center xl:text-left font-semibold py-14">
          Upcoming IGNITE Contest
        </h3>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="w-11/12 xl:w-full mx-auto relative">
            <Image src={IgniteOne} alt="" />
            <div className="absolute bottom-20 left-8">
              <div className="flex my-5 bg-v-black w-max py-3 px-4 rounded items-center">
                <p className=" uppercase text-white ">Nigeria</p>
              </div>
              <p className="text-white text-2xl font-bold my-4">
                IGNITE Contest
              </p>
              <div className="flex my-5 bg-vijyellow w-max py-3 px-4 rounded items-center">
                <p className=" uppercase text-white ">Coming soon</p>
              </div>
            </div>
          </div>
          <div className="w-11/12 xl:w-full mx-auto relative">
            <Image src={IgniteTwo} alt="" />
            <div className="absolute bottom-20 left-8">
              <div className="flex my-5 bg-v-black w-max py-3 px-4 rounded items-center">
                <p className="uppercase text-white ">Ghana</p>
              </div>
              <p className="text-white text-2xl font-bold my-4">
                IGNITE Contest
              </p>
              <div className="flex my-5 bg-vijyellow w-max py-3 px-4 rounded items-center">
                <p className=" uppercase text-white ">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-3xl text-left font-semibold py-14">
          Past Ignite Experience Contest
        </h3>
        <div className="">
        <Slider {...settings}>
            <div className="relative text-white ">
              <Image src={galaOne} alt="" />
            </div>
            <div className="relative text-white ">
              <Image src={galaTwo} alt="" />
            </div>
            <div className="relative text-white ">
              <Image src={galaThree} alt="" />
            </div>
            <div className="relative text-white ">
              <Image src={galaFour} alt="" />
            </div>
          </Slider>
        </div>
      </section>

      <section className="py-6 xl:px-16">
        <h3 className="text-sectionhead text-center font-semibold py-3">
          Special Events
        </h3>
        <h3 className="text-3xl text-left font-semibold py-14">
          Vijona Africa Annual Black-Tie Fundraising Gala
        </h3>
        <div className="">
          <Slider {...settings}>
            <div className="relative text-white ">
              <Image src={galaOne} alt="" />
            </div>
            <div className="relative text-white ">
              <Image src={galaTwo} alt="" />
            </div>
            <div className="relative text-white ">
              <Image src={galaThree} alt="" />
            </div>
            <div className="relative text-white ">
              <Image src={galaFour} alt="" />
            </div>
          </Slider>
        </div>
      </section>

      <section className="py-6 xl:px-16">
        <h3 className="text-sectionhead text-center xl:text-left font-semibold py-14">
          Impact Videos
        </h3>
        <Slider {...settings}>
          <div className="">
            <ReactPlayer
              className="rounded-sm mx-auto"
              width="10"
              height="600px"
              url="https://www.youtube.com/watch?v=D51twaR7qNk&feature=youtu.be&ab_channel=VijonaAfrica"
            />
          </div>
          <div className="">
            <ReactPlayer
              className="rounded-sm mx-auto"
              width="100%"
              height="600px"
              url="https://www.youtube.com/watch?v=u1GinKQjrWU&ab_channel=VijonaAfrica"
            />
          </div>
          <div className="">
            <ReactPlayer
              className="rounded-sm mx-auto"
              width="100%"
              height="600px"
              url="https://youtu.be/2qvrCmgriAI"
            />
          </div>
          <div className="">
            <ReactPlayer
              className="rounded-sm mx-auto"
              width="100%"
              height="600px"
              url="https://youtu.be/_gA63MQ8bGw"
            />
          </div>
          <div className="">
            <ReactPlayer
              className="rounded-sm mx-auto"
              width="100%"
              height="600px"
              url="https://youtu.be/tUbUXpMipuk"
            />
          </div>
          <div className="">
            <ReactPlayer
              className="rounded-sm mx-auto"
              width="100%"
              height="600px"
              url="https://youtu.be/JJnP2b9ABZo"
            />
          </div>
        </Slider>
      </section>

      {/* <section className="relative my-20">
          <Image src={Blue} alt="" />
          <div className="py-8 xl:px-16 absolute top-5  text-white">
        <h3 className="text-2xl px-8 py-12 xl:text-3xl text-center  font-semibold ">
        Past IGNITE Experience workshops
        </h3>
          <div className=" w-full grid grid-cols-4 gap-6">
            <div className=" text-white ">
              <Image src={IgniteOne} al="" />
            </div>
            <div className=" text-white ">
              <Image src={IgniteOne} al="" />
            </div>
            <div className=" text-white ">
              <Image src={IgniteOne} al="" />
            </div>
            <div className=" text-white ">
              <Image src={IgniteOne} al="" />
            </div>
          </div>
        </div>

        </section> */}
    </>
  );
};

export default events;
