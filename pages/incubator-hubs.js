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
import ReactPlayer from "react-player";

const IncubatorHub = () => {
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
          <Image src={Incubator} alt="" />
        </div>
      </section>

      <section className="my-24">
        <div className="xl:flex  w-11/12 mx-auto ">
          <div className="w-8">
            <Image src={Yellow} alt=""/>
          </div>
          <div className="flex mx-auto text-center w-3/4  ">
            <div className="mx-auto">
              <div className=" w-12 text-right ml-60 ">
                <Image src={curly} alt=""/>
              </div>
              <h3 className="text-sectionhead text-center font-semibold ">
                Support our Incubator Hubs
              </h3>
            </div>

            <div className="w-14  ">
              <Image src={circleLine} alt="" />
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
                alt=""
              />
              <ImageCard
                ImageUrl={girls}
                heading={"Incubator Hub"}
                text="Donate to help a young african to get skilled"
                linkText="Donate"
                alt=""
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
                alt=""
              />
            </div>
          </div>
          <div className="w-14 absolute ml-20 -right-6 bottom-48  hidden xl:block ">
            <Image src={Green} />
          </div>
        </section>
      </section>

      <div className="my-16">
        <Cta
          ImageUrl={Brown}
          heading="Donate a laptop + 1 year data subscription"
          text="Open a world of possibilities for one innovative young African"
          href="/"
          buttonText="Donate"
          alt=""
        />
      </div>
    </>
  );
};

export default IncubatorHub;
