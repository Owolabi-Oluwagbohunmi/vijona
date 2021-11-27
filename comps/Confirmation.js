import React, { useState, useEffect } from "react";

const Confirmation = () => {
  const [headerText, setHeaderText] = useState("");
  const [subText, setsubText] = useState("");

  useEffect(() => {
    const header = localStorage.getItem("headingText");
    const text = localStorage.getItem("subText");
    setHeaderText(header);
    setsubText(text);
  }, []);

  return (
    <section className="mt-10 py-96">
      <div className="border-l-4 p-10 rounded-sm shadow-xl border-v-green w-8/12  mx-auto">
        <h1 className="text-2xl my-3 ">{headerText}</h1>
        <p className="text-primary ">{subText}</p>
      </div>
    </section>
  );
};

export default Confirmation;
