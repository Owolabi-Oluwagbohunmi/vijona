const Counter = () => {
  return (
    <section className=" my-48 grid  grid-cols-1 sm:grid-cols-2 gap-14  lg:grid-cols-4 xl:gap-28 text-center">
      <div>
        <h5 className=" text-5xl xl:text-6xl text-v-green font-bold">3500+</h5>
        <p className="text-v-green w-7/12 sm:w-9/12 mx-auto my-6 ">Ignite Experience Workshop participants</p>
      </div>
      <div>
        <h5 className="text-5xl xl:text-6xl text-v-green font-bold">$16000</h5>
        <p className="text-v-green w-7/12 sm:w-9/12 mx-auto my-6 ">Ignite Contest payouts</p>
      </div>
      <div>
        <h5 className=" text-5xl xl:text-6xl text-v-green font-bold">7</h5>
        <p className="text-v-green w-7/12 sm:w-9/12 mx-auto my-6 ">Pathway Scholarship Recipients</p>
      </div>
      <div>
        <h5 className=" text-5xl xl:text-6xl text-v-green font-bold">4</h5>
        <p className="text-v-green w-7/12 sm:w-9/12 mx-auto my-6 ">Incubator Hubs establisheded</p>
      </div>
    </section>
  );
};

export default Counter;
