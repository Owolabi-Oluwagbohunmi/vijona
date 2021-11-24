const Counter = () => {
  return (
    <section className="w-11/12 mx-auto pt-24 grid grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-5 gap-5  py-20 text-center ">
      <div className="">
        <h5 className=" text-3xl xl:text-5xl font-bold">3,500+</h5>
        <p className="  sm:w-9/12 md:w-10/12  mx-auto my-6 ">IGNITE Experience Workshop participants</p>
      </div>
      <div className="">
        <h5 className=" text-3xl xl:text-5xl font-bold">6</h5>
        <p className=" w-8/12 sm:w-9/12 md:w-10/12 mx-auto my-6 ">First-Time Laptops awarded to date</p>
      </div>
      <div className="">
        <h5 className="text-3xl xl:text-5xl  font-bold">$16,000</h5>
        <p className=" w-7/12 sm:w-9/12 mx-auto my-6 ">IGNITE Contest payouts</p>
      </div>
      <div className="">
        <h5 className=" text-3xl xl:text-5xl  font-bold">7</h5>
        <p className=" w-7/12 sm:w-9/12 mx-auto my-6 ">Pathway Scholarship recipients</p>
      </div>
      <div className="">
        <h5 className=" text-3xl xl:text-5xl  font-bold">2</h5>
        <p className=" w-7/12 sm:w-9/12 mx-auto my-6 ">Incubator Hubs in the Pipeline</p>
      </div>
    </section>
  );
};

export default Counter;
