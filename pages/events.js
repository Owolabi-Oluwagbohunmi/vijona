import Image from "next/image";
import VijonaPeople from "../public/assets/vijonapple.jpg";
import pledgeImage from "../public/assets/pledgeImage.png";
import Herocomp from "../comps/Herocomp";

const events = () => {
  return (
    <>
      <section className="mt-24 mx-auto ">
        <Herocomp
          imgUrl={VijonaPeople}
          headingText={"Contextual pathways to self- sufficiency"}
        />
      </section>
      <section className="pt-10 w-11/12 xl:w-full mx-auto items-center xl:px-16 grid lg:grid-cols-2 gap-7 ">
        <div>
          <h2 className="text-sectionhead text-center lg:text-left font-semibold py-8">
            Our Pathway Scholarships
          </h2>
          <p className="text-primary my-3">
            Our pathway scholarship program is unique in that it is demand and
            supply based, our Ignite Experience alumni create unique and smart
            occupational life plans for themselves.
          </p>
          <p className="text-primary my-3">
            We focus on the path the alumni choose for themselves either to
            learn a trade or entrepreneurship or formal education, and create
            catalyst for them to achieve the dreams outlined in their
            occupational life plans.
          </p>
          <p className="text-primary my-3">
            This way we give each scholarship receipient a chance to make a
            living doing what they are passionate about; the birthplace of
            innovation and the pathway to lifelong fulfillment.
          </p>
        </div>
        <div className="mx-auto">
          <Image src={pledgeImage} alt="pledge-image" />
        </div>
      </section>
    </>
  );
};

export default events;
