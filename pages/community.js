import ReactPlayer from "react-player/lazy";
import Image from "next/image";
import VijonaPeople from "../public/assets/vijonapple.jpg";
import checkMark from "../public/assets/checkmark.png";
import Incubator from "../public/assets/incubator.png";
import Herocomp from "../comps/Herocomp";

const community = () => {
  return (
    <>
      <Herocomp imgUrl={VijonaPeople} headingText={" Our Incubator Hubs"} />

      <section className="xl:px-16 grid md:grid-cols-2">
        <div>
          <div>
            <Image src={checkMark} alt="checkmark" width="50" height="50" />
          </div>
          <h3 className="text-sectionhead text-center lg:text-left font-semibold py-8">
            What you need to know about our incubator hubs
          </h3>
          <p>
            We encounter brilliant young Africans with innovative inventions and
            solutions, but lack resources, material or even a workspace to
            develop and take their ideas to market.
            <p>
              Our incubator hubs work to bridge this gap in rural and urban
              townships. We play the role of a catalyst, empowering the young
              innovator to realize their dreams.
            </p>
          </p>
        </div>
        <div>
          <Image src={Incubator}/>
        </div>
      </section>
    </>
  );
};

export default community;
