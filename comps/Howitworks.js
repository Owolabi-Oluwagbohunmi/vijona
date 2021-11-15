import React from "react";

const Howitworks = () => {
  return (
    <section className="flex flex-col xl:flex-row pt-20 md:px-28 bg-white">
      <div className="xl:my-20">
        <h3 className="text-insectionHeading font-semibold ">
          How it all works
        </h3>
        <p className="text-primary my-10 w-3/4">
          Every individual is uniquely talented. We empower you to unleash your
          full potential so you can live your most fulfilled life.
        </p>
        <a className="shadow-sm px-6 py-3 my-10 block bg-v-black text-white rounded w-max">
          Ask Us How
        </a>
      </div>
      <div className="xl:w-10/12 ml-10 mx-auto">
        <div className="flex flex-col md:flex-row  ">
          <div className="bg-v-green text-center py-8 mr-10 w-9/12 text-white rounded">
            <h4 className="text-cardHead font-bold my-10">O1</h4>
            <p className="text-cardtext mx-auto  my-10 px-5 ">
              Discover the occupation(s) that align with who you are
            </p>
          </div>
          <div className="bg-v-yellow text-center  py-8 w-9/12 text-white rounded">
            <h4 className="text-cardHead font-bold my-10">O2</h4>
            <p className="text-cardtext mx-auto  my-10 ">
              Build your unique occupational life plan
            </p>
          </div>
        </div>
        <div className="bg-black w-2/4 mx-auto text-center py-8 my-10 text-white rounded">
          <h4 className="text-cardHead text-center font-bold my-10">O3</h4>
          <p className="text-cardtext mx-auto my-10 px-5 py-3">
            Then work at it until you are the best at it
          </p>
        </div>
      </div>
    </section>
  );
};

export default Howitworks;
