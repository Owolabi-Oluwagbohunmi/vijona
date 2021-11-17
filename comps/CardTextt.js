import Link from "next/link";
import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";

const CardTextt = ({ url, leadText, paraText, moreText }) => {
  const [showMoreTextt, setShowMoreTextt] = useState(false);

  const handleShowMore = () => {
    setShowMoreTextt(true);
  };
  const handleShowLess = () => {
    setShowMoreTextt(false);
  };

  return (
    <div className="card shadow-lg">
      <div className="">
        <ReactPlayer
          className="rounded-sm mx-auto"
          width="100%"
          height="600px"
          url={url}
        />
      </div>
      <div className="pt-8 pl-8 pr-8 pb-10 ">
        <h4 className="text-2xl my-5 w-11/12 ">{leadText}</h4>

        <p className="mt-2 mb-4 w-11/12">{paraText}</p>
        {!showMoreTextt && (
          <button className="text-gray-400 inline" onClick={handleShowMore}>
            Show More
          </button>
        )}
        
        {showMoreTextt && (
          <div>
            <p>{moreText}</p>
            <button className="text-gray-400 my-3" onClick={handleShowLess}>
              Show Less
            </button>
          </div>
        )}

        <Link href="/donate">
          <a className="rounded block w-28 mx-auto  text-center bg-v-green text-white py-3 p-2 mt-10">
            Donate
          </a>
        </Link>
        
      </div>
    </div>
  );
};

export default CardTextt;
