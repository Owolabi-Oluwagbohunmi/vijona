const Counter = () => {
  return (
    <section className=" my-48 grid  grid-cols-1 sm:grid-cols-2 gap-14  lg:grid-cols-4 xl:gap-28 text-center">
      <div>
        <h5 className=" counter-h5">3500+</h5>
        <p className=" ">Ignite Experience Workshop participants</p>
      </div>
      <div>
        <h5 className="counter-h5">$16000</h5>
        <p className="counter-p ">Ignite Contest payouts</p>
      </div>
      <div>
        <h5 className=" counter-h5">7</h5>
        <p className="counter-p ">Pathway Scholarship Recipients</p>
      </div>
      <div>
        <h5 className=" counter-h5">4</h5>
        <p className="counter-p ">Incubator Hubs establisheded</p>
      </div>
    </section>
  );
};

export default Counter;
