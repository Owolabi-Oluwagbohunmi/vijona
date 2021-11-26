import igniteExperience from '../comps/events-data'
import Image from 'next/image'
import buildUrl from 'cloudinary-build-url';
import ReactPlayer from "react-player";

import Slider from "react-slick";


import React from 'react'
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
      <section className=" pt-32 w-full py-12 bg-white sm:py-20">
        <div className="flex flex-col items-center justify-center mx-auto xl:flex-row max-w-7x1">
          <div className="relative flex flex-col items-start justify-center w-full h-full max-w-2x1 px-6 mx-auto xl:max-w-none xl:w-2/5">
            <h2 className="text-3x1 font-normal leding-none text-gray-900 sm-w-4/5 sm:text-6x1 text-3">
              Upcoming IGNITE Workshops and Contest.
            </h2>
            <div className="w-20 h-1 mt-3 ml-1 bg-indigo-600 rounded-full">
            </div>

            {/* <div className="relative flex mt-6 space-x-2">
              <div className="flex items-center justify-center w-10 h-10 text-white bg-indigo-600 rounded cursor-pointer hover:bg-indigo-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </div>
              <div className="flex items-center justify-center w-10 h-10 text-white bg-indigo-600 rounded cursor-pointer hover:bg-indigo-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </div> */}

            <svg className="absolute top-0 right-0 hidden w-auto h-24 mt-20 text-indigo-600 fill-current sm:block xl:mr-5 xl:-mt-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 74"><defs></defs><g fillRule="nonzero"><path d="M43.13 71.58c.29-.025.58-.025.87 0 .3 0 .71-.14 1-.17.54 0 1.08-.19 1.62-.23l2.3-.17 4.65-.25 6.47-.26h.68c3-.15 6-.3 9-.53 1.68-.14 5.83-.49 6.21-.52.63 0 4.36-.53 5-.63.25 0 1.95-.35 3.35-.58-.09-1-.55-1.77-.62-2.71-4.33.66-8.7 1.18-13 1.51-5.34.4-10.71.66-16.08 1l-7 .39c-1.4 0-2.82-.31-4.17-.26a2 2 0 00-1 .31c-.3.21-.4.16-.5.3a1.18 1.18 0 00-.12.81c.06.84.66 2.11 1.34 1.99zM106.33 62.04l.5-.23c.31-.13.72-.33 1.16-.56.88-.46 1.94-1 2.59-1.38l.56-.31a31.87 31.87 0 002.81-1.74 48.77 48.77 0 0014-13.59 38.22 38.22 0 004.34-8.87 28.9 28.9 0 001.51-9.86 31.56 31.56 0 00-3.3-13.46 23.9 23.9 0 00-3.62-5.22 20.47 20.47 0 00-2.38-2.22c-.42-.34-.89-.63-1.33-.94a10.88 10.88 0 00-1.38-.85A18.21 18.21 0 00109.16.92c-.5.11-1 .22-1.45.33-.45.11-.88.31-1.3.47-.42.16-.86.3-1.27.49-.41.19-.8.41-1.21.61A27.71 27.71 0 0098.5 6.5l-1.51 1.42-1.59 1.84c-.51.66-1 1.36-1.44 2-.44.64-.75 1.28-1 1.78a22.66 22.66 0 00-2 5 23.44 23.44 0 00-.82 5.31 26.71 26.71 0 00.72 7c.22 1.16.65 2.26 1 3.38a33.94 33.94 0 001.41 3.21 36.93 36.93 0 008.44 10.95 47.5 47.5 0 005.77 4.43 35.5 35.5 0 0010.02 4.59 86.41 86.41 0 0010 2.09 84.59 84.59 0 0018.2.51c4.8-.31 9.33-.8 13.8-1.39 2.25-.3 4.49-.63 6.76-1l3.43-.59.83-.11a15.59 15.59 0 001.98-.25 46 46 0 014.66-.82c.69-.12 2.24-.87 2.34-1.35.06-.28-.19-.56-.15-.85.09-.65-1.16-1.47-2.06-1.25-.9.22-1.89.51-2.84.73-.95.22-2 .37-3 .62a9.82 9.82 0 00-1.16.38c-.19.06-.39.13-.58.18l-.29.08-.69.12c-3.55.62-7 1.3-10.81 1.68-5.54.53-11.42 1.31-17.15 1.37a73.61 73.61 0 01-18.84-1.81 41.54 41.54 0 01-16.81-8.06 37.32 37.32 0 01-7.9-8.78 27.1 27.1 0 01-4.12-10.8C91.25 17.6 98.76 6.5 108.89 3.76a15.83 15.83 0 0114.56 3.4 23.24 23.24 0 017.36 13.74 28.32 28.32 0 01.29 8 28.05 28.05 0 01-2.06 7.7 37.16 37.16 0 01-5 8.63 39.08 39.08 0 01-7 7l-.87.66-.14.11c-1.69 1.29-3.61 2.56-5.55 3.75a54.34 54.34 0 01-12 5.4c-.42 1-1 2.35-.6 3.17 1.18-.35 2.25-.69 3.52-1.19.8-.28 1.61-.63 2.44-1 .83-.37 1.66-.72 2.49-1.09z"></path><path d="M46.93 71a8.72 8.72 0 011.16 0c.51 0 1.48.05 2 0l8.52-.5c8.84-.54 17.78-1 26.66-2.45 2.33-.38 4.67-.8 7-1.29a56.65 56.65 0 0010.45-3.26 85.2 85.2 0 009.11-4.57 48.44 48.44 0 0014-12c.86-1 1.57-2.14 2.33-3.2s1.34-2.12 1.89-3.23a35.91 35.91 0 002.81-7.11 31.08 31.08 0 00.4-12.78 6.21 6.21 0 01-1.89 2.64 25.44 25.44 0 01-1 9.32l-.09.26a21.31 21.31 0 01-.69 2 41.94 41.94 0 01-3.72 7.43 41.78 41.78 0 01-5.3 6.63 52.72 52.72 0 01-15.45 10.61 73.71 73.71 0 01-18.17 5.41 207.23 207.23 0 01-24.09 2.59l-15.92.87a4.07 4.07 0 01-.01 2.63zM21.1 71.79a1.43 1.43 0 01-.27-1.49 2.72 2.72 0 011.81-1.54c1-.14 2.13.44 3.2.44 1.47 0 2.94-.27 4.42-.39 1-.08 1.92 0 2.86-.15a17 17 0 012.57-.11 5.7 5.7 0 001.17 0 3 3 0 011.12-.16c1 .18 1.3 2.22.71 2.91-.45.53-1.56.36-2.18.36h-2.67c-2.13.13-4.28 0-6.41.1-.91 0-1.8.24-2.7.35-.9.11-1.7.15-2.56.2a1.31 1.31 0 01-1.07-.52zM7.5 71.7a3.09 3.09 0 010-1 1.26 1.26 0 01.4-.74 2.18 2.18 0 012.16-.49 9.2 9.2 0 002.87 0 9.22 9.22 0 013.1 0 2 2 0 011.17.72c.46.6.61 1.35-.14 1.8a5.18 5.18 0 01-2.91.44c-1.34-.13-2.75.53-4.15.76a2 2 0 01-1.34-.22A2.49 2.49 0 017.5 71.7zM.01 71.57c.082-.29.2-.569.35-.83a1.91 1.91 0 013.27-.25c.54.63.61 2.26-.16 2.72a4.27 4.27 0 01-1.32.44c-1.12.1-2.05-.23-2.14-2.08z"></path></g></svg>
          </div>


          {/* edit all the way down */}

          <div className="box-content relative flex flex-row items-center w-full h-auto max-w-2xl py-5 mx-auto overflow-hidden xl:w-3/5 rounded-xl bg-gradient-to-r from-transparent via-transparent to-gray-100 ">

            {/* :className="{'-translate-x-full pr-10' : page > 1, 'relative': page == 1, 'absolute': page != 1 }" */}

            <div className={"flex px-6 space-x-6 transition duration-500 ease-out transform xl:pl-6 h-94 relative"}>


              <div className="flex flex-col flex-shrink-0 w-1/2 overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <a href="#_">
                    <div className="object-cover w-full h-32 sm:h-48" >
                      {/* <img className="object-cover w-full h-32 sm:h-48" src="https://cdn.devdojo.com/images/march2021/slide-1.jpg" alt=""></img> */}
                      <Image src={contest2} alt="" layout="responsive" objectFit="cover" width='300' height='200' />
                    </div>
                  </a>
                </div>

                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <p className="inline-block py-1 pl-10 pr-4 mb-2 -ml-10 text-xs font-medium leading-5 text-white transform -translate-y-2 bg-indigo-600 rounded">
                      <a href="#_" className="hover:underline" rel="category">
                        Contest
                      </a>
                    </p>
                    <a href="#_" className="block">
                      {/* <span className="mt-2 text-base font-semibold leading-7 text-gray-900 sm:text-xl">
                        How to build the perfect landing page.
                      </span>
                      <span className="block mt-3 text-xs leading-6 text-gray-500 sm:text-sm">
                        If you want to learn the tips and tricks to building the perfect landing page you&apos;ve got to follow these proven...
                      </span> */}
                    </a>
                  </div>
                  <div className="items-center hidden mt-6 sm:flex">
                    <div className="relative">
                      <p className="text-xs font-medium leading-5 text-gray-500">
                        <a href="#_" className="hover:underline">In Progress</a>
                        <span className="mx-1">·</span><time className="ml-1">Nov 2021</time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              

              {/* continue from here */}
              <div className="flex flex-col flex-shrink-0 w-1/2 overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <a href="#_">
                    <div className="object-cover w-full h-32 sm:h-48">
                      <Image src={workshop1} layout="responsive" objectFit="cover" width='300' height='200' />
                      {/* <img  className="object-cover w-full h-32 sm:h-48" src="https://cdn.devdojo.com/images/march2021/slide-2.jpg" alt=""> */}
                    </div>

                  </a>
                </div>

                {/* Up next we have here */}
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <p className="inline-block py-1 pl-10 pr-4 mb-2 -ml-10 text-xs font-medium leading-5 text-white transform -translate-y-2 bg-indigo-600 rounded">
                      <a href="#_" className="hover:underline" rel="category">
                        Workshop
                      </a>
                    </p>
                    {/* <a href="#_" className="block">
                      <span className="mt-2 text-base font-semibold leading-7 text-gray-900 sm:text-xl">
                        How to build the perfect landing page.
                      </span>
                      <span className="block mt-3 text-xs leading-6 text-gray-500 sm:text-sm">
                        If you want to learn the tips and tricks to building the perfect landing page you&apos;ve got to follow these proven...
                      </span>
                    </a> */}
                  </div>
                  <div className="items-center hidden mt-6 sm:flex">
                    <div className="relative">
                      <p className="text-xs font-medium leading-5 text-gray-500">
                        <a href="#_" className="hover:underline">Coming Soon</a>
                        <span className="mx-1">·</span><time className="ml-1">July 2022</time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >


      {/* Second List */}

      <section className="bg-v-brown">
        <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">

          <div className="flex flex-col items-center sm:px-5 md:flex-row">
            <div className="w-full md:w-1/2">
              <a href="#_" className="block">


                <div className="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96">
                  <Image  src={workshop1} layout="responsive" objectFit="cover" width='300' height='200'/>
                </div>
              </a>
            </div>
            <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
              <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                <div className="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
                  <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <span>Featured</span>
                </div>
                <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl"><a href="#_">Past Events and IGNITE Experience Initiatives</a></h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <a href="#_" className="block">
                <div className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56">
                <Image  src={contest1} layout="fixed" objectFit="cover"  width='300' height='200'/>
                </div>
              </a>
              <div className="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
                <span>IGNITE contest</span>
              </div>
              {/* <h2 className="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">Creating a Future Worth Living</a></h2>
              <p className="text-sm text-gray-500">This gala held in california chicago to raise funds for cameroon indigenes.</p>
              <p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">California</a> · <span className="mx-1">April 17, 2021</span></p> */}
            </div>

            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <a href="#_" className="block">
                <div className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56">
                  <Image src={contest2} alt="" layout="fixed" objectFit="cover"  width='300' height='200' />
                </div>
                {/* <img className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/workout.jpg"> */}
              </a>
              <div className="bg-pink-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white ">
              <span>IGNITE Contest</span>
              </div>
              {/* <h2 className="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">Creating a Future Worth Living</a></h2>
              <p className="text-sm text-gray-500">This gala held in california chicago to raise funds for cameroon indigenes.</p>
              <p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">California</a> · <span className="mx-1">April 17, 2021</span></p> */}
            </div>

            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <a href="#_" className="block">
                <div className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" >
                  <Image src={contest3} alt="" layout="fixed" objectFit="cover"  width='300' height='200' />
                </div>
                {/* <img className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/food.jpg"> */}
              </a>
              <div className="bg-red-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white ">
              <span>IGNITE contest</span>
              </div>
              {/* <h2 className="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">Creating a Future Worth Living</a></h2>
              <p className="text-sm text-gray-500">This gala held in california chicago to raise funds for cameroon indigenes.</p>
              <p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">California</a> · <span className="mx-1">April 17, 2021</span></p> */}
            </div>

            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <a href="#_" className="block">
                <div className="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" >
                  <Image src={contest4} layout="fixed" objectFit="cover"  width='300' height='200' />
                </div>
              </a>
              <div className="bg-blue-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
              <span>IGNITE contest</span>
              </div>
              {/* <h2 className="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">Creating a Future Worth Living</a></h2>
              <p className="text-sm text-gray-500">This gala held in california chicago to raise funds for cameroon indigenes.</p>
              <p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">California</a> · <span className="mx-1">April 17, 2021</span></p> */}
            </div>

            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <a href="#_" className="block">
                <div className="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56">

                  <Image src={workshop1} layout="fixed" objectFit="cover"  width='300' height='200' />
                </div>
                {/* <img className="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src="https://cdn.devdojo.com/images/may2021/clock.jpg"> */}
              </a>
              <div className="bg-gray-800 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
              <span>IGNITE workshop</span>
              </div>
              {/* <h2 className="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">Creating a Future Worth Living</a></h2>
              <p className="text-sm text-gray-500">This gala held in california chicago to raise funds for cameroon indigenes.</p>
              <p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">California</a> · <span className="mx-1">April 17, 2021</span></p> */}
            </div>

            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <a href="#_" classNameName="block">
                <div className="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" >
                  <Image src={workshop2} layout="fixed" objectFit="cover"  width='300' height='200'/>
                  </div>
    
              </a>
              <div className="bg-yellow-400 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
              <span>IGNITE workshop</span>
              </div>
              {/* <h2 className="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">Creating a Future Worth Living</a></h2>
              <p className="text-sm text-gray-500">This gala held in california chicago to raise funds for cameroon indigenes.</p>
              <p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">California</a> · <span className="mx-1">April 17, 2021</span></p> */}
            </div>

            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <a href="#_" classNameName="block">
                <div className="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" >
                  <Image src={workshop3} layout="fixed" objectFit="cover"  width='300' height='200'/>
                  </div>
    
              </a>
              <div className="bg-yellow-400 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
              <span>IGNITE workshop</span>
              </div>
              {/* <h2 className="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">Creating a Future Worth Living</a></h2>
              <p className="text-sm text-gray-500">This gala held in california chicago to raise funds for cameroon indigenes.</p>
              <p className="pt-2 text-xs font-medium"><a href="#_" className="mr-1 underline">California</a> · <span className="mx-1">April 17, 2021</span></p> */}
            </div>

          </div>
        </div>
      </section>

      <section className="py-6 xl:px-16 bg-v-brown pb-14">
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

    </>
  )
}

export default Events;


