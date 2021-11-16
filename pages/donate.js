import React from "react";
import Script from "next/script";

const donate = () => {
  return (
    <section className="w-11/12  ml-20 pl-36 my-40 ">
      
        <Script
          src="https://donorbox.org/widget.js"
          paypalExpress="false"
        ></Script>
        <iframe
          src="https://donorbox.org/embed/vijona-ignite-workshops-1"
          name="donorbox"
          allowpaymentrequest="allowpaymentrequest"
          seamless="seamless"
          frameBorder="0"
          scrolling="no"
          height="900px"
          width="100%"
        ></iframe>
         </section>
  );
};

export default donate;
