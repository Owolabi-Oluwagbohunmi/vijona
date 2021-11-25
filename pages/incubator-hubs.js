import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Yellow from "../public/assets/yellow.png";
import Purple from "../public/assets/purple.png";
import Green from "../public/assets/green.png";
import circleLine from "../public/assets/circleonline.png";
import curly from "../public/assets/curly-black.png";
import IgniteOne from "../public/assets/igniteone.png";
import IgniteTwo from "../public/assets/ignitetwo.png";
import Brown from "../public/assets/brownpattern.svg";
import Cta from "../comps/Cta";
import ReactPlayer from "react-player";
import CardText from "../comps/CardText";
import CardTextt from "../comps/CardTextt";
import buildUrl from "cloudinary-build-url";

const IncubatorHub = () =>
{
  const incubatorhub = buildUrl("bfd380f3-8dd4-4432-82a8-93f7a0c6fb6a_bdcirq", {
    cloud: {
      cloudName: "dbwk2jksa"
    }
  })
  return (
    <>
      <Head>
        <title>Vijona | Incubator Hubs</title>
      </Head>

      <div className="relative">
        <div className="mix-blend-overlay pt-24">
          <Image src={incubatorhub} layout="fill" objectFit="cover" alt="Kids are running"></Image>
        </div>

        <div className=" bg-black py-32  opacity-60 mx-auto text-center">
          <h1 className="text-3xl lg:text-6xl font-semibold text-white">
            Incubator Hub
          </h1>
          {/* <p className="w-10/12 text-sm md:mb-5 md:text-base lg:text-2xl text-v-green font-extrabold">
            Discover, Develop, Deploy
          </p> */}

        </div>
      </div>


      <section className="w-full bg-white">
        <div className="px-10 pt-32 pb-16 ml-auto mr-auto max-w-7xl md:px-24 lg:px-12 lg:py-32">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <div className="max-w-xl mb-6">
                <div className="mb-6">
                  <p className="inline font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-none">What You Need To Know </p>
                  <p className="block font-sans text-4xl font-bold tracking-tight text-purple-700 sm:text-6xl sm:leading-none">About Our Incubator Hubs.</p>
                </div>
                <p className="text-base text-gray-700 md:text-lg text-justify pb-3">
                  We encounter brilliant young Africans with innovative inventions and solutions, but lack resources, material or even a workspace to develop and take their ideas to market.</p>
                <p className="text-base text-gray-700 md:text-lg text-justify pb-3">
                  Our incubator hubs work to bridge the gap in rural and urban
                  townsteps. We play the role of a catalyst, empowering the young innovator to realize their dreams.
                </p>
              </div>
              {/* <div className="max-w-xl mb-6">
                <p className="relative">
                  <a href="#_" className="inline-flex flex-col items-center font-semibold text-purple-700 transition-colors duration-200 cursor-pointer group">
                    <span className="flex items-center w-full">
                      <span>Learn more</span>
                      <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12"><path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path></svg>
                    </span>
                    <span className="w-full h-0.5 translate-y-2 group-hover:translate-y-1 duration-200 ease-out transition opacity-0 group-hover:opacity-100 block bg-purple-600"></span>
                  </a>
                </p>
              </div> */}
            </div>
            <div className="flex justify-center w-full lg:items-center">
              <div className="flex flex-row items-end pr-3">
                <div className="object-cover w-full h-full mb-6 rounded shadow-lg lg:h-48 xl:h-56 lg:w-48 xl:w-56 relative">
                  <Image src={IgniteOne} layout="responsive" objectFit="fill" />
                </div>

                <div className="object-cover w-full h-full rounded shadow-lg lg:h-32 xl:h-40 lg:w-32 xl:w-40 relative">
                  <Image src={IgniteOne} layout="responsive" objectFit="fill" />
                </div>
              </div>

              <div className="object-cover w-full h-full rounded shadow-lg lg:h-64 xl:h-80 lg:w-64 xl:w-80 relative">
                <Image src={IgniteOne} layout="responsive" objectFit="fill" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section className="w-7/12 xl:w-full items-center grid lg:grid-cols-2 gap-2">
        <div>
          <div>
            <Image src={checkMark} alt="checkmark" width="50" height="50" />
          </div>

          <h3 className="text-sectionhead text-left font-semibold py-8">
            What you need to know about our incubator hubs.
          </h3>
          <p className=" text-primary lg:w-9/12 xl:w-11/12 mb-5 text-justify">
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
      </section> */}

      <section className=" py-14 bg-v-brown">
        <div className="xl:flex  w-8/12 mx-auto ">
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

            <div className="w-10 ">
              <Image src={circleLine} alt="" />
            </div>
          </div>
        </div>

        <section className="relative w-11/12 mx-auto">
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

      <div className="">
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
