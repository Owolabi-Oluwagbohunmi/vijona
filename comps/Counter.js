const Counter = () => {
  return (
    <section className="grid  grid-cols-1 sm:grid-cols-2 gap-14  lg:grid-cols-3 xl:gap-28 text-center">
      <div>
        <h5 className=" text-5xl xl:text-6xl text-v-green font-bold">3500+</h5>
        <p className="text-v-green  sm:w-9/12 md:w-10/12  mx-auto my-6 ">IGNITE Experience Workshop participants</p>
      </div>
      <div>
        <h5 className=" text-5xl xl:text-6xl text-v-green font-bold">6</h5>
        <p className="text-v-green w-8/12 sm:w-9/12 md:w-10/12 mx-auto my-6 ">First-Time Laptops awarded to date</p>
      </div>
      <div>
        <h5 className="text-5xl xl:text-6xl text-v-green font-bold">$16000</h5>
        <p className="text-v-green w-7/12 sm:w-9/12 mx-auto my-6 ">IGNITE Contest payouts</p>
      </div>
      <div>
        <h5 className=" text-5xl xl:text-6xl text-v-green font-bold">7</h5>
        <p className="text-v-green w-7/12 sm:w-9/12 mx-auto my-6 ">Pathway Scholarship Recipients</p>
      </div>
      <div>
        <h5 className=" text-5xl xl:text-6xl text-v-green font-bold">2</h5>
        <p className="text-v-green w-7/12 sm:w-9/12 mx-auto my-6 ">Incubator Labs</p>
      </div>
    </section>
  );
};

export default Counter;
