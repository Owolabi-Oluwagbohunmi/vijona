const Counter = () => {
  return (
    <section className="w-10/12 mx-auto pt-24 grid grid-cols-1 lg:grid lg:grid-cols-3 lg:space-x-10 py-20 text-center gap-2">
      <div className="">
        <h5 className=" text-5xl xl:text-6xl text-v-green font-bold">3,500+</h5>
        <p className="text-v-green  sm:w-9/12 md:w-10/12  mx-auto my-6 ">IGNITE Experience Workshop participants</p>
      </div>
      <div className="">
        <h5 className=" text-5xl xl:text-6xl text-v-green font-bold">6</h5>
        <p className="text-v-green w-8/12 sm:w-9/12 md:w-10/12 mx-auto my-6 ">First-Time Laptops awarded to date</p>
      </div>
      <div className="">
        <h5 className="text-5xl xl:text-6xl text-v-green font-bold">$16,000</h5>
        <p className="text-v-green w-7/12 sm:w-9/12 mx-auto my-6 ">IGNITE Contest payouts</p>
      </div>
      <div className="">
        <h5 className=" text-5xl xl:text-6xl text-v-green font-bold">7</h5>
        <p className="text-v-green w-7/12 sm:w-9/12 mx-auto my-6 ">Pathway Scholarship Recipients</p>
      </div>
      <div className="">
        <h5 className=" text-5xl xl:text-6xl text-v-green font-bold">2</h5>
        <p className="text-v-green w-7/12 sm:w-9/12 mx-auto my-6 ">Incubator Labs</p>
      </div>
    </section>
  );
};

export default Counter;
