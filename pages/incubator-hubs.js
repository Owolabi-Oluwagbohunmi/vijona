import Link from "next/link";
import Image from "next/image";
import VijonaPeople from "../public/assets/vijonapple.jpg";
import checkMark from "../public/assets/checkmark.png";
import Incubator from "../public/assets/incubator.png";
import Herocomp from "../comps/Herocomp";
import Yellow from "../public/assets/yellow.png";
import Purple from "../public/assets/purple.png";
import Green from "../public/assets/green.png";
import circleLine from "../public/assets/circleonline.png";
import curly from "../public/assets/curly-black.png";
import girls from "../public/assets/girls.png";
import ImageCard from "../comps/ImageCard";
import IgniteOne from "../public/assets/igniteone.png";
import IgniteTwo from "../public/assets/ignitetwo.png";
import Brown from "../public/assets/brownpattern.svg";
import Cta from "../comps/Cta";

const IncubatorHub = () => {
  return (
    <>
      <Herocomp imgUrl={VijonaPeople} headingText={" Our Incubator Hubs"} />

      <section className="pt-20 w-11/12 xl:w-full mx-auto items-center xl:px-16 grid lg:grid-cols-2 gap-7 ">
        <div>
          <div>
            <Image src={checkMark} alt="checkmark" width="50" height="50" />
          </div>

          <h3 className="text-sectionhead text-center lg:text-left font-semibold py-8">
            What you need to know about our incubator hubs
          </h3>
          <p className=" text-primary xl:w-11/12 mb-5">
            We encounter brilliant young Africans with innovative inventions and
            solutions, but lack resources, material or even a workspace to
            develop and take their ideas to market.
          </p>

          <p className=" text-primary xl:w-11/12 mb-5">
            Our incubator hubs work to bridge tDonates gap in rural and urban
            townsDonateps. We play the role of a catalyst, empowering the young
            innovator to realize their dreams.
          </p>
        </div>
        <div className=" mx-auto ">
          <Image src={Incubator} />
        </div>
      </section>

      <section className="my-24">
        <div className="xl:flex  w-11/12 mx-auto ">
          <div className="w-8">
            <Image src={Yellow} />
          </div>
          <div className="flex mx-auto text-center w-3/4  ">
            <div className="mx-auto">
              <div className=" w-12 text-right ml-60 ">
                <Image src={curly} />
              </div>
              <h3 className="text-sectionhead text-center font-semibold ">
                How you can support
              </h3>
            </div>

            <div className="w-14  ">
              <Image src={circleLine} />
            </div>
          </div>
        </div>

        <section className="relative">
          <div className="flex my-14 px-6 items-end">
            <div className="w-14 hidden xl:block ">
              <Image src={Purple} />
            </div>

            <div className="w-11/12 mx-auto grid md:grid-cols-2 gap-6 lg:grid-cols-4">
              <ImageCard
                ImageUrl={girls}
                heading={"Incubator hub"}
                text="Donate to help a young african to get skilled"
                linkText="Donate"
              />
              <ImageCard
                ImageUrl={girls}
                heading={"Incubator Hub"}
                text="Donate to help a young african to get skilled"
                linkText="Donate"
              />
              <ImageCard
                ImageUrl={girls}
                heading={"Incubator Hubs"}
                text="Donate to help a young african to get skilled"
                linkText="Donate"
              />
              <ImageCard
                ImageUrl={girls}
                heading={"Incubator Hubs"}
                text="Donate to help a young african to get skilled"
                linkText="Donate"
              />
            </div>
          </div>
          <div className="w-14 absolute ml-20 -right-6 bottom-48  hidden xl:block ">
            <Image src={Green} />
          </div>
        </section>
      </section>

      <Cta
        ImageUrl={Brown}
        heading="Donate a laptop + 1 year data subscription"
        text="Open a world of possibilities for one innovative young African"
        href="/"
        buttonText="Donate"
      />

      <section className="my-28 py-16 xl:px-16">
        <h3 className="text-sectionhead text-center xl:text-left font-semibold py-14">
          Ignite workshops and contests
        </h3>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="w-11/12 xl:w-full mx-auto relative">
            <Image src={IgniteOne} />
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
                Find Ignite Workshops near your location
              </p>
              <Link href="/">
                <a className=" w-max py-3 px-5 text-white rounded bg-v-yellow my-4">
                  See locations
                </a>
              </Link>
            </div>
          </div>
          <div className="w-11/12 xl:w-full mx-auto relative">
            <Image src={IgniteTwo} />
            <div className="absolute bottom-20 left-12">
              <div className="flex my-5 bg-v-black w-max py-3 px-4 rounded items-center">
                <p className="ml-2 uppercase text-white ">Contest</p>
              </div>
              <p className="text-white text-2xl font-bold my-8">
                Get Involved in our upcoming Ignite Contests
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

export default IncubatorHub;
