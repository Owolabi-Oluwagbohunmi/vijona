import ReactPlayer from "react-player/lazy";
import Image from "next/image";
import VijonaPeople from "../public/assets/vijonapple.jpg";

const community = () => {
  return (
    <>
      <section className="mt-24 mx-auto ">
        <div className="w-11/12 mx-auto xl:mt-48 mt-36 text-center ">
          <h1 className=" text-4xl md:text-6xl my-4 font-semibold ">
           Our Incubator Hubs
          </h1>
          <div className="my-28">
            <Image
              className="rounded-md"
              src={VijonaPeople}
              alt="vijona-staff"
            />
          </div>
        </div>
      </section>
      
    </>
  );
};

export default community;
