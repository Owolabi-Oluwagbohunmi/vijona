import Image from "next/image";
import pledgeImage from "../public/assets/pledgeImage.png";

const Pledge = () => {
  return (
    <section className="bg-white pt-16 xl:px-16">
      <h3 className="text-sectionhead font-semibold py-14">The Pledge</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 my-24">
        <div className="order-last md:order-first">
          <Image src={pledgeImage} alt="pledge-image" />
        </div>
        <div className="xl:w-10/12">
          <p className="text-quotetext">
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
            I pledge to identify, nuture and use my talent to serve my community
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

          <p className="text-primary my-10">
            Whether you live in a village or a city, boy or girl, YOU have value
            the world needs. Yes YOU! Join the movement! Take the Pledge …
            and act on it.
          </p>
          <a className="bg-v-green w-auto shadow-md text-white py-4 px-6 rounded my-10">Take the pledge</a>
        </div>
      </div>
    </section>
  );
};

export default Pledge;