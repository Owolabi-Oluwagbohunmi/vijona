import Image from "next/image";
import { buildUrl } from "cloudinary-build-url"
// import pledgeImage from "../public/assets/boypledging.png";

const Pledge = () =>
{
  const pledgeImage = buildUrl("boypledging_e15dru", {
    cloud: {
      cloudName: 'dbwk2jksa'
    }
  })

  return (
    <section className="w-10/12 mx-auto pt-24 grid grid-cols-1 lg:grid lg:grid-cols-2 lg:space-x-10 py-20">
      <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 items-center">
        <div className="text left lg:text-center lg:transform lg:-rotate-90 "><h3 className="text-4xl lg:text-7xl font-bold ">The Pledge</h3></div>


        <div className=" p-4">
          <p className="text-left lg:text-center ">
            <svg
              className="w-10 inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 30"
              fill="none"
              x="0px"
              y="0px"
            >
              <path
                d="M11 3V6.85714C8.79086 6.85714 7 8.648 7 10.8571V12H11V20H3L3 11C3 6.58172 6.58172 3 11 3Z"
                fill="#FBB040"
              />
              <path
                d="M21 3V6.85714C18.7909 6.85714 17 8.648 17 10.8571V12H21V20H13L13 11C13 6.58172 16.5817 3 21 3Z"
                fill="#FBB040"
              />
            </svg>
            <span className=''>I pledge to identify,</span>
            <br />
            <span> nuture and use my talent to serve</span>
            <br />
            <span> my community. </span>
            <svg
              className="w-10 inline"

              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 125"
              enableBackground="new 0 0 100 100"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="#FBB040"
                  stroke="#FBB040"
                  strokeWidth="0.5"
                  strokeMiterlimit="10"
                  d="M55.8,47.3V29.1h16.8v14.3c0,7.8-0.9,13.4-2.8,16.9   c-2.4,4.6-6.3,8.1-11.5,10.5l-3.8-6.1c3.2-1.3,5.5-3.3,7-6c1.5-2.6,2.3-6.5,2.5-11.5H55.8z M28.9,47.3V29.1h16.8v14.3   c0,7.8-0.9,13.4-2.8,16.9c-2.4,4.6-6.3,8.1-11.5,10.5l-3.8-6.1c3.2-1.3,5.5-3.3,7-6c1.5-2.6,2.3-6.5,2.5-11.5H28.9z"
                />
              </g>
            </svg>
          </p>
        </div>
        
      </div>

      <div className=" bg-white p-4 w-11/12 h-10/12 lg:w-11/12 lg:h-9/12 rounded-lg shadow-xl text-center">
        <Image src={pledgeImage} alt="Taking the pldege to serve" width="600" height="400" priority />

        <div className="pb-7">
          <p className="pb-7">
            <span>It doesn't matter where you live; village or city, boy or girl.</span>
            <br />
            <span>YOU have value the world needs.</span>
            <br />
            Yes YOU! Join the movement! Take the Pledge …
            and act on it.
          </p>
          <a className=" bg-v-green text-white p-3 rounded-lg w-max text-xs">Take the Vijona Africa community pledge</a>
        </div>
      </div>
    </section>
  );
};

export default Pledge;

{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-sectionhead font-semibold mt-8 pb-12">The Pledge</h3>
          <div className="order-last md:order-first">
            <Image src={pledgeImage} alt="pledge-image" priority />
          </div>
        </div>
        <div className="xl:w-10/12 flex flex-col align-middle justify-center">
          <p className="text-quotetext py-4">
            <svg
              className="w-10 inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 30"
              fill="none"
              x="0px"
              y="0px"
            >
              <path
                d="M11 3V6.85714C8.79086 6.85714 7 8.648 7 10.8571V12H11V20H3L3 11C3 6.58172 6.58172 3 11 3Z"
                fill="#FBB040"
              />
              <path
                d="M21 3V6.85714C18.7909 6.85714 17 8.648 17 10.8571V12H21V20H13L13 11C13 6.58172 16.5817 3 21 3Z"
                fill="#FBB040"
              />
            </svg>
            <span className=''>I pledge to identify, nuture and use my talent to serve my community</span>
            <svg
              className="w-10 inline"

              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 125"
              enableBackground="new 0 0 100 100"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="#FBB040"
                  stroke="#FBB040"
                  strokeWidth="0.5"
                  strokeMiterlimit="10"
                  d="M55.8,47.3V29.1h16.8v14.3c0,7.8-0.9,13.4-2.8,16.9   c-2.4,4.6-6.3,8.1-11.5,10.5l-3.8-6.1c3.2-1.3,5.5-3.3,7-6c1.5-2.6,2.3-6.5,2.5-11.5H55.8z M28.9,47.3V29.1h16.8v14.3   c0,7.8-0.9,13.4-2.8,16.9c-2.4,4.6-6.3,8.1-11.5,10.5l-3.8-6.1c3.2-1.3,5.5-3.3,7-6c1.5-2.6,2.3-6.5,2.5-11.5H28.9z"
                />
              </g>
            </svg>
          </p>

          <p className="text-primary font-medium pb-4 text-justify">
            Whether you live in a village or a city, boy or girl, YOU have value
            the world needs. Yes YOU! Join the movement! Take the Pledge …
            and act on it.
          </p>
          <div className="flex justify-center align-middle mt-3">
            <a className="bg-v-green w-96 shadow-md text-white py-4 rounded text-center">Take the Vijona Africa community pledge</a>
          </div>

        </div>
      </div> */}