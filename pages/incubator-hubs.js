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
import CardText from "../comps/CardText";
import CardTextt from "../comps/CardTextt";

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
            <Image src={Yellow} alt="" />
          </div>
          <div className="flex mx-auto text-center w-3/4  ">
            <div className="mx-auto">
              <div className=" w-12 text-right ml-60 ">
                <Image src={curly} alt="" />
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
            <div className="grid md:grid-cols-2 gap-10 w-11/12 mx-auto">
              <CardText
                url="https://youtu.be/6EC-go5HMoE"
                leadText="Expand & Equip Mary’s Design & Tailoring Shop for girls in her Village"
                paraText="Vijona Africa is partnering with Mary, a resident of a rural township in the Ashanti Region of Ghana called Drobonso to raise funds to expand her workshop so she can realize her dream of empowering helpless young girls in her village"
                moreText="This is Mary’s story
                Mary grew up poor, got pregnant at a young age, felt helpless most of her teenage into young adult years, but refused to let her humble background kill her go-getter spirit. She sold small relevant items around her village to raise capital to put herself through tailoring school in a nearby city. 
                
                The selfless and impactful part about Mary’s story is that after her design and tailoring training in the city, she choose to return back to her village to start a tailoring workshop, so that other girls from similar backgrounds like her could make something of their lives.
                
                Mary Launched her tailoring and design workshop (Sweet Mary Fashion Design) in a small wood box fixture (see video), and has been empowering young girls in her village for a few years now, training them not only in tailoring and design but also literacy and survival skills.
                
                Vijona Africa has adopted Mary’s Workshop as our first Incubator Hub in rural Ghana.
                We want to raise funds to expand Mary’s workshop and establish a sustainable design and tailoring ecosystem that will enable her to empower more girls in her village.
                
                Mary donated her land for this expansion project, and we received seed funds from one of our donors to lay the foundation for the new Workshop facility (see video).
                
                All funds raised from this campaign will go towards:
                - Completing construction of the new Workshop facility
                - Furnishing the new Workshop facility
                - Stock required input material for the first year of the new Workshop
                - Provide relevant Marketing and Entrepreneurial training to Mary and her team to ensure sustainability and continuity of the Workshop
                
                Donate on our website at www.vijonaafrica.org (select: “Mary’s Design & Tailoring Shop” in the drop down menu).
                
                Thank you for your generosity."
              />
              <CardTextt
                url="https://youtu.be/M-FwUe8UBDE"
                leadText="Science & Technology Hub for Innovative young IDPs in Cameroon"
                paraText="Awa Blaise Chi is an 18 years old Internally Displaced Person (IDP) by the Anglophone crisis in Cameroon from the North to the commercial capital of Douala. He a genius in our opinion, with innovative ideas that are bound to enhance our human existence."
                moreText="Awa started building and creating at the age of 7 and does not let his underprivileged background stifle his passion and vision. He lost a few years of school during the anglophone crisis, but he kept his passion for engineering alive throughout.

                Awa’s brain is not adequately challenged at school, so he execute multiple after-school innovative project around his community. He has slowly assumed a leadership role amongst his mates, who join him on some of these innovative projects to develop their skills too.
                
                See a few of the innovative projects he has worked on in the past in the video above.
                
                Vijona Africa empowered Awa in the past via our Pathway Sponsorship program. We paired him with a sponsor who was able to get him his first ever laptop and monthly stipends to go towards some material purchase for his innovative after-school projects.
                
                We realized over the past couple of years that Awa would execute his projects either in the one room space he lives in with 2 of his siblings, or out on the veranda of someone’s house or have to pay to use a mechanic’s workshop. That along with insufficient funds to purchase adequate material for his projects, hindered his growth and progress.
                
                Vijona Africa is partnering with Awa to raise funds to acquire, remodel and equip a workshop space (Incubator Hub) for Awa and many other brilliant young innovators in the community.
                
                Funds from this campaign will go towards
                - acquisition, remodeling and equipping of a Science and Engineering Incubator Hub in Douala, Cameroon
                - Year 1 operational costs to help establish a sustainable ecosystem around the Incubator Hub.
                
                Donate on our website at www.vijonaafrica.org (select: “Awa’s S&E Incubator Hub“ in the drop down menu).
                
                Thank you for your generosity."
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
