import React from "react";
import Image from 'next/Image'
import VijonaPeople from '../public/assets/vijonapple.jpg'

const Aboutus = () => {
  return (
    <section className="pt-20 xl:px-16">
      <h3 className="text-sectionhead font-semibold py-14 text-center">About Us</h3>
      <p className="text-primary xl:w-2/4 mx-auto text-center mb-20">
        Vijona Africa was founded in 2018 to play a role in transforming the
        mindset and reengineering the believe system of young Africans.
      </p>
      <div className="">
        <Image className="rounded-md" src={VijonaPeople} alt="vijona-staff"/>

      </div>

    </section>
  );
};

export default Aboutus;
