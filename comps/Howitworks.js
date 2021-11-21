import React from "react";

const Howitworks = () => {
  return (
    <section className="w-10/12 mx-auto pt-24 grid grid-cols-1 lg:grid lg:grid-cols-2 lg:space-x-10 py-20 justify-items-center items-center">
      <div className="">
        <h3 className="text-sectionhead font-semibold ">
          How It All Works
        </h3>
        <p className="text-primary my-10 w-3/4">
          Every individual is uniquely talented. We empower you to unleash your
          full potential so you can live your most fulfilled life.
        </p>
        <a className="shadow-sm px-6 py-3 my-10 block bg-v-black text-white rounded w-max">
          Ask Us How
        </a>
      </div>
      <div className="w-12/12">
        <div className="w-12/12 flex flex-col lg:flex-row  ">
          <div className="bg-v-green text-center py-8 text-white rounded">
            <h4 className="text-cardHead font-bold my-10">O1</h4>
            <p className="text-cardtext mx-auto  my-10 px-5 ">
              Discover the occupation(s) that align with who you are
            </p>
          </div>
          <div className="bg-v-yellow text-center  py-8 text-white rounded">
            <h4 className="text-cardHead font-bold my-10">O2</h4>
            <p className="text-cardtext mx-auto  my-10 px-5">
              Build your unique occupational life plan
            </p>
          </div>
        </div>
        <div className="bg-black text-center py-8 items-centertext-white text-white rounded">
          <h4 className="text-cardHead text-center font-bold my-10">O3</h4>
          <p className="text-cardtext mx-auto my-10 px-5">
            Then work at it until you are the best at it
          </p>
        </div>
      </div>
    </section>
  );
};

export default Howitworks;

{/* <section className="flex flex-col xl:flex-row pt-20 text-justify">
      <div className="xl:my-20">
        <h3 className="text-sectionhead font-semibold ">
          How It All Works
        </h3>
        <p className="text-primary my-10 w-3/4">
          Every individual is uniquely talented. We empower you to unleash your
          full potential so you can live your most fulfilled life.
        </p>
        <a className="shadow-sm px-6 py-3 my-10 block bg-v-black text-white rounded w-max">
          Ask Us How
        </a>
      </div>
      <div className="xl:w-12/12">
        <div className="flex flex-col gap-2 xl:flex-row  ">
          <div className="bg-v-green text-center py-8 mr-10 w-9/12 text-white rounded">
            <h4 className="text-cardHead font-bold my-10">O1</h4>
            <p className="text-cardtext mx-auto  my-10 px-5 ">
              Discover the occupation(s) that align with who you are
            </p>
          </div>
          <div className="bg-v-yellow text-center  py-8 w-9/12 text-white rounded">
            <h4 className="text-cardHead font-bold my-10">O2</h4>
            <p className="text-cardtext mx-auto  my-10 px-5">
              Build your unique occupational life plan
            </p>
          </div>
        </div>
        <div className="bg-black w-9/12 xl:w-11/12 text-center py-8 my-2 text-white rounded">
          <h4 className="text-cardHead text-center font-bold my-10">O3</h4>
          <p className="text-cardtext mx-auto my-10 px-5 py-3">
            Then work at it until you are the best at it
          </p>
        </div>
      </div>
    </section> */}
