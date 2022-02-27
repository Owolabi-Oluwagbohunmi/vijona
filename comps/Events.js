import igniteExperience from '../comps/events-data'
import Image from 'next/image'
import buildUrl from 'cloudinary-build-url';
import ReactPlayer from "react-player";

import Slider from "react-slick";


import workShop from "../public/assets/workshop2.JPG";
import location from "../public/assets/location.svg";
import date from "../public/assets/date.svg";
import time from "../public/assets/time.svg";
import users from "../public/assets/users.svg";
import unitedChildren from "../public/assets/united-children.jpeg";
import squareroot from "../public/assets/squareroot.png";
import { useState, useEffect} from 'react'


const Events = () =>
{
  const contest1 = buildUrl("DSC02090_wtom8f", {
    cloud: {
      cloudName: "dbwk2jksa"
    }
  })
  const contest2 = buildUrl("competition_qe9kal", {
    cloud: {
      cloudName: "dbwk2jksa"
    }
  })
  const contest3 = buildUrl("DSC01798_cdcscd", {
    cloud: {
      cloudName: "dbwk2jksa"
    }
  })
  const contest4 = buildUrl("IMG_6965_k2n2nq", {
    cloud: {
      cloudName: "dbwk2jksa"
    }
  })
  const workshop1 = buildUrl("3D3B3F79-22A7-4B89-BEEA-FA19A4721D7A_ocm2hc", {
    cloud: {
      cloudName: "dbwk2jksa"
    }
  })
  const workshop2 = buildUrl("0F4630C2-5102-4255-AB12-CA973203ACE1_ir0bip", {
    cloud: {
      cloudName: "dbwk2jksa"
    }
  })
  const workshop3 = buildUrl("e9aac104-789f-4c35-8279-7295471f8aa4_nlrloy", {
    cloud: {
      cloudName: "dbwk2jksa"
    }
  })


  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#FBB040" }}
        onClick={onClick}
      />
    );
  }

  const SamplePrevArrow = (props)=> {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#E2E2E2" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <section className=" bg-black   pt-20 w-full py-12  sm:py-32">
        <div className="w-11/12 lg:w-10/12 mx-auto"></div>
        <div className="bg-hero-pattern h-96 w-10/12 flex justify-start items-start  mx-auto shadow-2xl my-20 ">
          <div className="w-full lg:w-9/12 mt-20 ml-20">
            <h2 className="text-v-yellow uppercase font-bold text-sm">
              Upcoming Events
            </h2>
            <h3 className="text-4xl lg:text-7xl my-5 font-bold text-white">
              {" "}
              The IGNITE Experience
            </h3>
            <p className="text-xl my-2 lg:w-6/12 text-white">
              Unleasing the full potential in young Africans
            </p>
            <div className="my-5 flex items-center">
              <div className="flex items-center mr-10">
                <Image
                  className="z-1"
                  src={location}
                  alt="Taking the pldege to serve"
                  width="15"
                  height="15"
                  priority
                />
                <p className="ml-3 text-white">Lagos</p>
              </div>
              <div className="flex items-center mr-10">
                <Image
                  className="z-1"
                  src={date}
                  alt="Taking the pldege to serve"
                  width="15"
                  height="15"
                  priority
                />
                <p className="ml-3 text-white">July 26 - 29</p>
              </div>
              <div className="flex items-center mr-10">
                <Image
                  className="z-1"
                  src={users}
                  alt="Taking the pldege to serve"
                  width="15"
                  height="15"
                  priority
                />
                <p className="ml-3 text-white ">14-18 years</p>
              </div>
            </div>
          </div>
          <button className="text-white bg-v-yellow py-5 px-5 rounded-sm mt-40">
            Support Event
          </button>
        </div>
      </section>


      <section className="w-10/12 mx-auto bg-white my-20 ">
        <p className='text-xl my-5'>Our Upcoming IGNITE Experience worshop kicks off on the 26th of July  2022 in Lagos State</p>
        < p className='text-xl my-5'>The IGNITE Experience focuses on three(3) key strategy steps namely: Discover, Develop, and Deploy.</p>
<div className="my-8">
  <h3 className='font-bold my-5 text-2xl '>Action Paths</h3>
  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:ml-3 '>
  <ul className="list-disc">
    <li className='my-4'>Discover WHO THEY ARE</li>
    <li className='my-4'>Discover Occupations that align with who they are</li>
    <li className='my-4'>Create a UNIQUE Occupational Life Plan</li>
  </ul>
  <ul className="list-disc">
    <li className='my-4'>Think Critically </li>
    <li className='my-4'>Relevant Trainings(LIVE) - cross sector</li>
    <li className='my-4'>Showcase innate talent(s) for prizes</li>
  </ul>
  <ul className="list-disc">
    <li className='my-4'>A chance to win their first laptop</li>
    <li className='my-4'>A chance to realize their dreams via sponsorship</li>
    <li className='my-4'>Be ready to take on the world more confidently</li>
  </ul>
  </div>

</div>

<section className=' my-10'>
  <h4 className='font-bold text-2xl'>Our Sponsors</h4>
  <div className=' grid gap-10 my-6  grid-cols-4'>
  <Image
                  
                  src={squareroot}
                  alt="Squareroot Academy"
                 
                  priority
                />
                 <Image
                  
                  src={unitedChildren}
                  alt="united-children"
                  
                  priority
                />

  </div>
</section>


      </section>

      
      

      <section className="py-6 xl:px-16 bg-v-brown pb-14">
        <h3 className="text-sectionhead text-center  xl:text-left font-semibold py-14">
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

    </>
  )
}

export default Events;


